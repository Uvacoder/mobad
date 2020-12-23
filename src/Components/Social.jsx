import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoundcloud, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Grid from "animated-grid-lines";

function Social() {
    return (

        <div className="social_container">
        <Grid/>
            <div className="inner_social">
                <a href="https://www.instagram.com/djmobad"
                    target="blank"
                    className="social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://soundcloud.com/djmobad"
                    target="blank"
                    className="social">
                    <FontAwesomeIcon icon={faSoundcloud} size="2x" />
                </a>
                <a href="mailto:djmobad@gmail.com"
                    className="social">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
            </div>
        </div>
    );
}

export default Social;
