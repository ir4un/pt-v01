import { useState, useEffect } from 'react';
import { motion, useAnimationControls } from "framer-motion";
import { Link } from 'react-scroll';

import { FiChevronsRight } from "react-icons/fi";
import { GiGraduateCap, GiStarsStack, GiStarMedal } from "react-icons/gi";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { IoGameController } from "react-icons/io5";
import { FaCubes } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import sanity from '../assets/images/sanity.webp';

import { navbarMotionbtn, navbarMotionBluebtn, navbaropenbtnanim } from './css/framer-css.js'; // Adjust the path as needed
import './css/component-css.scss';


function Navbar() {
    const btnControl = useAnimationControls();
    const imgControls = useAnimationControls();
    const [isDisplay, setIsDisplay] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [scrollingUp, setScrollingUp] = useState(true);

    const toggleClass = () => {
        // Same thing as in Intro.jsx, hides scrollbar when navbar menu is displayed
        setIsDisplay(!isDisplay);

        if (window.innerWidth < 901) {
            if (!isDisplay) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

    };



    // Deal with when user switch from mobile to desktop while mobilenav is displaying
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 900 && isDisplay) {
            document.body.style.overflow = 'auto';
            setIsDisplay(false);
        }
    });

    useEffect(() => {
        // Checks when user is scrolling up or down to either hide or display button
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingUp = currentScrollPos < prevScrollPos;

            if (isScrollingUp !== scrollingUp) {
                setScrollingUp(isScrollingUp);
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
    }, [prevScrollPos, scrollingUp, btnControl,]);


    useEffect(() => {
        if (window.innerWidth < 901) {
            imgControls.start({
                x: ['100%', '0%'],
                opacity: [0, 1],
            });
        }

    }, [imgControls, isDisplay]);

    useEffect(() => {
        if (window.innerWidth < 901) {
            btnControl.start({
                opacity: [0, 1],
            });
        }

    }, [btnControl]);
    return (
        <div>
            <div className="main-nav">
                <motion.div
                    className='mobile-nav-btn'
                    variants={navbaropenbtnanim}
                    animate={btnControl}
                    whileHover={"hoverEffect"}
                    whileTap={"tapEffect"}
                    onClick={toggleClass}>
                    <div className="mobile-nav-ico">
                        {isDisplay ? <RxCross2 /> : <FaHome />}
                    </div>
                </motion.div>
                <motion.div className={`navbar-container ${isDisplay ? 'display' : ''}`}
                    onClick={toggleClass}>
                    <Link
                        to={'AboutSection'}
                        smooth={true}
                        spy={true}
                        duration={500}
                    >
                        <motion.div
                            className='navbar-btn'
                            variants={navbarMotionbtn}
                            transition={{ delay: 0.1, duration: 0.2 }}
                            animate={imgControls}
                            whileHover={"hoverEffect"}
                            whileTap={"tapEffect"}
                            onClick={toggleClass}>
                            <div className='welcome-btn'>
                                <img src={sanity} alt="Sanity" />
                            </div>
                            Welcome!
                            <div className="intro-btn-ico welcome">
                                <FiChevronsRight />
                            </div>
                        </motion.div>
                    </Link>
                    <Link
                        to={'EduSection'}
                        smooth={true}
                        spy={true}
                        offset={-220}
                        duration={500} >
                        <motion.div
                            className='navbar-btn'
                            variants={navbarMotionbtn}
                            transition={{ delay: 0.15, duration: 0.2 }}
                            animate={imgControls}
                            whileHover={"hoverEffect"}
                            whileTap={"tapEffect"}
                            onClick={toggleClass}>
                            Education
                            <div className="intro-btn-ico edu">
                                <GiGraduateCap />
                            </div>
                        </motion.div>
                    </Link>
                    <Link
                        to={'ExpSection'}
                        smooth={true}
                        spy={true}
                        duration={500} ><motion.div
                            className='navbar-btn'
                            variants={navbarMotionbtn}
                            transition={{ delay: 0.2, duration: 0.2 }}
                            animate={imgControls}
                            whileHover={"hoverEffect"}
                            whileTap={"tapEffect"}
                            onClick={toggleClass}>
                            Experience
                            <div className="intro-btn-ico exp">
                                <GiStarsStack />
                            </div>
                        </motion.div>
                    </Link>
                    <Link
                        to={'StackSection'}
                        smooth={true}
                        spy={true}
                        duration={500} ><motion.div
                            className='navbar-btn-blue'
                            variants={navbarMotionBluebtn}
                            transition={{ delay: 0.25, duration: 0.2 }}
                            animate={imgControls}
                            whileHover={"hoverEffect"}
                            whileTap={"tapEffect"}
                            onClick={toggleClass}>
                            Stacks
                            <div className="intro-btn-ico stack">
                                <HiMiniSquare3Stack3D />
                            </div>
                        </motion.div>
                    </Link>
                    <Link
                        to={'ProjectSection'}
                        smooth={true}
                        spy={true}
                        duration={500} >
                        <motion.div
                            className='navbar-btn-blue'
                            variants={navbarMotionBluebtn}
                            transition={{ delay: 0.3, duration: 0.2 }}
                            animate={imgControls}
                            whileHover={"hoverEffect"}
                            whileTap={"tapEffect"}
                            onClick={toggleClass}>
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
                            className='navbar-btn-blue'
                            variants={navbarMotionBluebtn}
                            transition={{ delay: 0.35, duration: 0.2 }}
                            animate={imgControls}
                            whileHover={"hoverEffect"}
                            whileTap={"tapEffect"}
                            onClick={toggleClass}>
                            Hackathons
                            <div className="intro-btn-ico activity">
                                <GiStarMedal />
                            </div>
                        </motion.div>
                    </Link>
                    <Link
                        to={'HobbiesSection'}
                        smooth={true}
                        spy={true}
                        duration={500} >
                        <motion.div
                            className='navbar-btn'
                            variants={navbarMotionbtn}
                            transition={{ delay: 0.4, duration: 0.2 }}
                            animate={imgControls}
                            whileHover={"hoverEffect"}
                            whileTap={"tapEffect"}
                            onClick={toggleClass}>
                            Hobbies
                            <div className="intro-btn-ico hobby">
                                <IoGameController />
                            </div>
                        </motion.div>
                    </Link>
                    <Link
                        to={'ContactSection'}
                        smooth={true}
                        spy={true}
                        duration={500} >
                        <motion.div
                            className='navbar-btn'
                            variants={navbarMotionbtn}
                            transition={{ delay: 0.45, duration: 0.2 }}
                            animate={imgControls}
                            whileHover={"hoverEffect"}
                            whileTap={"tapEffect"}
                            onClick={toggleClass}>
                            Contact
                            <div className="intro-btn-ico contact">
                                <MdWifiCalling3 />
                            </div>
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </div>


    )
}

export default Navbar