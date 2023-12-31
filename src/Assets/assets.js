import React from 'react'

import SnakeImageZoomS from './extreme-snake-zoom-800w.webp';
import SnakeImageZoomL from './extreme-snake-zoom-1350w.webp';
import SnakeImageS from './extreme-snake-desktop-1920w.webp';
import SnakeImageL from './extreme-snake-desktop-2238w.webp';
import SnakeImagePortraitS from './extreme-snake-portrait-850w.webp';
import SnakeImagePortraitL from './extreme-snake-portrait-1080w.webp';
import SnakeImageMultiplayerS from './extreme-snake-multiplayer-800w.webp';
import SnakeImageMultiplayerL from './extreme-snake-multiplayer-1920w.webp';
import SnakeImageActionS from './extreme-snake-action-800w.webp';
import SnakeImageActionL from './extreme-snake-action-1920w.webp';

import LetsGameS from './letsgame-desktop-1024w.webp';
import LetsGameL  from './letsgame-desktop-1906w.webp';
import LetsGamePortraitS from './letsgame-portrait-800w.webp';
import LetsGamePortraitL from './letsgame-portrait-1080w.webp';
import LetsGameThumbS from './letsgame-thumb-800w.webp';
import LetsGameThumbL from './letsgame-thumb-1297w.webp';
import LetsGameEventS from './letsgame-event-800w.webp';
import LetsGameEventL from './letsgame-event-1614w.webp';
import LetsGameFriendsS from './letsgame-friends-800.webp';
import LetsGameFriendsL from './letsgame-friends-1416.webp';

import MeMobile from './me-768w.webp';
import MeDesktop from './me-1200w.webp';

import JournalZoomS from './mihaelas-journal-desktop-800.webp';
import JournalZoomL from './mihaelas-journal-desktop-1565w.webp';
import JournalPortrait from './mihaelas-journal-portrait-1035w.webp';
import JournalAudioControls from './mihaelas-journal-audio-controls-369w.webp';
import JournalEntryS from './mihaelas-journal-entry-800w.webp';
import JournalEntryL from './mihaelas-journal-entry-1366w.webp';

import HeroMobile from './hero-desktop-1024w.webp';
import HeroDesktop from './hero-desktop-3840w.webp';
import HeroParallaxBG from './hero-parallax-bg.webp';
import HeroParallaxL1 from './hero-parallax-layer1.webp';
import HeroParallaxL2 from './hero-parallax-layer2.webp';
import HeroParallaxL3 from './hero-parallax-layer3.webp';

import AboutHeroS from './about-hero-1280w.webp';
import AboutHeroL from './about-hero-1920w.webp';

import FactoryL from './factor-simulator-desktop-2561w.webp';
import FactoryS from './factor-simulator-desktop-1920w.webp';
import FactoryPortraitS from './factor-simulator-portrait-850w.webp';
import FactoryPortraitL from './factor-simulator-portrait-1508w.webp';
import FactoryThumbS from './factor-simulator-thumb-800w.webp';
import FactoryThumbL from './factor-simulator-thumb-1130w.webp';
import FactoryResultsS from './factor-simulator-results-800w.webp';
import FactoryResultsL from './factor-simulator-results-1514w.webp';
import FactoryPatternsS from './factor-simulator-patterns-800w.webp';
import FactoryPatternsL from './factor-simulator-patterns-1428w.webp';

import BordonHillsL from './bordon-hills-1920w.webp';
import BordonHillsS from './bordon-hills-1000w.webp';
import BordonHillsPortraitL from './bordon-hills-portrait-1300w.webp';
import BordonHillsMapL from './bordon-hills-map-1920w.webp';
import BordonHillsMapS from './bordon-hills-map-1000w.webp';
import BordonHillsProcessesL from './bordon-hills-processes-1920w.webp';
import BordonHillsProcessesS from './bordon-hills-processes-1000w.webp';

//images: object
//contains the images used on the site and the data struture used to ensure they are fully responsive

//icons: object
//contains the icons used on the site

