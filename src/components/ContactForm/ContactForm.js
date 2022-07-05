import React, { useState } from "react";
import emailjs from 'emailjs-com';
import './contactForm.css';
import { IconContext } from 'react-icons';
import { FaLocationArrow, FaLinkedin, FaGithub } from 'react-icons/fa';


function ContactForm() {
    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = 'service_rjdiybt';
        const templateId = 'template_koqnxoi';
        const userId = 'Qmnb-DFGwY1qYbj4R';

        emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));
            e.target.reset();
    }

    const onClick = () => setEmailSent(true);

    const ThankYou = () => <span>Thanks for reaching out! I will get back to you as soon as possible</span>

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
                <form className="contact-form-right" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." />

                    <label>Email</label>
                    <input id="email" name="email" placeholder="Your email.." />

                    <label>Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

                    <button type="submit" value="Submit" onClick={onClick}>Submit</button>

                    {emailSent ? <ThankYou /> : null}
                </form>
            </div>
        </div>
    )
};

export default ContactForm;