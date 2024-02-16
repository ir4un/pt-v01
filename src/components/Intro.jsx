import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";

import videoFile from '../assets/videos/animated-bliss.mp4';
import pfpImg from '../assets/images/irfan-selfcleararm.png';
import sanity from '../assets/images/sanity.webp';


import './css/component-css.css';

function Intro() {
    return (
        <div className='IntroMain'>
            <div className="video-container">
                <video
                    autoPlay
                    muted
                    loop
                    className="video-bg"
                >
                    <source src={videoFile} type="video/mp4" />
                    {/* Add additional source elements for other video formats if needed */}
                </video>
            </div>
            <div className='pfpContainer'>
                <img src={pfpImg} alt="Your Image" className='pfpImg' />
            </div>
            <motion.div
                className="level"
                initial={{ opacity: 0, x: -200 }} // Initial position is off the screen to the left
                animate={{ opacity: 1, x: 0 }} // Animate to original position (0) on the x-axis
                transition={{ duration: 1 }} // Transition duration of 1 second
            >
                <div className="age">
                    23
                    <br />
                    <p>LV</p>
                </div>
                <div className="name">Irfan Zafri</div>
            </motion.div>
            <motion.div
                className="intro-desc"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                <p>Greetings! I&apos;m Irfan Zafri. I&apos;m  interested with frontend development  and machine learning technologies. Do check out my other details down below.
                </p>
            </motion.div>
            <Box
                sx={{ pt: 8, pb: 6, }}>
                <Container>
                    <Grid container
                        columnSpacing={{ xs: 2 }}
                        alignItems="center"
                        justifyContent="center">
                        <Grid item xs={12} sm={6}>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Grid container
                                columnSpacing={{ xs: 2 }}
                                rowSpacing={2}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Grid item xs={12} sm={12}>
                                    <motion.div
                                        className='intro-btn-big'
                                        initial={{ opacity: 0, }}
                                        animate={{ opacity: 0.85, }}
                                        transition={{ duration: 0.8 }}
                                        whileHover={{ backgroundColor: '#b2b2b2', transition: { duration: 0 } }}
                                        whileTap={{ backgroundColor: 'rgb(158, 158, 158)', transition: { duration: 0 } }}
                                    >
                                        <div className='welcome-btn'>
                                            <img src={sanity} alt="Sanity" />
                                        </div>
                                        Welcome!
                                    </motion.div>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <motion.div
                                        className='intro-btn-small'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.85 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        whileHover={{ backgroundColor: '#b2b2b2', transition: { duration: 0 } }}
                                        whileTap={{ backgroundColor: 'rgb(158, 158, 158)', transition: { duration: 0 } }}
                                    >
                                        Education
                                    </motion.div>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <motion.div
                                        className='intro-btn-small'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.85 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        whileHover={{ backgroundColor: '#b2b2b2', transition: { duration: 0 } }}
                                        whileTap={{ backgroundColor: 'rgb(158, 158, 158)', transition: { duration: 0 } }}
                                    >
                                        Experience
                                    </motion.div>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <motion.div
                                        className='intro-btn-blue'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        whileHover={{ backgroundColor: '#0682ab', transition: { duration: 0 } }}
                                        whileTap={{ backgroundColor: '#045b77', transition: { duration: 0 } }}
                                    >
                                        Projects
                                    </motion.div>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <motion.div
                                        className='intro-btn-blue'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        whileHover={{ backgroundColor: '#0682ab', transition: { duration: 0 } }}
                                        whileTap={{ backgroundColor: '#045b77', transition: { duration: 0 } }}
                                    >
                                        Stacks
                                    </motion.div>
                                </Grid>

                                <Grid item xs={5} sm={5}>
                                    <motion.div
                                        className='intro-btn-small'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.85 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        whileHover={{ backgroundColor: '#b2b2b2', transition: { duration: 0 } }}
                                        whileTap={{ backgroundColor: 'rgb(158, 158, 158)', transition: { duration: 0 } }}

                                    >
                                        Contact
                                    </motion.div>
                                </Grid>

                                <Grid item xs={7} sm={7}>
                                    <motion.div
                                        className='intro-btn-small'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.85 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        whileHover={{ backgroundColor: '#b2b2b2', transition: { duration: 0 } }}
                                        whileTap={{ backgroundColor: 'rgb(158, 158, 158)', transition: { duration: 0 } }}
                                    >
                                        Hobbies
                                    </motion.div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Intro