import React from 'react';
import Player from 'react-soundcloud-player'
import { Image } from 'semantic-ui-react'

// https://soundcloud.com/djmobad/interconnected

const Music = () => {

    return (
        <div className="box">
            <Image className="box_logo" src="https://i.imgur.com/KHDScWr.jpg" alt="mobad" id="logo" />
            <h2> music </h2>
            <Player />

        </div>
    )
}

export default Music;
