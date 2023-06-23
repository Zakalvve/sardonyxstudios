import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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