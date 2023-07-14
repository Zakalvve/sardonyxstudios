import {
    useSpring,
    useTransform,
  } from 'framer-motion';
  
  const springConfig = {
    damping: 17.5,
    mass: 0.5,
    stiffness: 150,
  };

  const useParallaxLayer = ({mouseX, mouseY, scale}) => {
        const backgroundXSync = useTransform(mouseX, [-1,1], [-10*scale, 10*scale]);
        const backgroundYSync = useTransform(mouseY, [-1,1], [-10*scale, 10*scale]);
        const backgroundX = useSpring(backgroundXSync, springConfig);
        const backgroundY = useSpring(backgroundYSync, springConfig);

        return [backgroundX, backgroundY]
  }

  export default useParallaxLayer;
