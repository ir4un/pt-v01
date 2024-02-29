import { useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import { motion, useInView, useAnimationControls } from "framer-motion";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

import { FaRegPaperPlane } from "react-icons/fa6";
import { MdOutlineEmail, MdWifiCalling3, MdOutlinePhoneInTalk } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";

import { contactSend, animbottomtotop } from './css/framer-css.js';
function Contact() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimationControls();

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "service_rewv9dj";
        const templateID = "template_nche9ns";
        const publicKey = "1C4ZRg0R6AiMbcKLq";

        const templateParams = {
            from_name: name,
            from_email: 'ir4un99@gmail.com',
            to_name: "ir4un",
            message: message
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('Email Has Been Sent To The Dokutah!', response.status, response.text);
                setName('');
                setMessage('');
                toast.success('Thanks! Your Message Has Been Sent. 🫡', {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            },
                (error) => {
                    console.log('Error Happened While Sending Email', error);
                },
            );
    };

    const copyNumber = (text) => {
        toast.success('Copied!', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        navigator.clipboard.writeText(text)
            .then(() => {

                console.log('Text copied to clipboard:', text);
            })
            .catch(error => {
                console.error('Error copying text to clipboard:', error);
            });
    };


    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls])

    return (
        <div className='section contact'>
            <div className="section-title contact">
                <div className="title">
                    Contact.
                </div>
                <MdWifiCalling3 className='title-ico contact' />
            </div>
            <motion.div
                className='stack-motion-container'
                ref={ref}
                variants={animbottomtotop}
                initial={"hidden"}
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.5 }}
                id="ContactSection">
                <Grid className="contact-content" container >
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
                                    whileTap={"tapEffect"}
                                    onClick={() => copyNumber("0172778201")}>
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
                                    whileTap={"tapEffect"}
                                    onClick={() => copyNumber("realir4un@gmail.com")}>
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
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
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