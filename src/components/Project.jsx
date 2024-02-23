import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { motion } from "framer-motion";

import { projectButton } from './css/framer-css.js';
import { projectContent } from './content/project-content';
// import example from '../assets/images/example.jpg';
// import recitelogo from '../assets/images/reciteclearnoradius.png';

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
                            {Object.values(projectContent).map(stackItems => (
                                stackItems.map((item, idx) => (
                                    <div className="project-grid-item" key={idx}>
                                        <img src={item.thumbnail} alt="Example" className='project-thumbnail' />
                                        <motion.div
                                            className="project-grid-item-effect"
                                            variants={projectButton}
                                            transition={"initial"}
                                            whileHover={"hoverEffect"}
                                        // onClick={() => handleStackClick(item)}
                                        >
                                            <div className="project-grid-content">
                                                <div className="project-name">{item.name}</div>
                                                <div className="project-stack-icon-grid">
                                                    {item.logo.map((logo, index) => (
                                                        <img key={index} src={logo} alt={item.name} className='project-stack-icon-item' />
                                                    ))}</div>
                                                <div className="project-desc">{item.desc}</div>
                                            </div>
                                        </motion.div>
                                    </div>
                                ))
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Project