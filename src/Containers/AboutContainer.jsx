import React from 'react';
import About from '../Components/About';

class AboutContainer extends React.Component {


    render() {
        return (
            <div classname="about_container">
                <h2>About me:</h2>
                <About />
            </div>
        );
    };
};

export default AboutContainer;
