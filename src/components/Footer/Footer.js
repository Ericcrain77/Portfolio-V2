import React from "react";
import './footer.css';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer-conatiner">
            <div>
                <h3>Built and designed by Eric Crain</h3>
            </div>
            <div>
                <i><a href="https://github.com/Ericcrain77" target="_blank" rel="noopener noreferrer"><IconContext.Provider value={{className: 'footer-conatiner-icons', size: 32}}><FaGithub /></IconContext.Provider></a></i>
                <i><a href="https://www.linkedin.com/in/eric-crain-899a53218/" target="_blank" rel="noopener noreferrer"><IconContext.Provider value={{className: 'footer-conatiner-icons', size: 32}}><FaLinkedin /></IconContext.Provider></a></i>
            </div>
        </div>
    )
};

export default Footer;