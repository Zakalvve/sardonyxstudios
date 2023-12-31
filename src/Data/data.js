import {icons, images} from '../Assets/assets'
import { Paragraph } from '../Components/UI/Text';

//a quick and temporary way of retrieving, organising and editing data
const data = {
    siteData: {
        root: 'www.sardonyx-studios.com',
        studioName: 'Sardonyx',
        logo: (
            <div className=' text-white text-lg sm:text-xl xl:text-2xl'>
                <span className="uppercase font-bold">Sardonyx</span> Studios
            </div>
        ),
        internalLinks: [
            {
                label: 'About',
                href: '/#about'
            },
            {
                label: 'Projects',
                href: '/#projects'
            },
            {
                label: 'Contact',
                href: '/#contact'
            }
        ],
        mainHero: {
            header: (<>New Frontiers<br />in Programming<br />and Design</>),
            image: images.HeroImg,
            buttonText: "See what I've done",
            buttonLink: '/#projects',
            buttonStyle: 'blue',
            buttonSize: 'large'
        },
        aboutHero: {
            header: (<>Always Looking<br/>Forward</>),
            image: images.AboutHero,
            buttonText: "",
            buttonLink: '/',
            buttonStyle: 'primary',
            buttonSize: 'medium'
        }
    },
    socials: [
        {
            text: 'View GitHub Profile',
            href: 'https://github.com/Zakalvve',
            icon: icons.GitHub
        }
    ],
    projectsData: [
        {
            id: 1,
            date: '2023-02-03',
            name: 'Mihaela\'s Journal',
            image: images.MihaelasJournal,
            CardDescription: ({themeColor, ...props}) => (
                <div {...props}>
                    <Paragraph>
                        Have you ever played DnD? If not, you should! It's a lot of fun and this project 
                        arose from the long running campaign that I GM.
                    </Paragraph>
                    <Paragraph>
                        I have been running this game for a very dedicated 
                        group of players. I was only too happy to take on this project 
                        on behalf of one of those players, Michael.
                    </Paragraph>
                    <Paragraph>
                        This website was made as an interactive and 
                        immersive way to read through the in character journal written 
                        by Michael from the POV of his character, Mihaela. It features optional playback of a dynamic soundscape 
                        which is created in real time by layering various sound clips and staggering their playback.
                    </Paragraph>
                </div>
            ),
            bodySections: [
                {
                    title: `Immersive Soundscape`,
                    Body: ({themeColor, ...props}) => (
                        <div {...props}>
                            <Paragraph>
                                This project features an immersive soundscape. Sound clips are layered over each other and have their playback staggered using the algorithm that I wrote: you feel as though you are huddled around the campfire in the woods at night. Just watch out for wolves!
                           </Paragraph>
                        </div>
                    ),
                    image: images.MihaelasJournal.audioControls
                },
                {
                    title: `Automatic Markdown Parsing`,
                    Body: ({themeColor, ...props}) => (
                        <div {...props}>
                            <Paragraph>
                                In order to allow Michael to easily continue to add journal entries, the site parses the markdown entries he adds and creates a tree structure for navigation. The markdown is then translated into HTML for rendering. 
                                This way, he need only add his latest entries on GitHub as the site handles the rest and the new pages are created immediately.
                           </Paragraph>
                        </div>
                    ),
                    image: images.MihaelasJournal.entry
                }
            ],
            skills: ['js','react', 'html', 'css', 'react-bootstrap', 'markdown'],
            github: 'https://github.com/Zakalvve/mihaelas-journal',
            site: 'https://mihaelas-journal.netlify.app/'
        },
        {
            id: 2,
            name: 'Let\'s Game',
            date: '2022-12-29',
            image: images.LetsGame,
            CardDescription: ({themeColor, ...props}) => (
                <div {...props}>
                    <Paragraph>
                        Let's Game! is one of my first full-stack projects which I undertook whilst learning ASP.NET.
                        The idea of the app is to provide board gamers with a way to organise and arrange 
                        group meetups.
                    </Paragraph>
                    <Paragraph>
                        Users have the option to create polls, so they can decide what to play ahead of time.
                        That means less time debating what to play &#8212; and more time playing!
                    </Paragraph>
                </div>
            ),
            bodySections: [
                {
                    title: `Users Hub`,
                    Body: ({themeColor, ...props}) => (
                        <div {...props}>
                            <Paragraph>
                                Let's Game allows users to create a personal account. Their details are stored securely in an SQL Server database. Each user gets access to their own "Hub" - a dashboard from which to organise meetups with their friends.
                            </Paragraph>
                        </div>
                    ),
                    image: images.LetsGame.hub
                },
                {
                    title: `Events and Polling`,
                    Body: ({themeColor, ...props}) => (
                        <div {...props}>
                            <Paragraph>
                                Users can create or join events. Events are proposed meetups between a group of friends. Each event allows users to add games to a poll. 
                                Users can then vote in that poll. This way, on the day of the meetup they will already have an idea of what they want to play. We all lead 
                                busy lives and finding the time to meet with friends can be challenging. When we do, we want to be playing games not debating what to play!
                           </Paragraph>
                        </div>
                    ),
                    image: images.LetsGame.event
                },
                {
                    title: `Friends`,
                    Body: ({themeColor, ...props}) => (
                        <div {...props}>
                            <Paragraph>
                                Let's Game! is ultimately a social platform with the express goal of playing boardgames. No social platform would be complete without the ability to add friends and invite them to your events.
                            </Paragraph>
                        </div>
                    ),
                    image: images.LetsGame.friends
                }
            ],
            skills: ['c#','asp.net-core', 'bootstrap','js', 'jquery', 'ajax', 'sql-server', '.net'],
            github: 'https://github.com/Zakalvve/Lets-Game',
            site: ''
        },
        {
            id: 3,
            name: 'Extreme Snake',
            date: '2023-04-02',
            image: images.ExtremeSnake,
            CardDescription: ({themeColor, ...props}) => (
            <div {...props}>
                <Paragraph>
                    Extreme Snake is a re-imagining of the classic video game that I first 
                    played on the Nokia 3410. This version features multi-layered 
                    levels, powerups, and even local multiplayer - you can go head to 
                    head against your friends!
                </Paragraph>
                
                <Paragraph>
                    I wanted to make a video game as part of my portfolio and chose to revive the nostalgia of Snake
                    for a new audience.
                </Paragraph>
            </div>),
            bodySections: [
                {
                    title: `A Modern Twist`,
                    Body: ({themeColor, ...props}) => (
                        <div {...props}>
                            <Paragraph>
                                It's the Snake you remember but with a few little changes. You compete for food. If you don't keep yourself fed you can <span className='text-neon-blue'>shrink</span> as well as grow! 
                                You can collect powerups in head-to-head mode to interfere with your opponent's quest for food. Modern multi-layered levels add a new dimension 
                                to the classic game.
                            </Paragraph>
                        </div>
                    ),
                    image: images.ExtremeSnake.action
                },
                {
                    title: `Local Multiplayer`,
                    Body: ({themeColor, ...props}) => (
                        <div {...props}>
                            <Paragraph>
                                Extreme Snake supports local multiplayer so you can battle it out against your friends. You can each choose your snake's color before delving into a 
                                mad dash to compete for the limited resources within the level.
                           </Paragraph>
                        </div>
                    ),
                    image: images.ExtremeSnake.multiplayer
                }
            ],
            demo: {
                title: "Extreme Snake Demo",
                config: {
                    loaderUrl: "/extreme-snake-demo/Build/webgl-build.loader.js",
                    dataUrl: "/extreme-snake-demo/Build/webgl-build.data",
                    frameworkUrl: "/extreme-snake-demo/Build/webgl-build.framework.js",
                    codeUrl: "/extreme-snake-demo/Build/webgl-build.wasm",
                }
            },
            skills: ['c#','unity', '.net'],
            github: '',
            site: ''
        },
        {
            id: 4,
            name: "Factory Simulator",
            date: '2023-04-23',
            image: images.FactorySimulator,
            CardDescription: ({themeColor, ...props}) => (
                <div {...props}>
                    <Paragraph>
                        As part of my desire to learn a range of programming skills, I created Factory Simulator to improve my understanding of advanced OOP
                        patterns and how to select and use them. 
                    </Paragraph>
                    <Paragraph>
                        Without a project in mind to practise these techniques, I was inspired by the systems that I saw at the factory I was working at.
                        The base concepts also remind me of factory games. The program exposes an API that
                        allows for the creation of a simulation and the extraction of data from it for analysis.
                    </Paragraph>
                    <Paragraph>
                        You can specify information about the jobs to be placed onto abstract machines. The simulation virtually runs
                        the machine and only stalls when it runs out of resources, or service is required. The program extracts data from the simulation which can then be imported into Excel in order to aid 
                        planning and management decisions.   
                    </Paragraph>
                </div>
            ),
            bodySections: [
                {
                    title: `A Predictive Simulation to Aid Management Decisions`,
                    Body: ({themeColor, ...props}) => (
                        <div {...props}>
                            <Paragraph>
                                Factory Simulator was created to give leaders and planners access to useful and accurate predictive information. 
                                Whilst a simulation cannot predict the future, it can offer a very fast overview of how decisions might impact productivity.
                           </Paragraph>
                        </div>
                    ),
                    image: images.FactorySimulator.results
                },
                {
                    title: `A Lesson in OOP Patterns`,
                    Body: ({themeColor, ...props}) => (
                        <div {...props}>
                            <Paragraph>
                                Since this project was undertaken with the express goal of learning more about OOP patterns and SOLID principles, 
                                I carefully selected and implemented appropriate patterns to create a perfomant and fast asynchronous API. 
                                Many simulations can be run concurrently and their data extracted to quickly and easily see the differences between decisions.
                            </Paragraph>
                        </div>
                    ),
                    image: images.FactorySimulator.patterns
                }
            ],
            skills: ['c#', '.net'],
            github: 'https://github.com/Zakalvve/FactorySimulator',
            site: ''
        },
        {
            id: 5,
            name: "Bordon Hill Nurseries",
            date: '2023-09-11',
            image: images.BordonHill,
            CardDescription: ({themeColor, ...props}) => (
                <div {...props}>
                    <Paragraph>
                        The website I made for Bordon Hill Nurseries was one of my first commissions. They wanted their old website replaced by something a bit more modern.
                    </Paragraph>
                    <Paragraph>Bordon Hill Nurseries specialise in the large scale production of bedding plants from seed to plugs. They wanted their site to be functional and practical - they anticipated that the site would be used by potential customers as well as the general public.</Paragraph>
                    <Paragraph>I also wanted to ensure the site could be quickly added to or changed quickly and without much work. To achieve this I crated a simple data API from which much of the site is defined including its routing, sitemap and content.</Paragraph>
                </div>
            ),
            bodySections: [
                {
                    title: 'Features',
                    Body: (themeColor, ...props) => (
                        <div className='flex flex-col gap-4' {...props}>
                            <Paragraph>
                                There were several features requested to be included across the website by Bordon Hill Nurseries. They wanted to offer users a way to easily send emails to a number of company email addresses. This feature was added to the contact form using a simple drop down.
                            </Paragraph>
                            <Paragraph>
                                They wanted an interactive map so that users could see where they were based easily. I used the Google Maps API to achieve this functionality adding the finished map to the contact page as well.
                            </Paragraph>
                            <Paragraph>
                                To help people looking for work at the nursery they wanted to provide a download link for their application form. This way, potential recruits could easily download the form and send it back to the given email.
                            </Paragraph>
                        </div>
                    ),
                    image: images.BordonHill.map
                },
                {
                    title: 'Extensions',
                    Body: (...props) => (
                        <div className='flex flex-col gap-4' {...props}>
                            <Paragraph>
                                I created a data API so that web pages could be added easily by modifying a single site-config file. The site map; routing of the site; images used across the various pages and information such as phone numbers and emails are all stored in a single centalised location. Updating any of these variables automatically updates every occurance across the site.
                            </Paragraph>
                            <Paragraph>
                                In addition, the routing is created dynamically based on an array of page data exported from site-config. Adding a new webpage is as simple as adding another entry to that array. All the routing is handled for you and the navigation bars in the header/footer respond dynamically.
                            </Paragraph>
                            <Paragraph>
                                Finally when you want to pass custom data to a page you can add that data in one of the properties of the page data. It is then automatically loaded by the route when the user navigates to it.
                            </Paragraph>
                            <Paragraph>
                                I added these features so that once the site was complete, the folks at Bordon Hills would be able to continue to customise the site without having to take the time to learn how the whole thing works.
                            </Paragraph>
                        </div>
                    ),
                    image: images.BordonHill.processes
                }

            ],
            skills: ['js','react','html', 'css'],
            github: '',
            site: ''
        }
    ]
}

const socials = data.socials;
const projectsData = data.projectsData;
const siteData = data.siteData;
const internalLinks = data.siteData.internalLinks;
const root = data.siteData.root;
const studio = data.siteData.studioName;
const logo = data.siteData.logo;

export { data as default, socials, projectsData, siteData, internalLinks, root, studio, logo }
