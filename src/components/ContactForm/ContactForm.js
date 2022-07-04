import React from "react";
import './contactForm.css';
import { IconContext } from 'react-icons';
import { FaLocationArrow, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';


function ContactForm() {
    return (
        <div className="contact-form-section">
            <h2>Contact Me</h2>
            <div className="contact-form-container">
                <div className="contact-form-left">
                    <div className="contact-preferences">
                        <i><IconContext.Provider value={{ size: 28}}><FaLocationArrow /></IconContext.Provider></i>
                        <p>Chattanooga, TN</p>
                    </div>
                    <div className="contact-preferences">
                        <i><IconContext.Provider value={{ size: 28}}><HiMail /></IconContext.Provider></i>
                        <p>ericcrain77@gmail.com</p>
                    </div>
                    <div className="contact-preferences">
                        <i><IconContext.Provider value={{ size: 28}}><FaLinkedin /></IconContext.Provider></i>
                        <p>My Linkedin Profile</p>
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