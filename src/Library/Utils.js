import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import emailjs from '@emailjs/browser';
import { z } from 'zod';

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