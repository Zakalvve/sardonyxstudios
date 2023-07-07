import ButtonLink from '../UI/ButtonLink';
import Container from '../UI/Container';
import HeroParallax from '../HeroParallax';
import React from 'react';

const Hero = () => {
    return (
        <section className='sticky inset-0 flex h-screen w-full flex-col justify-center pt-[9rem] pb-28'>
            <HeroParallax/>
            <Container>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-center font-sans 

                        text-3xl 
                        sm:text-4xl
                        md:text-5xl
                        lg:text-6xl
                        xl:text-7xl
                        2xl:text-8xl
                
                        font-bold leading-tight  md:leading-tight lg:leading-tight'>
                        New Frontiers<br />in Programming<br />and Design
                    </h1>
                    <ButtonLink to='/#projects' theme='blue' size='large' grow={true} className='mt-12 bg-space-500/90 backdrop-blur-md supports-[backdrop-filter]:bg-space-500/70 backdrop-blur-md supports-[backdrop-filter]:bg-space-500/70'>
                        See what I've done
                    </ButtonLink>
                </div>
            </Container>
        </section>
    );
}

export default Hero;
