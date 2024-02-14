import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// import example from '../assets/images/example.jpg';
// import recitelogo from '../assets/images/reciteclearnoradius.png';
import example from '../assets/images/test.jpg';

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
                            </div>
                            <div className="project-grid-item">
                                <img src={example} alt="Example" className='project-thumbnail' />
                                <div className="project-name">Checkcar</div>
                            </div>
                            <div className="project-grid-item">
                                <img src={example} alt="Example" className='project-thumbnail' />
                                <div className="project-name">Checkcar</div>
                            </div>
                            <div className="project-grid-item">
                                <img src={example} alt="Example" className='project-thumbnail' />
                                <div className="project-name">Checkcar</div>
                            </div>
                            <div className="project-grid-item">
                                <img src={example} alt="Example" className='project-thumbnail' />
                                <div className="project-name">Checkcar</div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Project