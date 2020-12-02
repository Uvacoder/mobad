import React from 'react';
import Music from '../Components/Music';

class MusicContainer extends React.Component {

    render() {
        return (
            <div classname="music_container">
                <h1>Music Container</h1>
                <Music />
            </div>
        );
    };
};

export default MusicContainer;
