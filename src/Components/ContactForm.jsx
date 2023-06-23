import React from "react";
import Button from "./UI/Button";
import TextBox from "./UI/TextBox";

const ContactForm = ({themeColor}) => {
    return (
        <form>
            <div>
                <label htmlFor='name'>Name</label>
                <TextBox id='name' themeColor={themeColor}/>
            </div>
        </form>
    );
}

export default ContactForm