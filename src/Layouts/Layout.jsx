import React from 'react';
import NavBar from '../Components/Layout/NavBar';
import Footer from '../Components/Layout/Footer';
import { reduceClasses } from '../Library/Utils';
import Loading from "../Components/Layout/Loading";

const Layout = ({className, children}) => {
    return (
        <div className={reduceClasses('text-white', className)}>
            <Loading />
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;