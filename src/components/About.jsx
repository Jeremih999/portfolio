import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { BsWebcamFill, BsCameraFill } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";
import { fadeIn, textVariant } from "../utils/motion";
import {SectionWrapper} from "../hoc"
// import {  } from "react-icons/bs";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-grid">
                <div className="about-experience">
                    <h1>3+</h1>
                    <h3>Years Of learning & Working</h3>
                    <p>loremlorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                </div>
                <div className="works-container">
                    <h1>Web Design, Product Design, Graphics Design and Photographs</h1>
                    <div className="cards-container">
                        <Tilt>
                            <motion.div
                                variants={fadeIn("right", "spring", 1 * 0.5, 0.75)}
                                // className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                            >
                                <div
                                    options={{
                                        max: 45,
                                        scale: 1,
                                        speed: 450,
                                    }}
                                    className="cards-details"
                                >
                                    <BsWebcamFill />
                                    <h3>Web Development</h3>
                                </div>
                            </motion.div>

                        </Tilt>

                        <Tilt>
                        <motion.div
                                variants={fadeIn("right", "spring", 2 * 0.5, 0.75)}
                                // className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                            >
                            <div
                                options={{
                                    max: 45,
                                    scale: 1,
                                    speed: 450,
                                }}
                                className="cards-details"
                            >
                                <FaPaintBrush />
                                <h3>Product Design</h3>
                            </div>
                            </motion.div>
                        </Tilt>

                        <Tilt>
                        <motion.div
                                variants={fadeIn("right", "spring", 3 * 0.5, 0.75)}
                                // className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                            >
                            <div
                                options={{
                                    max: 45,
                                    scale: 1,
                                    speed: 450,
                                }}
                                className="cards-details"
                            >
                                <MdGraphicEq />
                                <h3>Graphics Design</h3>
                            </div>
                            </motion.div>
                        </Tilt>


                        <Tilt>
                        <motion.div
                                variants={fadeIn("right", "spring", 4 * 0.5, 0.75)}
                                // className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                            >
                            <div
                                options={{
                                    max: 45,
                                    scale: 1,
                                    speed: 450,
                                }}
                                className="cards-details"
                            >
                                <BsCameraFill />
                                <h3>Photographs</h3>
                            </div>
                            </motion.div>
                        </Tilt>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper(About, "about")