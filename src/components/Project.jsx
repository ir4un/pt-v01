import { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { motion, useInView, useAnimationControls } from "framer-motion";
import { FaCubes } from "react-icons/fa6";

import { projectButton, animlefttoright } from './css/framer-css.js';
import { projectContent } from './content/project-content';

function Project() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimationControls();
    const [clickType, setClickType] = useState(null);

    const handleTouchStart = () => {
        setClickType('touch');
    };

    const handleClick = () => {
        // I tried to fix to issue of mobile users onClick doesnt trigger the Framer Motion animation
        if (clickType !== 'touch') {
            setClickType('mouse');
        }
    };

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls])

    return (
        <div className='section project'>
            <div className="section-title project">
                <div className="title">
                    Projects.
                </div>
                <FaCubes className='title-ico project' />
            </div>
            <motion.div
                ref={ref}
                variants={animlefttoright}
                initial={"hidden"}
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.5 }}
                id="ProjectSection">
                <Container className="project-content" sx={{ py: 4 }} maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={12}>
                            <div className="project-grid">
                                {Object.values(projectContent).map(stackItems => (
                                    stackItems.map((item, idx) => (
                                        <div className="project-grid-item" key={idx}>
                                            <img src={item.thumbnail} alt="Example" className='project-thumbnail' />
                                            <motion.div
                                                className="project-grid-item-effect"
                                                variants={projectButton}
                                                whileHover={"hoverEffect"}
                                                whileTap={clickType === 'touch' ? 'tapEffect' : ''}
                                                onTouchStart={handleTouchStart}
                                                onClick={handleClick}
                                            // onClick={() => handleStackClick(item)}
                                            >
                                                <div className="project-grid-content">
                                                    <div className="project-name">{item.name}</div>
                                                    <div className="project-stack-icon-grid">
                                                        {item.logo.map((logo, index) => (
                                                            <img key={index} src={logo} alt={item.name} className='project-stack-icon-item' />
                                                        ))}</div>
                                                    <div className="project-desc">{item.desc}</div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    ))
                                ))}
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </motion.div>
        </div>
    )
}

export default Project