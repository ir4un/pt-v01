import { useState } from 'react';
import Grid from '@mui/material/Grid';

import { FaRegPaperPlane } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";

// import { motion } from "framer-motion";

// import { projectButton } from './css/framer-css.js';
// import { projectContent } from './content/project-content.js';
// import example from '../assets/images/example.jpg';
// import recitelogo from '../assets/images/reciteclearnoradius.png';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to backend
        console.log(formData);
        // Reset form fields after submission
        setFormData({
            name: '',
            message: ''
        });
    };

    return (
        <div className='section contact'>
            <div className="section-title contact">
                Contact.
            </div>
            <Grid className="contact-content" container>
                <Grid item xs={12} sm={12} md={12}>
                    <div className="contact-grid">
                        <div className="contact-grid-item">
                            <div className="contact-phone-ico">
                                <MdOutlinePhoneInTalk />
                            </div>
                            Phone Number
                            <p>+6017-277-8201</p>
                        </div>
                        <div className="contact-grid-item">
                            <div className="contact-email-ico">
                                <MdOutlineEmail />
                            </div>
                            Email
                            <p>realir4un@gmail.com</p>
                        </div>
                        <div className="contact-grid-item big-column">
                            Send me a message!
                            <form className='contact-form' onSubmit={handleSubmit}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <button type="submit">
                                    <div className="contact-send-ico">
                                        <FaRegPaperPlane />
                                    </div>
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact