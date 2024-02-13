import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import fusionoffice from '../assets/images/fusionoffice.jpg';
import recitelogo from '../assets/images/reciteclearnoradius.png';
import fusionlogo from '../assets/images/fusionex.jpg';

function Exp() {
    return (
        <div className='exp-section'>
            <div className="section-title exp">
                Experience.
            </div>
            <Container className="exp-content" sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container spacing={4}>
                            <Grid item xs={6} sm={6} md={6}>
                                <div className="exp-selector recite">
                                    Recite Lab
                                    <div className="company-logo">
                                        <img src={recitelogo} alt="Recite Logo" className='recite-logo' />
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <div className="exp-selector fusion">
                                    Fusionex
                                    <div className="company-logo">
                                        <img src={fusionlogo} alt="Fusionex Logo" className='fusion-logo' />
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <div className="exp-selected-content">
                                    <div className="exp-image">
                                        <div className="fusion-office">
                                            <img src={fusionoffice} alt="Fusionex" />
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6}>
                                <div className="exp-desc">
                                    Internship for 2nd Year Degree
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Exp