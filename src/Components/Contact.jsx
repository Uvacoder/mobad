import React from 'react';
import Social from "./Social"
import { Image } from 'semantic-ui-react'


const Contact = () => {

    return (
        <div className="box">
            <Image className="box_logo" src="https://i.imgur.com/KHDScWr.jpg" alt="mobad" id="logo" />
            <Social />
        </div>
    )
}

export default Contact;
