import React from "react";
import { reduceClasses } from "../../Library/Utils";

const Label = React.forwardRef(({className, children, ...props}, ref) => {
    return (
        <label
            ref={ref}
            className={reduceClasses('mb-2 block text-sm uppercase leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}
            {...props}
        >
            {children}
        </label>
    );
});

export default Label;