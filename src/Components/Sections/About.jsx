import Container from '../UI/Container';
import { Caption, Heading, Paragraph } from '../UI/Text';
import Image from '../UI/Image';
import React from 'react';
import { images } from '../../Assets/assets'

const About = ({themeColor}) => {
    const itsMe = images.MeOnGuitarImage;
    return (
        <section id='about' className='bg-space-600 relative z-10 flex min-h-screen w-full flex-col items-center lg:flex-row mb-[-2px]'>
            <Image 
                className='inset-0 max-h-screen w-full object-cover object-center lg:absolute lg:h-full lg:w-1/2' 
                src={itsMe}
                loading='lazy'
            />
            <Container>
                <div className='w-full py-28 lg:flex'>
                    <div className='lg:ml-auto lg:basis-1/2 lg:pl-10 xl:pl-20'>
                        <Caption themeColor={themeColor}>About</Caption>
                        <Heading>
                            Who am I anyway?
                        </Heading>
                        <Paragraph>
                            Some details about myself, <span className={`text-${themeColor}`}>passions</span> and coding ability goes here
                        </Paragraph>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default About;