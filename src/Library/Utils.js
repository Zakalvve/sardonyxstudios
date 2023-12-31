import { internalLinks, root } from '../Data/data';
import { twMerge } from 'tailwind-merge';
import emailjs from '@emailjs/browser';
import { clsx } from 'clsx';
import { z } from 'zod';
import { cva } from 'class-variance-authority';

export const reduceClasses = (...inputs) => {
    return twMerge(clsx(inputs));
}

export const siteLinks = (...inputs) => {
    inputs = inputs.map(input => input.toLowerCase());

    const primaryLinks = internalLinks;

    return inputs.length > 0 ?  primaryLinks.filter(link => {
        return inputs.includes(link.label.toLocaleLowerCase());
    }): primaryLinks;
}

export const sendEmail = async (data) => {
    data.source = root;
    return emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, data, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    .then((result) => {
        console.log("E-Mail sent successfully");
    }, (error) => {
        console.log(error);
    });
}

export const contactFromValidation = z.object({
    name: z.string().nonempty({message: "Name cannot be empty"}).max(60, {message: "Name must not be more than 60 characters"}),
    email: z.string().email(),
    message: z.string().nonempty({ message: "Message cannot be empty" }).max(1000, {message: "Message cannot be more that 1000 characters"})
});

export const formatDate = (input) => {
    const date = new Date(input);
  
    const formattedDate = date.toLocaleDateString('en-GB', {
      month: 'long',
      year: 'numeric',
    });
  
    return formattedDate;
}

export const shuffleArray = (array, passes = 1) => {
    if (!passes || passes < 0) return array;
    const shuffledArray = [...array];
    for (let p = 0; p < passes; p++){
        for (let i = 0; i < shuffledArray.length; i++){
            let j = Math.floor(Math.random() * (shuffledArray.length));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
    }
    return shuffledArray;
}

export const themeVariants = cva(
    'selection:text-space-600', 
    {
        variants: {
            selection: {
                'neon-blue': 'selection:bg-neon-blue important',
                'neon-red': 'selection:bg-neon-red',
                'neon-green': 'selection:bg-neon-green'
            }
    }
});

export const remToPixels = (rem) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}