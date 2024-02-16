import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// import example from '../assets/images/example.jpg';
// import recitelogo from '../assets/images/reciteclearnoradius.png';
import example from '../assets/images/test.jpg';
import nodejs from '../assets/images/nodejsv2.png';

function Project() {
    return (
        <div className='section project'>
            <div className="section-title project">
                Projects.
            </div>
            <Container className="project-content" sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="project-grid">
                            <div className="project-grid-item">
                                <img src={example} alt="Example" className='project-thumbnail' />
                                <div className="project-name">Checkcar</div>
                                <div className="project-stack-icon-grid">
                                    <img src={nodejs} alt="NodeJS" className='project-stack-icon-item' />
                                    <img src={nodejs} alt="NodeJS" className='project-stack-icon-item' />
                                    <img src={nodejs} alt="NodeJS" className='project-stack-icon-item' />
                                </div>
                                <div className="project-desc">AI Powered Website to Identify and Retrieve Car Model Prices</div>
                            </div>
                            <div className="project-grid-item">
                                <img src={example} alt="Example" className='project-thumbnail' />
                                <div className="project-name">Checkcar</div>

                                <div className="project-desc">AI Powered Website to Identify and Retrieve Car Model Prices</div>

                            </div>
                            <div className="project-grid-item">
                                <img src={example} alt="Example" className='project-thumbnail' />
                                <div className="project-name">Checkcar</div>
                                <div className="project-desc">AI Powered Website to Identify and Retrieve Car Model Prices</div>

                            </div>
                            <div className="project-grid-item">
                                <img src={example} alt="Example" className='project-thumbnail' />
                                <div className="project-name">Checkcar</div>
                                <div className="project-desc">AI Powered Website to Identify and Retrieve Car Model Prices</div>

                            </div>
                            <div className="project-grid-item">
                                <img src={example} alt="Example" className='project-thumbnail' />
                                <div className="project-name">Checkcar</div>
                                <div className="project-desc">AI Powered Website to Identify and Retrieve Car Model Prices</div>

                            </div>
                            <div className="project-grid-item">
                                <img src={example} alt="Example" className='project-thumbnail' />
                                <div className="project-name">Checkcar</div>
                                <div className="project-desc">AI Powered Website to Identify and Retrieve Car Model Prices</div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Project