
import React, { useEffect } from "react";
import Container from "../UI/Container";
import { reduceClasses } from "../../Library/Utils";
import { useLockedBody } from "usehooks-ts";

import { AnimatePresence, motion, useAnimate } from "framer-motion";

const MobileNav = ({isOpen, toggleOpen, links}) => {
    useLockedBody(isOpen);
    const bgVariants = {
        open: {
            opacity: 1,
            transition: { duration: 0.4 }
        },
        closed: {
            opacity: 0,
            transition: { duration: 0.4 }
        }
    }

    const itemVariants = {
        open: (i) => {
            let delay = i * 0.2;
            return {
                y: 0,
                opacity: 1,
                transition: {
                  delay,
                  duration: 0.3,
                  y: { stiffness: 1000, velocity: -100 }
                }
              }
        },
        closed: (i, total) =>{
            let delay = (total - i) * 0.1;
            return {
                y: 50,
                opacity: 0,
                transition: {
                  delay,
                  duration: 0.3,
                  y: { stiffness: 1000 }
                }
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={bgVariants.closed}
                    animate={bgVariants.open}
                    exit={bgVariants.closed}
                    aria-controls="mobile-navigation-toggle"
                    className='border-1 p-4 border-space-400 bg-transparent min-w-[10rem] w-[35vw]'
                >
                <Container>
                    <nav
                        className='flex flex-col justify-center'
                    >
                        {links.map((link, i) => (
                            <motion.a
                                key={i}
                                initial={itemVariants.closed(i, links.length)}
                                animate={itemVariants.open(i)}
                                exit={itemVariants.closed(i, links.length)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale:0.95 }}
                                onClick={toggleOpen}
                                href={link.href}
                                className={reduceClasses('py-2 uppercase transition-[letter-spacing,color] text-white', 'focus-visible:underline hover:underline')}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </nav>
                </Container>
            </motion.div>
        )}
        </AnimatePresence>
    );
}

const MobileNavOperlay = ({ isOpen, toggleOpen,}) => {    
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, transition: {delay: 0.4, duration: 0.4} }}
                    animate={{ opacity: 1, transition: {duration: 0.4} }}
                    exit={{ opacity: 0, transition: {delay: 0.4, duration: 0.4} }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    aria-hidden
                    onClick={toggleOpen}
                    className="fixed inset-0 bg-space-600/80 -z-10 backdrop-blur-sm"
                />
            )}
        </AnimatePresence>
    );
}

