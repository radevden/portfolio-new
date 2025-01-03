import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return (
        <>
            <a className="a-footer" href="https://www.instagram.com/den.radevova/" target="_blank" title="instagram link">
                <FontAwesomeIcon className="icon" icon={faInstagram} color="#ed93be" size="xl"/>
            </a>
            <a className="a-footer" href="https://www.facebook.com/denradevova/" target="_blank" title="facebook link">
                <FontAwesomeIcon className="icon" icon={faFacebook} color="#ed93be" size="xl"/>
            </a>
            <a className="a-footer" href="https://www.linkedin.com/in/denisa-radevov%C3%A1-166a44232/?locale=en_US" target="_blank"
        title="linkedin link">
                <FontAwesomeIcon className="icon" icon={faLinkedin} color="#ed93be" size="xl"/>
            </a>
            <a className="a-footer" href="https://github.com/radevden" target="_blank" title="github link">
                <FontAwesomeIcon className="icon" icon={faGithub} color="#ed93be" size="xl"/>
            </a>
        </>
    )
}