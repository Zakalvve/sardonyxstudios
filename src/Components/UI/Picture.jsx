import React from "react";
const Picture = React.forwardRef(({sources, children}, ref) => {
    return (
        <picture>
            {sources && sources.map(({...source}, i) => (
                    <source key={i} {...source} />
                ))}
            {children}
        </picture>
    )
});

export default Picture;