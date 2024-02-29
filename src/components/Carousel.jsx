import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { activityControl, activityDots } from './css/framer-css.js';
import { motion } from "framer-motion";

import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

function Carousel({ children = [], height, updateActivityData }) {
    const [current, setCurrent] = useState(0);

    const goToSlide = useCallback(
        (index) => {
            let newIndex = index;

            if (index < 0) {
                newIndex = children.length - 1;
            } else if (index >= children.length) {
                newIndex = 0;
            }

            setCurrent(newIndex);
            // Call the updateActivityData function with the new index
            if (updateActivityData) {
                updateActivityData(newIndex);
            }
        },
        [children.length, updateActivityData]
    );

    const prevSlide = current - 1 < 0 ? children.length - 1 : current - 1;
    const nextSlide = current + 1 > children.length - 1 ? 0 : current + 1;

    return (
        <div
            className="carousel"
            style={height && { "--carousel-height": `${height}px` }}>
            <ul className="carousel-slides"
                style={{ "--current-slide": `${current}` }}>
                {children.map((slide, index) => (
                    <li
                        className={`carousel-slide ${current === index ? "is-active" : ""
                            } ${index === prevSlide ? "is-left" : ""} ${index === nextSlide ? "is-right" : ""
                            }`}
                        style={{ color: current === index ? "red" : "" }}
                        key={index}
                    >
                        {slide}
                    </li>
                ))}
            </ul>

            <div className="carousel-controls">
                <motion.div
                    className="carousel-control is-prev"
                    onClick={() => goToSlide(current - 1)}
                    variants={activityControl}
                    whileHover={"hoverEffect"}
                    whileTap={"tapEffect"}>
                    <div className="carousel-arrow-ico">
                        <MdOutlineArrowBackIosNew />
                    </div>
                    <br></br>
                </motion.div>

                <motion.div
                    className="carousel-control is-next"
                    onClick={() => goToSlide(current + 1)}
                    variants={activityControl}
                    whileHover={"hoverEffect"}
                    whileTap={"tapEffect"}>
                    <div className="carousel-arrow-ico">
                        <MdOutlineArrowForwardIos />
                    </div>
                    <br></br>
                </motion.div>
            </div>

            <ul className="carousel-dots">
                {children.map((slide, index) => (
                    <li
                        className={`carousel-dot ${current === index ? "is-active" : ""}`}
                        key={index}
                        style={{ color: current === index ? "red" : "" }}

                    >
                        <motion.button
                            onClick={() => goToSlide(index)}
                            variants={activityDots}
                            whileHover={"hoverEffect"}
                            whileTap={"tapEffect"} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

Carousel.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node), // Array of React nodes
    height: PropTypes.number, // Height of the carousel
    updateActivityData: PropTypes.func, //
};

export default Carousel