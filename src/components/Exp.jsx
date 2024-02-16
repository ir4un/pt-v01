import Grid from '@mui/material/Grid';

import fusionoffice from '../assets/images/fusionoffice.jpg';
import recitelogo from '../assets/images/reciteclearnoradius.png';
import fusionlogo from '../assets/images/fusionex.jpg';

function Exp() {
    return (
        <div className='section exp'>
            <div className="section-title exp">
                Experience.
            </div>
            <Grid className="exp-content" container>
                <Grid item xs={6} sm={6} md={6}>
                    <div className="exp-company-area">
                        <div className="exp-company-title"><h1>Fusionex</h1></div>
                        <div className="exp-company-desc">A well-known multinational tech company that provides various technological advanced solutions using AI, Big Data and Cloud to its customers! </div>
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <div className="folder-area">
                        <div className="folder">
                            <p>COMPANY: FUSIONEX</p>
                            <div className="folder-img">
                                <img src={fusionoffice} alt="Fusionex" />
                                <div className="folder-img-caption-box">
                                    <p>&quot;Fusionex Office 2023&quot;</p>
                                </div>
                                <img src={fusionlogo} alt="Fusionex Logo" className='fusion-logo' />
                            </div>
                        </div>
                    </div>
                </Grid>

                {/* <Grid item xs={12} sm={12} md={12}>
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
                    </Grid> */}
            </Grid>
        </div>
    )
}

export default Exp