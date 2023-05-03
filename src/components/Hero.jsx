import React from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";
import ComputersCanvas from "./canvas/Computers";
import {BsTwitter, BsGithub, BsLinkedin} from "react-icons/bs"
import { SectionWrapper } from "../hoc";

const Hero = () => {
    return (
        <div className="hero-computer-container">
            <div className="hero_container">
                <div className="hero-inner">
                    <div className="social_media-container">
                        <div className="circle"></div>
                        <div className="straight-line"></div>
                        <BsTwitter style={{"color" : "#F58840"}} />
                        <BsGithub style={{"color" : "#F58840"}} />
                        <BsLinkedin style={{"color" : "#F58840"}}  />
                    </div>

                    <div className="hero-text">
                        <motion.div variants={textVariant()}>
                        <h1 className="head-text">Hi, My Name Is Wisdom Shotz</h1>
                        </motion.div>
                        <motion.p variants={fadeIn("", "", 0.1, 1)} className="sub-text">I'm A web developer, Graphics Designer, Photographer, Videographer</motion.p>
                        <div className="computer-3d">
                            <ComputersCanvas />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SectionWrapper(Hero, "home")