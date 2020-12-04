import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoundcloud, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


function Social() {
    return (

        <div className="social-container">
            <a href="https://soundcloud.com/djmobad"
                className="soundcloud">
                <FontAwesomeIcon icon={faSoundcloud} size="2x" />
            </a>
            <br></br><br></br>
            <a href="https://www.instagram.com/djmobad"
                className="instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>

    );
}


export default Social;
