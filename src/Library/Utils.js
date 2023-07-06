import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import emailjs from '@emailjs/browser';
import { z } from 'zod';

import { images } from '../Assets/assets';

export const reduceClasses = (...inputs) => {
    return twMerge(clsx(inputs));
}

export const siteLinks = (...inputs) => {
    inputs = inputs.map(input => input.toLowerCase());

    const primaryLinks = [
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
    ];

    return inputs.length > 0 ?  primaryLinks.filter(link => {
        return inputs.includes(link.label.toLocaleLowerCase());
    }): primaryLinks;
}

export const sendEmail = async (data) => {
    data.source = 'www.sardonxy-studios.com';
    return emailjs.send('service_3fwt3bq', 'template_g6j4jcs', data, 'P590nBXSqdIgcY0qZ')
    .then((result) => {
        console.log(result);
    }, (error) => {
        console.log(error);
    });
}

export const contactFromValidation = z.object({
    name: z.string().nonempty({message: "Name cannot be empty"}).max(60, {message: "Name must not be more than 60 characters"}),
    email: z.string().email(),
    message: z.string().nonempty({ message: "Message cannot be empty" }).max(1000, {message: "Message cannot be more that 1000 characters"})
});

export const projectsData = [
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