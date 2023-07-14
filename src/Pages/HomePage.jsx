import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../Components/Sections/Hero";
import About from "../Components/Sections/About";
import Projects from "../Components/Sections/Projects";
import Contact from "../Components/Sections/Contact";
import { projectsData } from "../Data/data";
import { siteData } from "../Data/data";

const HomePage = () => {
    const [setNavTransparency] = useOutletContext();
    const [byPassParallax, setByPassParallax] = useState(true);
    useEffect(() => setNavTransparency(true), [setNavTransparency]);

    window.toggleParallax = () => {
        setByPassParallax(!byPassParallax);
    }

    return (
        <main id="main">
            <Hero heroData={siteData.mainHero} byPassParallax={byPassParallax}/>
            <About themeColor='neon-green'/>
            <Projects themeColor='neon-red' projects={projectsData}/>
            <Contact themeColor='neon-blue'/>
        </main>
    );
}

export default HomePage;