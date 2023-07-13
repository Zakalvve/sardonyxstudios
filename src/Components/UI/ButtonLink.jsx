import React, { useEffect, useState } from 'react';
import useElementSize from '../../Hooks/UseElementSize';
import { buttonVariants } from './Button';
import { reduceClasses } from '../../Library/Utils';
import { HashLink as Link } from 'react-router-hash-link';

const ButtonLink = React.forwardRef(({theme, size, grow, className, children, ...props}, ref) => {
    const [isHover, setIsHover] = useState(false);
    const [rectStyle, setRectStyle] = useState(null);
    const [target, rectSize] = useElementSize();
    const hasMouse = matchMedia('(pointer:fine)').matches;

    const toggleHover = () => {
        if (hasMouse){
            setIsHover(!isHover);
        }
    }
    
    useEffect(() => {
        setRectStyle(buttonVariants.borderStyle(isHover, rectSize, rectSize.width*0.4));
    },[isHover, rectSize]);
    

    return (
        <Link
            ref={ref}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            className={reduceClasses(buttonVariants.button({
                theme,
                size,
                grow,
                hasMouse,
            }), className)}
            {...props}
        >
            <svg className='h-full absolute w-full top-0 left-0'>
                <rect ref={target} style={rectStyle} className={reduceClasses(buttonVariants.border({theme}))} x='0' y='0' fill='none' width='100%' height='100%'/>
            </svg>
            {children}
        </Link>
    )
});

export default ButtonLink;