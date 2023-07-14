import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../Components/Sections/Hero";
import Picture from "../Components/UI/Picture";
import Image from "../Components/UI/Image";
import { images } from "../Assets/assets";
import Container from "../Components/UI/Container";
import { Caption } from "../Components/UI/Text";
import { siteData } from "../Data/data";

const AboutPage = () => {
    const [setNavTransparency] = useOutletContext();
    useEffect(() => setNavTransparency(true), [setNavTransparency]);
    return (
        <main id="main">
            <Hero heroData={siteData.aboutHero}>
                <div className='absolute inset-0 w-full h-full -z-50'>
                    <Picture sources={siteData.aboutHero.image.sources.landscape}>
                        <Image 
                            aria-hidden 
                            className='w-[103%] h-[103%] object-cover object-center pointer-events-none'
                            {...siteData.aboutHero.image.img}
                        />
                    </Picture>
                </div>
            </Hero>
            <section id='about-me' className='bg-space-600 relative z-10 w-full py-20 mb-[-2px] min-h-screen'>
                <Container>
                    <Caption themeColor="neon-blue">Me, Myself and I</Caption>
                </Container>
            </section> 
            <section id='about-site' className='bg-space-600 relative z-10 w-full py-20 mb-[-2px] min-h-screen'>
                <Container>
                    <Caption themeColor="neon-blue">About this Site</Caption>
                </Container>
            </section>  
        </main>
    );
}

export default AboutPage;