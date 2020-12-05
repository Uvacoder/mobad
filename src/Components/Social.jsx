import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoundcloud, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Social() {
    return (

        <div className="social-container">
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

    );
}

export default Social;
