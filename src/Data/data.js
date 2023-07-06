import {icons, images} from '../Assets/assets'

//a quick and temporary way of retrieving, organising and editing data
const data = {
    siteData: {
        root: 'www.sardonyx-studios.com',
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
            name: 'Mihaelas Journal',
            image: images.MihaelasJournalImage,
            description: `Have you ever played DnD? If not you should! It's a lot of fun. 
                          I have been running a game for a very dedicated 
                          group of players. I was only to happy to take on this project 
                          on behalf of one of them. This website was made as an interactive and 
                          immersive way to read through the in character jorunal written 
                          by Michael. It features optional playback of a dynamic soundscape
                          created in real-time`,
            skills: ['js','react', 'html', 'css', 'react-bootstrap', 'markdown'],
            github: 'https://github.com/Zakalvve/mihaelas-journal',
            site: 'https://mihaelas-journal.netlify.app/'
        },
        {
            id: 2,
            name: 'Lets Game',
            image: images.LetsGameImage,
            description: `I created Lets Game as one of my first full stack projects whilst learning ASP.NET.
                          The idea of the app is to provide board gamers with a way to organise and arrage 
                          group meetups. Users can create polls so they can decide what to play ahead of time.
                          That means less time debating what to play, more time playing!`,
            skills: ['c#','ASP.NET Core', 'bootstrap', 'jquery', 'ajax', 'sqlserver', 'entity framework'],
            github: 'https://github.com/Zakalvve/Lets-Game',
            site: ''
        },
        {
            id: 3,
            name: 'Extreme Snake',
            image: images.SnakeGameImage,
            description: `Extreme Snake is a re imagining of the classic video game I first 
                          played on the Nokia 3410. This version features multi layers 
                          levels, powerups and even local multiplayer so you can go head to 
                          head against your friends!`,
            skills: ['c#','Unity'],
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

export { data as default, socials, projectsData, siteData, internalLinks, root }