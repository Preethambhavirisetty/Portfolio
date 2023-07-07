import {motion, useTransform, useScroll} from "framer-motion";
import {useRef} from 'react';

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
    const content = "During my academic journey, I pursued my undergraduate studies at the VR Siddhartha Engineering College before joining the computer science master's program at the State University of New York at Binghamton.";
    // const darkModeClasses = dark ? "bg-gray-800 text-white" : "bg-white text-cyan-900 font-bold";
    return (
        <div className="flex flex-col mb-0 -space-y-[80vh]">
            <div className={`sticky top-0 right-0 left-0 bottom-0 w-full p-2 ${dark ? "bg-gradient-to-r from-gray-800 to-gray-900":"bg-gradient-to-r from-[#E3F4F4] to-[#93BFCF]"} h-[100vh] flex flex-col items-center justify-start`}>
                <span className="text-[2rem] font-normal mt-10">Get to Know Me Better!</span>
            </div>
            <div className={`h-[100vh] z-20 w-[80%] bg-white mx-auto ${dark ? "shadow shadow-black shadow-3xl" : "shadow-3xl"}  bg-transparent rounded-xl  mobile:w-full flex flex-col justify-center items-center px-8 pt-10`}>
                {/* mobile:snap-start tablet:snap-center laptop:snap-center desktop:snap-center"> */}
                <section id="about" 
                className=" flex flex-col justify-around items-center p-4 h-[70%] w-[80%] text-center
                mobile:flex mobile:flex-col-reverse mobile:w-full mobile:px-0 mobile:pt-8
                tablet:flex tablet:flex-col-reverse tablet:w-full tablet:px-0 tablet:pt-8">
                    <motion.div transition={{duration:1}} className='w-[35%] border-0 mobile:w-[60%] tablet:w-[60%]'>
                        <img src={img2} alt="about" className="w-full h-full rounded-full"></img>
                    </motion.div>
                    <motion.div ref={about} 
                    className=" laptop:overflow-hidden desktop:overflow-hidden w-[90%] h-[30%] m-[20px] flex flex-col justify-around text-left p-2
                    mobile:w-full mobile:h-fit mobile:m-0
                    tablet:w-full tablet:h-fit tablet:m-0">
                        {/* <span className='text-2xl font-bold'></span> */}
                        <span className='text-[1rem] font-light text-justify'>{content}</span>
                    </motion.div>
                    <Skills />
                </section>
            </div>
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