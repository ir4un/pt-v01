import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import smksilogo from '../assets/images/smksilogo.png';


function Edu() {
    return (
        <div>
            <div className='edu-section'>
                <div className="section-title">
                    Education.
                </div>
                <Container className="edu-content" sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item xs={6} sm={6} md={6}>
                            <div className="edu-selector">
                                SPM
                            </div>
                            <div className="edu-selector">
                                Diploma
                            </div>
                            <div className="edu-selector">
                                Degree
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <div className="edu-details">
                                <div className="edu-title">
                                    <h2>Sijil Pelajaran Malaysia</h2>
                                </div>
                                <div className="edu-logo">
                                    <img src={smksilogo} alt="SMKSI" className='smksi-logo' />
                                </div>
                                <div className="edu-desc">
                                    Here i began my journey as a student learning the inner machinations of software engineering.
                                </div>
                                <div className="result-ico">

                                </div>
                                <div className="edu-result">
                                    CGPA: 3.58
                                </div>
                                <div className="edu-date">
                                    2014-2017
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Edu