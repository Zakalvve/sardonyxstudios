import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../Components/Sections/Hero";
import About from "../Components/Sections/About";
import Projects from "../Components/Sections/Projects";
import Contact from "../Components/Sections/Contact";
import { projectsData } from "../Data/data";
import { siteData } from "../Data/data";

const HomePage = () => {
    const [setNavTransparency] = useOutletContext();
    useEffect(() => setNavTransparency(true), [setNavTransparency]);
    return (
        <main id="main">
            <Hero heroData={siteData.mainHero}/>
            <About themeColor='neon-green'/>
            <Projects themeColor='neon-red' projects={projectsData}/>
            <Contact themeColor='neon-blue'/>
        </main>
    );
}

export default HomePage;