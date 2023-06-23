import ButtonLink from '../UI/ButtonLink';
import Container from '../UI/Container';
import HeroParallax from '../HeroParallax';
import React from 'react';

const Hero = () => {
    return (
        <section className='sticky inset-0 flex h-screen w-full flex-col justify-center py-28'>
            <HeroParallax/>
            <Container>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-center font-sans text-5xl font-bold leading-tight md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight'>
                        New Frontiers<br />in Programming<br />and Design
                    </h1>
                    <ButtonLink href='/#projects' theme='blue' size='large' grow={true} className='mt-12 bg-space-500/90 backdrop-blur-md supports-[backdrop-filter]:bg-space-500/70 backdrop-blur-md supports-[backdrop-filter]:bg-space-500/70'>
                        See what I've done
                    </ButtonLink>
                </div>
            </Container>
        </section>
    );
}

export default Hero;
