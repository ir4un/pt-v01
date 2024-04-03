import { useState, useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { motion, useInView, useAnimationControls } from "framer-motion";
import { GiGraduateCap } from "react-icons/gi";

import { animrighttoleft } from './css/framer-css.js';
import EduItem from './EduItem';


function Edu() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimationControls();
    const [selectedEducation, setSelectedEducation] = useState('SPM');
    const [isContentRevealed, setContentRevealed] = useState(true);


    const handleEducationSelect = (education) => {
        setSelectedEducation(education);
        if (education != selectedEducation) {
            setContentRevealed(false);
            setTimeout(() => {
                setContentRevealed(true);
            }, 100);
        }
    };

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls])

    return (
        <div className='section edu'>
            <div className="section-title edu">
                <div className="title">
                    Education.
                </div>
                <GiGraduateCap className='title-ico edu' />
            </div>
            <Container className="edu-content" sx={{ py: 4 }}>
                <motion.div
                    ref={ref}
                    variants={animrighttoleft}
                    initial={"hidden"}
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    id="EduSection">
                    <Grid container
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        {/* This method of displaying stuff is not efficient, will update this to allow better scalability when adding new content */}
                        <Grid item xs={12} sm={12} md={4}>
                            <div className="edu-selector-container">
                                <div
                                    className={`edu-selector ${selectedEducation === 'SPM' ? 'selected' : ''}`}
                                    onClick={() => handleEducationSelect('SPM')}>
                                    <p>SPM</p>
                                </div>
                                <div
                                    className={`edu-selector ${selectedEducation === 'Diploma' ? 'selected shape2' : ''} diploma`}
                                    onClick={() => handleEducationSelect('Diploma')}>
                                    <p>Diploma</p>
                                </div>
                                <div
                                    className={`edu-selector ${selectedEducation === 'Degree' ? 'selected' : ''} shape`}
                                    onClick={() => handleEducationSelect('Degree')}>
                                    <p>Degree</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={10} md={8}>
                            <EduItem selectedEducation={selectedEducation} isRevealed={isContentRevealed} />
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </div>
    )
}

export default Edu