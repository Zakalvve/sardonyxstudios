import React from "react";
import { reduceClasses } from "../../Library/Utils";

const TextArea = React.forwardRef(({className, themeColor, ...props}, ref) => {
    const colorVariants = {
        'neon-blue': 'focus:border-neon-blue focus:shadow-neon-blue/70',
        'neon-red': 'focus:border-neon-red focus:shadow-neon-red/70',
        'neon-purple': 'focus:border-neon-purple focus:shadow-neon-purple/70',
        'neon-green': 'focus:border-neon-green focus:shadow-neon-green/70'
    };
    return (
        <textarea 
            ref={ref}
            className={reduceClasses(`peer block max-h-36 min-h-[3.125rem] w-full appearance-none rounded-sm border border-space-400 bg-space-500 p-3 shadow-[0_0_6px,_inset_0_0_6px] shadow-transparent transition-colors ${colorVariants[themeColor]} focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`, className)}
            {...props}
        />
    );
});

export default TextArea;