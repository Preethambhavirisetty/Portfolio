import {motion, useTransform, useScroll, useSpring, MotionValue} from "framer-motion";
import {useEffect, useRef} from 'react';

import img1 from "../images/1.jpeg";
import img2 from "../images/preet.jpg";

import Skills from './Skills';

function useParallax(value, distance) {
    console.log('parallax')
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  
  function Content({dark, setDarkMode, pageActive}) {
    const about = useRef(null);
    const { scrollYProgress } = useScroll({ target: about });
    const y = useParallax(scrollYProgress, 300);
    const content = "During my academic journey, I pursued my undergraduate studies at the VR Siddhartha Engineering College before joining the computer science master's program at the State University of New York at Binghamton. My fascination with computers and software has been a driving force behind my passion for learning and applying knowledge in various projects and assignments throughout my education. I constantly strive to explore the vast realm of information and leverage it to enhance my academic pursuits.";
    // const darkModeClasses = dark ? "bg-gray-800 text-white" : "bg-white text-cyan-900 font-bold";
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center mobile:snap-start tablet:snap-center laptop:snap-center desktop:snap-center">
            <section id="about" 
            className=" flex justify-center items-center px-4
            mobile:flex mobile:flex-col-reverse mobile:w-full mobile:px-0 mobile:pt-8
            tablet:flex tablet:flex-col-reverse tablet:w-full tablet:px-0 tablet:pt-8">
                <motion.div ref={about} 
                className=" laptop:overflow-hidden desktop:overflow-hidden w-[70%] h-[60vh] m-[20px] flex flex-col justify-around text-left p-2
                mobile:w-full mobile:h-fit mobile:m-0
                tablet:w-full tablet:h-fit tablet:m-0">
                    <span className='text-2xl font-bold'>Get to Know Me Better!</span>
                    <span className='text-[1rem] font-light text-justify'>{content}</span>
                    <Skills />
                </motion.div>

                <motion.div transition={{duration:1}} className='w-[30%] border-0 mobile:w-[60%] tablet:w-[60%]'>
                    <img src={img2} alt="about" className="w-full h-full rounded-full"></img>
                </motion.div>
            </section>
        </div>
    );
  }

const About = ({darkMode, setDarkMode, pageActive}) => {
    return (
        <>
        <Content dark={darkMode} setDarkMode={setDarkMode} pageActive={pageActive}/>
        </>
    )
}

export default About;