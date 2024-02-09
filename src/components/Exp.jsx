import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import fusionoffice from '../assets/images/fusionoffice.jpg';

function Exp() {
    return (
        <div>
            <div className='exp-section'>
                <div className="section-title">
                    Experience.
                </div>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={12}>
                            <div className="exp-content">
                                <Grid container spacing={4}>
                                    <Grid item xs={6} sm={6} md={6}>
                                        <div className="exp-selector recite">Recite Lab</div>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6}>
                                        <div className="exp-selector fusionex">Fusionex</div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <div className="exp-selected-content">
                                            <div className="exp-image">
                                                <img src={fusionoffice} alt="SMKSI" className='smksi-logo' />
                                                <div className="exp-desc">
                                                    Internship for 2nd Year Degree
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Exp