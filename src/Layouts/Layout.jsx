import React from 'react';
import NavBar from '../Components/Layout/NavBar';
import Footer from '../Components/Layout/Footer';
import { reduceClasses } from '../Library/Utils';
import Loading from "../Components/Layout/Loading";
import ToTopButton from '../Components/UI/Scrolling';
import useElementSize from '../Hooks/UseElementSize';

const Layout = ({className, children}) => {
    const [app, appRect] = useElementSize();
    return (
        <div ref={app} className={reduceClasses('text-white', className)}>
            <Loading />
            <NavBar/>
            <ToTopButton pageHeight={appRect.height} />
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;