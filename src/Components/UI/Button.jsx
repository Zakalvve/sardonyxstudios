import React, { useEffect, useState } from 'react';
import { cva } from 'class-variance-authority';
import { reduceClasses } from '../../Library/Utils';
import useElementSize from '../../Hooks/UseElementSize';
import '../../Styles/Button.css'



const buttonVariants = {
    button: cva(
        'btn relative flex justify-center items-center select-none overflow-hidden align-middle mx-0 mt-0 cursor-pointer border-2 border-solid border-transparent font-normal uppercase transition-all duration-500',
        {
            variants: {
                theme: {
                    primary: 'text-white bg-space-500 hover:bg-space-500 hover:border-2 hover:border-solid hover:border-space-border',
                    green: 'text-neon-green bg-space-500 hover:bg-space-500 hover:border-2 hover:border-solid hover:border-space-border',
                    red: 'text-neon-red bg-space-500 hover:bg-space-500 hover:border-2 hover:border-solid hover:border-space-border',
                    purple: 'text-neon-purple bg-space-500 hover:bg-space-500 hover:border-2 hover:border-solid hover:border-space-border',
                    blue: 'text-neon-blue bg-space-500 hover:bg-space-500 hover:border-2 hover:border-solid hover:border-space-border'
                },
                size: {
                    small: 'px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base',
                    medium: 'px-6 py-3 md:text-lg',
                    large: 'px-6 py-3 md:px-8 md:py-4 md:text-lg'
                }
            },
            compoundVariants: [
                {
                    grow: true,
                    className: 'hover:font-black hover:tracking-wide'
                }
            ],
            defaultVariants: {
                theme: 'primary',
                size: 'medium',
            }
        }
    ),
    border: cva(
        '',
        {
            variants: {
                theme: {
                    primary: 'stroke-white',
                    green: 'stroke-neon-green',
                    red: 'stroke-neon-red',
                    purple: 'stroke-neon-purple',
                    blue: 'stroke-neon-blue'
                }
            },
            defaultVariants: {
                theme: 'primary'
            }
        }
    ),
    borderStyle: (isHover, size, underlineLength) => {
        const space = (size.height*2 + size.width*2)-(underlineLength);
        const offset = size.height + (size.width/2) + (underlineLength/2);
        const dashArray = `${underlineLength} ${Math.round(space)}`;
        return isHover ? {
            //perimeter - length of underline offset = 
            strokeDasharray: dashArray,
            strokeDashoffset: Math.round(offset)
        } : {
            strokeDasharray: '1000, 0'
        }
    }
}

const Button = React.forwardRef(({theme, size, grow, className, children, ...props}, ref) => {
    const [isHover, setIsHover] = useState(false);
    const [rectStyle, setRectStyle] = useState(null);
    const [target, rectSize] = useElementSize();

    const toggleHover = () => {
        setIsHover(!isHover);
    }
    
    useEffect(() => {
        setRectStyle(buttonVariants.borderStyle(isHover, rectSize, rectSize.width*0.4));
    },[isHover, rectSize]);
    

    return (
        <button
            ref={ref}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            className={reduceClasses(buttonVariants.button({
                theme,
                size,
                grow,
                className
            }))}
            {...props}
        >
            <svg className='h-full absolute w-full top-0 left-0'>
                <rect ref={target} style={rectStyle} className={reduceClasses(buttonVariants.border({theme}))} x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            {children}
        </button>
    )
});

export default Button;
export { buttonVariants }