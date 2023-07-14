import React, { useState } from "react";
import useScrollPosition from '@react-hook/window-scroll';
import { useWindowHeight, } from '@react-hook/window-size'
import { reduceClasses, siteLinks } from "../../Library/Utils";
import Container from "../UI/Container";
import MobileNav from "./MobileNav";
import { HashLink as Link } from "react-router-hash-link";
import { icons } from "../../Assets/assets";
import { logo } from "../../Data/data";
import { scrollToTop } from "../UI/Scrolling";

const NavBar = ({isBackgroundTransparent = true}) => {
    const windowHeight = useWindowHeight();
    const scrollPos = useScrollPosition(60);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const scrolledDownOnePage = scrollPos > windowHeight - 1;
    const isBackgroundBlurred = !isBackgroundTransparent || scrolledDownOnePage || isOpen;

    const links = siteLinks('about', 'projects');

    return (
        <header aria-label="Primary" className="fixed flex flex-col top-0 z-40 w-full">
            <div className={reduceClasses(
                'border-b transition-colors duration-5000 py-4',
                isBackgroundBlurred ? 'border-space-300 bg-space-600/80 backdrop-blur-md supports-[backdrop-filter]:bg-space-600/50'
                                    : 'border-transparent bg-transparent'
            )}>
                <Container>
                    <div className="grid grid-cols-3">
                        <div className="flex items-center md:hidden">
                            <MobileNav.Toggle isOpen={isOpen} toggleOpen={toggle}/>
                        </div>
                        <nav aria-label="Primary" className="hidden items-center gap-x-6 md:flex">
                            {links.map((link, index) =>
                                <Link
                                    key={index}
                                    to={link.href}
                                    className="relative py-1 underline underline-offset-4 decoration-transparent text-md uppercase text-white transition-all duration-300 hover:decoration-white"
                                >
                                    {link.label}
                                </Link>
                            )}
                        </nav>
                        <div className="flex items-center justify-center grow">
                            <Link to='/' onClick={scrollToTop}>
                                {logo}
                            </Link>
                        </div>
                        <div className="flex items-center justify-end">
                            <Link  to='/#contact' theme='primary' size='small' onClick={() => setIsOpen(false)} className='hidden md:block decoration-transparent text-md uppercase text-white transition-all duration-300 hover:decoration-white underline underline-offset-4'>
                                Contact
                            </Link>
                            <Link to='/#contact' onClick={() => setIsOpen(false)} className='md:hidden'>
                                <icons.Mail className='h-6 w-6'/>
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            <MobileNav isOpen={isOpen} toggleOpen={toggle} links={links}/>
            <MobileNav.Overlay isOpen={isOpen} toggleOpen={toggle}/>
        </header>
    );
};

export default NavBar;