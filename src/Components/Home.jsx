import React from 'react';
import { Image } from 'semantic-ui-react'
import ReactCSSTransitionGroup from 'react-transition-group';

class Home extends React.Component {

    render() {
        return (
            <div className="box">
                <Image className="box_logo" src="https://i.imgur.com/KHDScWr.jpg" alt="mobad" id="logo"/>
                <h2>home</h2>
            </div>
        );
    }
}

export default Home;
