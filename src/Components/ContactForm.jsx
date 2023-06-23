import React from "react";
import Button from "./UI/Button";
import TextBox from "./UI/TextBox";
import Label from "./UI/Label";
import TextArea from "./UI/TextArea";

const ContactForm = ({themeColor}) => {

    const handleSubmit = () => {
        console.log('Submit detected');
    };

    return (
        <form onSubmit={handleSubmit()} className='flex flex-col gap-y-6'>
            <div>
                <Label htmlFor='name'>Name</Label>
                <TextBox id='name' themeColor={themeColor}/>
            </div>
            <div>
                <Label htmlFor='email'>E-Mail</Label>
                <TextBox id='email' themeColor={themeColor}/>
            </div>
            <div>
                <Label htmlFor='message'>Message</Label>
                <TextArea id='message' themeColor={themeColor}/>
            </div>
            <Button theme='blue' size='medium'>Send</Button>
        </form>
    );
}

export default ContactForm