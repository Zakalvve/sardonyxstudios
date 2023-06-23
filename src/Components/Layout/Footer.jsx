import React, { useState } from "react";
import Container from "../UI/Container";
import { siteLinks } from "../../Library/Utils";

const Footer = () => {
    const links = siteLinks();
    const [currentYear] = useState(() => new Date().getFullYear());
    return (
        <footer aria-label="Primary" className="relative z-10 w-full border-t border-space-400 bg-space-500 py-3 lg:py-5">
            <Container>
                <nav aria-label="Primary" className='flex justify-center gap-x-6 py-12'>
                    {links.map((link,index) => (
                        <a
                        key={index}
                        href={link.href}
                        className="text-md font-medium uppercase text-space-100 transition-colors hover:text-white focus-visible:text-space-100"
                      >
                        {link.label}
                      </a>
                    ))}
                </nav>
            </Container>
            <hr className="h-px border-0 bg-gradient-to-r from-transparent via-space-400 to-transparent" />
            <Container>
                <div className='grid grid-cols-1 items-center justify-center gap-6 py-12 lg:grid-cols-3'>
                    <div className='flex text-space-100 justify-center gap-x-6 lg:order-last lg:justify-end'>
                        <a>Secondary Link</a>
                    </div>
                    <ul aria-label='socials'  className="flex text-space-100 justify-center gap-x-2">
                        <li>
                            Socials
                        </li>
                        <li>
                            Go
                        </li>
                        <li>
                            Here
                        </li>
                    </ul>
                    <div className="flex justify-center lg:order-first lg:justify-start">
                        <small className="text-sm font-medium text-space-100">
                        &copy; {currentYear} SARDONXY STUDIOS
                        </small>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;