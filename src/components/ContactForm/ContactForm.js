import React, { useState } from "react";
import emailjs from 'emailjs-com'
import './contactForm.css';
import { IconContext } from 'react-icons';
import { FaLocationArrow, FaLinkedin, FaGithub } from 'react-icons/fa';


function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_id';
            const templateId = 'template_id';
            const userId = 'user_id';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

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
                    <label>Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." value={name} onChange={e => setName(e.target.value)} />

                    <label>Email</label>
                    <input id="email" name="email" placeholder="Your email.." value={email} onChange={e => setEmail(e.target.value)} />

                    <label>Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." value={message} onChange={e => setMessage(e.target.value)} ></textarea>

                    <button type="submit" value="Submit" onClick={submit}>Submit</button>

                    <span className={emailSent ? 'visible' : null}>Thanks for reaching out! I will get back to you as soon as possible</span>
                </form>
            </div>
        </div>
    )
};

export default ContactForm;