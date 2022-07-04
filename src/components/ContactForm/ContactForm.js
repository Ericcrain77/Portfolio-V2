import React from "react";
import './contactForm.css';
import { FaLocationArrow } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

function ContactForm() {
    return (
        <div className="contact-form-section">
            <h2>Contact Me</h2>
            <div className="contact-form-container">
                <div className="contact-form-left">
                    <a><i><FaLocationArrow /></i> Chattanooga, TN</a>
                    <i><FiMail /> ericcrain77@gmail.com</i>
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