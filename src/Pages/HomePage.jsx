import React from "react";
import Hero from "../Components/Sections/Hero";
import About from "../Components/Sections/About";
import Projects from "../Components/Sections/Projects";
import Contact from "../Components/Sections/Contact";
import { ScrollToTopOnMount } from "../Hooks/ScrollToTop";

const HomePage = () => {
    return (
        <main id="main">
            <ScrollToTopOnMount />
            <Hero/>
            <About themeColor='neon-green'/>
            <Projects themeColor='neon-red'/>
            <Contact themeColor='neon-blue'/>
        </main>
    );
}

export default HomePage;