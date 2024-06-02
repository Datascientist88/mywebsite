import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import {Tilt} from 'react-tilt';
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[18px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[18px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


function About() {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
    className="mt-5 text-secondary text-[16px] max-w-3xl leading-[25px]">
        Experienced data science professional with over 5 years of expertise in artificial intelligence, machine learning, and data analytics.
        Skilled in building AI-based applications and systems to transform businesses, leveraging Python, JavaScript, Julia, Dart, and Scala programming languages.
        Proficient in TensorFlow and PyTorch frameworks for developing and training robust neural networks, Certified Artificial Intelligence Scientist. 
        Strong background in front-end development for data visualization, enabling effective communication of insights to stakeholders. 
        Proven track record of driving innovation and delivering actionable insights to optimize business strategies. 
        Committed to continuous learning and staying abreast of emerging technologies in the dynamic field of data science.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about");
