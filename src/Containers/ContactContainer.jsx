import React from 'react';
import Contact from '../Components/Contact';

class ContactContainer extends React.Component {


    render() {
        return (
            <div classname="contact_container">
                <h1>Contact Container</h1>
                <Contact />
            </div>
        );
    };
};

export default ContactContainer;
