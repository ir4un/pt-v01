import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";

import videoFile from '../assets/videos/animated-bliss.mp4';
import pfpImg from '../assets/images/irfan-selfcleararm.png';
import sanity from '../assets/images/sanity.webp';

import { introButtonMotion, introBlueButtonMotion } from './css/framer-css.js'; // Adjust the path as needed
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
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.7 }}
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
                transition={{ duration: 0.8, delay: 1.7 }}>
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
                                        variants={introButtonMotion}
                                        initial={"initial"}
                                        animate={"animate"}
                                        whileHover={"hoverEffect"}
                                        whileTap={"tapEffect"}
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
                                        variants={introButtonMotion}
                                        initial={"initial"}
                                        animate={"animate"}
                                        whileHover={"hoverEffect"}
                                        whileTap={"tapEffect"}>
                                        Education
                                    </motion.div>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <motion.div
                                        className='intro-btn-small'
                                        variants={introButtonMotion}
                                        initial={"initial"}
                                        animate={"animate"}
                                        whileHover={"hoverEffect"}
                                        whileTap={"tapEffect"}>
                                        Experience
                                    </motion.div>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <motion.div
                                        className='intro-btn-blue'
                                        variants={introBlueButtonMotion}
                                        initial={"initial"}
                                        animate={"animate"}
                                        whileHover={"hoverEffect"}
                                        whileTap={"tapEffect"}
                                    >
                                        Projects
                                    </motion.div>
                                </Grid>

                                <Grid item xs={6} sm={6}>
                                    <motion.div
                                        className='intro-btn-blue'
                                        variants={introBlueButtonMotion}
                                        initial={"initial"}
                                        animate={"animate"}
                                        whileHover={"hoverEffect"}
                                        whileTap={"tapEffect"}>
                                        Stacks
                                    </motion.div>
                                </Grid>

                                <Grid item xs={5} sm={5}>
                                    <motion.div
                                        className='intro-btn-small'
                                        variants={introButtonMotion}
                                        initial={"initial"}
                                        animate={"animate"}
                                        whileHover={"hoverEffect"}
                                        whileTap={"tapEffect"}>
                                        Hobbies
                                    </motion.div>
                                </Grid>

                                <Grid item xs={7} sm={7}>
                                    <motion.div
                                        className='intro-btn-small'
                                        variants={introButtonMotion}
                                        initial={"initial"}
                                        animate={"animate"}
                                        whileHover={"hoverEffect"}
                                        whileTap={"tapEffect"}>
                                        Contact
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