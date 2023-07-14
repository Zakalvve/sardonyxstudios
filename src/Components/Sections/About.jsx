import Container from '../UI/Container';
import { Caption, Heading, Paragraph } from '../UI/Text';
import Image from '../UI/Image';
import React from 'react';
import { images } from '../../Assets/assets'
import ButtonLink from '../UI/ButtonLink';
import { reduceClasses } from '../../Library/Utils';
import { themeVariants } from '../../Library/Utils';

const About = ({themeColor}) => {
    const selection = themeColor;
    return (
        <section id='about' className={reduceClasses(themeVariants({selection}), 'bg-space-600 relative z-10 flex lg:min-h-screen w-full flex-col items-center lg:flex-row-reverse mb-[-2px]')}>
            <Container>
                <div className='w-full py-20 lg:flex'>
                    <div className='flex flex-col justify-center gap-8 lg:ml-auto lg:basis-1/2 lg:pl-10 xl:pl-20'>
                        <Caption themeColor={themeColor}>About</Caption>
                            <Heading>
                                Who am I anyway?
                            </Heading>
                            <Paragraph>
                                Hi! I am David, a programmer with experience in full-stack development. I am just starting out on my journey after rediscovering the joy of coding.
                                {/* Some details about myself, <span className={`text-${themeColor}`}>passions</span> and coding ability goes here */}
                            </Paragraph>
                            <Paragraph>
                                I have a passion for code which I picked up in my early years tinkering around with video game code and have since decided to turn that passion into a career. 
                                My focus is on creating modern and beautiful full-stack web applications and indie video games.
                            </Paragraph>
                            <Paragraph>
                                When I'm not working I enjoy music &#40;thats me playing the guitar!&#41;, creating an immersive tabletop RPG experience for my friends, playing games and going to the gym.
                            </Paragraph>
                            <ButtonLink to='/about' className='max-w-[50%] mt-6 mx-auto' theme='green' size='medium'>Learn More</ButtonLink>
                    </div>
                </div>
            </Container>
            <Image 
                className='inset-0 max-h-screen w-full object-cover object-top lg:absolute lg:h-full lg:w-1/2'
                loading='lazy'
                {...images.MeImg}
            />
        </section>
    );
}

export default About;