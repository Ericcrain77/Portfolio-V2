import React from "react";
import './footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer-conatiner">
            <div>
                <h3>Designed & Built by Eric Crain</h3>
            </div>
            <div>
                <i><a href="https://github.com/Ericcrain77" target="_blank" rel="noopener noreferrer"><FaGithub /></a></i>
                <i><a href="https://www.linkedin.com/in/eric-crain-899a53218/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></i>
            </div>
        </div>
    )
};

export default Footer;