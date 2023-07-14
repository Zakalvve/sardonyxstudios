import React, { useCallback, useEffect }  from "react";
import { images } from '../Assets/assets'
import Image from "./UI/Image";
import useParallaxLayer from "../Hooks/UseParallaxLayer";
import {
    motion,
    useMotionTemplate,
    useMotionValue
} from 'framer-motion';


const HeroParallax = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [l1x, l1y] = useParallaxLayer({mouseX, mouseY, scale: 1});
    const [l2x, l2y] = useParallaxLayer({mouseX, mouseY, scale: 4});
    const [l3x, l3y] = useParallaxLayer({mouseX, mouseY, scale: 8});


    const layers = [
        {
            ...images.HeroImg.parallax.layers[0],
            backgroundX: l1x,
            backgroundY: l1y
        },
        {
            ...images.HeroImg.parallax.layers[1],
            backgroundX: l2x,
            backgroundY: l2y
        },
        {
            ...images.HeroImg.parallax.layers[2],
            backgroundX: l3x,
            backgroundY: l3y
        }
    ];

    const updateMouseScreenPosition = useCallback(
        ({ clientX, clientY }) => {
          const screenMiddleX = window.innerWidth / 2;
          const screenMiddleY = window.innerHeight / 2;
    
          const screenMouseX = (clientX - screenMiddleX) / screenMiddleX;
          const screenMouseY = (clientY - screenMiddleY) / screenMiddleY;
    
          mouseX.set(screenMouseX);
          mouseY.set(screenMouseY);
        },
        [mouseX, mouseY],
    );

    useEffect(() => {
        window.addEventListener('mousemove', updateMouseScreenPosition);
    
        return () => {
          window.removeEventListener('mousemove', updateMouseScreenPosition);
        };
      }, [updateMouseScreenPosition]);

    return (
        <div className='absolute inset-0 w-full h-full -z-50'>
            <Image 
                aria-hidden 
                className='absolute object-cover object-center pointer-events-none -z-50 w-[105%] h-[105%]'
                {...images.HeroImg.parallax.img}
            />
            {layers.map((layer, i) => (
                <motion.div
                    key={i}
                    aria-hidden
                    className={`${layer.z} w-[100%] h-[100%] pointer-events-none absolute inset-0 overflow-hidden bg-no-repeat bg-cover bg-center`}
                    style={{
                        backgroundImage: `url(${layer.img.src})`,
                        backgroundPosition: useMotionTemplate`calc(50% + ${layer.backgroundX}px) calc(50% + ${layer.backgroundY}px)`
                    }}
                />
            ))}
        </div>
    )
}

export default HeroParallax;