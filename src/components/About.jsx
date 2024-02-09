import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function About() {
    return (
        <div>
            <div className='edu-section'>
                <div className="section-title">
                    About Me.
                </div>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={12}>
                            <div className="about-content">
                                <p>Creative, Fast-Learner and Efficient. These three things are somethings that I find in myself as programmer. I was introduced to programming at the age of 16 in 2016 with Java. I could&apos;ve entered art class but instead i chose computer science. Starting from there, my life journey has brought me to meet great people and friends that has inspired me to continue my life as programmer. The possibilities are infinite, it is up to you to take those possibilities into your own hands. </p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default About