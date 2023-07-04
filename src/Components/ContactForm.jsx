import React from "react";
import Button from "./UI/Button";
import TextBox from "./UI/TextBox";
import Label from "./UI/Label";
import TextArea from "./UI/TextArea";
import { Caption, Heading, Paragraph } from "./UI/Text";
import { useForm } from 'react-hook-form';
import { sendEmail, contactFromValidation } from "../Library/Utils";
import { zodResolver } from '@hookform/resolvers/zod';

const ContactForm = ({themeColor}) => {

    const {register, handleSubmit, formState: { errors, isSubmitSuccessful, isSubmitting } } = useForm({resolver: zodResolver(contactFromValidation), mode:'onTouched'});
    console.log(errors, isSubmitSuccessful, isSubmitting);
    const onSubmit = async (data) => {
        console.log(data);
        await sendEmail(data);
    };

    return isSubmitSuccessful ? (
            <div>
                <Caption themeColor={themeColor}>Read you loud and clear!</Caption>
                <Heading>I will contact you soon</Heading>
            </div>
        ) : (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-6'>
            <div>
                <Label htmlFor='name'>Name</Label>
                <TextBox 
                    id='name'
                    className={errors.name ? 'border-neon-red' : ''}
                    {...register('name', {required:true})}
                    themeColor={themeColor}
                />
                {errors.name && (<Paragraph>{errors.name.message}</Paragraph>)}
            </div>
            <div>
                <Label htmlFor='email'>E-Mail</Label>
                <TextBox 
                    id='email'
                    className={errors.email ? 'border-neon-red' : ''}
                    {...register('email', {required:true})}
                    themeColor={themeColor}
                />
                {errors.email && (<Paragraph>{errors.email.message}</Paragraph>)}
            </div>
            <div>
                <Label htmlFor='message'>Message</Label>
                <TextArea 
                    id='message'
                    className={errors.message ? 'border-neon-red' : ''}
                    {...register('message', {required:true})}
                    themeColor={themeColor}
                />
                {errors.message && (<Paragraph>{errors.message.message}</Paragraph>)}
            </div>
            <Button theme='blue' size='medium'>Send</Button>
        </form>
    );
}

export default ContactForm