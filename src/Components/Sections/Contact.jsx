import React from "react";
import Container from "../UI/Container";
import ContactForm from "../ContactForm";
import { Caption, Heading, Paragraph } from "../UI/Text";

const Contact = ({themeColor}) => {
    return (
        <section id='contact' className='bg-space-600 relative z-10 flex w-full items-center py-20'>
            <Container>
                <div className='flex h-full w-full flex-col lg:flex-row'>
                    <div className='basis-full lg:self-center'>
                        <Caption themeColor={themeColor}>Contact Me</Caption>
                        <Heading>Want to reach out?</Heading>
                        <Paragraph>I don't bite so if you have any questions or want to get in touch send me a message. I love discussing new possibilities!</Paragraph>
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