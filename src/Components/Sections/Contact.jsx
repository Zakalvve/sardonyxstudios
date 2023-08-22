import React from "react";
import Container from "../UI/Container";
import ContactForm from "../ContactForm";
import { Caption, Heading, Paragraph } from "../UI/Text";
import { reduceClasses } from "../../Library/Utils";
import { themeVariants } from '../../Library/Utils';

const Contact = ({themeColor}) => {
    const selection = themeColor;
    return (
        <section id='contact' className={reduceClasses(themeVariants({selection}), 'bg-space-600 relative z-10 flex w-full items-center py-20')}>
            <Container>
                <div className='flex h-full w-full flex-col lg:flex-row'>
                    <div className='basis-full lg:self-center'>
                        <Caption themeColor={themeColor}>Contact Me</Caption>
                        <Heading>Want to reach out?</Heading>
                        <Paragraph>I love discussing new possibilities and collaborating with others. If you have any questions or want to get in touch please send me a message.</Paragraph>
                    </div>
                    <div className='mt-10 basis-full lg:ml-10 lg:mt-0 xl:ml-20'>
                        <ContactForm themeColor={themeColor}/>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Contact;
