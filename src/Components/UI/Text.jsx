import { reduceClasses } from '../../Library/Utils';
import { cva } from 'class-variance-authority';
import React from 'react';

const Heading = ({children, className, ...props}) => {
    return (
        <h2
            className={reduceClasses('mb-4 text-3xl font-bold text-white md:text-5xl', className)}
            {...props}
        >
            {children}
        </h2>
    )
}

const  Caption = ({children, className, themeColor, ...props}) => {
    return (
        <p
            className={reduceClasses(`mb-4 inline-block font-medium uppercase text-${themeColor.theme} text-xl md:text-2xl`, className)}
            {...props}
        >
            {/*style={{
                textShadow: `0 0 4em ${themeColor.color}, 0 0 2em ${themeColor.color}, 0 0 0.5em ${themeColor.color}`
            }}*/}
            {children}
        </p>
    )
}

const Paragraph = ({children, className, ...props}) => {
    return (
        <p
            className={reduceClasses('max-w-prose leading-relaxed text-space-100', className)}
            {...props}
        >
            {children}
        </p>
    )
}

export { Heading, Caption, Paragraph }