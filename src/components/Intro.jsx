import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

import { FaGithubSquare, FaFacebookSquare, FaLinkedin, FaTrophy, FaYoutube, FaDownload } from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";
import { GiGraduateCap, GiStarsStack, GiStarMedal } from "react-icons/gi";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { IoGameController } from "react-icons/io5";
import { FaCubes, FaFilePdf } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";

import videoFile from '../assets/videos/animated-bliss.mp4';
import pfpImg from '../assets/images/irfan-selfcleararm.png';
import sanity from '../assets/images/sanity.webp';

import { introButtonMotion, introBlueButtonMotion, socialbtnMotion } from './css/framer-css.js'; // Adjust the path as needed
import './css/component-css.css';


function Intro() {

    function downloadFile(filename) {
        const anchor = document.createElement('a');
        anchor.href = `/assets/${filename}`;
        anchor.download = filename;
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

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
                        <Grid item xs={6} sm={3} md={6}>
                        </Grid>
                        <Grid item xs={12} sm={9} md={6}>
                            <Grid container
                                columnSpacing={{ xs: 2 }}
                                rowSpacing={2}
                                alignItems="center"
                                justifyContent="center">
                                <Grid item xs={12} sm={12} >
                                    <div className='multi-btn-container'>
                                        <Link
                                            to={'AboutSection'}
                                            smooth={true}
                                            spy={true}
                                            duration={500} >
                                            <motion.div
                                                className='intro-btn-big'
                                                variants={introButtonMotion}
                                                initial={"initial"}
                                                animate={"animate"}
                                                whileHover={"hoverEffect"}
                                                whileTap={"tapEffect"}>
                                                <div className='welcome-btn'>
                                                    <img src={sanity} alt="Sanity" />
                                                </div>
                                                Welcome!
                                                <div className="intro-btn-ico welcome">
                                                    <FiChevronsRight />
                                                </div>
                                            </motion.div>
                                        </Link>
                                        <div className="side-btn">
                                            <motion.a className="linkedin-container"
                                                href="https://www.linkedin.com/in/ir4un/"
                                                target="_blank"
                                                variants={socialbtnMotion}
                                                whileHover={"LIhoverEffect"}
                                                whileTap={"LItapEffect"}>
                                                <FaLinkedin />
                                            </motion.a>
                                            <motion.a className="github-container"
                                                href="https://github.com/ir4un"
                                                target="_blank"
                                                variants={socialbtnMotion}
                                                whileHover={"GHhoverEffect"}
                                                whileTap={"GHtapEffect"}>
                                                <FaGithubSquare />
                                            </motion.a>
                                            <motion.a className="fb-container"
                                                href="https://www.facebook.com/muhammadirfan.zafri.7/"
                                                target="_blank"
                                                variants={socialbtnMotion}
                                                whileHover={"FBhoverEffect"}
                                                whileTap={"FBtapEffect"}>
                                                <FaFacebookSquare />
                                            </motion.a>
                                            <motion.a className="youtube-container"
                                                href="https://youtube.com/@irfanzafri?si=-rhiNlPbRWahCLZc"
                                                target="_blank"
                                                variants={socialbtnMotion}
                                                whileHover={"YThoverEffect"}
                                                whileTap={"YTtapEffect"}>
                                                <FaYoutube />
                                            </motion.a>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Link
                                        to={'EduSection'}
                                        smooth={true}
                                        spy={true}
                                        offset={-200}
                                        duration={500} >
                                        <motion.div
                                            className='intro-btn-small'
                                            variants={introButtonMotion}
                                            initial={"initial"}
                                            animate={"animate"}
                                            whileHover={"hoverEffect"}
                                            whileTap={"tapEffect"}>
                                            Education
                                            <div className="intro-btn-ico edu">
                                                <GiGraduateCap />
                                            </div>
                                        </motion.div>
                                    </Link>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Link
                                        to={'ExpSection'}
                                        smooth={true}
                                        spy={true}
                                        duration={500} ><motion.div
                                            className='intro-btn-small'
                                            variants={introButtonMotion}
                                            initial={"initial"}
                                            animate={"animate"}
                                            whileHover={"hoverEffect"}
                                            whileTap={"tapEffect"}>
                                            Experience
                                            <div className="intro-btn-ico exp">
                                                <GiStarsStack />
                                            </div>
                                        </motion.div>
                                    </Link>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <div className="intro-btn-spilt">
                                        <Link
                                            to={'StackSection'}
                                            smooth={true}
                                            spy={true}
                                            duration={500} ><motion.div
                                                className='intro-btn-blue first'
                                                variants={introBlueButtonMotion}
                                                initial={"initial"}
                                                animate={"animate"}
                                                whileHover={"hoverEffect"}
                                                whileTap={"tapEffect"}>
                                                Stacks
                                                <div className="intro-btn-ico stack">
                                                    <HiMiniSquare3Stack3D />
                                                </div>
                                            </motion.div>
                                        </Link>
                                        <div className="mini-btn-title">
                                            <div className="mini-btn-ico">
                                                <FaTrophy />
                                            </div>
                                            Accomplishments
                                        </div>
                                        <Link
                                            to={'ProjectSection'}
                                            smooth={true}
                                            spy={true}
                                            duration={500} >
                                            <motion.div
                                                className='intro-btn-blue'
                                                variants={introBlueButtonMotion}
                                                initial={"initial"}
                                                animate={"animate"}
                                                whileHover={"hoverEffect"}
                                                whileTap={"tapEffect"}>
                                                Projects
                                                <div className="intro-btn-ico project">
                                                    <FaCubes />
                                                </div>
                                            </motion.div>
                                        </Link>
                                        <Link
                                            to={'ActivitiesSection'}
                                            smooth={true}
                                            spy={true}
                                            offset={-120}
                                            duration={500} >
                                            <motion.div
                                                className='intro-btn-blue'
                                                variants={introBlueButtonMotion}
                                                initial={"initial"}
                                                animate={"animate"}
                                                whileHover={"hoverEffect"}
                                                whileTap={"tapEffect"}>
                                                Hackathons
                                                <div className="intro-btn-ico activity">
                                                    <GiStarMedal />
                                                </div>
                                            </motion.div>
                                        </Link>
                                    </div>
                                </Grid>
                                <Grid item xs={5} sm={5}>
                                    <Link
                                        to={'HobbiesSection'}
                                        smooth={true}
                                        spy={true}
                                        duration={500} >
                                        <motion.div
                                            className='intro-btn-small'
                                            variants={introButtonMotion}
                                            initial={"initial"}
                                            animate={"animate"}
                                            whileHover={"hoverEffect"}
                                            whileTap={"tapEffect"}>
                                            Hobbies
                                            <div className="intro-btn-ico hobby">
                                                <IoGameController />
                                            </div>
                                        </motion.div>
                                    </Link>
                                </Grid>
                                <Grid item xs={7} sm={7}>
                                    <div className='multi-btn-container'>
                                        <Link
                                            to={'ContactSection'}
                                            smooth={true}
                                            spy={true}
                                            duration={500} >
                                            <motion.div
                                                className='intro-btn-small'
                                                variants={introButtonMotion}
                                                initial={"initial"}
                                                animate={"animate"}
                                                whileHover={"hoverEffect"}
                                                whileTap={"tapEffect"}>
                                                Contact
                                                <div className="intro-btn-ico contact">
                                                    <MdWifiCalling3 />
                                                </div>
                                            </motion.div>
                                        </Link>
                                        <div className="side-btn big">
                                            <motion.a className="resume-container"
                                                variants={socialbtnMotion}
                                                whileHover={"PDFhoverEffect"}
                                                whileTap={"PDFtapEffect"}
                                                onClick={() => downloadFile('2024-04-Resume.pdf')}>
                                                <FaFilePdf />
                                                <div className="pdf-ico">
                                                    <FaDownload />
                                                </div>
                                            </motion.a>
                                        </div>
                                    </div>
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