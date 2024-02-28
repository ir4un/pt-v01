import { useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import { motion, useInView, useAnimationControls } from "framer-motion";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { useMediaQuery } from '@mui/material';

import { stackButton, animrighttoleft } from './css/framer-css.js';
import { stackContent } from './content/stack-content';

function Stack() {
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimationControls();
    const controls = useAnimationControls();
    const imgControls = useAnimationControls();
    const [selectedStack, setSelectedStack] = useState(stackContent.java[0].name);
    const [selectedDesc, setSelectedDesc] = useState(stackContent.java[0].desc);
    const [selectedLogo, setSelectedLogo] = useState(stackContent.java[0].logo);


    const handleStackClick = (clickedItem) => {
        setSelectedStack(clickedItem.name);
        setSelectedDesc(clickedItem.desc);
        setSelectedLogo(clickedItem.logo);
    };


    useEffect(() => {
        controls.start({
            x: ['-100%', '0%'],
            opacity: [0, 1],
        });
        imgControls.start({
            x: ['100%', '0%'],
            opacity: [0, 0.3],
        });
    }, [imgControls, controls, selectedStack]);

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls])

    return (
        <div className='section stack'>
            <div className="section-title stack">
                Stacks.
                <HiMiniSquare3Stack3D className='title-ico stack' />
            </div>
            <motion.div
                className='stack-motion-container'
                ref={ref}
                variants={animrighttoleft}
                initial={"hidden"}
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.5 }}
                id="StackSection">
                <Grid className="stack-content" container
                    direction={isMobile ? "column-reverse" : "none"}>
                    <Grid item xs={12} sm={5} md={5} style={{ maxWidth: "none" }}>
                        <div className="stack-item details">
                            <motion.div animate={controls} transition={{
                                ease: "linear",
                                duration: 1,
                                x: { duration: 0.5 }
                            }}>
                                <div className="stack-title">
                                    <h1>{selectedStack}</h1>
                                </div>
                                <div className="stack-desc">
                                    {selectedDesc}
                                </div>
                            </motion.div>
                        </div>
                    </Grid>
                    <Grid item xs={0} sm={4} md={3}>
                        <motion.div className="stack-item logo" animate={imgControls} transition={{
                            ease: "linear",
                            duration: 0.8,
                            x: { duration: 0.5 }
                        }}>
                            <img src={selectedLogo} alt={selectedStack} className='selected-logo' />
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} style={{ maxWidth: "100%" }}>
                        <div className="stack-item list">
                            <div className="stack-list-background">
                                <br></br>
                            </div>
                            <div className="stack-grid">
                                {Object.values(stackContent).map(stackItems => (
                                    stackItems.map((item, idx) => (
                                        <motion.div
                                            className="stack-grid-item"
                                            variants={stackButton}
                                            whileHover={"hoverEffect"}
                                            whileTap={"tapEffect"} key={idx}
                                            onClick={() => handleStackClick(item)}
                                            onHoverStart={() => handleStackClick(item)}
                                        >
                                            <img src={item.logo} alt={item.name} className='stack-small-logo' />
                                        </motion.div>
                                    ))
                                ))}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </motion.div>
        </div>
    )
}

export default Stack