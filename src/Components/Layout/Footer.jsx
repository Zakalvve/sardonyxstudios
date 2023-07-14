import React, { useState } from "react";
import Container from "../UI/Container";
import { siteLinks } from "../../Library/Utils";
import { socials, studio } from "../../Data/data";
import { HashLink as Link } from 'react-router-hash-link';

const Footer = React.forwardRef((props,ref) => {
    const links = siteLinks();
    const [currentYear] = useState(() => new Date().getFullYear());

    return (
        <footer ref={ref} aria-label="Primary" className="relative z-10 w-full border-t border-space-400 bg-space-500 py-3 lg:py-5">
            <Container>
                <nav aria-label="Primary" className='flex justify-center gap-x-6 py-12'>
                    {links.map((link,index) => (
                        <Link
                            key={index}
                            to={link.href}
                            className="text-md font-medium uppercase text-space-100 transition-colors hover:text-white focus-visible:text-space-100"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </Container>
            <hr className="h-px border-0 bg-gradient-to-r from-transparent via-space-400 to-transparent" />
            <Container>
                <div className='grid grid-cols-1 items-center justify-center gap-6 py-12 lg:grid-cols-3'>
                    <div className='flex text-space-100 justify-center gap-x-6 lg:order-last lg:justify-end'>
                        <Link to='/about/#about-site'><small className="text-sm font-medium text-space-100">SITE INFO</small></Link>
                    </div>
                    <ul aria-label='socials'  className="flex justify-center gap-x-2">
                        {socials.map(({text, href, icon: Icon}, i) => (
                            <li key={i}>
                                <a
                                    href={href}
                                    title={text}
                                    rel='noreferrer'
                                    className="text-space-200 transition-colors hover:text-white focus-visible:text-white"
                                >
                                    <Icon className="h-10 w-10"/>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center lg:order-first lg:justify-start">
                        <small className="text-sm font-medium text-space-100">
                        &copy; {currentYear} {studio.toUpperCase()} STUDIOS
                        </small>
                    </div>
                </div>
            </Container>
        </footer>
    );
});

export default Footer;