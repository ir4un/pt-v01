import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { FaFaceSmileWink } from "react-icons/fa6";

function About() {
    return (
        <div className='section about' id="AboutSection">
            <div className="section-title about">
                <div className="title">
                    About Me.
                </div>
                <FaFaceSmileWink className='title-ico smile' />
            </div>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="about-content">
                            <p>Creative, Fast-Learner and Efficient. These three things are somethings that I find in myself as programmer. I was introduced to programming at the age of 16 in 2016 with Java. I could&apos;ve entered art class but instead i chose computer science. Starting from there, my life journey has brought me to meet great people and friends that has inspired me to continue my life as programmer. The possibilities are infinite, it is up to you to take those possibilities into your own hands. </p>
                            <iframe className='player'
                                src="https://www.youtube-nocookie.com/embed/OuFOuZu1iPE?si=lEgtH0uTnNiU_Ijn"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default About