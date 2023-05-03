import React from "react";
import {SectionWrapper} from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const Projects = ()=>{
    return(
        <div className="projects-container">
          <motion.div>
            <p>My recent works</p>
            <h1>PROJECTS</h1>
          </motion.div>
        <Tilt>
            
        </Tilt>
          
        </div>
    )
}

export default SectionWrapper(Projects)