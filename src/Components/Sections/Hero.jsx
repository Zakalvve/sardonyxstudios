import ButtonLink from '../UI/ButtonLink';
import Container from '../UI/Container';
import HeroParallax from '../HeroParallax';
import React from 'react';
import Picture from '../UI/Picture';
import Image from '../UI/Image';

const Hero = ({children, heroData, byPassParallax = true}) => {
    const renderDefault = !children && matchMedia('(pointer:fine)').matches && !byPassParallax;
    return (
        <section className='sticky inset-0 flex h-screen w-full flex-col justify-center pt-[9rem] pb-28'>
            {renderDefault && (<HeroParallax/>)}
            {byPassParallax && (
                <div className='absolute inset-0 w-full h-full -z-50'>
                    <Picture sources={heroData.image.sources.landscape}>
                        <Image 
                            aria-hidden 
                            className='w-[103%] h-[103%] object-cover object-center pointer-events-none'
                            {...heroData.image.img}
                        />
                    </Picture>
                </div>
            )}
            {children}
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
                        {heroData.header}
                    </h1>
                    {heroData.buttonText && (
                        <ButtonLink to={heroData.buttonLink} theme={heroData.buttonStyle} size={heroData.buttonSize} grow={true} className='mt-12 bg-space-500/90 backdrop-blur-md supports-[backdrop-filter]:bg-space-500/70 backdrop-blur-md supports-[backdrop-filter]:bg-space-500/70 min-w-[30%]'>
                            {heroData.buttonText}
                        </ButtonLink>
                    )}
                </div>
            </Container>
        </section>
    );
}

export default Hero;
