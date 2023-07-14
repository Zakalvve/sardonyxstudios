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
            buttonText: "See what I've done",
            buttonLink: '/#projects',
            buttonStyle: 'blue',
            buttonSize: 'large'
        },
        aboutHero: {
            header: (<>Always Looking<br/>Forward</>),
            buttonText: "",
            buttonLink: '/',
            buttonStyle: 'primary',
            buttonSize: 'medium'
        }
    },
    socials: [
        {
            text: 'View GitHub profile',
            href: 'https://github.com/Zakalvve',
            icon: icons.GitHub
        }
    ],
    projectsData: [
        {
            id: 1,
            date: '2023-02-03',
            name: 'Mihaelas Journal',
            image: images.MihaelasJournal,
            CardDescription: ({themeColor, ...props}) => (
                <div {...props}>
                    <Paragraph>
                        Have you ever played DnD? If not you should! It's a lot of fun and this project arose from the long running campaign I GM.
                    </Paragraph>
                    <Paragraph>
                        I have been running this game for a very dedicated 
                        group of players and so I was only to happy to take on this project 
                        on behalf of Michael.
                    </Paragraph>
                    <Paragraph>
                        This website was made as an interactive and 
                        immersive way to read through the in-character jorunal written 
                        by Michael from the POV of his character Mihaela. It features optional playback of a dynamic soundscape
                        created which is created in real-time by layering various sound clips and staggering their playback.
                    </Paragraph>
                </div>
            ),
            bodySections: [
                {
                    title: `Immersive Soundscape`,
                    Body: ({themeColor, ...props}) => (
                        <div {...props}>
                            <Paragraph>
                                This project features an immersive soundscape. Sound clips are layered over each other and have their playback staggered by 
                                an algorithm I wrote myself. This means you can feel as though you are huddled around the campfire in the woods at night. Just watch out for wolves!
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
                                In order to allow Michael to easily continue to add journal entries the site parses the markdown entries he adds and creates a tree structure for navigation. The markdown is then translated into HTML for rendering. 
                                This way he need only add his latest entries on GitHub, the site handles the rest and the new pages are created immediately.
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
            name: 'Lets Game',
            date: '2022-12-29',
            image: images.LetsGame,
            CardDescription: ({themeColor, ...props}) => (
                <div {...props}>
                    <Paragraph>
                        Lets Game! is one of my first full-stack projects which I undertook whilst learning ASP.NET.
                        The idea of the app is to provide board gamers with a way to organise and arrage 
                        group meetups. 
                    </Paragraph>
                    <Paragraph>
                        Users can create polls so they can decide what to play ahead of time.
                        That means less time debating what to play, more time playing!
                    </Paragraph>
                </div>
            ),
            bodySections: [
                {
                    title: `Users Hub`,
                    Body: ({themeColor, ...props}) => (
                        <div {...props}>
                            <Paragraph>
                                Lets Game lets users create an account. Their details are sored in an SQL Server database. Each user gets access to their own "Hub", a dashboard from which to organise meetups with their friends.
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
                                You can created or join events. Events are proposed meetups between a group of friends. Each event allows users to add games to a poll. 
                                Users can then vote on the poll. This way, on the day of the meetup you will already have an idea of what you want to play. We all lead 
                                busy lives and just finding the time to meet up at all can be challenging. When we do we want to be playing games not debating what to play!
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
                                Lets Game is ultimately a social platform with the express goal of playing boardgames. No social platform would be complete without the ability to add friends and invite them to your events!
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
                    Extreme Snake is a re imagining of the classic video game I first 
                    played on the Nokia 3410. This version features multi-layered 
                    levels, powerups, and even local multiplayer so you can go head to 
                    head against your friends!
                </Paragraph>
                
                <Paragraph>
                    I wanted to make a video game as part of my portfolio and chose this
                    since it has a limited scope. Games can tend to get very work intensive
                    very quickly if you don't limit the scrope in the soncept stage.
                </Paragraph>
            </div>),
            bodySections: [
                {
                    title: `A Modern Twist`,
                    Body: ({themeColor, ...props}) => (
                        <div {...props}>
                            <Paragraph>
                                Its the snake you remember but with a few little changes. You compete for food, if you don't keep yourself fed you can shrink as well as grow! 
                                You can collect powerups in head-to-head mode in order to interfere with your opponents progress. Modern multi-layered levels add a new dimension 
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
                                Extreme Snake supports local multiplayer so you can battle it out against your friends. You can each choose your snake color before delving into a 
                                mad dash to compete for the limited resources within the level.
                           </Paragraph>
                        </div>
                    ),
                    image: images.ExtremeSnake.multiplayer
                }
            ],
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
                        I chose to model the systems I saw at the plastic factory I worked at - the base concepts also remind me of factory games. The program exposes an API that
                        allows the creation of a simulation. 
                    </Paragraph>
                    <Paragraph>
                        You can specify information about jobs to be placed onto abstract machines, the simulation will then run
                        the machine and only stall when service is required. The program extracts data from the simulation which can then be imported into Excel in order to help aid 
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
                                Whilst a simulation cannot predict the future, it can offer a very fast overlook of how decisions might impact productivity.
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
                                Since this project was undertaken with the express goal of learning more about OOP patterns and SOLID principles 
                                I carefully selected and implemented appropriate patterns to create a perfomant and fast asynchronous API. 
                                Many simulations can be run concurrently and their data extracted to quickly see the differences between decisions.
                            </Paragraph>
                        </div>
                    ),
                    image: images.FactorySimulator.patterns
                }
            ],
            skills: ['c#', '.net'],
            github: 'https://github.com/Zakalvve/FactorySimulator',
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