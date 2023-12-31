import React from "react";
const Picture = React.forwardRef(({sources, children, ...props}, ref) => {
    return (
        <picture {...props} ref={ref}>
            {sources && sources.map(({...source}, i) => (
                    <source key={i} {...source} />
                ))}
            {children}
        </picture>
    )
});

export default Picture;