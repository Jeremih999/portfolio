import React from "react";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects } from "../Constants";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects-container">
      <motion.div
        variants={textVariant}
        className="p-head__text"
      >
        <p className= "section-sub__text">My recent works</p>
        <h1 className="section-head__text">PROJECTS</h1>
      </motion.div>
      <div className="projects-img__container">
      <div className = "p-width">
        {projects.map((project, index) => (
          <Tilt>
            <motion.div
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="projects-details"
              >
                <div className="p-img__container">
                <img src={project.image} alt={project.name} />
                <a href={project.source_code_link}><BsGithub  /></a>
                </div>
                 <motion.div
                  variants={textVariant}
                  className="p-text__details">
                   <p>{project.description}</p>
                   <div className="p-tags">
                    {project.tags.map((tag)=>(
                      <div style={{"color" : tag.color}}>{tag.name}</div>
                    ))}
                   </div>
                 </motion.div>
              </div>
            </motion.div>
          </Tilt>
        ))}

      </div>
      <Link to="/portfolio">Veiw All &rarr;</Link>
      </div>

    </div>
  )
}

export default SectionWrapper(Projects, "projects")