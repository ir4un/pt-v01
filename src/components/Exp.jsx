import { useState, useEffect } from 'react';
import { motion, useAnimationControls } from "framer-motion";

import Grid from '@mui/material/Grid';

import fusionoffice from '../assets/images/fusionoffice.jpg';
import reciteoffice from '../assets/images/test.jpg';
import recitelogo from '../assets/images/reciteclearnoradius.png';
import fusionlogoclear from '../assets/images/fusionexclear.png';
import fusionlogo from '../assets/images/fusionex.jpg';


function Exp() {

    const controls = useAnimationControls();
    const imgControls = useAnimationControls();
    const [hiddenFolder, setHiddenFolder] = useState('fusionex');

    let name, desc, logo;

    if (hiddenFolder === 'recite') {
        name = 'Fusionex';
        desc = 'A well-known multinational tech company that provides various technological advanced solutions using AI, Big Data and Cloud to its customers!';
        logo = fusionlogo;
    } else {
        name = 'Recite Lab';
        desc = 'A startup company with the main goal aiding Al-Quran readers to improve their reading and pronounciation skills.';
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

    return (
        <div className='section exp'>
            <div className="section-title exp">
                Experience.
            </div>
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
        </div>
    )
}

export default Exp