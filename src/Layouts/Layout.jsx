import React from 'react';
import NavBar from '../Components/Layout/NavBar';
import Footer from '../Components/Layout/Footer';
import { reduceClasses } from '../Library/Utils';

const Layout = ({className, children}) => {
    return (
        <div className={reduceClasses('text-white', className)}>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;

//nav
//renderPage
//contact
//footer