const MobileNavToggle = ({isOpen, toggleOpen}) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate([
          [
            'path[data-toggle-bar-top]',
            {
              y: isOpen
                ? ['0rem', '-0.325rem', '-0.325rem']
                : ['-0.325rem', '-0.325rem', '0rem'],
              d: isOpen
                ? [
                    'M3,17.25C3,16.839 3.339,16.5 3.75,16.5L20.25,16.5C20.661,16.5 21,16.839 21,17.25C21,17.661 20.661,18 20.25,18L3.75,18C3.339,18 3,17.661 3,17.25Z',
                    'M3,17.25C3,16.839 3.339,16.5 3.75,16.5L20.25,16.5C20.661,16.5 21,16.839 21,17.25C21,17.661 20.661,18 20.25,18L3.75,18C3.339,18 3,17.661 3,17.25Z',
                    'M5.636,10.886C5.927,10.595 6.406,10.595 6.697,10.886L18.364,22.553C18.655,22.844 18.655,23.323 18.364,23.614C18.073,23.905 17.594,23.905 17.303,23.614L5.636,11.947C5.345,11.656 5.345,11.177 5.636,10.886Z',
                  ]
                : [
                    'M5.636,10.886C5.927,10.595 6.406,10.595 6.697,10.886L18.364,22.553C18.655,22.844 18.655,23.323 18.364,23.614C18.073,23.905 17.594,23.905 17.303,23.614L5.636,11.947C5.345,11.656 5.345,11.177 5.636,10.886Z',
                    'M3,17.25C3,16.839 3.339,16.5 3.75,16.5L20.25,16.5C20.661,16.5 21,16.839 21,17.25C21,17.661 20.661,18 20.25,18L3.75,18C3.339,18 3,17.661 3,17.25Z',
                    'M3,17.25C3,16.839 3.339,16.5 3.75,16.5L20.25,16.5C20.661,16.5 21,16.839 21,17.25C21,17.661 20.661,18 20.25,18L3.75,18C3.339,18 3,17.661 3,17.25Z',
                  ],
            },
            { duration: 0.3 },
          ],
          [
            'path[data-toggle-bar-middle]',
            { opacity: isOpen ? [1, 1, 0] : [0, 0, 1] },
            { at: '<', duration: 0.3 },
          ],
          [
            'path[data-toggle-bar-bottom]',
            {
              y: isOpen
                ? ['0rem', '0.325rem', '0.325rem']
                : ['0.325rem', '0.325rem', '0rem'],
              d: isOpen
                ? [
                    'M3,6.75C3,6.339 3.339,6 3.75,6L20.25,6C20.661,6 21,6.339 21,6.75C21,7.161 20.661,7.5 20.25,7.5L3.75,7.5C3.339,7.5 3,7.161 3,6.75Z',
                    'M3,6.75C3,6.339 3.339,6 3.75,6L20.25,6C20.661,6 21,6.339 21,6.75C21,7.161 20.661,7.5 20.25,7.5L3.75,7.5C3.339,7.5 3,7.161 3,6.75Z',
                    'M5.636,13.114C5.345,12.823 5.345,12.344 5.636,12.053L17.303,0.386C17.594,0.095 18.073,0.095 18.364,0.386C18.655,0.677 18.655,1.156 18.364,1.447L6.697,13.114C6.406,13.405 5.927,13.405 5.636,13.114Z',
                  ]
                : [
                    'M5.636,13.114C5.345,12.823 5.345,12.344 5.636,12.053L17.303,0.386C17.594,0.095 18.073,0.095 18.364,0.386C18.655,0.677 18.655,1.156 18.364,1.447L6.697,13.114C6.406,13.405 5.927,13.405 5.636,13.114Z',
                    'M3,6.75C3,6.339 3.339,6 3.75,6L20.25,6C20.661,6 21,6.339 21,6.75C21,7.161 20.661,7.5 20.25,7.5L3.75,7.5C3.339,7.5 3,7.161 3,6.75Z',
                    'M3,6.75C3,6.339 3.339,6 3.75,6L20.25,6C20.661,6 21,6.339 21,6.75C21,7.161 20.661,7.5 20.25,7.5L3.75,7.5C3.339,7.5 3,7.161 3,6.75Z',
                  ],
            },
            { at: '<', duration: 0.3 },
          ],
        ]);
      }, [isOpen, animate]);

      return (
        <button
            type='button'
            id='mobile-nav-toggle'
            aria-haspopup='menu'
            aria-expanded={isOpen}
            aria-label='Toggle navigation menu'
            onClick={toggleOpen}
        >
            <span className='sr-only'>Menu</span>
            <motion.svg
                ref={scope}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                className="h-7 w-7"
            >
                <motion.path
                fillRule="evenodd"
                d="M3,17.25C3,16.839 3.339,16.5 3.75,16.5L20.25,16.5C20.661,16.5 21,16.839 21,17.25C21,17.661 20.661,18 20.25,18L3.75,18C3.339,18 3,17.661 3,17.25Z"
                clipRule="evenodd"
                data-toggle-bar-top
                />
                <motion.path
                fillRule="evenodd"
                d="M3,12C3,11.589 3.339,11.25 3.75,11.25L20.25,11.25C20.661,11.25 21,11.589 21,12C21,12.411 20.661,12.75 20.25,12.75L3.75,12.75C3.339,12.75 3,12.411 3,12Z"
                clipRule="evenodd"
                data-toggle-bar-middle
                />
                <motion.path
                fillRule="evenodd"
                d="M3,6.75C3,6.339 3.339,6 3.75,6L20.25,6C20.661,6 21,6.339 21,6.75C21,7.161 20.661,7.5 20.25,7.5L3.75,7.5C3.339,7.5 3,7.161 3,6.75Z"
                clipRule="evenodd"
                data-toggle-bar-bottom
                />
            </motion.svg>
        </button>
      );
}

MobileNav.Overlay = MobileNavOperlay;
MobileNav.Toggle = MobileNavToggle;

export default MobileNav;