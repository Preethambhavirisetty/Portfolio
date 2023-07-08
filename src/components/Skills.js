// import '@fortawesome/fontawesome-free/css/all.min.css'; 

import django from '../icons/django.svg';
import python from '../icons/python.svg';
import css from '../icons/css.svg';
import html from '../icons/html.svg';
import js from '../icons/js.svg';
import vue from '../icons/vuejs.svg';
import react from '../icons/logo.svg';
import tailwind from '../icons/tailwind_icon.svg';

import { motion } from "framer-motion";


 function Skills({dark}) {
    // let bg = '';
    let text = '';

    if(dark){
        // dark stuff
        // #121212, #1F1B24, #1F1A24
        // bg = "#121212";
        text = "#D1D2D3";
        // lower opacity for hovered content, thatsit

    }
    return (
        <div style={{color: text}} className="flex flex-row items-center space-y-4 p-0 mx-auto w-[100%]
            small:w-full small:p-0  mobile:w-full mobile:p-0 tablet:w-full">
            <div className="w-[100%] flex flex-row flex-wrap justify-center items-center space-x-0 
                small:w-full small:space-x-0 small:flex-col small:bg-white-200 small:p-2
                mobile:w-full mobile:space-x-0 mobile:flex-col mobile:bg-white-200 tablet:w-full mobile:p-2">

                <div className="text-2xl font-bold px-2 w-[20%] small:w-full small:bg-white-100 mobile:w-full">Skills</div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:1}}
                    variants={{
                        hidden: {opacity:0, x:50},
                        visible: {opacity:1, x:0}
                    }}
                    animate={{scale:[1, 1.2, 1]}}>
                    <div className="flex flex-row justify-around items-center space-x-6  w-full p-2
                    small:w-full small:bg-white-200 small:flex-wrap small:pl-0 small:ml-0
                    mobile:w-full mobile:flex-wrap mobile:pl-0 mobile:ml-0">
                        <span className={`p-2 rounded-full  ${dark ? '': 'shadow-lg'}`}><img src={python} alt="python_svg" width="30" height="30" /></span>
                        <span className={`p-2 rounded-full  ${dark ? '': 'shadow-lg'}`}><img src={js} alt="js_svg" width="30" height="30" /></span>
                        <span className={`p-2 rounded-full  ${dark ? '': 'shadow-lg'}`}><img src={html} alt="html_svg" width="30" height="30" /></span>
                        <span className={`p-2 rounded-full  ${dark ? '': 'shadow-lg'}`}><img src={css} alt="css_svg" width="30" height="30" /></span>
                        <span className={`p-2 rounded-full  ${dark ? '': 'shadow-lg'}`}><img src={django} alt="django_svg" width="30" height="30" /></span>
                        <span className={`p-2 rounded-full  ${dark ? '': 'shadow-lg'}`}><img src={vue} alt="vue_svg" width="30" height="30" /></span>
                        <span className={`p-2 rounded-full  ${dark ? '': 'shadow-lg'}`}><img src={tailwind} alt="tailwind_svg" width="30" height="30" /></span>
                        <span className={`p-2 rounded-full  ${dark ? '': 'shadow-lg'}`}><img src={tailwind} alt="tailwind_svg" width="30" height="30" /></span>
                        {/* <span className={`border px-2 py-2 rounded-full  ${dark ? 'shadow-gray-100 shadow-lg': 'shadow-gray-200 shadow-xl'}`}><img src={react} alt="react_svg" width="30" height="30" /></span> */}
                        {/* <span className={`border p-2 rounded-full  ${dark ? 'shadow-gray-100 shadow-lg': 'shadow-gray-200 shadow-xl'}`}><i class="devicon-amazonwebservices-plain-wordmark" style={{fontSize: "4rem", color: "orange"}}></i></span> */}
                    </div>
                </motion.div>
            </div>
        </div>
    )
 }
//  <div className="container py-8 px-8 max-w-[80%] rounded-xl space-y-2">
 export default Skills;

//  npm install @fortawesome/fontawesome-free

//  npm install -D tailwindcss

// https://www.svgrepo.com/vectors/vuejs/