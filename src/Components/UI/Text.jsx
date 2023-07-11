import { reduceClasses } from '../../Library/Utils';
import React from 'react';
import { formatDate } from '../../Library/Utils';

const Heading = ({children, className, ...props}) => {
    return (
        <h2
            className={reduceClasses('mb-4 text-2xl sm:text-4xl xl:text-5xl font-bold text-white', className)}
            {...props}
        >
            {children}
        </h2>
    )
}

const  Caption = ({children, className, themeColor = 'primary', ...props}) => {
    return (
        <p
            className={reduceClasses(`mb-4 inline-block font-medium uppercase text-${themeColor} text-lg sm:text-xl md:text-2xl`, className)}
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
            className={reduceClasses('leading-relaxed text-space-100', className)}
            {...props}
        >
            {children}
        </p>
    )
}
const Date = ({date, className, ...props}) => {
    return (
        <p className="text-sm text-space-100">{formatDate(date)}</p>
    )
}

export { Heading, Caption, Paragraph, Date }