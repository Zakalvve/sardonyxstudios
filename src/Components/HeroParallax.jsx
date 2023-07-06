import React from "react";
import assets from '../Assets/assets'

const HeroParallax = () => {
    const { Hero } = assets.images;
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-50 overflow-hidden bg-primary bg-[size:103%_103%] bg-no-repeat object-fill"
            style={{
                backgroundImage: `url(${Hero})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'center top'
            }}
        />
    )
}

export default HeroParallax;