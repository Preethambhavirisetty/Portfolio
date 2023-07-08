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
    const darkBG = dark ? 'bg-gray-900' : 'bg-gray-800';
    const darkText = dark ? 'text-[#D1D2D3]' : 'text-[#D1D2D3]';
    projects.forEach((obj) => 
        p.push(
            <div 
            className={`w-[32%] h-[56%] flex flex-col justify-around shadow-3xl rounded-xl ${dark ? "bg-gray-800" : "bg-white"} p-2
            mobile:w-[90%] mobile:h-[30%] mobile:p-4 tablet:w-[70%] tablet:h-[30%] tablet:p-4`}>
                <motion.div className="h-[40%] w-full p-2 rounded-xl tablet:h-[60%]">
                    <img src={obj.image} alt="about" className="w-full h-full"></img>
                </motion.div>
                <motion.div ref={about} className="flex flex-col  h-[60%] p-2 ">
                    <span className="text-[1.3rem] font-bold">{obj.name}</span>
                    {/* <span className="text-[1.2rem] font-normal ">{obj.type}</span> */}
                    <span className="text-[0.9rem] font-light tablet:text-[1.1rem]">{obj.Description}</span>
                </motion.div>
                <motion.div className="flex justify-start items-center space-x-2 px-2 w-full">
                    {/* <span classname="">Tech Stack</span>   */}
                    <span className="flex flex-row">{obj.tech.map((icon) => {return <img src={icon} alt="html_svg" className="p-2 rounded-full shadow" width="40" height="40"/>})}</span>
                </motion.div>
            </div>
        )
)
    return (
        <div className="flex flex-col h-fit mb-0 -space-y-[80vh]">
            <div className={`sticky top-0 right-0 left-0 bottom-0 w-full p-2 ${dark ? "bg-gradient-to-r from-gray-800 to-gray-900":"bg-gradient-to-r from-[#D2E9E9] to-[#B0DAFF]"}  h-[100vh] flex flex-col justify-start items-center`}>
            {/* ${dark ? "bg-gradient-to-r from-gray-800 to-gray-900":"bg-gradient-to-r from-[#F7FFE5] to-[#A0C49D]"} */}
                <span className="text-[2rem] font-normal mt-10">Projects</span>
            </div>
            {/* <div className={`hidden mobile:flex tablet:flex sticky  top-0 left-0 right-0 flex justify-between items-center w-full z-10 p-2`}>
                <span className={`text-xl font-bold text-left ${dark ? 'bg-black' : 'bg-white'} p-2`}>Projects</span>
            </div> */}
            <section id="projects" 
            className={`${dark ? 'bg-black shadow shadow-black shadow-3xl' : 'shadow-3xl'} h-[100vh] z-20 w-[95%] mx-auto rounded-xl bg-transparent flex flex-row flex-wrap space-x-4 p-[10px] space-y-0 justify-center items-center pt-10  
            mobile:w-full mobile:h-[180vh] mobile:flex mobile:flex-col mobile:flex-nowrap mobile:justify-center mobile:items-center mobile:p-0 mobile:pt-20 mobile:space-y-4 mobile:space-x-0
            tablet:w-full tablet:h-[180vh] tablet:flex tablet:flex-col tablet:flex-nowrap tablet:justify-center tablet:items-center tablet:p-0 tablet:pt-20 tablet:space-y-4 tablet:space-x-0`}>
            {/* tablet:snap-center laptop:snap-center desktop:snap-center */}
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
            "Description": "A powerful gesture recognition system for the browser.Motion extends the basic set of event listeners provided by React with a simple yet powerful set of UI gesture recognisers.It currently has support for hover, tap, pan and drag gesture detection.",
            "type": "Website",
            "image": geolocation,
            "tech": [django, tailwind]
        },
        {
            "name": "Rate my Food",
            "Description": "A powerful gesture recognition system for the browser.Motion extends the basic set of event listeners provided by React with a simple yet powerful set of UI gesture recognisers.It currently has support for hover, tap, pan and drag gesture detection.",
            "type": "Website",
            "image":ratemyfood,
            "tech": [django, sql, html, js, tailwind]
        },
        {
            "name": "Portfolio",
            "Description": "A powerful gesture recognition system for the browser.Motion extends the basic set of event listeners provided by React with a simple yet powerful set of UI gesture recognisers.It currently has support for hover, tap, pan and drag gesture detection.",
            "type": "Website",
            "image":portfolio,
            "tech": [python, html, tailwind]
        }
    ]
    return (
        <Content projects={projects} dark={darkMode} setDarkMode={setDarkMode} pageActive={pageActive} />
    )
  }

  export default Projects;









