import React from "react";
import Layout from "../Layouts/Layout";
import Hero from "../Components/Sections/Hero";
import About from "../Components/Sections/About";
import Projects from "../Components/Sections/Projects";
import Contact from "../Components/Sections/Contact";

const Home = () => {
    return (
        <Layout>
            <main id="main">
                <Hero/>
                <About themeColor='neon-green'/>
                <Projects themeColor='neon-red'/>
                <Contact themeColor='neon-blue'/>
            </main>
        </Layout>
    );
}

export default Home;