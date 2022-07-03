import React from "react";
import './contactForm.css';

function ContactForm() {
    return (
        <div className="contact-form-section">
            <h2>Contact Me</h2>
            <form className="contact-form">
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
    )
};

export default ContactForm;