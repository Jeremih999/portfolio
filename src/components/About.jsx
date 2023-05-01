import React from "react";
import {Tilt} from "react-tilt";

import { BsWebcamFill, BsCameraFill } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";
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
                            <div
                                options={{
                                    max: 45,
                                    scale: 1,
                                    speed: 450,
                                }}
                                className="cards-details"
                            >
                                <BsWebcamFill/>
                                <h3>Web Development</h3>
                            </div>
                        </Tilt>

                        <Tilt>
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
                        </Tilt>

                        <Tilt>
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
                        </Tilt>


                        <Tilt>
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
                        </Tilt>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About