import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-scroll';
import Navbar from './Navbar';
import { motion, useInView, useAnimationControls } from "framer-motion";
import { useMediaQuery } from 'react-responsive';


import { FaGithubSquare, FaFacebookSquare, FaLinkedin, FaTrophy, FaYoutube, FaDownload } from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";
import { GiGraduateCap, GiStarsStack, GiStarMedal } from "react-icons/gi";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { IoGameController } from "react-icons/io5";
import { FaCubes, FaFilePdf } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import { navbaropenbtnanim } from './css/framer-css.js';
import videoFile from '../assets/videos/animated-bliss.mp4';
import pfpImg from '../assets/images/irfan-selfcleararm.png';
import sanity from '../assets/images/sanity.webp';

import { introButtonMotion, introBlueButtonMotion, socialbtnMotion, animtoptobottom, mobilenavbtnanim } from './css/framer-css.js';
import AudioPlayer from './music/AudioPlayer.jsx';
import './css/component-css.scss';


function Intro() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    const mainControls = useAnimationControls();
    const btnControl = useAnimationControls();
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [scrollingUp, setScrollingUp] = useState(true);
    const [isMusicDisplay, setIsMusicDisplay] = useState(false);
    const [autoplayTriggered, setAutoplayTriggered] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: 900 });

    const navbarVariant = isMobile ? mobilenavbtnanim : animtoptobottom;

    function downloadFile(filename) {
        // For resume download
        const anchor = document.createElement('a');
        anchor.href = `/${filename}`;
        anchor.download = filename;
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

    const handleAutoplay = () => {
        // To autoplay music in AudioPlayer.jsx
        if (!autoplayTriggered) {
            setAutoplayTriggered(true); // Update state to indicate autoplay triggered
        }
    };

    const toggleMusicMenu = () => {
        // Hide scrollbar when musi menu is displayed
        setIsMusicDisplay(!isMusicDisplay);
        if (!isMusicDisplay) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    useEffect(() => {
        // This may look complex, but its my method of dealing with user resizing browser while nav menu/intro section is still in view
        const handleScroll = () => {
            // Checks if user is scrolling down or up
            const currentScrollPos = window.scrollY;
            const isScrollingUp = currentScrollPos < prevScrollPos;

            if (isScrollingUp !== scrollingUp) {
                // This runs if user scrolls up
                setScrollingUp(isScrollingUp);
                if (!isInView) {
                    if (isScrollingUp) {
                        mainControls.start("hidden");
                    } else {
                        mainControls.start("visible");

                    }
                }
                if (isScrollingUp) {
                    btnControl.start("hidden");
                } else {
                    btnControl.start("visible");

                }
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, scrollingUp, mainControls, btnControl, isInView]);

    window.addEventListener('resize', () => {
        // Hide nav button when user resize window
        if (window.innerWidth <= 900) {
            mainControls.start("hidden");
        }
    });

    useEffect(() => {
        // This is just to check if the intro section in still in view. If yes, the button will be hidden to avoid redundancy
        if (window.innerWidth > 900) {
            if (isInView) {
                mainControls.start("visible");
            }

        } else {
            mainControls.start("visible");
        }

    }, [isInView, mainControls]);


    return (
        <div className='IntroMain' ref={ref} id="IntroSection">
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
                                        offset={-250}
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
                                                onClick={() => downloadFile('2024-04-Resumev6.pdf')}>
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
            <motion.div
                className='motion-navbar'
                variants={navbarVariant}
                initial={"hidden"}
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.1 }}>
                <Navbar />
            </motion.div>
            <motion.div
                className={`audio-btn ${isMusicDisplay ? 'hidden' : ''}`}
                variants={navbaropenbtnanim}
                animate={btnControl}
                whileHover={"hoverEffect"}
                whileTap={"tapEffect"}
                onClick={() => {
                    toggleMusicMenu();
                    handleAutoplay();
                }}>
                <div className="mobile-nav-ico">
                    {isMusicDisplay ? <RxCross2 /> : <FaMusic />}
                </div>
            </motion.div>
            <AudioPlayer display={isMusicDisplay} autoplayTriggered={autoplayTriggered} />
        </div>
    )
}

AudioPlayer.propTypes = {
    display: PropTypes.bool.isRequired,
};

export default Intro