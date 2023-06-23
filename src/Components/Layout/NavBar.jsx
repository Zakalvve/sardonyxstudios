import React, { useState } from "react";
import useScrollPosition from '@react-hook/window-scroll';
import { useWindowHeight, } from '@react-hook/window-size'
import { reduceClasses, siteLinks } from "../../Library/Utils";
import Container from "../UI/Container";
import ButtonLink from "../UI/ButtonLink";

const NavBar = ({isBackgroundTranhsparent = true}) => {
    const windowHeight = useWindowHeight();
    const scrollPos = useScrollPosition(60);

    const scrolledDownOnePage = scrollPos > windowHeight - 1;
    const isBackgroundBlurred = !isBackgroundTranhsparent || scrolledDownOnePage;

    const links = siteLinks('about', 'projects');

    return (
        <header aria-label="Primary" className="fixed top-0 z-40 w-full">
            <div className={reduceClasses(
                'border-b transition-colors duration-500 py-2',
                isBackgroundBlurred ? 'border-space-300 bg-space-600/90 backdrop-blur-md supports-[backdrop-filter]:bg-space-600/50'
                                    : 'border-transparent bg-transparent'
            )}>
                <Container>
                    <div className="grid grid-cols-3">
                        <div className="flex items-center md:hidden">
                            Mobile Nav Button
                        </div>
                        <nav aria-label="Primary" className="hidden items-center gap-x-6 md:flex">
                            {links.map((link, index) => 
                                <a
                                    key={index}
                                    href={link.href}
                                    className="relative underline underline-offset-4 decoration-transparent py-1 text-sm uppercase text-white transition-all duration-300 hover:decoration-white"
                                >
                                    {link.label}
                                </a>
                            )}
                        </nav>
                        <div className="flex items-center justify-center">
                            Logo
                        </div>
                        <div className="flex items-center justify-end">
                            <ButtonLink  href='/#contact' theme='primary' size='small' className='bg-transparent hover:bg-transparent hover:border-transparent'>
                                Contact
                            </ButtonLink>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
};

export default NavBar;