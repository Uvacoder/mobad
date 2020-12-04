import React from 'react';
import Player from 'react-soundcloud-player'
// https://soundcloud.com/djmobad/interconnected

const Music = () => {

    return (
        <div className="box">
            <h2> music </h2>
            <Player
                classname="soundcloud_player"
                client_id="c5a171200f3a0a73a523bba14a1e0a29"
                audio_id="193179003"
                title="mobâd - interconnected"
            />

        </div>
    )
}

export default Music;
