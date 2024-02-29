import { useEffect, useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import { motion, useInView, useAnimationControls } from "framer-motion";
import { GiStarMedal } from "react-icons/gi";

import Carousel from './carousel.jsx';
import { animlefttoright } from './css/framer-css.js';
import { activityContent } from './content/activity-content.js';



function Activities() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimationControls();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [viewName, setViewName] = useState(activityContent[0]?.name || '');
    const [viewStatus, setViewStatus] = useState(activityContent[0]?.status || '');
    const [viewDesc, setViewDesc] = useState(activityContent[0]?.desc || '');

    const updateActivityData = (newIndex) => {
        setCurrentIndex(newIndex)
        setViewName(activityContent[newIndex].name)
        setViewStatus(activityContent[newIndex].status)
        setViewDesc(activityContent[newIndex].desc)

    };




    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls])

    return (
        <div className='section activities'>
            <div className="section-title activities">
                <div className="title">
                    Hackathons.
                </div>
                <GiStarMedal className='title-ico activity' />
            </div>
            <motion.div
                ref={ref}
                variants={animlefttoright}
                initial={"hidden"}
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.5 }}
                id="ActivitiesSection">
                <div className="activities-content">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12}>
                            <Carousel updateActivityData={updateActivityData}>
                                {activityContent.map((item, idx) => (
                                    <div key={idx}>
                                        <div className="carousel-thumbnail">
                                            <img src={item.thumbnail} alt={item.name} className='carousel-thumbnail-img' />
                                        </div>
                                        <div className="carousel-icon">
                                            <img src={item.thumbIcon} alt={item.name} className='carousel-logo' />
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <div className='carousel-content'>
                                <div className="carousel-title">
                                    <h2>{viewName}</h2>
                                </div>
                                <div className="carousel-status">
                                    <p>{viewStatus}</p>
                                </div>
                                <div className="carousel-desc">
                                    {viewDesc}
                                </div>
                                <div className="carousel-link">
                                    <div className="link-icon-grid">
                                        {activityContent[currentIndex].link.map((link, index) => (
                                            <a key={index} href={link.url}>
                                                <img src={link.image} alt="Project Link" className='link-icon-item' />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </motion.div>
        </div>
    )
}





export default Activities