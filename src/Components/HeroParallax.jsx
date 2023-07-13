import React from "react";
import { images } from '../Assets/assets'
import Image from "./UI/Image";
import Picture from "./UI/Picture";

const HeroParallax = () => {
    return (
        <div className='absolute inset-0 w-full h-full -z-50'>
            <Picture sources={images.HeroImg.sources.landscape}>
                <Image 
                    aria-hidden 
                    className='w-[103%] h-[103%] object-cover object-center pointer-events-none'
                    {...images.HeroImg.img}
                />
            </Picture>
        </div>
    )
}

export default HeroParallax;