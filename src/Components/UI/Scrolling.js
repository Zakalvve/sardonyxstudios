import { useEffect } from "react";
import useScrollPosition from '@react-hook/window-scroll';
import { icons } from '../../Assets/assets';

//displays a fixed button that allows the user to quickly scroll to the top of the document
const ToTopButton = ({pageHeight, children, ...props}) => {
  const scrollPos = useScrollPosition(60);
  const hidenButton = scrollPos <= 0; //|| scrollPos >= (pageHeight - window.innerHeight);

  return (
    <button hidden={hidenButton} onClick={scrollToTop} className='fixed bottom-[15vh] right-[6vw] z-40 text-white/60' {...props}><icons.UpArrow className='w-10 h-10 xl:w-16 xl:h-16'/></button>
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