//   import {motion, useTransform, useScroll, useSpring, MotionValue} from "framer-motion";
// import {useEffect, useRef} from 'react';
// //projects
// import geolocation from "../images/geolocation.png";
// import ratemyfood from "../images/ratemyfood.jpeg";
// import portfolio from "../images/portfolio.jpeg";
// // Skills
// import django from '../icons/django.svg';
// import python from '../icons/python.svg';
// import css from '../icons/css.svg';
// import html from '../icons/html.svg';
// import js from '../icons/js.svg';
// import react from '../icons/logo.svg';
// import sql from '../icons/postgresql.svg';
// import tailwind from '../icons/tailwind_icon.svg';

// function useParallax(value, distance) {
//     return useTransform(value, [0, 1], [-distance, distance]);
//   }
  
//   function Content({projects, dark, setDarkMode, pageActive}) {
//     const about = useRef(null);
//     const { scrollYProgress } = useScroll({ target: about });
//     const y = useParallax(scrollYProgress, 300);
//     const p = [];
//     const darkBG = dark ? 'bg-gray-900' : 'bg-gray-800';
//     const darkText = dark ? 'text-[#D1D2D3]' : 'text-[#D1D2D3]';
//     projects.forEach((obj) => 
//         p.push(
//             <div className='w-full h-[250px] flex flex-row tablet:odd:flex-row-reverse laptop:odd:flex-row-reverse desktop:odd:flex-row-reverse justify-around font-light p-2
//             mobile:h-fit mobile:flex-col'>
//                 <motion.div className="w-[40%] h-[200px] p-2 mobile:w-full">
//                     <img src={obj.image} alt="about" className="w-full h-full"></img>
//                 </motion.div>
//                 <motion.div ref={about} className="flex flex-col  w-[60%] h-fit mobile:w-full">
//                     <span className="text-[1.6rem] font-bold">{obj.name}</span>
//                     <span className="text-[1.2rem] font-normal ">{obj.type}</span>
//                     <span className="text-[1rem] font-light ">{obj.Description}</span>
//                 </motion.div>
//                 <motion.div>
//                     {obj.tech.forEach((icon) => {<img src={icon} alt="html_svg" width="30" height="30"/>})}
//                 </motion.div>
//             </div>
//         )
// )
//     return (
//         <div className="flex flex-col mb-20 -space-y-[80vh]">
//             <div className="sticky top-0 right-0 left-0 bottom-0 w-full p-2 bg-gradient-to-r from-teal-100 to-[#87CBB9]  h-[100vh] flex flex-col justify-start items-center">
//                 <span className="text-[2rem] font-normal mt-10">Projects</span>
//             </div>
//             <div className={`hidden mobile:flex tablet:flex sticky  top-0 left-0 right-0 flex justify-between items-center w-full z-10 p-2`}>
//                 <span className={`text-xl font-bold text-left ${dark ? 'bg-black' : 'bg-white'} p-2`}>Projects</span>
//             </div>
//             <section id="projects" className={`${dark ? 'bg-black' : 'bg-white'} h-[100vh] z-20 w-[80%] mx-auto shadow-3xl  rounded-xl  mobile:w-full flex flex-col justify-center items-center overflow-scroll px-2 pt-10  mobile:mt-[2rem]`}>
//             {/* tablet:snap-center laptop:snap-center desktop:snap-center */}
//                 {p}
//             </section>
//         </div>
//         );
//   }

//   const Projects = ({darkMode, setDarkMode, pageActive}) => {
//     const aws = '<i class="devicon-amazonwebservices-plain-wordmark" style={{fontSize: "4rem", color: "orange"}}></i>'

//     const projects = [
//         {
//             "name": "GeoLocation",
//             "Description": "A powerful gesture recognition system for the browser.Motion extends the basic set of event listeners provided by React with a simple yet powerful set of UI gesture recognisers.It currently has support for hover, tap, pan and drag gesture detection.",
//             "type": "Website",
//             "image": geolocation,
//             "tech": [django, react, tailwind]
//         },
//         {
//             "name": "Rate my Food",
//             "Description": "A powerful gesture recognition system for the browser.Motion extends the basic set of event listeners provided by React with a simple yet powerful set of UI gesture recognisers.It currently has support for hover, tap, pan and drag gesture detection.",
//             "type": "Website",
//             "image":ratemyfood,
//             "tech": [django, sql, react, html, js, tailwind]
//         },
//         {
//             "name": "Portfolio",
//             "Description": "A powerful gesture recognition system for the browser.Motion extends the basic set of event listeners provided by React with a simple yet powerful set of UI gesture recognisers.It currently has support for hover, tap, pan and drag gesture detection.",
//             "type": "Website",
//             "image":portfolio,
//             "tech": [python, react, html, tailwind]
//         }
//     ]
//     return (
//         <Content projects={projects} dark={darkMode} setDarkMode={setDarkMode} pageActive={pageActive} />
//     )
//   }

//   export default Projects;