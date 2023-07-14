import React, {useRef, useState, useEffect} from 'react';
import NavBar from '../Components/Layout/NavBar';
import Footer from '../Components/Layout/Footer';
import { reduceClasses } from '../Library/Utils';
import Loading from "../Components/Layout/Loading";
import ToTopButton from '../Components/UI/Scrolling';
import useElementSize from '../Hooks/UseElementSize';

const Layout = ({className, children, isNavTransparent}) => {
    const [app, appRect] = useElementSize();
    const footer = useRef();
    const [footerHeight, setFooterHeight] = useState(0);

    useEffect(() => {
        if (footer.current) setFooterHeight(footer.current.getBoundingClientRect().height)
    },[footer]);

    return (
        <div ref={app} className={reduceClasses('text-white', className)}>
            <Loading />
            <NavBar isBackgroundTransparent={isNavTransparent}/>
            {children}
            <ToTopButton pageHeight={appRect.height} footerHeight={footerHeight}/>
            <Footer ref={footer}/>
        </div>
    );
}

export default Layout;