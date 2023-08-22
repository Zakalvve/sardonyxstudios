import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../Components/Sections/Hero";
import Picture from "../Components/UI/Picture";
import Image from "../Components/UI/Image";
import Container from "../Components/UI/Container";
import { Caption, Paragraph } from "../Components/UI/Text";
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
            <section id='about-me' className='bg-space-600 relative z-10 w-full py-16 mb-[-2px]'>
                <Container>
                    <div className='flex flex-col w-full pt-8 gap-10 lg:gap-20'>
                        <div className='flex flex-col gap-10'>
                            <div className='flex flex-col gap-6'>
                                <Caption themeColor={'neon-green'}>Me, myself and coding</Caption>
                                <Paragraph>I have always been somewhat of a geek, so it was only natural that my interests would lead me to programming. 
                                    I first came across coding when I was a teenager. We didn't get taught anything like that at school - it was all new to me, so I had to teach myself.
                                </Paragraph>
                                <Paragraph>
                                    My first language was C++. I started by exploring with video game creation using the Dark GDK. I was determined to learn more about 
                                    data structures, control patterns, memory management and software architecture. When I left school, I decided to take up programming at college, enrolling on a games programming course. 
                                    After acing college, which focused on visual basic, I wanted to progress and learn games programming at university.
                                </Paragraph>
                                <Paragraph>
                                    Unfortunately, due to a variety of factors, I was unable to pursure my dream. I still continued to write code and to learn more about programming, but I began my career in a very different line of work. 
                                    I ended up leading a large team of people but it was around this time that I began to reflect on my dream to be a programmer. At this point, two distinct paths opened up for me and I wanted to make sure I chose the right one for myself.
                                </Paragraph>
                                <Paragraph>
                                    I decided to step down from my position, re-learn programming and pursue my dream with the aim of seeking full-time employment. In 2022, I took up courses on Codecademy with this goal in mind. 
                                    I have learned about a wide range of skills both theoretical and practical. Since I have no degree, my aim has been to try and create a portfolio that speaks for itself.
                                    I have a long way to go on my coding journey, but no matter where it takes me I am glad that I made the decision to pursure what I love.
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                </Container>
            </section> 
            <section id='about-site' className='bg-space-600 relative z-10 w-full py-20 mb-[-2px]'>
                <Container>
                    <Caption themeColor="neon-green">About this Site</Caption>
                    <Paragraph>This site was created with <a href='https://react.dev/' className='text-neon-green hover:underline'>React</a> and <a href='https://tailwindcss.com/' className='text-neon-green hover:underline'>Tailwind CSS</a>, deployed using <a href='https://www.netlify.com/' className='text-neon-green hover:underline'>Netlify</a> and coded in <a href='https://code.visualstudio.com/' className='text-neon-green hover:underline'>VS Code</a> by myself.</Paragraph>
                </Container>
            </section>  
        </main>
    );
}

export default AboutPage;
