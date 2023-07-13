import React from "react";
import assets from '../Assets/assets'
import Image from "./UI/Image";
import Picture from "./UI/Picture";

const HeroParallax = () => {
    return (
        <div className='absolute inset-0 w-full h-full -z-50'>
            <Picture sources={assets.images.HeroImg.sources.landscape}>
                <Image 
                    aria-hidden 
                    className='w-[103%] h-[103%] object-cover object-center pointer-events-none'
                    {...assets.images.HeroImg.img}
                />
            </Picture>
        </div>
    )
}

export default HeroParallax;