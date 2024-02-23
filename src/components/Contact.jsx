import { useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import { motion, useInView, useAnimationControls } from "framer-motion";

import { FaRegPaperPlane } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";

import { contactSend, animbottomtotop } from './css/framer-css.js';
// import { projectContent } from './content/project-content.js';
// import example from '../assets/images/example.jpg';
// import recitelogo from '../assets/images/reciteclearnoradius.png';

function Contact() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimationControls();

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

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls])

    return (
        <div className='section contact' id="ContactSection">
            <div className="section-title contact">
                Contact.
            </div>
            <motion.div
                className='stack-motion-container'
                ref={ref}
                variants={animbottomtotop}
                initial={"hidden"}
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.5 }}
                id="ExpSection">
                <Grid className="contact-content" container>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="contact-grid">
                            <div className="contact-grid-item">
                                <div className="contact-phone-ico">
                                    <MdOutlinePhoneInTalk />
                                </div>
                                Phone Number
                                <p>+6017-277-8201</p>
                                <motion.div className="copy-btn"
                                    variants={contactSend}
                                    whileHover={"hoverEffect"}
                                    whileTap={"tapEffect"}>
                                    <div className="contact-copy-ico">
                                        <FaClipboardList />
                                    </div>
                                    Copy
                                </motion.div>
                            </div>
                            <div className="contact-grid-item">
                                <div className="contact-email-ico">
                                    <MdOutlineEmail />
                                </div>
                                Email
                                <p>realir4un@gmail.com</p>
                                <motion.div className="copy-btn"
                                    variants={contactSend}
                                    whileHover={"hoverEffect"}
                                    whileTap={"tapEffect"}>
                                    <div className="contact-copy-ico">
                                        <FaClipboardList />
                                    </div>
                                    Copy
                                </motion.div>
                            </div>
                            <div className="contact-grid-item big-column">
                                <p>Send me a message!</p>
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
                                    <motion.button
                                        type="submit"
                                        variants={contactSend}
                                        whileHover={"hoverEffect"}
                                        whileTap={"tapEffect"}>
                                        <div className="contact-send-ico">
                                            <FaRegPaperPlane />
                                        </div>
                                        Send
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </motion.div>
        </div>
    )
}

export default Contact