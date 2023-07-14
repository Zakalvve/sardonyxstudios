import { useEffect, useRef, useState } from "react";
import useScrollPosition from '@react-hook/window-scroll';
import { icons } from '../../Assets/assets';
import { motion } from "framer-motion";
import { remToPixels } from "../../Library/Utils";

//displays a fixed button that allows the user to quickly scroll to the top of the document
const ToTopButton = ({pageHeight, children, footerHeight, ...props}) => {

  const button = useRef();
  const scrollPos = useScrollPosition(60);
  const [hideButton, setHideButton] = useState(true);
  const [bottom, setBottom] = useState(0);
  const [reachedBottom, setReachedBottom] = useState();
  const [finalBottom, setFinalBottom]=useState(0);
  const [style, setStyle] = useState({bottom:'15vh'});

  useEffect(() => {
    if(!hideButton){
      setBottom(window.innerHeight - button.current.getBoundingClientRect().bottom);
    }
  },[hideButton]);

  useEffect(() => {
    setHideButton(scrollPos <= 0);
  },[scrollPos]);

  useEffect(() => {
    const screenHeight = window.innerHeight;
    setFinalBottom(((pageHeight - (footerHeight - bottom)) - screenHeight));
  },[footerHeight, pageHeight, scrollPos, bottom]);

  useEffect(() => {
    setReachedBottom(scrollPos >= finalBottom);
  },[scrollPos, finalBottom])


  useEffect(() => {
    if(reachedBottom){
      setStyle({bottom: `${bottom + (scrollPos - finalBottom) + remToPixels(2) }px`});
    } else {
      setStyle({bottom: '15vh'});
    }
  },[scrollPos, reachedBottom, finalBottom, bottom]);

  return (
    <motion.button 
      ref={button} 
      whileHover={{scale: 1.3}} 
      whileTap={{scale:0.8}} 
      hidden={hideButton} 
      onClick={scrollToTop} 
      className={`fixed right-[6vw] z-40 text-white/60`}
      style={style}
      {...props}
    >
      <icons.UpArrow className='w-10 h-10 xl:w-16 xl:h-16'/>
    </motion.button>
  )
}

//when this component mounts it resets the scroll
export const ScrollToTopOnMount = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
}


//scrolls to the top of the page
export const scrollToTop = () => {
    window.scrollTo(0, 0);
}

export default ToTopButton;