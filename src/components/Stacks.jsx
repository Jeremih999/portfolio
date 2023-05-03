import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../utils/motion";
import { experiences } from "../Constants";



const Stack = ({experience}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#F58840",
                color: "#000",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #B85252" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            // icon={
            //     <div className='flex justify-center items-center w-full h-full'>
            //         <img
            //             src={experience.icon}
            //             alt={experience.company_name}
            //             className='w-[60%] h-[60%] object-contain'
            //         />
            //     </div>
            // }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {/* {experience.company_name} */}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    )
}

const Stacks = () => {
    return (
        <div className="stacks-container">
            <motion.div variants={textVariant()}>
                <p 
                className="section-sub__text"
                >
                    These Are The Skills i Have Under My Belt
                </p>
                <h2 
                className="section-head__text"
                >
                    My Skill set
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <Stack
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Stacks