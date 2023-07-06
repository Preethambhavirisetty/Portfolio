import {motion, useTransform, useScroll, useSpring, MotionValue} from "framer-motion";
import {useEffect, useRef} from 'react';
//projects
import geolocation from "../images/geolocation.png";
import ratemyfood from "../images/ratemyfood.jpeg";
import portfolio from "../images/portfolio.jpeg";
// Skills
import django from '../icons/django.svg';
import python from '../icons/python.svg';
import css from '../icons/css.svg';
import html from '../icons/html.svg';
import js from '../icons/js.svg';
import react from '../icons/logo.svg';
import sql from '../icons/postgresql.svg';
import tailwind from '../icons/tailwind_icon.svg';

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  
  function Content({projects, dark, setDarkMode, pageActive}) {
    const about = useRef(null);
    const { scrollYProgress } = useScroll({ target: about });
    const y = useParallax(scrollYProgress, 300);
    const p = [];
    projects.forEach((obj) => 
        p.push(
            <div className='w-full h-[250px] flex flex-row tablet:odd:flex-row-reverse laptop:odd:flex-row-reverse desktop:odd:flex-row-reverse justify-around font-light p-2
            mobile:h-fit mobile:flex-col'>
                <motion.div className="w-[30%] h-[200px] mobile:w-full">
                    <img src={obj.image} alt="about" className="w-full h-full"></img>
                </motion.div>
                <motion.div ref={about} className="relative flex flex-col  w-[60%] h-fit mobile:w-full">
                    <span className="text-[1.6rem] font-bold">{obj.name}</span>
                    <span className="text-[1.2rem] font-light ">{obj.type}</span>
                    <span className="text-[1rem] font-light ">{obj.Description}</span>
                </motion.div>
                <motion.div>
                    {obj.tech.forEach((icon) => {<img src={icon} alt="html_svg" width="30" height="30"/>})}
                </motion.div>
            </div>
        )
)
    return (
        <div className="mobile:snap-start">
            <div className={`hidden mobile:flex tablet:flex sticky  top-0 left-0 right-0 flex justify-between items-center w-full z-10 p-2`}>
                <span className={`text-xl font-bold text-left ${dark ? 'bg-black' : 'bg-white'} p-2`}>Projects</span>
            </div>
            <section id="projects" className="h-[100vh] flex flex-row flex-wrap justify-around items-center space-x-2 tablet:snap-center laptop:snap-center desktop:snap-center overflow-scroll mobile:mt-[2rem]">
                {p}
            </section>
        </div>
        );
  }

  const Projects = ({darkMode, setDarkMode, pageActive}) => {
    const aws = '<i class="devicon-amazonwebservices-plain-wordmark" style={{fontSize: "4rem", color: "orange"}}></i>'

    const projects = [
        {
            "name": "GeoLocation",
            "Description": "A powerful gesture recognition system for the browser.Motion extends the basic set of event listeners provided by React with a simple yet powerful set of UI gesture recognisers.It currently has support for hover, tap, pan and drag gesture detection. Each gesture has a series of event listeners that you can attach to your motion component.",
            "type": "Website",
            "image": geolocation,
            "tech": [django, react, tailwind]
        },
        {
            "name": "Rate my Food",
            "Description": "A powerful gesture recognition system for the browser.Motion extends the basic set of event listeners provided by React with a simple yet powerful set of UI gesture recognisers.It currently has support for hover, tap, pan and drag gesture detection. Each gesture has a series of event listeners that you can attach to your motion component.",
            "type": "Website",
            "image":ratemyfood,
            "tech": [django, sql, react, html, js, tailwind]
        },
        {
            "name": "Portfolio",
            "Description": "A powerful gesture recognition system for the browser.Motion extends the basic set of event listeners provided by React with a simple yet powerful set of UI gesture recognisers.It currently has support for hover, tap, pan and drag gesture detection. Each gesture has a series of event listeners that you can attach to your motion component.",
            "type": "Website",
            "image":portfolio,
            "tech": [python, react, html, tailwind]
        }
    ]
    return (
        <Content projects={projects} dark={darkMode} setDarkMode={setDarkMode} pageActive={pageActive} />
    )
  }

  export default Projects;