import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimationControls } from "framer-motion";
import Grid from '@mui/material/Grid';
import { GiStarsStack } from "react-icons/gi";

import { animlefttoright } from './css/framer-css.js';
import fusionoffice from '../assets/images/fusionoffice.jpg';
import reciteoffice from '../assets/images/test.jpg';
import recitelogo from '../assets/images/reciteclearnoradius.png';
import fusionlogoclear from '../assets/images/fusionexclear.png';
import fusionlogo from '../assets/images/fusionex.jpg';


function Exp() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimationControls();
    const controls = useAnimationControls();
    const imgControls = useAnimationControls();
    const [hiddenFolder, setHiddenFolder] = useState('fusionex');

    let name, date, position, desc, logo;

    if (hiddenFolder === 'recite') {
        name = 'Fusionex';
        date = "Sept 2022 - Jan 2023";
        position = "Front-end Developer"
        desc = 'Worked as a front-end developer at Fusionex. I was tasked to developed and fixed graphical and UI issues within on their popular data analytic software known as Giant. The stack I was introduced there was mostly related to C# .NET and SASS ';
        logo = fusionlogo;
    } else {
        name = 'Recite Lab';
        date = "May 2021 - Apr 2022";
        position = "Front-end Developer"
        desc = `First internship experience as a Software Engineer with focus as on the front-end aspect. Developed a website capable of utilizing Google Vision API to read documents and identify unique ID's within the document. I managed to learn new stacks such as NodeJS and React framework to develop a dashboard system for internal use.`;
        logo = recitelogo;
    }

    const toggleFolderVisibility = (selectedFolder) => {

        if (hiddenFolder != selectedFolder) {
            return;
        }

        setHiddenFolder((prevFolder) => {
            const newFolder = prevFolder === selectedFolder ? '' : selectedFolder;
            const otherFolder = selectedFolder === 'recite' ? 'fusionex' : 'recite';
            return newFolder === '' ? otherFolder : newFolder;
        });
    };

    useEffect(() => {
        controls.start({
            x: ['-100%', '0%'],
            opacity: [0, 1],
        });

        imgControls.start({
            // x: ['100%', '0%'],
            opacity: [0, 1],
        });
    }, [imgControls, controls, hiddenFolder]);

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls])

    return (
        <div className='section exp' >
            <div className="section-title exp">
                Experience.
                <GiStarsStack className='title-ico exp' />
            </div>
            <motion.div
                ref={ref}
                variants={animlefttoright}
                initial={"hidden"}
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.5 }}
                id="ExpSection">
                <Grid className="exp-content" container>
                    <Grid item xs={6} sm={6} md={6}>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                        <div className="folder-tab">
                            <img src={recitelogo} alt="Recite lab Logo"
                                className={`tab-logo ${hiddenFolder === 'recite' ? 'hidden' : ''}`}
                                onClick={() => toggleFolderVisibility('recite')} />
                            <img src={fusionlogoclear} alt="Fusionex Logo"
                                className={`tab-logo fusion ${hiddenFolder === 'fusionex' ? 'hidden' : ''}`}
                                onClick={() => toggleFolderVisibility('fusionex')} />
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                        <div className="exp-company-area">
                            <motion.div
                                animate={controls}>
                                <div className="exp-company-title"><h1>{name}</h1></div>
                                <div className="exp-company-date"><h3>{date}</h3></div>
                                <div className="exp-company-position"><h4>{position}</h4></div>
                                <div className="exp-company-desc">{desc}</div>
                                <img src={logo} alt="Fusionex Logo" className={`folder-logo ${logo === fusionlogo ? 'fusion' : ''}`} />
                            </motion.div>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                        <div className="folder-area">
                            <div
                                className={`folder recite ${hiddenFolder === 'recite' ? 'hidden' : ''}`}>
                                <motion.div className="folder-img" animate={imgControls}>
                                    <img src={reciteoffice} alt="Recite Lab" className='folder-thumbnail' />
                                    <div className="folder-img-caption-box">
                                        <p>&quot;Recite Lab&apos;s Office 2023&quot;</p>
                                    </div>
                                </motion.div>
                            </div>
                            <div
                                className={`folder fusionex ${hiddenFolder === 'fusionex' ? 'hidden' : ''}`}>
                                <motion.div className="folder-img" animate={imgControls}>
                                    <img src={fusionoffice} alt="Fusionex" className='folder-thumbnail' />
                                    <div className="folder-img-caption-box">
                                        <p>&quot;Fusionex Office 2023&quot;</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </motion.div>
        </div>
    )
}

export default Exp