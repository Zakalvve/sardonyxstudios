import React from "react";
import layer from '../Assets/desktop-wallpaper-vaporwave-space-clone-hero-example.jpg'

const HeroParallax = () => {
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-50 overflow-hidden bg-primary bg-[size:103%_103%] bg-no-repeat object-fill"
            style={{
                backgroundImage: `url(${layer})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'center top'
            }}
        />
    )
}

export default HeroParallax;