const assets = {
    images: {
        ExtremeSnake: {
            img: {
                src: SnakeImageZoomS,
                alt: "Snake Game Menu"
            },
            sources: {
                portrait:[
                    {
                        media: '(orientation:portrait)',
                        srcSet: `${SnakeImagePortraitS} 850w, ${SnakeImagePortraitL} 1080w`,
                        sizes: '(max-width: 500px) 800px, 1350px'
                    },
                ],
                landscape: [
                    {
                        media: '(max-width: 899px)',
                        srcSet: `${SnakeImageZoomS} 800w, ${SnakeImageZoomL} 1350w`,
                        sizes: '(max-width: 500px) 800px, 1350px'
                    },
                    {
                        media: '(min-width:0px)',
                        srcSet: `${SnakeImageS} 1080w, ${SnakeImageL} 2238w`,
                        sizes: '(max-width: 1920px) 1080w, 2238w'
                    }
                ],
            },
            multiplayer: {
                img: {
                    src: SnakeImageMultiplayerS,
                    alt: "Let's Game App. Users Hub"
                },
                sources: [
                    {
                        media: '(min-width: 0px)',
                        srcSet: `${SnakeImageMultiplayerS} 800w, ${SnakeImageMultiplayerL} 1920w`,
                        sizes:'100vw'
                    }
                ]
            },
            action: {
                img: {
                    src: SnakeImageActionS,
                    alt: "Let's Game App. Users Hub"
                },
                sources: [
                    {
                        media: '(min-width: 0px)',
                        srcSet: `${SnakeImageActionS} 800w, ${SnakeImageActionL} 1920w`,
                        sizes:'100vw'
                    }
                ]
            }
        },
        LetsGame: {
            img: {
                src: LetsGameS,
                alt: "Let's Game App. Users Hub"
            },

            sources: {
                portrait:[
                    {
                        media: '(orientation:portrait)',
                        srcSet: `${LetsGamePortraitS} 850w, ${LetsGamePortraitL} 1080w`,
                        sizes:'100vw'
                    }
                ],
                landscape: [
                    {
                        media: '(min-width: 0px)',
                        srcSet: `${LetsGameS} 1024ww, ${LetsGameL} 1906w`,
                        sizes: '100vw'
                    }
                ],
                thumb: [
                    {
                        media: '(min-width: 0px)',
                        srcSet: `${LetsGameThumbS} 800w, ${LetsGameThumbL} 1297w`,
                        sizes:'100vw'
                    }
                ]
            },
            hub: {
                img: {
                    src: LetsGameS,
                    alt: "Let's Game App. Users Hub"
                },
                sources: [
                    {
                        media: '(min-width: 0px)',
                        srcSet: `${LetsGameS} 800w, ${LetsGameL} 1297w`,
                        sizes:'100vw'
                    }
                ]
            },
            event: {
                img: {
                    src: LetsGameEventS,
                    alt: "Let's Game App. Event page."
                },
                sources: [
                    {
                        media: '(min-width: 0px)',
                        srcSet: `${LetsGameEventS} 800w, ${LetsGameEventL} 1614w`,
                        sizes:'100vw'
                    }
                ]
            },
            friends: {
                img: {
                    src: LetsGameFriendsS,
                    alt: "Let's Game App. Friends page"
                },
                sources: [
                    {
                        media: '(min-width: 0px)',
                        srcSet: `${LetsGameFriendsS} 800w, ${LetsGameFriendsL} 1416w`,
                        sizes:'100vw'
                    }
                ]
            }
        },
        MihaelasJournal: {
            img: {
                src: JournalZoomS,
                alt: "Mihaela's Journal Homepage"
            },
            sources: {
                portrait: [
                    {
                        media: '(orientation:portrait)',
                        srcSet:`${JournalPortrait}`,
                        sizes: `100vw`
                    },
                ],
                landscape: [
                    {
                        media: '(min-width: 0px)',
                        srcSet: `${JournalZoomS} 800w, ${JournalZoomL} 1565w`,
                        sizes:'100vw'
                    }
                ],
            },
            audioControls: {
                img: {
                    src: JournalAudioControls,
                    alt: "A pop out display for controlling audio settings"
                },
                sources: []
            },
            entry: {
                img: {
                    src: JournalEntryS,
                    alt: "A journal entry page"
                },
                sources: [
                    {
                        media: '(orientation:portrait)',
                        srcSet:`${JournalEntryS} 800w, ${JournalEntryL} 1366w`,
                        sizes: `100vw`
                    }
                ]
            }
        },
        FactorySimulator: {
            img: {
                src: FactoryS,
                alt: "A section of the log from factory simulator"
            },
            sources: {
                portrait: [
                    {
                        media: '(orientation:portrait)',
                        srcSet:`${FactoryPortraitS} 850w, ${FactoryPortraitL} 1508w`,
                        sizes: `100vw`
                    },
                ],
                landscape: [
                    {
                        media: '(min-width: 0px)',
                        srcSet: `${FactoryS} 850w, ${FactoryL} 2561w`,
                        sizes:'100vw'
                    }
                ],
                thumb: [
                    {
                        media: '(min-width: 0px)',
                        srcSet: `${FactoryThumbS} 800w, ${FactoryThumbL} 1130w`,
                        sizes:'100vw'
                    }
                ],
            },
            results: {
                img: {
                    src: FactoryResultsS,
                    alt: "Graph tracking machine parts per hours over time"
                },
                sources: [
                    {
                        media: '(orientation:portrait)',
                        srcSet:`${FactoryResultsS} 800w, ${FactoryResultsL} 1514w`,
                        sizes: `100vw`
                    }
                ]
            },
            patterns: {
                img: {
                    src: FactoryPatternsS,
                    alt: "A UML diagram of factory simulator"
                },
                sources: [
                    {
                        media: '(orientation:portrait)',
                        srcSet:`${FactoryPatternsS} 800w, ${FactoryPatternsL} 1428w`,
                        sizes: `100vw`
                    }
                ]
            }
        },
        BordonHill: {
            img: {
                src: BordonHillsS,
                alt: 'Screenshot of bordon hills website homepage'
            },
            sources: {
                portrait: [
                    {
                        media: '(orientation:portrait)',
                        srcSet:`${BordonHillsPortraitL} 800w`,
                        sizes: `100vw`
                    },
                ],
                landscape: [
                    {
                        media: '(min-width: 0px)',
                        srcSet: `${BordonHillsS} 400w, ${BordonHillsL} 1000w`,
                        sizes:'100vw'
                    }
                ],
            },
            map: {
                img: {
                    src :BordonHillsMapS,
                    alt: 'Picture of google maps embed in website'
                },
                sources: [
                    {
                        media: '(min-width: 0px)',
                        srcSet: `${BordonHillsMapS} 800w, ${BordonHillsMapL} 1920w`,
                        sizes:'100vw'
                    }
                ]
            },
            processes: {
                img: {
                    src : BordonHillsProcessesS,
                    alt: 'Image of the processes section of the website'
                },
                sources: [
                    {
                        media: '(min-width: 0px)',
                        srcSet: `${BordonHillsProcessesS} 800w, ${BordonHillsProcessesL} 1920w`,
                        sizes:'100vw'
                    }
                ]
            }
        },
        HeroImg: {
            img: {
                src: HeroMobile,
                alt: "Distant planet hangs in the sky, mountains frame it. Vapourwave style"
            },
            sources: {
                landscape: [
                    {
                        media: '(min-width: 0px)',
                        srcSet: `${HeroMobile} 1024w, ${HeroDesktop} 3840w`,
                        sizes: '100vw',
                    }
                ]
            },
            parallax: {
                img: {
                    src: HeroParallaxBG,
                    alt: "Distant planet hangs in the sky, mountains frame it. Vapourwave style"
                },
                layers: [
                    {
                        img: {
                            src: HeroParallaxL1,
                            alt: "Parallax Layer"
                        }, 
                        z: '-z-40'
                    },
                    {
                        img: {
                            src: HeroParallaxL2,
                            alt: "Parallax Layer"
                        },
                        z: '-z-30'
                    },
                    {
                        img: {
                            src: HeroParallaxL3,
                            alt: "Parallax Layer"
                        },
                        z: '-z-20'
                    }
                ]
            }
        },
        AboutHero: {
            img: {
                src: AboutHeroS,
                alt: "Deep space. Edge of a nebula"
            },
            sources: {
                landscape: [
                    {
                        media: '(min-width: 0px)',
                        srcSet: `${AboutHeroS} 1280w, ${AboutHeroL} 1920w`,
                        sizes: '100vw',
                    }
                ]
            }
        },
        MeImg: {
            srcSet:`${MeMobile} 748w, ${MeDesktop} 1200w`,
            sizes: '100vw',
            src: MeMobile,
            alt: "Me playing guitar"
        },
    },
    icons: {
        GitHub: ({...props}) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                {...props}
                >
                <title>GitHub</title>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                />
            </svg>
        ),
        Spinner: ({ ...props }) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              {...props}
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          ),
        Mail: ({...props}) => (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 16 16" 
                {...props}
            >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
        ),
        SkillsIcons: [
            {
                name: 'react',
                icon: ({...props}) => (
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="-11.5 -10.23174 23 20.46348"
                        stroke="#61dafb"
                        fill="#61dafb" 
                        {...props}
                    >
                        <title>React</title>
                        <circle cx="0" cy="0" r="2.05"/>
                        <g strokeWidth="1" fill="none">
                            <ellipse rx="11" ry="4.2"/>
                            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                        </g>
                    </svg>
                )
            },            
            {
                name: 'c#',
                icon: ({...props}) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 288" {...props}>
                        <title>C#</title>
                        <g>
                            <path d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 C250.393,68.089376 247.32,65.070376 243.198,62.683376 C209.173,43.064376 175.115,23.505376 141.101,3.86637605 C131.931,-1.42762395 123.04,-1.23462395 113.938,4.13537605 C100.395,12.122376 32.59,50.969376 12.385,62.672376 C4.064,67.489376 0.015,74.861376 0.013,84.443376 C0,123.898376 0.013,163.352376 0,202.808376 C0,207.532376 0.991,211.717376 2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 C254.589,211.707376 255.582,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376" fill="#A179DC" fillRule="nonzero"/>
                            <path d="M128.182,143.241376 L2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 L128.182,143.241376" fill="#280068" fillRule="nonzero"/>
                            <path d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 L128.182,143.241376 L252.595,215.315376 C254.589,211.707376 255.58,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376" fill="#390091" fillRule="nonzero"/>
                            <path d="M201.892326,116.294008 L201.892326,129.767692 L215.36601,129.767692 L215.36601,116.294008 L222.102852,116.294008 L222.102852,129.767692 L235.576537,129.767692 L235.576537,136.504534 L222.102852,136.504534 L222.102852,149.978218 L235.576537,149.978218 L235.576537,156.71506 L222.102852,156.71506 L222.102852,170.188744 L215.36601,170.188744 L215.36601,156.71506 L201.892326,156.71506 L201.892326,170.188744 L195.155484,170.188744 L195.155484,156.71506 L181.6818,156.71506 L181.6818,149.978218 L195.155484,149.978218 L195.155484,136.504534 L181.6818,136.504534 L181.6818,129.767692 L195.155484,129.767692 L195.155484,116.294008 L201.892326,116.294008 Z M215.36601,136.504534 L201.892326,136.504534 L201.892326,149.978218 L215.36601,149.978218 L215.36601,136.504534 Z" fill="#FFFFFF"/>
                            <path d="M128.456752,48.625876 C163.600523,48.625876 194.283885,67.7121741 210.718562,96.0819435 L210.558192,95.808876 L169.209615,119.617159 C161.062959,105.823554 146.128136,96.5150717 128.996383,96.3233722 L128.456752,96.3203544 C102.331178,96.3203544 81.1506705,117.499743 81.1506705,143.625316 C81.1506705,152.168931 83.4284453,160.17752 87.3896469,167.094792 C95.543745,181.330045 110.872554,190.931398 128.456752,190.931398 C146.149522,190.931398 161.565636,181.208041 169.67832,166.820563 L169.481192,167.165876 L210.767678,191.083913 C194.51328,219.21347 164.25027,238.240861 129.514977,238.620102 L128.456752,238.625876 C93.2021701,238.625876 62.4315028,219.422052 46.0382398,190.902296 C38.0352471,176.979327 33.4561922,160.837907 33.4561922,143.625316 C33.4561922,91.1592636 75.9884604,48.625876 128.456752,48.625876 Z" fill="#FFFFFF" fillRule="nonzero"/>
                        </g>
                    </svg>
                )
            },            
            {
                name: 'unity',
                icon: ({...props}) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.44 64" fill="#FFF" {...props}>
                        <title>Unity</title>
                        <path d="M63.22 25.42L56.387 0 30.87 6.814l-3.775 6.637-7.647-.055L.78 32.005l18.67 18.604 7.658-.057 3.78 6.637 25.5 6.81 6.832-25.418L59.34 32zm-16-15.9L36.036 28.86H13.644l14.094-14.34zM36.036 35.145l11.196 19.338-19.507-5.012L13.63 35.15h22.392zm5.468-3.14L52.7 12.665l5.413 19.34L52.7 51.34z"/>
                    </svg>
                )
            },
            {
                name: 'js',
                icon: ({...props}) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630" {...props}>
                        <title>Javascript</title>
                        <rect width="630" height="630" fill="#f7df1e"/>
                        <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
                    </svg>
                )
            },
            {
                name: 'html',
                icon: ({...props}) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
                        <title>HTML5</title>
                        <path d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6"/>
                        <path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512"/>
                        <path fill="#f16529" d="M256 480.5V131H404.3L376 447"/>
                        <path fill="#ebebeb" d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"/>
                        <path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"/>
                    </svg>
                )
            },
            {
                name: 'css',
                icon: ({...props}) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362.73401 511.99998" {...props}>
                        <title>CSS</title>
                        <defs id="defs3478"/>
                        <g transform="translate(-193.633,-276.3622)">
                            <g id="g3013" transform="translate(119,276.3622)">
                                <polygon id="polygon2989" points="437.367,100.62 404.321,470.819 255.778,512 107.644,470.877 74.633,100.62 " style={{fill:"#264de4"}}/>
                                <polygon id="polygon2991" points="376.03,447.246 404.27,130.894 256,130.894 256,480.523 " style={{fill:"#2965f1"}}/>
                                <polygon id="polygon2993" points="150.31,268.217 154.38,313.627 256,313.627 256,268.217 " style={{fill:"#ebebeb"}}/>
                                <polygon id="polygon2995" points="256,176.305 255.843,176.305 142.132,176.305 146.26,221.716 256,221.716 " style={{fill:"#ebebeb"}}/>
                                <polygon id="polygon2997" points="256,433.399 256,386.153 255.801,386.206 205.227,372.55 201.994,336.333 177.419,336.333 156.409,336.333 162.771,407.634 255.791,433.457 " style={{fill:"#ebebeb"}}/>
                                <path id="path2999" d="m 160,0 55,0 0,23 -32,0 0,23 32,0 0,23 -55,0 z"/>
                                <path id="path3001" d="m 226,0 55,0 0,20 -32,0 0,4 32,0 0,46 -55,0 0,-21 32,0 0,-4 -32,0 z"/>
                                <path id="path3003" d="m 292,0 55,0 0,20 -32,0 0,4 32,0 0,46 -55,0 0,-21 32,0 0,-4 -32,0 z" />
                                <polygon id="polygon3005" points="311.761,313.627 306.49,372.521 255.843,386.191 255.843,433.435 348.937,407.634 349.62,399.962 360.291,280.411 361.399,268.217 369.597,176.305 255.843,176.305 255.843,221.716 319.831,221.716 315.699,268.217 255.843,268.217 255.843,313.627 " style={{fill:"#ffffff"}}/>
                            </g>
                        </g>
                    </svg>
                )
            },
            {
                name: 'react-bootstrap',
                icon: ({...props}) => (
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2127.98 2016.87" fill="#61dafb" {...props}>
                        <title>React Bootstrap</title>
                        <path d="M888 1119.17c16-32.62 32.84-65.37 50.17-97.35l.15-.27 18.39-35.68 27.16-45 .17-.29c10.14-17.26 20.66-34.68 31.27-51.78l18.69-30.87c24.88-41.19 44.88-71.23 76.43-114.76 17-23.43 33.12-44 58.66-75.92l.06-.06 1.26-1.59.49-.63c10.37-13.22 20.84-26.25 31.11-38.73l.34-.42.2-.25c23.83-29.51 48.12-59.13 72.19-88l9.57-11.48V356.54H1267c-9.23-8.68-18.66-17.3-28.08-25.69-76.32-67.72-152.43-120.85-226.27-157.79-75.71-37.92-145.63-57.14-207.8-57.14-44.39 0-84.06 9.94-117.91 29.53-32.55 18.84-59.9 46.91-81.31 83.44-20.06 34.23-34.84 75.89-43.95 123.81-17.54 92.37-13.74 208 11 334.34 3.12 15.9 6.56 32 10.25 48-19.74 6-38.91 12.18-57.13 18.53-119.26 41.58-219 95.91-288.42 157.14-36 31.71-63.84 65.23-82.89 99.62-20.24 36.57-30.51 74.08-30.51 111.49 0 75 41.55 151 120.15 219.94 74 64.93 178.65 121.62 302.55 164 11.51 3.91 23.22 7.71 35 11.34-4.12 17.93-7.93 36-11.36 54-23.56 124.08-26.31 237.62-8 328.35 9.51 47 24.61 87.89 44.89 121.57 21.56 35.8 48.93 63.44 81.34 82.13 34.15 19.69 74.34 29.67 119.45 29.67 61.42 0 130.09-18.21 204.11-54.13 72.56-35.21 146.63-85.64 220.13-149.89 11.33-9.9 23-20.49 34.66-31.53h17.41v-174.39l-6.34-7.8-3-3.67-79.82-98.55-44.35-54.75c-22.39-27.64-58.25-78.79-101-144-34-51.84-58.76-93.47-70.5-113.63l-1.28-2.21c-20.49-35.33-35.71-63.79-47.93-86.64-15.3-28.63-30.39-57.87-44.91-87l2.66-5.17zm-80.86-172.89c-13.53-34.7-25.92-69.13-37-102.81 34.57-7.13 70.51-13.53 107.32-19.11-12.28 20.11-24.34 40.41-36 60.64s-23.12 40.69-34.32 61.28zm-38.25 462.1c11.45-34.86 24.31-70.56 38.39-106.59 11.29 20.7 22.87 41.3 34.58 61.53 12.27 21.19 25 42.48 37.95 63.58-38.46-5.32-75.62-11.53-110.92-18.51zM707.18 397.16c9-61.74 29.14-105.87 55.37-121.06 10.89-6.31 25.34-9.5 42.93-9.5 38.47 0 88.24 15.1 143.91 43.67 60.34 31 125.77 77.11 189.22 133.45q5.9 5.24 12.07 10.89c-55.81 61.71-110.81 130.28-163.68 204.1-90.08 8.8-176.68 21.94-257.76 39.11-2.93-12.84-5.68-25.75-8.2-38.5l-.24-1.32c-19.33-98.76-24.04-189-13.62-260.84zm11.31 727c-38.1 84-70.48 167.16-96.37 247.46-9-2.8-17.89-5.72-26.65-8.7-103-35.21-188.79-80.66-248.08-131.43-45.37-38.85-72.45-79.83-72.45-109.63 0-30.59 27.09-70 74.34-108.2 55-44.47 133.27-85.11 226.19-117.5 15.79-5.48 31.87-10.73 48-15.64 25.53 79.13 57.48 160.99 95.01 243.63zm.12 474.92c2.86-15 6-30.09 9.43-45.09 80 16.37 167.59 28.71 260.75 36.71 53.38 74.34 108.84 143.37 165.05 205.44-6.94 6.39-13.94 12.68-20.9 18.79-81.37 71.13-163.09 122.55-236.28 148.71l-1.52.54c-32.8 11.58-62.09 17.45-87 17.45-18.38 0-33.22-3.18-44.11-9.46-26.51-15.29-47.14-58.46-56.6-118.45-11.06-69.91-7.19-157.97 11.17-254.65z" transform="translate(-123.98 -115.92)"/>
                        <path d="M2195.07 1205.1q-56.26-103.45-165.54-134.23a2.85 2.85 0 0 1-1.79-2.85 3 3 0 0 1 1.37-2.68c54.24-30.16 95.93-73.11 125.15-127.9q44.15-82.89 44.16-199.49c0-128.25-32.45-223.65-97.06-287.11s-150.62-95-257.7-95h-578.35c-1.25 0-2.27 1.31-2.27 2.93V1894.3c0 1.62 1 2.93 2.27 2.93h546.57q115.42 0 199.11-33.69c55.91-22.42 101.4-52.68 137.21-90.68s61.92-83.33 78.66-136c16.74-52.23 25.1-108.8 25.1-169.24.04-105.37-19.08-192.57-56.89-262.52zm-722.32-628c0-1.62 1-2.93 2.27-2.93h339.46c56.95 0 100.51 16 130.65 47.55s45.2 86.4 45.2 164.18c0 69.18-16.74 121.92-50.25 159.08s-75.37 55.32-125.63 55.32H1475c-1.25 0-2.27-1.31-2.27-2.93zm518.16 1035.8c-34.86 42.76-84.41 64-148.07 64H1475c-1.25 0-2.27-1.31-2.27-2.93v-476.4c0-1.62 1-2.93 2.27-2.93h367.82c63.66 0 112.57 19.89 148.07 61.35s52.93 99.82 52.93 176.3c.02 77.77-17.76 138.27-52.91 180.61z" transform="translate(-123.98 -115.92)"/>
                   </svg>
                )
            },
            {
                name: 'markdown',
                icon: ({...props}) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 128" stroke="currentColor" {...props}>
                        <title>Mardown</title>
                        <rect x="5" y="5" ry="10" strokeWidth="10" fill="none"/>
                        <path d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39zm125 0l-30-33h20V30h20v35h20z"/>
                    </svg>
                )
            },
            {
                name: 'asp.net-core',
                icon: ({...props}) => (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" {...props}>
                        <title>ASP.NET Core</title>
                        <g id="5151e0c8492e5103c096af88a51eafb7">
                            <path display="inline" d="M295.474,319.537c0.826,4.135,1.24,11.37,1.24,21.707v80.997h-22.327v-80.129   c0-9.097-0.868-15.894-2.604-20.404c-1.737-4.507-4.817-8.104-9.241-10.792c-4.424-2.683-9.613-4.031-15.567-4.031   c-9.51,0-17.717,3.019-24.622,9.055c-6.905,6.037-10.357,17.49-10.357,34.359v71.942h-22.327V290.512h20.094v18.73   c9.675-14.472,23.65-21.707,41.925-21.707c7.938,0,15.236,1.426,21.893,4.279c6.657,2.853,11.64,6.595,14.947,11.226   S294.15,313.17,295.474,319.537z M511.5,423.052c-6.284,1.323-11.908,1.984-16.869,1.984c-8.104,0-14.389-1.281-18.854-3.845   c-4.465-2.563-7.607-5.934-9.427-10.109c-1.819-4.172-2.729-12.962-2.729-26.358v-79.542h-48.475   c0.111,0.12,0.235,0.219,0.347,0.339c11.164,11.99,16.746,28.859,16.746,50.608c0,1.322-0.042,3.308-0.124,5.953h-98.239   c0.827,14.472,4.92,25.553,12.279,33.243c7.36,7.69,16.539,11.535,27.537,11.535c8.187,0,15.174-2.149,20.963-6.45   c5.788-4.3,10.378-11.163,13.769-20.59l23.071,2.853c-3.639,13.479-10.378,23.939-20.219,31.382s-22.41,11.164-37.708,11.164   c-19.268,0-34.545-5.934-45.832-17.8c-11.288-11.862-16.932-28.509-16.932-49.926c0-22.162,5.706-39.362,17.117-51.601   c11.412-12.238,26.214-18.357,44.406-18.357c2.199,0,4.354,0.095,6.454,0.281h84.839v-28.579h22.203v28.579h22.451v17.365h-22.451   v80.782c0,6.367,0.393,10.461,1.178,12.28c0.786,1.819,2.067,3.267,3.846,4.341c1.777,1.075,4.32,1.613,7.628,1.613   c2.481,0,5.747-0.29,9.8-0.869L511.5,423.052z M408.672,343.725c-0.993-11.081-3.805-19.392-8.435-24.932   c-7.112-8.601-16.332-12.9-27.661-12.9c-10.254,0-18.875,3.432-25.862,10.295c-6.987,6.864-10.854,16.043-11.598,27.537H408.672z    M157.881,395.42c-4.035,0-7.459,1.435-10.279,4.354c-2.82,2.898-4.217,6.405-4.217,10.548c0,4.035,1.397,7.529,4.217,10.473   c2.82,2.944,6.244,4.425,10.279,4.425c4.139,0,7.662-1.48,10.56-4.425c2.906-2.943,4.35-6.438,4.35-10.473   c0-4.044-1.443-7.55-4.35-10.489C165.542,396.875,162.02,395.42,157.881,395.42z M301.047,267.196   c-11.577,5.086-26.172,7.629-43.785,7.629c-30.928,0-52.345-5.954-64.253-17.862c-0.05-0.05-0.096-0.103-0.146-0.152l5.604,14.913   h-58.84l-9.101-30.018H66.737l-8.865,30.018H0.5L68.846,89.883h61.292l45.653,121.494l50.461-3.161   c1.158,8.683,3.514,15.3,7.07,19.847c5.789,7.361,14.058,11.039,24.808,11.039c8.021,0,14.203-1.879,18.544-5.644   c4.342-3.763,6.513-8.125,6.513-13.086c0-4.714-2.067-8.932-6.202-12.652c-4.135-3.722-13.728-7.235-28.777-10.544   c-24.642-5.538-42.214-12.899-52.716-22.078c-10.585-9.18-15.877-20.88-15.877-35.104c0-9.344,2.708-18.172,8.125-26.482   c5.416-8.311,13.562-14.841,24.436-19.598c10.874-4.755,25.779-7.133,44.716-7.133c23.237,0,40.954,4.323,53.151,12.962   c12.197,8.642,19.453,22.39,21.769,41.243l-52.965,3.102c-1.405-8.187-4.362-14.141-8.869-17.862   c-4.506-3.721-10.729-5.581-18.667-5.581c-6.533,0-11.453,1.385-14.761,4.155c-3.308,2.771-4.961,6.14-4.961,10.108   c0,2.896,1.364,5.502,4.093,7.814c2.646,2.4,8.931,4.633,18.854,6.698c24.56,5.293,42.152,10.649,52.778,16.063   c10.626,5.416,18.358,12.137,23.195,20.156c2.479,4.109,4.312,8.472,5.521,13.079V89.883h93.401   c20.342,0,35.578,4.837,45.708,14.512c10.13,9.676,15.195,23.443,15.195,41.306c0,18.357-5.521,32.705-16.56,43.041   c-11.04,10.339-27.889,15.505-50.546,15.505h-30.762v67.478h-56.438v-44.868c-1.574,6.286-4.216,12.271-7.939,17.952   C321.638,254.649,312.624,262.111,301.047,267.196z M392.464,167.407h13.769c10.832,0,18.44-1.88,22.823-5.645   c4.383-3.762,6.573-8.577,6.573-14.45c0-5.706-1.901-10.543-5.705-14.513c-3.804-3.969-10.957-5.954-21.459-5.954h-16.001V167.407z M118.871,202.386l-20.07-65.368l-19.863,65.368H118.871z" />
                        </g>
                    </svg>
                )
            },
            {
                name: 'bootstrap',
                icon: ({...props}) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 94" {...props}>
                        <title>Bootstrap</title>
                        <path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="#712cf9"></path>
                    </svg>
                )
            },
            {
                name: 'jquery',
                icon: ({...props}) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 100 100'{...props}>
                        <title>J Query</title>
                        <path fillRule="nonzero" fill="#131b28" d="m223.9,46.171l0.001-0.005s-3.352,11.88-3.352,11.88,3.3508-11.875,3.3508-11.875z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m241.14,71.962s-3.6938-0.022-3.6938-0.022,3.6938,0.022,3.6938,0.022z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m240.19,89.703h0.004s-22.131,0.0806-22.131,0.0806,22.128-0.0806,22.128-0.0806z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m244.83,71.984s-3.6951-0.022-3.6951-0.022,3.6951,0.022,3.6951,0.022z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m242.13,88.195s3.855-14.702,3.855-14.702-3.855,14.705-3.855,14.705v-0.002z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m323.61,20.49s-7.1814,33.76-7.1814,33.76,7.1814-33.76,7.1814-33.76z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m305.15,20.49s-5.4517,25.22-5.4517,25.22,5.4517-25.222,5.4517-25.222v0.002z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m322.38,18.971h-15.356c-0.85205,0-1.698,0.68359-1.8799,1.5161,0,0-5.4516,25.222-5.4516,25.222s-5.4517,25.222-5.4517,25.222c-0.18066,0.83251-1.0254,1.5137-1.8774,1.5137h-9.3176-1.5515c-10.753,0-9.5093-7.4365-7.3071-17.627,0.022-0.1025,0.044-0.20263,0.0659-0.30761,0,0,0.24169-1.2842,0.24169-1.2842,0.0146-0.083,0.0317-0.16603,0.0451-0.2417,0,0,0.49072-2.6148,0.49072-2.6148s0.52612-2.8027,0.52612-2.8027c0.15992-0.84473,0.40283-2.0801,0.56153-2.8564,0,0,2.478-12.109,2.478-12.109s2.4805-12.109,2.4805-12.109c0.1709-0.83496-0.38819-1.521-1.2402-1.521h-15.762c-0.85206,0-1.6956,0.68604-1.8701,1.5186,0,0-3.3887,16.079-3.3887,16.079s-3.3887,16.077-3.3887,16.077c-0.003,0.007-0.004,0.0171-0.005,0.0244,0,0-0.31494,1.4942-0.31494,1.4942-3.9038,17.822-2.8686,34.817,18.347,35.349,0.3467,0.01,0.61525,0.0125,0.61525,0.0125h33.302c0.85206,0,1.6956-0.6836,1.8738-1.5186,0,0,7.1814-33.757,7.1814-33.757s7.1814-33.76,7.1814-33.76c0.17701-0.83497-0.37598-1.5186-1.228-1.5186z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m383.64,72.621c0.85327,0,1.4111,0.6836,1.2402,1.5186,0,0-1.4917,7.2876-1.4917,7.2876"/>
                        <path fillRule="nonzero" fill="#131b28" d="m381.9,88.719s1.4905-7.2925,1.4905-7.2925-1.4917,7.2949-1.4917,7.2949c0-0.002,0.00099-0.002,0.00099-0.002z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m380.03,90.253c0.002,0,0.005-0.002,0.007-0.002-4.519,0.0366-18.099,0.13916-28.306,0.13916,12.422,0,28.298-0.13672,28.298-0.13672z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m342.57,63.234c-0.0125-0.79835,0.896-2.1729,1.7493-2.1729,0,0-1.9177-0.0317-1.9177-0.0317-0.86426,8.6914,0.16845,2.2046,0.16845,2.2046z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m353.13,90.387c-0.0976,0-0.19775,0-0.29542,0.002,0.0976-0.002,0.19777-0.002,0.29542-0.002z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m383.64,72.621c0.85327,0,1.4111,0.6836,1.2402,1.5186,0,0-1.4917,7.2876-1.4917,7.2876s-0.24293,1.189-0.24293,1.189"/>
                        <path fillRule="nonzero" fill="#131b28" d="m360.4,90.37h-0.0623,0.0623z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m356.63,90.382h-0.21852,0.21852z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m355.48,90.385c-0.12201,0-0.2417,0-0.36134,0.002,0.11963-0.002,0.23927-0.002,0.36134-0.002z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m354.31,90.387h-0.31737,0.31737z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m356.41,90.382c-0.31127,0-0.62255,0.002-0.93016,0.002,0.30761,0,0.61889-0.002,0.93016-0.002z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m360.34,90.37c-1.2427,0.005-2.4829,0.01-3.7048,0.0125,1.2219-0.002,2.4634-0.007,3.7048-0.0125z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m380.04,90.25h0.001c-3.3118,0.0269-11.49,0.0879-19.646,0.11963,8.1518-0.0292,16.332-0.0927,19.645-0.11963z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m381.9,88.722s1.2488-6.106,1.2488-6.106-1.25,6.1108-1.25,6.1108c0-0.002,0.001-0.002,0.001-0.005z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m355.12,90.387h-0.81054,0.81054z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m352.83,90.389h-1.0962,1.0962z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m353.99,90.387h-0.86426,0.86426z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m129.36,63.417s2.3852-10.574,2.3852-10.574-2.727,12.087-2.727,12.087-2.6172,12.312-2.6172,12.312,2.2937-10.793,2.2937-10.793c0.177-0.83497,0.4773-2.1997,0.66529-3.0322z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m157.91,18.793h-16.864c-0.85326,0-1.7041,0.68115-1.8945,1.5112,0,0-1.5991,7.0581-1.5991,7.0581s-1.5991,7.0606-1.5991,7.0606c-0.18799,0.83008,0.35523,1.5112,1.2085,1.5112h16.995c0.85205,0,1.6992-0.68115,1.8823-1.5137,0,0,1.5454-7.0581,1.5454-7.0581s1.5454-7.0532,1.5454-7.0532v-0.002c0.18189-0.83253-0.36621-1.5137-1.2195-1.5137z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m154.24,42.272v-0.002s-4.9463,22.883-4.9463,22.883,4.9463-22.881,4.9463-22.881z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m105.25,118.09s8.501,0.10988,13.905,0.10988c-4.1052,0-10.885-0.0756-13.912-0.11225,0.003,0,0.005,0.002,0.008,0.002z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m134.13,42.269s-2.3877,10.574-2.3877,10.574,2.3877-10.574,2.3877-10.574z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m153.02,40.756h-16.997c-0.85205,0-1.7041,0.68117-1.8921,1.5137,0,0-2.3877,10.574-2.3877,10.574s-2.3852,10.574-2.3852,10.574c-0.18799,0.83253-0.48829,2.1973-0.66529,3.0322,0,0-2.2937,10.793-2.2937,10.793s-2.2925,10.793-2.2925,10.793c-0.17822,0.83252-0.54443,2.1777-0.81787,2.9858,0,0-3.175,9.4482-8.5132,9.3408-0.22705-0.005-0.448-0.007-0.6665-0.0125-2.5867-0.0489-4.6191-0.0855-4.6191-0.0855h-0.004c-0.85083-0.0125-1.7066,0.65185-1.9055,1.4795,0,0-1.7627,7.4097-1.7627,7.4097s-1.7603,7.4072-1.7603,7.4072c-0.19775,0.82762,0.33692,1.5112,1.1841,1.5259,3.0274,0.0366,9.8071,0.11225,13.912,0.11225,13.334,0,20.363-7.3877,24.869-28.647,0,0,5.2734-24.399,5.2734-24.399s4.9463-22.883,4.9463-22.883c0.17945-0.83251-0.3711-1.5137-1.2232-1.5137z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m394.47,89.525c-0.85205,0-1.405-0.6836-1.2256-1.5186,0,0,12.786-59.89,12.786-59.89"/>
                        <path fillRule="nonzero" fill="#131b28" d="m412.24,88.004s5.1709-25.562,5.1709-25.562-5.1709,25.562-5.1709,25.562z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m393.43,88.766c-0.10375-0.41749-0.0428-1.4404,0.13793-2.2754,0,0,6.0681-28.428,6.0681-28.428s-6.3928,29.944-6.3928,29.944c-0.17944,0.83495,0.37354,1.5186,1.2256,1.5186h1.5528c-0.85328,0-2.489-0.3418-2.5916-0.75927z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m411.23,89.183c-0.46388,0.18799-1.543,0.3418-2.3962,0.3418h1.5527c0.85205,0,1.6894-0.6836,1.8579-1.521,0,0,0.30761-1.5186,0.30761-1.5186-0.16967,0.83496-0.85692,2.5098-1.322,2.6978z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m414.83,75.223s2.2827-11.282,2.2827-11.282c-0.001,0.007-0.002,0.0171-0.004,0.022,0,0-2.279,11.26-2.279,11.26z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m465.28,32.128s0.70434,2.9102,0.70434,2.9102c0.1941,0.83251-0.34424,1.5088-1.1951,1.5112"/>
                        <path fillRule="nonzero" fill="#131b28" d="m412.55,86.486s2.2766-11.262,2.2766-11.262-2.2766,11.262-2.2766,11.262z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m464.58,29.147s0.69703,2.981,0.69703,2.981-0.69703-2.981-0.69703-2.981z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m417.11,63.942c0.16969-0.83496,0.45045-2.1875,0.62746-3.0151,0,0,2.4377-11.421,2.4377-11.421s-2.7612,12.937-2.7612,12.937-0.30397,1.499-0.30397,1.499z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m406.24,27.135c-0.16967,0.80567-0.38696,1.8237-0.53101,2.4976,0,0-6.0681,28.43-6.0681,28.43s6.3928-29.946,6.3928-29.946,0.2063-0.98145,0.2063-0.98145z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m465.98,35.038s-0.70434-2.9102-0.70434-2.9102-0.69703-2.981-0.69703-2.981-0.35278-1.5088-0.35278-1.5088c-1.3806-5.3638-5.4334-8.4595-14.233-8.4595,0,0-13.7-0.0146-13.7-0.0146s-12.617-0.0146-12.617-0.0146h-1.0828-13.114c-0.85205,0-1.6956,0.68115-1.8713,1.5161h-0.001s-0.62743,2.9663-0.62743,2.9663-0.74096,3.5034-0.74096,3.5034-0.2063,0.98145-0.2063,0.98145-6.3928,29.946-6.3928,29.946-6.0681,28.428-6.0681,28.428c-0.18065,0.83496-0.24169,1.8579-0.13792,2.2754,0.1025,0.41747,1.7383,0.75927,2.5915,0.75927h12.808c0.85327,0,1.9324-0.15381,2.3962-0.3418,0.46508-0.18799,1.1523-1.8628,1.322-2.6978,0,0,2.2766-11.262,2.2766-11.262s2.279-11.26,2.279-11.26c0.001-0.005,0.002-0.0146,0.004-0.022,0,0,0.30396-1.499,0.30396-1.499s2.7612-12.937,2.7612-12.937,2.439-11.426,2.439-11.426c0.18068-0.83007,1.0205-1.5088,1.8713-1.5112,0,0,40.3-0.0195,40.3-0.0195,0.85083-0.002,1.3892-0.67872,1.1951-1.5112z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m517.86,8.7244c-0.85326,0.006-2.2485,0.0113-3.1018,0.0113h-12.899c-0.85328,0-1.9458,0.57618-2.4268,1.2805,0,0-28.523,41.787-28.523,41.787-0.48218,0.70557-1.0315,0.60059-1.2207-0.22949,0,0-2.0984-9.2065-2.0984-9.2065-0.18921-0.83252-1.0437-1.5112-1.8958-1.5112h-18.337c-0.85327,0-1.3586,0.66895-1.1255,1.4893,0,0,8.2166,28.784,8.2166,28.784,0.23437,0.82032,0.25147,2.168,0.0403,2.9932,0,0-3.5815,13.931-3.5815,13.931-0.2124,0.82764,0.3125,1.5039,1.1658,1.5039h18.123c0.85205,0,1.7236-0.67627,1.9348-1.5039,0,0,3.5828-13.931,3.5828-13.931,0.21119-0.82519,0.80445-2.0605,1.3184-2.7417,0,0,46.306-61.459,46.306-61.459,0.51393-0.68115,0.2356-1.2354-0.61645-1.2292,0,0-4.8608,0.0317-4.8608,0.0317z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m372.18,44.774s-0.001-0.0171-0.001-0.0171c-0.10737,0.92528-0.96069,1.604-1.8128,1.604h-23.248c-0.80323,0-1.2122-0.54688-1.0938-1.2207,0.007-0.0195,0.01-0.0366,0.022-0.0537,0,0-0.008,0.002-0.0146,0.007,0.005-0.0269,0.005-0.0512,0.0125-0.0781,0,0,0.044-0.16358,0.10625-0.39552,2.2204-5.9033,6.7432-9.7778,15.243-9.7778,9.5691,0,11.437,4.6753,10.787,9.9316zm-6.8201-26.834c-29.841,0-36.912,18.113-40.879,36.394-3.9673,18.633-3.6255,36.055,27.253,36.055h1.0962c0.0976-0.002,0.19777-0.002,0.29542-0.002h0.86426,0.31737,0.81055c0.11963-0.002,0.23927-0.002,0.36133-0.002,0.30762,0,0.6189-0.002,0.93017-0.002h0.21852c1.2219-0.002,2.4622-0.008,3.7048-0.0125h0.0623c8.1555-0.0317,16.334-0.0927,19.647-0.11962,0.84717-0.0125,1.676-0.6958,1.8506-1.5234,0,0,1.25-6.1108,1.25-6.1108s0.24293-1.189,0.24293-1.189,1.4917-7.2876,1.4917-7.2876c0.1709-0.83496-0.38696-1.5186-1.2402-1.5186h-27.761c-11.041,0-14.32-2.9346-13.112-11.56h44.377s-0.004,0.005-0.004,0.005c0.0113,0,0.0208-0.005,0.0305-0.005,0.70556-0.0125,1.3574-0.49804,1.6162-1.145,0.0489-0.1245,0.0904-0.25391,0.10737-0.38818,0,0-0.005,0.005-0.005,0.005,6.5894-24.854,4.6997-41.592-23.528-41.592z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m224.32,44.679s-0.41993,1.4868-0.41993,1.4868c0,0.005-0.001,0.005-0.001,0.005s-3.3508,11.875-3.3508,11.875-3.3496,11.873-3.3496,11.873c-0.23193,0.82031-1.1182,1.4917-1.9727,1.4917h-17.736c-13.453,0-16.729-10.522-13.453-26.042,3.2752-15.874,9.6973-25.742,22.938-26.741,18.094-1.3648,21.714,11.362,17.345,26.052zm12.163,25.818s8.3618-20.303,10.261-32.031c2.59-15.699-5.27-38.466-35.63-38.466-30.187,0-43.295,21.737-48.297,45.367-5.0012,23.801,1.5515,44.675,31.567,44.504,0,0,23.679-0.0879,23.679-0.0879s22.131-0.0806,22.131-0.0806c0.85205-0.007,1.7236-0.6836,1.9409-1.5064,0,0,3.855-14.705,3.855-14.705,0.21485-0.8252-0.30639-1.5039-1.1584-1.5088,0,0-3.6951-0.022-3.6951-0.022s-3.6938-0.022-3.6938-0.022c-0.7251-0.005-1.1401-0.47364-1.0522-1.0962,0.0159-0.11225,0.0415-0.22705,0.0904-0.34668z"/>
                        <path fillRule="nonzero" fill="#131b28" d="m385.92,56.908c0,0.56153-0.45532,1.0181-1.0181,1.0181-0.56152,0-1.0181-0.45654-1.0181-1.0181,0-0.56152,0.45655-1.0156,1.0181-1.0156,0.56274,0,1.0181,0.4541,1.0181,1.0156z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m5.9785,30.509c-8.335,11.98-7.2974,27.566-0.93018,40.295,0.15138,0.30518,0.31006,0.60546,0.46631,0.90576,0.10012,0.19043,0.19409,0.38574,0.29785,0.57373,0.05862,0.11225,0.1245,0.22216,0.18555,0.32959,0.10862,0.20263,0.21972,0.39551,0.33202,0.59326,0.19776,0.34912,0.4004,0.6958,0.60791,1.0425,0.11475,0.19042,0.22828,0.38085,0.34669,0.57128,0.22949,0.37109,0.46509,0.7373,0.70556,1.1035,0.10012,0.15625,0.19775,0.3125,0.30029,0.46386,0.33204,0.49561,0.67139,0.98877,1.0217,1.4746,0.0087,0.0125,0.01825,0.0269,0.02925,0.039,0.055,0.0781,0.116,0.15381,0.17212,0.23194,0.30274,0.41747,0.61524,0.83007,0.9314,1.2378,0.116,0.14892,0.23315,0.29785,0.35034,0.44677,0.28199,0.35401,0.56885,0.70558,0.8606,1.0571,0.10862,0.13184,0.2185,0.26366,0.32836,0.39306,0.39185,0.46143,0.79101,0.92041,1.1987,1.3696,0.0075,0.007,0.01713,0.0171,0.02437,0.0244,0.01713,0.0195,0.03175,0.0317,0.04637,0.0512,0.39795,0.43457,0.80566,0.85937,1.2183,1.2842,0.12816,0.13184,0.25879,0.26368,0.39062,0.39308,0.31982,0.32226,0.64452,0.63965,0.9729,0.95458,0.13305,0.12695,0.26489,0.25635,0.39795,0.37842,0.43822,0.4126,0.88134,0.81787,1.333,1.2134,0.0075,0.007,0.01337,0.0125,0.02075,0.0171,0.07688,0.0684,0.15625,0.13184,0.23194,0.19775,0.39795,0.34424,0.80322,0.68604,1.2109,1.023,0.16601,0.13428,0.33448,0.26612,0.50171,0.40039,0.33325,0.26611,0.67016,0.52979,1.0095,0.78858,0.17945,0.13672,0.35889,0.27343,0.53956,0.41016,0.37475,0.27587,0.75195,0.54687,1.1328,0.81299,0.13915,0.10012,0.27344,0.19775,0.41259,0.29296,0.039,0.0269,0.0745,0.0537,0.1135,0.0806,0.36134,0.24902,0.7312,0.48827,1.0999,0.72754,0.15869,0.105,0.31616,0.21483,0.47608,0.31737,0.5664,0.35889,1.1414,0.7129,1.7224,1.0547,0.15746,0.0904,0.31738,0.17822,0.47606,0.26856,0.42725,0.24658,0.85694,0.48828,1.2927,0.7251,0.2356,0.12695,0.4773,0.24658,0.71534,0.36865,0.30761,0.16113,0.61279,0.3247,0.92529,0.48095,0.07075,0.0343,0.14405,0.0684,0.21362,0.1025,0.12574,0.061,0.25269,0.11963,0.37842,0.18311,0.48461,0.23194,0.9729,0.45899,1.4661,0.67872,0.105,0.0464,0.2063,0.0928,0.31006,0.13916,0.56518,0.24657,1.1352,0.48339,1.7102,0.71045,0.13794,0.0561,0.2771,0.10987,0.41626,0.16356,0.53222,0.20509,1.0718,0.40773,1.6138,0.59815,0.06838,0.0244,0.13429,0.0464,0.20264,0.0707,0.59449,0.20753,1.1951,0.40039,1.7993,0.58838,0.14404,0.0415,0.2893,0.0879,0.43456,0.1294,0.61524,0.18555,1.2232,0.40771,1.8579,0.5249,40.31,7.3511,52.019-24.224,52.019-24.224-9.834,12.812-27.29,16.191-43.829,12.429-0.62622-0.1416-1.2341-0.33691-1.8457-0.51758-0.15504-0.0464-0.30762-0.0927-0.46021-0.13916-0.59692-0.1831-1.189-0.37597-1.7773-0.57861-0.08062-0.0292-0.16236-0.0586-0.24415-0.0879-0.52734-0.18555-1.0486-0.38086-1.5674-0.58105-0.14649-0.0586-0.29298-0.11475-0.43945-0.17334-0.56885-0.22461-1.134-0.45899-1.6919-0.70312-0.11475-0.0489-0.22461-0.10013-0.33814-0.14894-0.47974-0.21728-0.95459-0.437-1.427-0.66406-0.13671-0.0659-0.27344-0.12939-0.4126-0.19775-0.371-0.181-0.738-0.374-1.104-0.562-0.245-0.129-0.494-0.251-0.737-0.386-0.447-0.239-0.886-0.488-1.323-0.742-0.148-0.083-0.298-0.163-0.447-0.249-0.581-0.342-1.155-0.696-1.723-1.055-0.157-0.1-0.31-0.207-0.465-0.31-0.412-0.266-0.822-0.537-1.226-0.815-0.134-0.091-0.263-0.188-0.395-0.278-0.39-0.276-0.776-0.555-1.159-0.838-0.174-0.129-0.345-0.259-0.514-0.388-0.351-0.269-0.7-0.54-1.046-0.818-0.15625-0.1245-0.3125-0.24902-0.46631-0.37354-0.43945-0.36132-0.87402-0.7251-1.3025-1.0986-0.04512-0.039-0.094-0.0781-0.14282-0.11963-0.46386-0.40771-0.91919-0.8252-1.3696-1.2451-0.13062-0.1245-0.25758-0.24659-0.38575-0.3711-0.33325-0.31738-0.66161-0.6372-0.98389-0.96435-0.12939-0.1294-0.25879-0.25635-0.38574-0.38575-0.41015-0.41991-0.81299-0.84473-1.2073-1.2768-0.0195-0.022-0.04025-0.0415-0.05975-0.0635-0.41749-0.45655-0.8252-0.92285-1.2244-1.394-0.10862-0.12939-0.21362-0.2539-0.32105-0.38085-0.29785-0.35889-0.59326-0.72266-0.88135-1.0889-0.108-0.132-0.216-0.267-0.323-0.403-0.347-0.45-0.686-0.899-1.018-1.355-9.1823-12.525-12.481-29.8-5.142-43.987"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m31.852,20.416c-6.0278,8.6743-5.7007,20.286-0.99854,29.46,0.78858,1.5381,1.6748,3.0298,2.666,4.4507,0.90331,1.2939,1.9043,2.8345,3.103,3.8745,0.43458,0.47852,0.88868,0.94482,1.3525,1.4038,0.11712,0.11963,0.23681,0.23438,0.35645,0.35157,0.45044,0.43701,0.9082,0.8667,1.3818,1.2842,0.0195,0.0146,0.03663,0.0341,0.05613,0.0489,0.005,0.005,0.01,0.007,0.01337,0.0125,0.52368,0.45899,1.0644,0.90089,1.6138,1.3354,0.12212,0.0927,0.24292,0.19044,0.36621,0.28565,0.55054,0.42237,1.1121,0.8374,1.6882,1.2329,0.01713,0.0125,0.03175,0.0244,0.04888,0.0366,0.25391,0.17578,0.5127,0.33936,0.77026,0.50781,0.12325,0.0806,0.24049,0.16602,0.365,0.2417,0.41138,0.26367,0.82762,0.52002,1.2512,0.7666,0.05987,0.0366,0.11838,0.0684,0.177,0.1025,0.365,0.20995,0.73486,0.41747,1.106,0.61767,0.12939,0.0732,0.26122,0.13672,0.39306,0.20508,0.25635,0.13427,0.5127,0.271,0.77392,0.40039,0.039,0.0195,0.07937,0.0366,0.11712,0.0538,0.53101,0.26122,1.0669,0.5127,1.6138,0.75195,0.11712,0.0513,0.23804,0.0976,0.35644,0.14648,0.43701,0.18555,0.87891,0.36622,1.3232,0.53712,0.18799,0.0708,0.37841,0.13916,0.5664,0.20751,0.40284,0.14892,0.80689,0.28565,1.2146,0.42236,0.18432,0.0586,0.365,0.11963,0.54932,0.17579,0.57982,0.18066,1.1523,0.40771,1.7566,0.50781,31.123,5.1562,38.308-18.806,38.308-18.806-6.477,9.3286-19.02,13.779-32.405,10.305-0.59449-0.15625-1.1804-0.32715-1.7627-0.51027-0.17822-0.0537-0.35279-0.11225-0.52979-0.17088-0.41381-0.13429-0.82519-0.27589-1.2329-0.42482-0.18676-0.0684-0.37352-0.13671-0.55664-0.20751-0.44678-0.1709-0.88868-0.34912-1.3269-0.53467-0.11962-0.0513-0.24049-0.0976-0.35768-0.15137-0.54931-0.23926-1.0901-0.49072-1.6235-0.7544-0.27466-0.13427-0.54444-0.27587-0.81421-0.41503-0.15625-0.0805-0.31372-0.16113-0.46998-0.2417-0.34668-0.18799-0.69091-0.3833-1.0303-0.58105-0.0805-0.0464-0.16479-0.0904-0.24658-0.13917-0.42115-0.24658-0.83619-0.50048-1.2476-0.76171-0.12695-0.0806-0.24902-0.16846-0.37598-0.25147-0.271-0.17578-0.54199-0.354-0.8081-0.53467-0.57374-0.39551-1.1316-0.81055-1.6821-1.2305-0.12695-0.10013-0.2539-0.19775-0.37841-0.29785-5.859-4.626-10.503-10.947-12.711-18.115-2.314-7.434-1.815-15.779,2.194-22.551"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m53.613,12.875c-3.5535,5.2295-3.9026,11.724-1.4368,17.5,2.6001,6.1304,7.9285,10.94,14.147,13.22,0.25635,0.0953,0.5127,0.18066,0.77271,0.26855,0.1135,0.0342,0.22582,0.0733,0.34058,0.10737,0.36621,0.11475,0.72998,0.24903,1.1084,0.31983,17.185,3.3203,21.846-8.8184,23.087-10.605-4.0832,5.8789-10.945,7.29-19.364,5.2466-0.665-0.162-1.396-0.402-2.037-0.629-0.822-0.293-1.632-0.627-2.419-1.005-1.495-0.718-2.92-1.59-4.241-2.588-7.534-5.716-12.214-16.621-7.298-25.502"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m247.16,114.73s-4.9536,11.282-4.9536,11.282h-5.4688s0.448-10.251,0.448-10.251-4.0259,10.251-4.0259,10.251h-5.2954s-0.13916-11.282-0.13916-11.282,0.58471-2.7856,0.58471-2.7856h3.75s-0.72264,11.143-0.72264,11.143,4.1626-11.143,4.1626-11.143h5.2283s-0.37841,11.282-0.37841,11.282,4.1284-11.282,4.1284-11.282h3.2666s-0.58471,2.7856-0.58471,2.7856z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m255.79,118.07c0.48217-2.2022,0.34424-2.6148-0.79103-2.6148h-1.72s-1.1011,5.1611-1.1011,5.1611-1.6858,5.398-1.6858,5.398h-3.1982s2.6135-12.244,2.6135-12.244,0.37964-1.7896,0.37964-1.7896h2.9236s0.37841,0.82518,0.37841,0.82518,1.6858-0.99608,3.335-0.99608c3.5095,0,3.2348,2.6465,2.4768,6.2598h-3.6108z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m266.18,110.19c-1.4087,0-2.3035-0.4126-1.9604-2.1314,0.37841-1.7212,1.4795-2.1338,2.854-2.1338,1.3782,0,2.3059,0.41259,1.9275,2.1338-0.34424,1.6846-1.4441,2.1314-2.821,2.1314zm-1.5124,15.823h-3.1665s0.62011-5.5029,0.62011-5.5029,1.1011-5.0903,1.1011-5.0903-2.2009-0.4834-2.2009-0.4834,0.6189-2.9907,0.6189-2.9907h6.0181s-2.9907,14.067-2.9907,14.067z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m278.39,114.93s-3.9551,0.4834-3.9551,0.4834-1.1365,5.3662-1.1365,5.3662c-0.31005,1.4795-0.31005,1.8921,0.99853,1.8921h2.6477s-0.55054,2.8198-0.55054,2.8198-2.406,0.72265-3.4399,0.72265c-4.0588,0-4.0247-2.2363-3.3008-5.5737,0,0,1.1011-5.2612,1.1011-5.2612s-2.2022-0.48096-2.2022-0.48096,0.65308-2.9932,0.65308-2.9932h2.3059s1.3074-3.5449,1.3074-3.5449h3.1299s-0.75805,3.5449-0.75805,3.5449h3.8525s-0.65308,3.0249-0.65308,3.0249z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m286.61,115.11c-1.8567,0-2.821,0.96436-3.1982,2.6831,0,0,5.2966-0.44677,5.2966-0.44677,0.24048-1.1694,0-2.2363-2.0984-2.2363zm-3.7134,5.227c-0.24293,1.7212,0.41138,2.3047,2.6123,2.3047h5.5371s-0.54933,2.6148-0.54933,2.6148-3.3362,0.92774-5.813,0.92774c-6.1572,0-6.2268-3.4717-5.4346-7.1875,0.791-3.6475,2.2009-7.2559,8.1506-7.2559,5.7459,0,6.0217,3.4717,4.6106,8.5962h-9.1138z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m304.63,126.01h-3.1628s0.61888-5.5029,0.61888-5.5029,2.2363-10.457,2.2363-10.457-2.2034-0.51514-2.2034-0.51514,0.65431-2.9932,0.65431-2.9932h6.0205s-4.1638,19.468-4.1638,19.468z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m316.06,115.11c-1.8591,0-2.821,0.96436-3.2007,2.6831,0,0,5.2978-0.44677,5.2978-0.44677,0.23925-1.1694,0-2.2363-2.0972-2.2363zm-3.7158,5.227c-0.24049,1.7212,0.41381,2.3047,2.6135,2.3047h5.5383s-0.55054,2.6148-0.55054,2.6148-3.3374,0.92774-5.8142,0.92774c-6.1572,0-6.2244-3.4717-5.4334-7.1875,0.79222-3.6475,2.2021-7.2559,8.1519-7.2559,5.7446,0,6.0193,3.4717,4.6106,8.5962h-9.1162z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m335.97,115.28s-4.0246,0.0343-5.1245,0.0343c-2.3401,0-2.5806,0.72021-2.7515,1.477,0,0-0.13915,0.68847-0.13915,0.68847s7.4304,0.55177,7.4304,0.55177,0.0341,2.373-0.27587,3.7134c-0.44677,2.2363-2.7515,4.5044-6.9128,4.5044-2.0654,0-5.4016-0.78857-5.4016-0.78857s0.58471-2.7173,0.58471-2.7173h5.1257c2.2705,0,2.5806-0.62013,2.7197-1.2378,0,0,0.17088-0.89355,0.17088-0.89355s-7.2925-0.55176-7.2925-0.55176-0.27466-1.8237,0.1025-3.645c0.55176-2.478,2.8198-4.6094,6.9824-4.6094,2.0642,0,5.4004,0.75439,5.4004,0.75439s-0.6189,2.7197-0.6189,2.7197z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m349.8,115.28s-4.0234,0.0343-5.1245,0.0343c-2.3389,0-2.5793,0.72021-2.7515,1.477,0,0-0.13917,0.68847-0.13917,0.68847s7.4316,0.55177,7.4316,0.55177,0.0341,2.373-0.27587,3.7134c-0.44678,2.2363-2.7515,4.5044-6.9141,4.5044-2.063,0-5.4004-0.78857-5.4004-0.78857s0.58471-2.7173,0.58471-2.7173h5.1257c2.2693,0,2.5793-0.62013,2.7185-1.2378,0,0,0.1709-0.89355,0.1709-0.89355s-7.2925-0.55176-7.2925-0.55176-0.27465-1.8237,0.1025-3.645c0.55175-2.478,2.8198-4.6094,6.9836-4.6094,2.063,0,5.3992,0.75439,5.3992,0.75439s-0.6189,2.7197-0.6189,2.7197z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m354.13,128.25h-2.7502s0.1025-2.0654,0.1025-2.0654c-0.99854-0.0659-1.5137-0.78858-1.2732-1.9946,0.37842-1.7188,1.4453-2.1313,2.8552-2.1313,1.3757,0,2.3022,0.41259,1.9263,2.1313,0,0-0.8606,4.0601-0.8606,4.0601z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m372.53,115.42c-2.063,0-2.7844,1.2378-3.2666,3.5083-0.48218,2.2705-0.34424,3.6108,1.7188,3.6108h2.8552s1.5832-7.1191,1.5832-7.1191h-2.8906zm4.7131,8.7695s-0.37964,1.8237-0.37964,1.8237-2.887-0.0341-2.887-0.0341-0.41381-0.89356-0.41381-0.89356-2.5464,1.0986-4.2639,1.0986c-4.4043,0-4.6106-3.6108-3.8196-7.2559,0.79102-3.7158,2.511-7.2241,6.8799-7.2241,1.5832,0,3.7146,0.79102,3.7146,0.79102s1.7542-5.9497,1.7542-5.9497h3.1653s-3.75,17.644-3.75,17.644z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m388.63,115.28c-2.6819,0-3.5437,1.5112-4.0247,3.7134-0.44677,2.2363-0.23925,3.75,2.4072,3.75,2.7527,0,3.5791-1.4795,4.0588-3.75,0.48339-2.1338,0.34424-3.7134-2.4414-3.7134zm-2.3376,10.938c-5.6763,0-6.1243-3.5425-5.3674-7.2241,0.79224-3.6792,2.7869-7.1875,8.4631-7.1875,5.6396,0,6.1572,3.5083,5.3638,7.1875-0.78979,3.75-2.7856,7.2241-8.4595,7.2241z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m418.49,126.01s0.62012-5.4346,0.62012-5.4346,0.30883-1.5478,0.30883-1.5478c0.448-2.063,0.72266-3.5767-1.4453-3.5767h-1.6846c0.0696,1.0669-0.13794,2.2705-0.41259,3.5425,0,0-1.4783,7.0166-1.4783,7.0166h-3.1995s0.6189-5.4346,0.6189-5.4346,0.30883-1.5478,0.30883-1.5478c0.44799-2.063,0.72143-3.5767-1.4429-3.5767h-1.377s-2.2705,10.559-2.2705,10.559h-3.6816s2.9932-14.067,2.9932-14.067h2.8894s0.44678,0.85937,0.44678,0.85937,1.9617-1.0327,3.5437-1.0327c1.2036,0,2.0984,0.55176,2.4084,1.2378,0.68726-0.37842,2.6489-1.2378,4.0601-1.2378,4.3994,0,4.2639,3.5767,3.4717,7.2241,0,0-1.4783,7.0166-1.4783,7.0166h-3.1995z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m433.11,115.28c-2.6843,0-3.5437,1.5112-4.0247,3.7134-0.44677,2.2363-0.23925,3.75,2.4072,3.75,2.7515,0,3.5791-1.4795,4.0601-3.75,0.48096-2.1338,0.34301-3.7134-2.4426-3.7134zm-2.3389,10.938c-5.6775,0-6.123-3.5425-5.3662-7.2241,0.79101-3.6792,2.7856-7.1875,8.4619-7.1875,5.6421,0,6.1572,3.5083,5.365,7.1875-0.7898,3.75-2.7856,7.2241-8.4607,7.2241z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m448.79,118.07c0.48096-2.2022,0.34424-2.6148-0.7898-2.6148h-1.7212s-1.1011,5.1611-1.1011,5.1611-1.6858,5.398-1.6858,5.398h-3.1982s2.6135-12.244,2.6135-12.244,0.37963-1.7896,0.37963-1.7896h2.9236s0.3772,0.82518,0.3772,0.82518,1.6858-0.99608,3.3386-0.99608c3.5071,0,3.2312,2.6465,2.4744,6.2598h-3.6108z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m461.11,115.11c-1.8555,0-2.8198,0.96436-3.197,2.6831,0,0,5.2942-0.44677,5.2942-0.44677,0.24292-1.1694,0-2.2363-2.0972-2.2363zm-3.7146,5.227c-0.23925,1.7212,0.4126,2.3047,2.6135,2.3047h5.5383s-0.54932,2.6148-0.54932,2.6148-3.3374,0.92774-5.813,0.92774c-6.1572,0-6.2256-3.4717-5.437-7.1875,0.79223-3.6475,2.2034-7.2559,8.1531-7.2559,5.7434,0,6.0205,3.4717,4.6094,8.5962h-9.115z"/>
                        <path fillRule="nonzero" fill="#0868ac" d="m469.6,126.22c-1.4453,0-2.3376-0.41259-1.9592-2.0972,0.34179-1.7236,1.4087-2.1338,2.8552-2.1338,1.3403,0,2.2681,0.41015,1.9263,2.1338-0.38086,1.6504-1.4795,2.0972-2.8223,2.0972z"/>
                    </svg>
                )
            },
            {
                name: 'ajax',
                icon: ({...props}) => (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 397.5 191.25' {...props}>
                        <title>Ajax</title>
                        <defs>
                            <linearGradient id="a">
                            <stop offset="0" stopColor="#70b0df"/>
                            <stop offset=".5" stopColor="#1b81c5"/>
                            <stop offset="1" stopColor="#4a98ce"/>
                            </linearGradient>
                            <linearGradient x1="162.67442" x2="162.67442" y1="14.452718" y2="175.03487" gradientUnits="userSpaceOnUse"/>
                        </defs>
                        <g fill="#8c96a1" transform="translate(0 2)">
                            <path fillRule="evenodd" d="M48.822266 90.923828 12.205078 172.94141h23.949219l7.119141-17.38282h36.802734l7.11914 17.38282h23.949218L74.435547 90.923828H48.822266zm13.005859 19.337892 6.212891 15.5957 6.21289 15.59766-12.388672.0293-12.388672.0312 6.175782-15.62695 6.175781-15.62695zM226.42503 90.923828l-36.61718 82.017582h23.94922l7.11914-17.38282h36.80273l7.11914 17.38282h23.94922l-36.70898-82.017582h-25.61329zm13.00586 19.337892 6.21289 15.5957 6.21289 15.59766-12.38867.0293-12.38867.0312 6.17578-15.62695 6.17578-15.62695zm55.58022-19.620711h27.19958l17.39204 26.153451 18.43818-26.153451h26.80728l-32.29951 39.753241 34.39178 42.82998h-27.19958l-19.74585-27.92252-19.35355 27.92252h-29.03032l35.04561-42.43768z"/>
                            <path d="m179.94141 55.929688-32.56055 32.02539 11.20898 10.142578L169.19336 87.4375l1.18359.002v61.154297c0 7.76349-6.25018 14.01367-14.01367 14.01367h-11.13476c-7.76349 0-14.01368-6.25018-14.01368-14.01367v-6.52734h-21.65039v8.1289c0 14.03603 11.29991 25.33594 25.33594 25.33594h28.76563c14.03602 0 25.33593-11.29991 25.33593-25.33594V87.482469l.83789.002 12.38672 10.613281 9.74024-10.142578-32.02539-32.02539z" color="#000" overflow="visible" style={{isoltation: "auto", mixBlend: "normal", solidColor: "#000", solidOpacity: 1, marker: "none"}}/>
                            <path d="m120.2293 135.33257 32.56055-32.02539-11.20898-10.142583-10.60352 10.660153-1.18359-.002V42.668455c0-7.76349 6.25018-14.01367 14.01367-14.01367h11.13476c7.76349 0 14.01368 6.25018 14.01368 14.01367v6.52734h21.65039v-8.1289c0-14.03603-11.29991-25.33594-25.33594-25.33594h-28.76563c-14.03602 0-25.33593 11.29991-25.33593 25.33594v62.712895l-.83789-.002-12.386718-10.613293-9.74024 10.142583 32.025388 32.02539z" color="#000" overflow="visible" style={{isoltation: "auto", mixBlend: "normal", solidColor: "#000", solidOpacity: 1, marker: "none"}}/>
                        </g>
                        <path fill="url(#b)" fillRule="evenodd" stroke="#0c4c75" strokeWidth=".5" d="M136.50391 15.730469c-14.03602 0-25.33594 11.299907-25.33594 25.335937V103.7793l-.83789-.00196-12.386721-10.613278-9.740234 10.142578 32.025395 32.02539 32.56054-32.02539-11.20898-10.142578-10.60352 10.660158-1.18359-.00195V42.667969c0-7.76349 6.25018-14.013672 14.01367-14.013672h11.13477c7.76349 0 14.01367 6.250182 14.01367 14.013672v6.527343h21.65039v-8.128906c0-14.03603-11.29991-25.335937-25.33594-25.335937h-28.76562zm43.4375 40.199219-32.56055 32.02539 11.20898 10.142578L169.19336 87.4375l1.18359.001953v61.154297c0 7.76349-6.25018 14.01367-14.01367 14.01367h-11.13476c-7.76349 0-14.01368-6.25018-14.01368-14.01367v-6.52734h-21.65039v8.1289c0 14.03603 11.29991 25.33594 25.33594 25.33594h28.76563c14.03602 0 25.33593-11.29991 25.33593-25.33594V87.482422l.83789.001953 12.38672 10.613281 9.74024-10.142578-32.02539-32.02539zm115.07031 34.710937 31.64453 40.146485-35.04492 42.4375h29.02929l19.35352-27.92383 19.74609 27.92383h27.20118l-34.39258-42.83008 32.29883-39.753905h-26.80664l-18.4375 26.154295-17.39258-26.154295h-27.19922zm-246.189454.283203L12.205078 172.94141h23.949219l7.119141-17.38282h36.802734l7.11914 17.38282h23.949218L74.435547 90.923828H48.822266zm177.603514 0-36.61719 82.017582h23.94922l7.11914-17.38282h36.80274l7.11914 17.38282h23.94922l-36.70899-82.017582h-25.61328zM61.828125 110.26172l6.212891 15.5957 6.21289 15.59766-12.388672.0293-12.388672.03124 6.175782-15.62695 6.175781-15.62695zm177.603515 0 6.21289 15.5957 6.21289 15.59766-12.38867.0293-12.38867.03124 6.17578-15.62695 6.17578-15.62695z"/>
                    </svg>
                )
            },
            {
                name: 'sql-server',
                icon: ({...props}) => (
                    <svg viewBox="0 -141.54 1478.201 1478.201" xmlns="http://www.w3.org/2000/svg" fill="#000000" {...props}>
                        <title>SQL Server</title>
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <g transform="matrix(.569 0 0 .569 199.451 -82.735)"> 
                                <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-2901.952" y1="923.573" x2="-2061.249" y2="1420.331" gradientTransform="matrix(.1234 0 0 -.1234 1158.33 1550.273)"> 
                                    <stop offset="0" stopColor="#909ca9"></stop> 
                                    <stop offset="1" stopColor="#ededee"></stop> 
                                </linearGradient> 
                                <path fill="url(#a)" d="M1410.773 814.195l-286.9 93.683-249.599 110.161-69.829 18.435c-17.784 16.916-36.431 34.049-56.599 51.397-22.119 19.082-42.72 36.433-58.553 49.008-17.564 13.88-43.587 39.902-56.814 56.38-19.735 24.721-35.348 50.96-42.071 71.13-11.928 36.433-6.07 73.297 16.916 107.346 29.492 43.369 88.261 87.606 156.785 117.749 34.916 15.4 93.683 35.132 137.92 46.19 73.512 18.651 215.771 38.819 294.054 41.857 15.828.65 37.082.65 37.947 0 1.737-1.088 13.881-24.289 27.979-53.129 48.142-98.238 82.838-190.402 101.703-269.119 11.276-47.706 20.166-111.246 26.019-186.492 1.521-21.036 2.169-91.514.868-115.37-1.953-39.033-5.423-70.692-10.84-101.703-.868-4.555-1.088-8.676-.652-8.892.865-.65 3.467-1.517 38.815-11.712l-7.153-16.912v-.005h.004zm-65.49 38.386c2.602 0 9.539 66.573 11.273 108.646.436 8.89.216 14.745-.216 14.745-1.733 0-36.649-20.599-61.583-36.212-21.687-13.663-62.888-40.988-69.393-46.192-2.173-1.517-1.957-1.733 15.828-7.807 30.14-10.194 101.706-33.18 104.091-33.18zm-146.161 48.143c1.953 0 6.937 2.816 18.865 10.191 44.671 27.974 105.393 61.805 131.415 73.083 8.022 3.469 8.887 2.166-9.542 14.746-39.468 26.889-88.697 53.344-148.983 80.018-10.624 4.771-19.514 8.456-19.73 8.456-.432 0 .865-5.418 2.598-11.925 14.53-54.001 22.772-108.647 23.208-152.452.216-21.687.216-21.687 2.169-22.334-.436.217-.22.217 0 .217zm-30.142 11.492c1.297 1.299.432 49.877-1.304 63.104-3.903 31.662-9.975 61.153-19.947 94.335-2.386 8.018-4.558 14.745-4.987 15.177-.872 1.083-30.581-27.975-40.339-39.251-16.916-19.518-30.141-39.035-39.9-58.117-4.988-9.759-12.793-28.84-12.144-29.492 3.469-2.385 117.753-46.622 118.621-45.756zm-141.826 55.731c.216 0 .432 0 .652.216.432.434 1.953 3.905 3.254 7.807 6.937 18.867 22.548 46.624 35.997 64.407 14.746 19.518 34.048 40.334 50.091 53.996 5.207 4.337 9.975 8.456 10.624 9.108 1.304 1.302 1.737 1.083-33.612 14.53-40.981 15.613-85.656 31.226-136.835 47.706a6825.474 6825.474 0 0 0-36.643 11.928c-1.955.652-1.303-.434 4.335-9.323 25.371-39.686 63.97-117.536 85.657-172.618 3.687-9.542 7.373-19.082 8.025-21.251.868-3.038 1.95-4.121 4.768-5.64 1.518-.43 3.038-.866 3.687-.866zm-43.367 17.999c.649.436-10.411 23.637-21.254 44.889-21.036 40.985-44.022 81.323-74.815 130.331-5.204 8.456-10.19 16.265-10.842 17.132-1.083 1.519-1.519 1.083-4.988-5.638-7.373-14.53-13.447-33.181-16.699-50.313-3.254-16.916-2.602-46.406 1.086-64.621 2.816-13.444 2.602-13.227 9.107-16.481 27.757-14.095 117.537-56.166 118.405-55.299zm374.073 15.182v9.107c0 48.359-5.204 114.716-12.797 163.077-1.301 8.456-2.389 15.393-2.602 15.613 0 0-6.288-1.733-13.661-3.905-32.527-10.193-67.875-25.156-99.754-42.718-21.038-11.494-51.612-30.363-50.743-31.231.213-.215 9.323-4.986 19.947-10.625 42.509-22.118 83.274-45.972 118.622-69.609 13.229-8.892 33.176-23.202 37.518-27.107l3.47-2.602zm-537.802 64.185c.867 0 .65 1.735-.651 9.542-.868 5.64-1.951 16.049-2.382 23.202-1.739 31.662 3.469 55.084 19.082 87.177 4.337 8.892 7.809 16.265 7.589 16.48-1.519 1.303-145.074 43.375-190.183 55.734-13.444 3.685-25.152 6.939-26.024 7.153-1.515.436-1.733.22-1.083-3.47 4.987-31.875 29.276-73.512 63.104-108.644 22.554-23.419 40.554-37.08 71.347-54.648 22.119-12.575 56.165-31.439 58.767-32.309.002-.217.218-.217.434-.217zm338.295 60.503c.216-.216 5.42 2.605 11.708 6.29 46.408 26.891 111.03 51.83 166.108 64.623l4.991 1.086-6.941 3.899c-28.84 16.049-123.606 55.515-220.538 91.732-14.098 5.202-27.975 10.409-30.581 11.492-2.602 1.083-4.988 1.735-4.988 1.519 0-.22 3.906-7.809 8.89-17.132 27.107-50.744 54.433-112.547 68.311-155.485 1.739-4.12 2.82-7.805 3.04-8.024zm-34.48 11.278c.22.221-1.517 4.771-3.687 9.975-18.865 45.756-43.59 95.636-75.249 151.583-8.022 14.314-14.746 25.808-14.966 25.808-.213 0-6.721-3.906-14.527-8.676-45.976-28.192-86.743-62.888-113.414-96.501l-3.905-4.771 19.732-5.422c70.696-19.298 130.762-40.116 190.4-65.704 8.459-3.471 15.4-6.292 15.616-6.292zm214.253 74.815s.217.217 0 0c.216 4.988-10.844 49.661-19.953 81.969-7.589 27.107-14.098 48.361-26.022 85.874-5.204 16.485-9.755 30.143-9.975 30.143-.216 0-1.517-.216-2.818-.647-64.405-11.714-122.089-27.977-176.303-49.661-15.182-6.074-36.866-15.833-38.167-16.916-.432-.438 12.58-6.506 29.06-13.663 98.669-43.154 201.024-92.164 236.153-113.196 4.119-2.603 7.373-3.903 8.025-3.903zm-494.646 16.916c.434.432-27.107 40.118-65.709 94.114-13.444 18.867-29.057 40.985-34.911 49.225-5.856 8.241-14.746 21.253-19.734 29.06l-9.112 14.096-9.759-8.24c-11.494-9.544-31.442-29.927-40.333-41.204-18.651-23.201-31.226-47.706-36.214-70.04-2.386-10.411-2.386-15.618-.22-16.265 3.252-.867 61.153-14.53 115.37-27.11 30.143-6.937 65.054-15.177 77.632-18.213 12.579-3.041 22.774-5.423 22.99-5.423zm27.756 10.626l6.937 7.806c31.231 34.914 63.108 60.724 101.708 83.272 6.941 3.906 12.144 7.373 11.708 7.594-1.514 1.083-134.016 48.136-195.385 69.389-34.478 12.143-62.888 21.901-63.102 21.901-.216 0-2.169-1.299-4.341-2.818l-3.901-2.82 6.288-9.106c20.383-29.493 45.976-61.803 101.707-129.028l38.381-46.19zm173.053 123.822c.213-.215 9.755 3.252 21.464 7.594 28.195 10.624 50.527 17.345 80.456 24.936 36.866 9.326 90.211 18.434 121.657 21.035 4.771.432 7.373.868 6.505 1.519-1.521.868-33.395 11.494-56.816 18.867-37.302 11.708-151.149 45.32-243.962 71.995-17.132 4.987-31.879 9.108-32.746 9.323-2.166.436-9.325-1.519-9.325-2.386 0-.431 5.204-7.153 11.494-14.527 31.225-37.3 62.238-78.935 88.044-118.403 7.154-10.846 13.229-19.736 13.229-19.953zm-38.17 1.087c.216.216-15.179 24.936-42.066 67.439-11.496 17.999-24.291 38.383-28.846 45.54-4.337 6.939-10.842 17.784-14.527 23.854l-6.29 11.061-3.252-.868c-7.809-2.169-62.672-21.471-77.202-27.325-18-7.157-36.649-15.829-50.529-23.202-17.346-9.326-39.03-23.206-37.297-23.637.433-.216 30.143-8.243 65.922-17.999 94.984-25.809 147.678-40.77 182.161-51.612 6.29-1.952 11.71-3.471 11.926-3.251zm269.985 63.318h.216c.868 2.171-34.26 99.755-47.06 130.547-2.815 6.939-3.896 8.677-5.417 8.456-3.687-.213-54.646-7.37-85.66-11.925-53.994-8.24-144.641-24.073-167.409-29.275l-5.204-1.083 32.307-7.378c69.396-15.613 102.791-24.069 136.619-34.478 42.722-13.011 85.011-29.276 127.729-49.225 6.722-3.037 12.361-5.422 13.879-5.639z"></path> 
                                <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-2882.7" y1="10288.81" x2="-2206.249" y2="10288.81" gradientTransform="matrix(.1234 0 0 -.1234 1158.33 1550.273)">
                                    <stop offset="0" stopColor="#939fab"></stop> 
                                    <stop offset="1" stopColor="#dcdee1"></stop> 
                                </linearGradient> 
                                <path fill="url(#b)" d="M1114.983 145.414c-4.771-.647-81.757 27.11-131.415 47.275-67.01 27.327-119.052 53.351-151.148 75.899-11.925 8.461-26.891 23.422-29.273 29.276-.867 2.169-1.303 4.771-1.303 7.373l29.06 27.541 69.175 22.119 164.594 29.493 188.228 32.312 1.953-16.264c-.649 0-1.085-.216-1.73-.216l-24.728-3.905-4.984-8.89c-25.59-45.107-53.781-101.056-70.261-138.789-12.793-29.276-24.938-63.102-31.662-87.391-3.687-14.746-4.119-15.613-6.501-15.829v-.005h-.005zm-3.474 11.063h.223c.213.214 1.081 6.29 1.95 13.442 3.683 30.364 10.411 59.635 21.035 91.297 8.022 23.855 8.022 22.555-1.301 19.734-22.119-6.07-121.221-23.202-193-33.177-11.494-1.519-21.253-3.036-21.253-3.252-.867-.867 51.827-28.41 75.031-39.25 29.709-13.665 111.246-47.711 117.315-48.794zm-209.047 97.15l8.461 2.816c45.97 15.616 161.551 37.736 225.31 42.94 7.154.651 13.229 1.303 13.442 1.303.216.216-5.852 3.469-13.661 7.154-30.79 15.397-64.621 34.264-88.042 48.794-6.937 4.335-13.229 7.807-14.094 7.807-.868 0-5.42-.868-10.191-1.519l-8.674-1.303-21.683-21.253c-38.167-37.08-68.094-65.704-79.588-76.549l-11.28-10.19zm-8.671 6.721l30.576 38.168c16.696 21.035 33.611 41.635 37.301 46.187 3.683 4.557 6.721 8.245 6.505 8.461-.868.65-44.236-7.809-67.226-13.011-23.637-5.423-33.395-8.025-47.924-12.577l-11.928-3.905v-3.038c.216-14.53 18.651-36.214 49.877-58.331l2.819-1.954zm259.791 52.046c.869 0 1.95 1.951 4.552 7.806 7.373 16.263 30.364 60.07 35.997 68.526 1.74 2.822 4.771 3.038-25.802-1.95-73.512-11.93-97.152-15.829-97.152-16.263 0-.216 2.169-1.735 4.988-3.254 22.771-12.575 45.756-28.624 66.142-45.756 4.988-4.121 9.542-8.024 10.407-8.676.216-.433.652-.649.868-.433z"></path> 
                                <radialGradient id="c" cx="-14217.448" cy="7277.705" r="898.12" gradientTransform="matrix(-.1185 -.0178 -.036 .237 -198.955 -1314.415)" gradientUnits="userSpaceOnUse"> 
                                    <stop offset="0" stopColor="#ee352c"></stop> <stop offset="1" stopColor="#a91d22"></stop> 
                                </radialGradient>
                                <path fill="url(#c)" d="M804.66 294.828s-4.768 7.593-.215 18.87c2.822 6.937 11.061 15.393 20.384 24.069 0 0 96.5 94.114 108.211 107.561 53.344 61.585 76.549 122.305 78.718 206.012 1.301 53.78-8.894 101.054-34.264 155.919-45.106 98.453-140.307 207.098-287.117 327.67l21.472-7.157c13.878-10.411 32.745-21.467 76.982-45.756 102.137-55.952 217.071-107.346 358.028-160.258 202.971-76.335 536.715-165.681 726.676-194.736l19.737-3.038-3.038-4.771c-17.345-26.891-29.276-43.587-43.59-61.369-41.633-51.612-92.157-93.463-153.964-128.161-85.007-47.489-194.956-84.571-334.173-112.112-26.239-5.207-83.923-15.181-130.763-22.337-99.321-15.393-163.51-26.021-234.203-38.165-25.37-4.339-63.323-10.843-88.478-16.263-13.011-2.822-37.947-8.676-57.464-15.398-15.613-6.075-38.168-12.147-42.939-30.58zm55.952 54.216c.214-.214 3.683 1.083 8.24 2.602 8.24 2.816 18.865 6.07 31.446 9.542a1599.47 1599.47 0 0 0 28.624 7.589c13.011 3.251 23.852 6.288 24.068 6.288 1.521 1.519 23.424 71.558 30.797 98.449 2.815 10.195 4.988 18.867 4.771 18.867-.223.22-2.605-3.469-5.423-8.456-25.373-44.673-65.491-89.995-111.899-126.428-6.069-4.333-10.624-8.237-10.624-8.453zm106.692 29.492c1.085 0 5.856.651 11.708 1.951 36.866 8.24 103.008 20.818 145.293 27.975 7.157 1.083 12.797 2.387 12.797 2.818 0 .436-2.605 1.951-5.859 3.688-7.153 3.685-35.997 20.815-45.536 27.322-24.073 16.047-45.756 33.395-61.371 49.008-6.288 6.29-11.712 11.494-11.712 11.494s-1.297-3.685-2.386-8.242c-7.802-30.143-24.069-74.816-38.815-106.258-2.386-4.986-4.339-9.541-4.339-9.973 0 .433 0 .217.22.217zm187.795 35.781c1.301.432 3.47 7.806 7.806 24.069 8.025 31.446 11.712 66.576 10.411 99.321-.436 9.108-.868 17.564-1.304 18.651l-.649 2.166-11.276-3.685c-23.204-7.373-60.935-18.435-93.245-27.541-18.436-4.988-33.395-9.542-33.395-9.975 0-1.303 26.891-28.192 38.383-38.383 21.898-19.303 81.316-65.275 83.269-64.623zm14.963 2.166c.652-.647 89.779 14.746 130.331 22.554 30.145 5.854 73.948 14.963 76.549 16.049 1.301.432-3.254 3.034-17.784 9.539-57.248 25.808-99.754 49.008-142.036 77.202-11.06 7.373-20.386 13.444-20.602 13.444-.216 0-.433-6.287-.433-13.878 0-41.201-8.241-82.838-23.424-117.968-1.517-3.47-2.818-6.722-2.601-6.942zm230.516 45.542c.652.65-2.169 18.217-4.771 28.624-7.806 32.312-28.84 80.24-54.643 125.343-4.558 8.024-8.677 14.53-9.114 14.746-.429.216-6.285-3.038-13.009-6.941-25.154-14.746-53.778-28.624-85.007-41.637-8.671-3.685-16.263-6.723-16.48-7.153-1.521-1.303 68.308-47.493 105.174-69.612 29.276-17.781 76.982-44.239 77.85-43.37zm16.48 2.601c1.953 0 41.421 10.844 62.019 16.916 50.963 15.181 109.512 36.648 147.679 53.996l15.828 7.159-11.056 2.6c-93.245 21.467-173.049 46.192-250.034 77.418-6.289 2.602-11.928 4.771-12.357 4.771-.436 0 1.733-4.987 4.552-11.061 23.204-49.225 38.167-100.62 41.85-144.427.221-4.121.867-7.372 1.519-7.372zm-392.938 90.213c.649-.652 30.793 6.506 47.057 11.056 24.721 6.942 77.198 24.505 77.198 25.808 0 .216-5.853 5.204-12.79 11.278-28.408 23.637-55.734 48.572-88.481 80.234-9.759 9.328-17.997 16.917-18.429 16.917-.436 0-.649-1.304-.436-3.038 4.987-36.433 3.906-83.272-3.034-130.763-.653-6.074-1.302-11.276-1.085-11.492zm633.433.652c.429.431-13.881 22.984-22.988 35.777-13.009 18.649-32.098 43.375-75.252 97.588-22.765 28.622-48.358 60.936-56.812 71.778-8.678 10.842-15.831 19.948-16.051 19.948-.216 0-3.031-3.901-6.069-8.671-24.289-36.433-53.349-68.311-87.829-96.935-6.505-5.423-13.658-11.278-16.044-13.013-2.386-1.734-4.339-3.469-4.339-3.685 0-.649 36.862-16.483 64.841-27.757 49.01-19.952 115.794-43.805 165.892-59.203 26.24-8.239 54.215-16.263 54.651-15.827zm16.696 4.334c.865-.215 6.072 2.387 12.361 6.07 52.697 30.143 104.305 68.962 145.077 108.864 11.492 11.278 39.9 40.77 39.464 40.986 0 0-9.975.867-21.683 1.733-91.296 6.942-208.178 26.239-320.511 53.345-7.589 1.733-14.31 3.252-14.746 3.252-.429 0 8.025-8.456 18.653-18.647 65.922-63.538 96.067-103.656 131.628-175.22 4.986-10.623 9.325-19.731 9.757-20.383-.216 0-.216 0 0 0zm-482.936 49.446c3.038.647 31.229 13.88 52.48 24.503 19.517 9.755 48.794 25.372 50.311 26.671.216.216-10.195 5.638-22.984 11.928-40.772 20.384-75.684 39.682-112.118 61.802-10.408 6.29-19.082 11.497-19.298 11.497-.868 0-.652-.872 5.204-11.497 19.518-35.561 35.129-78.065 44.023-119.486.864-3.252 1.733-5.418 2.382-5.418zm-28.192 5.202c.652.652-6.721 27.323-11.273 41.853-8.894 27.541-23.856 62.02-38.383 88.043-3.474 6.069-8.677 14.961-11.496 19.948l-5.42 8.674-12.144-11.707c-14.094-13.663-25.59-22.12-40.333-29.712-5.859-3.033-10.411-5.638-10.411-6.069 0-1.735 37.082-35.347 65.49-59.635 20.383-17.566 63.321-52.045 63.97-51.395zm172.404 70.913l10.627 6.937c24.282 15.833 52.906 36.866 74.813 55.298 12.357 10.19 36.21 31.662 40.985 36.866l2.598 2.822-17.561 4.986c-99.321 27.538-176.087 52.043-265.649 85.007-9.975 3.685-18.433 6.721-19.085 6.721-1.297 0-2.385 1.083 19.954-19.519 57.251-52.691 107.992-110.812 145.726-167.411l7.592-11.707zm-45.324 11.276c.432.432-29.276 42.284-47.06 65.922-21.251 28.192-58.985 75.465-85.007 106.256-10.84 12.797-20.163 23.422-20.599 23.64-.652.216-.868-3.036-.868-8.024 0-26.242-6.721-54.216-18.433-78.068-4.988-9.975-5.856-12.361-4.768-13.444 4.119-3.688 67.223-39.686 107.123-61.153 26.89-14.312 68.956-35.563 69.612-35.129zm-274.107 67.225c.652 0 5.64 2.6 11.279 5.638 13.878 7.589 26.239 16.046 37.298 25.156.432.432-5.204 4.988-12.577 10.406-20.602 14.746-51.828 38.385-70.041 52.915-19.088 15.18-19.734 15.613-17.568 12.361 14.314-21.903 21.467-34.264 29.06-50.093 6.721-14.094 13.442-30.793 18.213-45.323 1.734-6.289 3.904-11.06 4.336-11.06zm73.083 57.248c1.081-.214 2.386 1.735 8.238 10.411 12.361 18.429 21.903 43.154 24.292 63.104l.429 4.339-29.705 11.494c-53.133 20.599-102.139 40.985-135.322 56.162-9.322 4.339-25.587 12.144-36.211 17.352-10.627 5.418-19.301 9.539-19.301 9.323s6.721-5.204 14.961-11.278c64.844-47.055 121.007-98.669 163.076-150.279 4.555-5.423 8.677-10.411 9.107-10.627l.436-.001zm-33.612 8.242c.868.867-23.853 28.84-40.768 45.971-41.853 42.723-83.273 76.12-134.669 108.649-6.505 4.119-12.359 7.804-13.011 8.24-1.519.867.432-1.303 22.986-25.808 14.314-15.397 25.155-28.408 37.516-44.453 8.24-10.624 9.759-12.143 21.688-20.604 31.878-22.987 105.39-72.864 106.258-71.995z"></path> </g> 
                                <path fill="currentColor" d="M265.747 900.102c-2.276 0-4.553.217-6.809.217-45.975 2.45-76.983 22.683-95.113 62.195-15.506 35.735-13.813 82.446.174 118.4 16.265 35.131 42.547 53.672 86.416 60.675 9.282 1.52 15.506 6.616 33.483 27.606l22.12 25.915h40.118l-26.676-26.892c-14.746-14.745-26.673-27.584-26.673-28.712 0-1.127 5.641-3.599 12.469-5.68 22.51-6.812 41.203-24.202 54.279-50.854 10.583-21.402 12.102-28.018 13.619-54.646 3.969-79.26-37.82-128.813-107.409-128.247l.002.023zm35.173 207.27c-19.517 9.453-47.857 11.34-66.356 4.553-19.127-7.025-37.646-26.889-45.975-49.377-9.259-24.591-7.937-69.956 2.646-90.386 17.023-32.528 39.534-47.49 72.43-47.49 48.792 0 76.549 29.884 80.171 86.048 2.863 46.885-12.838 82.058-42.895 96.632l-.021.02zm693.025-139.568c-16.828 0-29.709 6.811-38.385 20.231l-6.809 10.627v-27.628h-29.123v165.678h29.104v-52.956c0-48.424.604-54.084 7.371-67.335 9.326-18.172 25.371-27.234 40.879-22.897l10.408 3.036v-28.712h-13.445v-.044zm-171.098-1.519c-5.705 0-11.756.76-17.781 2.084-38.971 10.19-60.938 47.489-59.594 85.873 0 32.139 6.244 48.206 21.752 65.057 31.77 26.065 60.502 28.146 99.275 14.161 6.615-2.819 13.814-6.072 13.814-6.072v-26.065l-13.814 7.156c-31.379 13.661-55.016 13.661-73.949-2.43-12.076-12.296-17.391-27.042-19.84-43.868h117.426v-22.339c0-45.539-27.41-74.294-67.313-73.557h.024zm-47.492 72.647s4.338-28.407 20.428-39.554c7.744-5.466 16.633-8.11 25.328-8.11 8.719 0 17.414 2.818 24.592 8.306 14.748 11.341 17.219 39.143 17.219 39.143h-87.566v.215h-.001zm-702.111-29.881c-31.573-19.128-45.582-32.921-43.869-49.185 4.9-44.997 60.503-38.773 91.295-21.749l.219-30.272s-17.024-7.373-41.421-7.764c-37.429-.564-61.63 11.709-72.97 36.691-16.656 36.865-1.908 64.665 51.396 95.677 29.925 17.412 43.152 32.528 43.152 49.008 0 34.047-41.05 45.931-83.401 24.57-8.716-4.337-16.09-7.959-16.48-7.959-1.519 9.651-.736 32.745-.736 32.745s13.012 5.466 32.527 9.236c48.4 9.65 92.445-13.054 96.608-49.919 3.622-34.609-8.893-52.761-56.318-81.104l-.002.025zm1178.454-43.155c-5.682 0-11.711.78-18 2.103-38.924 10.192-60.85 47.492-59.354 85.876 0 32.095 6.225 48.011 21.729 64.838 31.771 26.089 60.504 28.191 99.473 14.184 6.592-2.818 13.77-6.026 13.77-6.026v-26.109l-13.791 7.197c-31.443 13.619-55.082 13.619-73.947-2.471-12.145-12.274-17.414-26.847-19.865-43.871h117.232v-22.336c0-45.321-27.412-74.099-67.313-73.339l.066-.046zm-47.492 72.646s4.381-28.365 20.449-39.729c7.721-5.485 16.611-8.132 25.307-8.132 8.674 0 17.414 2.819 24.594 8.327 14.746 11.342 17.219 39.338 17.219 39.338h-87.545l-.024.196zm-533.809-29.123c-31.573-19.083-45.54-32.92-43.848-49.185 4.9-45.02 60.504-38.773 91.296-21.749l.218-30.272s-17.024-7.374-41.421-7.722c-37.429-.563-61.63 11.711-72.991 36.692-16.633 36.864-1.692 64.666 51.437 95.677 29.884 17.393 43.111 32.312 43.111 48.792 0 34.047-41.029 46.126-83.381 24.569-8.674-4.337-16.046-7.916-16.48-7.916-1.519 9.649-.736 32.746-.736 32.746s12.858 5.27 32.31 9.237c48.445 9.672 92.51-13.012 96.653-49.877 3.6-34.437-8.891-52.587-56.167-80.952v-.04zm752.421-42.005c-16.828 0-29.859 6.829-38.383 20.254l-6.811 10.582v-27.583h-29.123V1136.3h29.102v-52.954c0-48.403.584-54.085 7.375-67.313 9.324-18.15 25.369-27.235 40.875-22.878l10.408 3.035v-28.775h-13.443zm-984.021 41.05V902.941h-29.361v233.728h123.478v-27.604h-94.116v-100.601zm679.015 32.896l-24.201 62.975-23.27-63.322-23.637-70.173h-30.055c19.475 55.212 40.658 111.376 62.02 165.829 9.26.216 18.541 0 27.799 0l32.682-82.058 33.287-83.75h-28.732s-12.688 33.266-25.914 70.521l.021-.022zM506.455 839.251c4.728 0 8.674-1.516 11.927-4.769 3.208-3.211 4.9-6.984 4.9-11.711 0-4.728-1.692-8.675-4.9-11.711-3.253-3.035-7.005-4.555-11.711-4.555-4.769 0-8.717 1.52-11.927 4.728-3.252 3.211-4.727 7.158-4.727 11.712 0 4.771 1.519 8.716 4.727 11.711 3.037 3.034 6.984 4.553 11.711 4.553v.042zm-10.408-26.889c2.818-2.818 6.245-4.121 10.625-4.121 4.121 0 7.548 1.303 10.411 4.121 2.819 2.819 4.337 6.245 4.337 10.409 0 4.163-1.518 7.764-4.337 10.582-2.862 2.817-6.29 4.163-10.411 4.163-4.185 0-7.59-1.301-10.408-4.163-2.819-2.818-4.337-6.419-4.337-10.582 0-4.164 1.301-7.589 4.12-10.409zm7.003 11.928h1.908c1.346 0 2.668 1.3 3.795 3.773l2.279 5.116h3.577l-2.818-5.683c-1.149-2.275-2.276-3.598-3.6-3.969 1.67-.39 2.992-.953 3.947-2.082.952-.974 1.3-2.298 1.3-3.795 0-1.734-.542-3.034-1.69-3.989-1.302-1.084-3.384-1.669-6.074-1.669h-6.026v21.187h3.035v-8.891l.367.002zm0-9.846h2.647c1.908 0 3.253.39 3.99.953.716.564.911 1.303.911 2.646 0 2.45-1.52 3.601-4.337 3.601h-3.252v-7.2h.041zm-485.018 7.958c0-7.373-.216-12.858-.39-16.09h.174c.758 3.814 1.691 6.657 2.45 8.543l28.19 62.975h4.728l28.19-63.538c.761-1.733 1.52-4.337 2.452-7.959h.216c-.563 6.29-.758 11.754-.758 16.112v55.581h9.648v-82.622h-12.1L54.919 852.87c-.955 2.276-2.278 5.683-3.969 10.193h-.392c-.563-2.234-1.886-5.639-3.772-9.803l-25.33-58.053H8.598v82.621h9.281v-55.385l.153-.041zm96.045.154h8.329v51.458h-8.329v-51.458zm4.164-18.868c1.736 0 3.21-.587 4.337-1.734 1.15-1.129 1.91-2.603 1.91-4.337 0-1.692-.565-3.211-1.887-4.337-1.171-1.15-2.668-1.737-4.381-1.737-1.69 0-3.208.587-4.338 1.737-1.146 1.126-1.907 2.645-1.907 4.337 0 1.887.586 3.208 1.907 4.337 1.304 1.147 2.647 1.734 4.338 1.734h.021zm63.54 71.455v-9.066c-4.555 3.405-9.456 5.098-14.53 5.098-6.07 0-10.995-2.081-14.595-6.07-3.577-3.947-5.485-9.436-5.485-16.266 0-7.156 1.908-12.84 5.854-17.177 3.795-4.163 8.719-6.245 14.748-6.245 4.922 0 9.647 1.52 14.009 4.557v-9.65c-3.968-2.082-8.5-3.037-13.619-3.037-9.456 0-16.827 3.037-22.335 8.894-5.466 5.854-8.285 13.813-8.285 23.42 0 8.543 2.45 15.722 7.548 21.209 5.312 5.637 12.102 8.5 20.428 8.5 6.438-.178 11.707-1.523 16.262-4.167zm23.831-27.433c0-6.788 1.518-12.273 4.337-16.049 2.647-3.403 5.855-5.116 9.65-5.116 3.21 0 5.486.585 7.155 1.908v-9.846c-1.3-.563-3.187-.758-5.637-.758-3.405 0-6.439 1.146-9.107 3.253-2.819 2.231-5.074 5.638-6.397 9.975h-.216v-12.08h-9.433v58.985h9.454V847.71h.194zm54.279 31.443c8.892 0 16.048-2.863 21.36-8.543 5.29-5.641 7.936-13.229 7.936-22.686 0-9.647-2.427-17.021-7.372-22.51-4.9-5.483-11.711-8.132-20.603-8.132s-16.048 2.647-21.36 7.764c-5.681 5.641-8.674 13.599-8.674 23.813 0 8.891 2.429 16.265 7.548 21.751 5.29 5.68 12.295 8.521 21.165 8.521v.022zm-13.445-48.055c3.6-3.795 8.329-5.683 14.182-5.683 6.074 0 10.627 1.888 14.01 5.683 3.404 3.969 5.097 9.63 5.097 17.197 0 7.198-1.519 12.859-4.729 16.654-3.208 3.969-7.936 6.071-14.183 6.071-6.071 0-10.777-2.104-14.377-6.071-3.577-3.99-5.291-9.456-5.291-16.654-.368-7.156 1.519-13.01 5.291-17.197zm84.141 42.916c3.599-3.208 5.509-7.155 5.509-12.102 0-4.337-1.52-7.936-4.338-10.777-2.3-2.275-5.854-4.337-10.994-6.419-4.556-1.906-7.374-3.6-8.893-4.923-1.517-1.517-2.45-3.402-2.45-6.071 0-2.45.955-4.337 2.821-5.855 1.908-1.516 4.337-2.253 7.59-2.253 5.096 0 9.454 1.343 13.443 4.185v-9.456c-3.816-1.906-7.958-2.817-12.686-2.817-6.071 0-11.189 1.671-14.964 4.899-3.969 3.212-5.854 7.375-5.854 12.274 0 4.337 1.3 7.938 3.771 10.582 2.082 2.256 5.641 4.556 10.583 6.614 4.729 2.083 7.938 3.968 9.65 5.485 1.691 1.52 2.45 3.405 2.45 5.641 0 5.506-3.772 8.349-11.146 8.349-5.682 0-10.776-1.866-15.333-5.638v10.189c4.121 2.475 9.066 3.601 14.53 3.601 7.005-.368 12.49-2.081 16.264-5.486l.047-.022zm45.019-56.73c-8.893 0-16.048 2.647-21.361 7.764-5.638 5.641-8.674 13.599-8.674 23.813 0 8.891 2.452 16.265 7.547 21.751 5.313 5.68 12.295 8.521 21.187 8.521 9.107 0 16.048-2.861 21.36-8.545 5.313-5.637 7.958-13.227 7.958-22.683 0-9.65-2.472-17.022-7.374-22.509-5.115-5.487-11.927-8.133-20.601-8.133l-.042.021zm18.345 31.012c0 7.198-1.518 12.859-4.727 16.654-3.21 3.969-7.938 6.071-14.184 6.071-6.074 0-10.778-2.104-14.379-6.071-3.577-3.99-5.29-9.456-5.29-16.654 0-7.59 1.888-13.444 5.683-17.393 3.576-3.773 8.306-5.682 14.182-5.682 5.854 0 10.561 1.907 13.964 5.682 3.037 4.163 4.729 9.824 4.729 17.393h.022zm25.547 29.513h9.433v-51.068h13.813v-7.938H428.93v-9.108c0-8.282 3.208-12.446 9.845-12.446 2.234 0 4.511.563 6.203 1.518v-8.521c-1.692-.759-3.969-.932-6.812-.932-5.095 0-9.258 1.519-12.664 4.727-3.969 3.773-6.071 8.674-6.071 15.312v9.672h-9.978v7.936h9.978v50.876l.067-.028zm38.75-16.091c0 11.538 5.098 17.414 15.506 17.414 3.774 0 6.614-.606 8.891-1.951v-8.11c-1.734 1.302-3.795 1.91-6.071 1.91-3.208 0-5.464-.762-6.788-2.475-1.345-1.689-2.103-4.554-2.103-8.501v-33.286h14.961v-7.938h-14.961v-17.39c-3.253 1.127-6.44 2.082-9.456 3.034v14.355h-10.192v7.938h10.192v34.979l.021.021zm1014.88 108.73c-3.209-3.034-7.004-4.553-11.709-4.553-4.77 0-8.719 1.519-11.928 4.771-3.209 3.188-4.729 7.155-4.729 11.711 0 4.728 1.52 8.675 4.705 11.709 3.211 3.036 7.156 4.556 11.928 4.556 4.705 0 8.674-1.52 11.928-4.729 3.188-3.253 4.879-7.004 4.879-11.709-.174-4.771-1.887-8.719-5.096-11.754l.022-.002zm-1.517 22.338c-2.82 2.818-6.246 4.119-10.41 4.119-4.119 0-7.545-1.301-10.408-4.119-2.818-2.863-4.338-6.441-4.338-10.627 0-4.121 1.301-7.545 4.164-10.408 2.818-2.817 6.225-4.121 10.582-4.121 4.121 0 7.549 1.304 10.41 4.121 2.818 2.863 4.336 6.287 4.336 10.408 0 4.382-1.301 7.764-4.336 10.627zm-8.502-9.651c1.691-.39 3.037-1.149 3.969-2.081.955-.977 1.303-2.301 1.303-3.815 0-1.692-.543-3.037-1.691-3.969-1.301-1.085-3.404-1.671-6.07-1.671h-6.029v21.164h3.037v-8.891h1.885c1.303 0 2.604 1.3 3.773 3.773l2.254 5.096h3.602l-2.818-5.683c-.977-2.472-2.105-3.601-3.252-3.97l.037.047zm-2.082-1.907h-3.252v-7.155h2.668c1.887 0 3.209.345 3.969.932.758.563.932 1.301.932 2.646 0 2.45-1.518 3.579-4.336 3.579l.019-.002zM933.443 816.353h2.646v-21.187h7.002v-2.646h-16.652v2.646h7.006v21.187h-.002zm16.047-15.917c0-2.062 0-3.753-.152-4.705.174 1.126.564 1.887.738 2.45l8.133 18.172h1.301l8.152-18.347c.219-.563.393-1.301.76-2.275-.174 1.887-.174 3.401-.174 4.553v16.048h2.82V792.52h-3.406l-7.371 16.438c-.174.587-.762 1.734-1.129 3.037h-.217c-.152-.761-.541-1.519-1.084-2.818l-7.373-16.655h-3.816v23.854h2.666v-15.917l.152-.023z"></path>
                        </g>
                    </svg>
                )
            },
            {
                name: '.net',
                icon: ({...props}) => {
                    const styles = `.cls-1{fill:#5c2d91;}.cls-2,.cls-3{fill:#fff;}.cls-2{opacity:0.1;}.cls-4{fill:#f2f2f2;}`
                    return (
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64 64" {...props}>
                        <defs xmlns="http://www.w3.org/2000/svg"><style>{styles}</style></defs>
                        <title>.NET Core</title><circle className="cls-1" cx="32" cy="32" r="32"/>
                        <path className="cls-2" d="M9.82,9A32,32,0,1,0,55,54.18Z"/>
                        <path className="cls-3" d="M7.4,37.25a1.35,1.35,0,0,1-1-.42,1.38,1.38,0,0,1-.41-1,1.4,1.4,0,0,1,.41-1,1.34,1.34,0,0,1,1-.43,1.37,1.37,0,0,1,1,.43,1.39,1.39,0,0,1,.42,1,1.37,1.37,0,0,1-.42,1A1.38,1.38,0,0,1,7.4,37.25Z"/>
                        <path className="cls-3" d="M27.27,37H24.65L15.28,22.46a6,6,0,0,1-.58-1.14h-.08a18.72,18.72,0,0,1,.1,2.5V37H12.59V18.77h2.77l9.12,14.28q.57.89.74,1.22h.05a19.28,19.28,0,0,1-.13-2.68V18.77h2.13Z"/>
                        <path className="cls-3" d="M41.69,37H32V18.77h9.24V20.7H34.18v6.06h6.58v1.92H34.18V35h7.52Z"/>
                        <path className="cls-3" d="M56,20.7H50.7V37H48.57V20.7H43.33V18.77H56Z"/>
                        <path className="cls-4" d="M26.12,49.4a4.93,4.93,0,0,1-2.32.49,3.74,3.74,0,0,1-2.87-1.15,4.26,4.26,0,0,1-1.08-3,4.46,4.46,0,0,1,1.21-3.26,4.12,4.12,0,0,1,3.08-1.24,4.93,4.93,0,0,1,2,.35v1a4,4,0,0,0-2-.5,3.06,3.06,0,0,0-2.35,1,3.64,3.64,0,0,0-.9,2.58,3.47,3.47,0,0,0,.84,2.45,2.86,2.86,0,0,0,2.21.91,4.14,4.14,0,0,0,2.19-.56Z"/>
                        <path className="cls-4" d="M30.21,49.89A2.78,2.78,0,0,1,28.08,49a3.11,3.11,0,0,1-.79-2.23,3.24,3.24,0,0,1,.83-2.36,3,3,0,0,1,2.23-.85,2.69,2.69,0,0,1,2.09.83,3.28,3.28,0,0,1,.75,2.29,3.22,3.22,0,0,1-.81,2.3A2.84,2.84,0,0,1,30.21,49.89Zm.07-5.47a1.83,1.83,0,0,0-1.46.63,2.59,2.59,0,0,0-.54,1.74,2.45,2.45,0,0,0,.54,1.68,1.85,1.85,0,0,0,1.46.62,1.76,1.76,0,0,0,1.43-.6,2.62,2.62,0,0,0,.5-1.72,2.66,2.66,0,0,0-.5-1.73A1.75,1.75,0,0,0,30.28,44.42Z"/>
                        <path className="cls-4" d="M37.86,44.72a1.18,1.18,0,0,0-.73-.19,1.23,1.23,0,0,0-1,.58,2.68,2.68,0,0,0-.41,1.58v3.06h-1v-6h1V45h0a2.1,2.1,0,0,1,.63-1,1.43,1.43,0,0,1,.94-.35,1.57,1.57,0,0,1,.57.08Z"/>
                        <path className="cls-4" d="M43.72,47H39.49A2.24,2.24,0,0,0,40,48.54a1.86,1.86,0,0,0,1.42.54,3,3,0,0,0,1.86-.67v.9a3.48,3.48,0,0,1-2.09.57,2.54,2.54,0,0,1-2-.82,3.35,3.35,0,0,1-.73-2.3,3.28,3.28,0,0,1,.79-2.28,2.55,2.55,0,0,1,2-.88,2.26,2.26,0,0,1,1.82.76,3.18,3.18,0,0,1,.64,2.12Zm-1-.81a2,2,0,0,0-.4-1.29,1.37,1.37,0,0,0-1.1-.46,1.55,1.55,0,0,0-1.15.49,2.21,2.21,0,0,0-.59,1.27Z"/>
                    </svg>
                )}
            }
        ],
        BackArrow: ({...props}) => (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 16 16"
                {...props}
            >
                <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
            </svg>
        ),
        ForwardArrow: ({...props}) => (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 16 16"
                {...props}
            >
                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
            </svg>
        ),
        UpArrow: ({...props}) => (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 16 16"
                {...props}
            >
                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
            </svg>
        ),
        DownArrow: ({...props}) => (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 16 16"
                {...props}
            >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
            </svg>
        ),
    }
}

const images = assets.images;
const icons = assets.icons;

export {assets as default, images, icons};
