import React from "react";
import './contactForm.css';
import { IconContext } from 'react-icons';
import { FaLocationArrow, FaLinkedin, FaGithub } from 'react-icons/fa';


function ContactForm() {
    return (
        <div className="contact-form-section">
            <h2>Contact Me</h2>
            <div className="contact-form-container">
                <div className="contact-form-left">
                    <div className="contact-preferences">
                        <i><IconContext.Provider value={{ size: 34}}><FaLocationArrow /></IconContext.Provider></i>
                        <p>Chattanooga, TN</p>
                    </div>
                    <div className="contact-preferences">
                        <i><a href="https://www.linkedin.com/in/eric-crain-899a53218/" target="_blank" rel="noopener noreferrer"><IconContext.Provider value={{className: 'contact-icons', size: 34}}><FaLinkedin /></IconContext.Provider></a></i>
                        <p><a href="https://www.linkedin.com/in/eric-crain-899a53218/" target="_blank" rel="noopener noreferrer">My Linkedin Profile</a></p>
                    </div>
                    <div className="contact-preferences">
                        <i><a href="https://github.com/Ericcrain77" target="_blank" rel="noopener noreferrer"><IconContext.Provider value={{className: 'contact-icons', size: 34}}><FaGithub /></IconContext.Provider></a></i>
                        <p><a href="https://github.com/Ericcrain77" target="_blank" rel="noopener noreferrer">My GitHub Profile</a></p>
                    </div>
                </div>
                <form className="contact-form-right">
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label for="email">Email</label>
                    <input id="email" name="email" placeholder="Your email.." />

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
        </div>
    )
};

export default ContactForm;