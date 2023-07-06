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
        <div style={{color: text}} className="flex flex-col items-center space-y-4 p-0 mx-auto w-[100%]
            small:w-full small:p-0  mobile:w-full mobile:p-0 mobile:bg-white-100 tablet:w-full">
            <div className="container w-[100%] flex flex-row flex-wrap justify-left items-center space-x-0 
                small:w-full small:space-x-0 small:flex-col small:bg-white-200 small:p-2
                mobile:w-full mobile:space-x-0 mobile:flex-col mobile:bg-white-200 tablet:w-full mobile:p-2">

                <div className="text-lg font-bold border-l-2 border-l-rose-500 px-2 small:w-full small:bg-white-100 mobile:w-full">Tech Stack</div>
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
                    <div className="flex flex-row justify-center items-center space-x-5 
                    small:w-full small:bg-white-200 small:flex-wrap small:pl-0 small:ml-0
                    mobile:w-full mobile:bg-white-200 mobile:flex-wrap mobile:pl-0 mobile:ml-0">
                        <span><img src={python} alt="python_svg" width="30" height="30" /></span>
                        <span><img src={js} alt="js_svg" width="30" height="30" /></span>
                        <img src={html} alt="html_svg" width="30" height="30" />
                        <img src={css} alt="css_svg" width="30" height="30" />
                        <img src={django} alt="django_svg" width="30" height="30" />
                        <i class="devicon-flask-original-wordmark" style={{fontSize: "3.5rem"}}></i>
                        <img src={vue} alt="vue_svg" width="30" height="30" />
                        <img src={react} alt="react_svg" width="50" height="50" />
                        <img src={tailwind} alt="tailwind_svg" width="50" height="50" />
                        <i class="devicon-amazonwebservices-plain-wordmark" style={{fontSize: "4rem", color: "orange"}}></i>
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