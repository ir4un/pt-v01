import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

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
            <div className="level">
                <div className="age">23<br></br><p>LV</p></div>
                <div className="name">Irfan Zafri</div>
            </div>
            <div className="intro-desc">
                <p>Greetings! I&apos;m Irfan Zafri. I&apos;m  interested with frontend development  and machine learning technologies. Do check out my other details down below.
                </p>
            </div>
            <Box
                sx={{ pt: 8, pb: 6, }}>
                <Container>
                    <Grid container
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        alignItems="center"
                        justifyContent="center">
                        <Grid item xs={12} sm={6}>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Grid container
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                rowSpacing={2}
                                alignItems="center"
                                justifyContent="center">
                                <Grid item xs={12} sm={12}>
                                    <div className='intro-btn-big'>
                                        <div className='welcome-btn'>
                                            <img src={sanity} alt="Sanity" />
                                        </div>
                                        Welcome!
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <div className='intro-btn-small'>
                                        Education
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <div className='intro-btn-small'>
                                        Experience
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <div className='intro-btn-blue'>
                                        Projects
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <div className='intro-btn-blue'>
                                        Stacks
                                    </div>
                                </Grid>
                                <Grid item xs={5} sm={5}>
                                    <div className='intro-btn-small'>
                                        Contact
                                    </div>
                                </Grid>
                                <Grid item xs={7} sm={7}>
                                    <div className='intro-btn-small'>
                                        Hobbies
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