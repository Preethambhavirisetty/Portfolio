import {motion, useTransform, useScroll} from 'framer-motion';
import {useRef} from 'react';
import resume_pree from '../Krishna_bhavirisetty_resume.docx'

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

const Content = ({exps, setDarkMode, darkMode, pageActive}) => {
    const darkBG = darkMode ? 'bg-gray-900' : 'bg-[#394867]';
    const darkText = darkMode ? 'text-[#D1D2D3]' : 'text-[#F1F6F9]';
    const darkBorder = darkMode ? 'border-[#D1D2D3]' : 'border-[#F1F6F9]';

    const work = useRef(null);
    const { scrollYProgress } = useScroll({ target: work });
    const y = useParallax(scrollYProgress, 300);
    const p = [];
    exps.forEach(({id,univname, stream, content, date}) => p.push(
        <div className='w-full h-[20%] mobile:w-full flex flex-row tablet:even:flex-row-reverse laptop:even:flex-row-reverse desktop:even:flex-row-reverse justify-center text-center mobile:justify-around mobile:h-[45%]'>
            <div className={`hidden tablet:flex laptop:flex desktop:flex w-[49%] h-[30%] flex-col justify-center items-center text-right px-4 mobile:w-[25%] mobile:text-left mobile:px-0`}>
                <span className='text-[1.2rem] font-normal mobile:text-[0.7rem]'>{date}</span>
            </div>
            <div className={`w-[5%] h-full flex flex-col mobile:invisible`}></div>
            <div className=' w-[10%] h-full flex flex-col items-center text-center'>
                <span className={`w-[0%] border ${darkBorder} h-[15%]`}></span>
                <span className={`${darkMode ? 'text-[#D1D2D3]' : 'text-gray-800'} w-[15%] border rounded-full p-4 flex items-center justify-center text-[0.8rem] `}><i className='fa fa-graduation-cap'></i></span>
                <span className={`w-[0%] border ${darkBorder} h-full`}></span>
            </div>
            <div className='w-[5%] h-fit flex flex-col mobile:invisible '></div>
            <div className={`${darkBG} ${darkText} relative w-[49%] h-fit border-transparent flex flex-col text-left rounded-xl px-4 py-4 mobile:text-sm mobile:w-[80%] mobile:h-fit
                before:content-[''] before:absolute before:border before:top-[30px] ${id%2 != 0 ? "before:-left-3" : "tablet:before:-right-3 laptop:before:-right-3 desktop:before:-right-3 mobile:before:-left-3"} before:rotate-45 before:bg-inherit before:border before:border-l-transparent before:border-b-transparent before:border-t-0 before:border-r-0 before:p-[12px]`}>
                <div className={`border-b ${darkBorder} flex flex-col`}>
                    <span className='text-[1.2rem] font-normal mobile:text-[1rem]'>{univname}</span>
                    <span className='text-[1rem] font-light mobile:text-[0.8rem]'>{stream}</span>
                    <span className='hidden mobile:flex text-[1rem] font-light'>{date}</span>
                </div>
                <ul className='pt-2 font-light mobile:h-fit mobile:p-4'>
                    {content.map((obj) => <li>{obj}</li>)}
                </ul>
            </div>
        </div>
    ))
    return (
        <div className="flex flex-col mb-0 -space-y-[80vh]">
            <div className={`sticky top-0 right-0 left-0 bottom-0 w-full p-2 ${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900":"bg-gradient-to-r from-[#D2E9E9] to-[#B0DAFF]"}  h-[100vh] flex flex-col items-center justify-start`}>
                <span className="text-[2.5rem] font-normal mt-[20px]">Professional Journey</span>
                {/* <a href={resume_pree} className={`${darkBG} ${darkText} font-light w-fit rounded-lg p-2 bg-gray-300`} download> Resume <i className="fa fa-download"></i></a> */}
            </div>
            <div className={`hidden mobile:flex tablet:flex sticky top-0 left-0 right-0 flex justify-between items-center w-full z-10 p-2`}>
                <span className={`text-xl font-bold text-left ${darkMode ? 'bg-black' : 'bg-white'} p-2`}>Workex</span>
            </div>
            <section id="academics" className= {`${darkMode ? "shadow shadow-black shadow-3xl" : "shadow-3xl"} h-[100vh] z-20 w-[95%] mx-auto bg-transparent rounded-xl  mobile:w-full flex flex-col justify-center items-center px-8 pt-10 mobile:p-2 mobile:mt-[5rem]`}>
            {/* tablet:snap-center laptop:snap-center desktop:snap-center */}
                {p}
            </section>
        </div>
    )
}

const Workex = ({darkMode, setDarkMode, pageActive}) => {
    const exps = [
        {
            "id":1,
            "univname": "Binghamton University",
            "stream": "Master's in Computer Science",
            "content": ["Data structres and algorithms", "Utilized tools like GitHub, VSCode, Docker"],
            "date": "Aug 2022 - Present"
        },
        {
            "id":2,
            "univname": "Accenture Pvt Ltd",
            "stream": "Internship",
            "content": ["Operating Systems", "Utilized tools like GitHub, VSCode, Docker"],
            "date": "Sep 2020 - Jun 2021"
        },
        {
            "id":3,
            "univname": "VR Siddhartha Engineering College",
            "stream": "Bachelor's in Computer Science",
            "content": ["Data structres and algorithms", "Utilized tools like GitHub, VSCode, Docker"],
            "date": "Jul 2018 - May 2022"
        },
        {
            "id":4,
            "univname": "Saadrusso technology solution",
            "stream": "Backend Developer",
            "content": ["I used this technologies Golang, SQLite, VSCode, API"],
            "date": "Jan 2022 - Apr 2022"
        }
    ]
    return (
        <Content exps={exps} darkMode={darkMode} setDarkMode={setDarkMode} pageActive={pageActive} />
    )
}

export default Workex;




                //    {/* 2nd div */}
                //    <div className=' w-full h-[25%] flex flex-row justify-center text-center'>
                //    <div className={`${darkBG} ${darkText} relative w-[49%] h-[80%] border border-transparent flex flex-col text-left rounded-xl px-4 py-4 
                //        before:content-[''] before:absolute before:top-[30px] before:-right-3 before:rotate-45 before:bg-inherit before:border before:border-l-transparent before:border-b-transparent before:border-t-0 before:border-r-0 before:p-[12px]`}>
                //            <div className={`border-b ${darkBorder} flex flex-col`}>
                //                <span className='text-[1.3rem] font-normal'>Accenture Pvt Ltd</span>
                //                <span className='text-[1rem] font-light'>Internship</span>
                //            </div>
                //            <ul className='pt-2 font-light'>
                //                <li>Operating Systems</li>
                //                <li>Utilized tools like GitHub, VSCode, Docker</li>
                //            </ul>
                //        </div>
                //        <div className='w-[5%] h-full flex flex-col '></div>
                //        <div className=' w-[5%] h-full flex flex-col items-center text-center'>
                //            <span className={`w-[0%] border ${darkBorder} h-[15%]`}></span>
                //            <span className='w-full border rounded-full p-2 '><i className='fa fa-briefcase'></i></span>
                //            <span className={`w-[0%] border ${darkBorder} h-full`}></span>
                //        </div>
                //        <div className='w-[5%] h-fit flex flex-col '></div>
                //        <div className='w-[49%] h-[40%] flex flex-col justify-center rounded-lg text-left px-4'>
                //            <span className='text-[1.2rem] font-light'> September 2020 - June 2021</span>
                //        </div>
                //    </div>
                //    {/* 3rd div */}
                //    <div className=' w-full h-[25%] flex flex-row justify-center text-center pb-0'>
                //        <div className='w-[49%] h-[40%] flex flex-col justify-center items-center text-right px-4'>
                //            <span className='w-full text-[1.2rem] font-light '>July 2018 - May 2022</span>
                //        </div>
                //        <div className='w-[5%] h-full flex flex-col '></div>
                //        <div className=' w-[5%] h-full flex flex-col items-center text-center'>
                //            <span className={`w-[0%] border ${darkBorder} h-[15%]`}></span>
                //            <span className='w-full border rounded-full p-2 '><i className='fa fa-graduation-cap'></i></span>
                //            <span className={`w-[0%] border ${darkBorder} h-full`}></span>
                //        </div>
                //        <div className='w-[5%] h-fit flex flex-col '></div>
                //        <div className={`${darkBG} ${darkText} relative w-[49%] h-[80%] border border-transparent flex flex-col text-left rounded-xl px-4 py-4
                //        before:content-[''] before:absolute before:top-[30px] before:-left-3 before:rotate-45 before:bg-inherit before:border before:border-l-transparent before:border-b-transparent before:border-t-0 before:border-r-0 before:p-[12px]`}>
                //            <div className={`border-b ${darkBorder} flex flex-col pl-2`}>
                //                <span className='text-[1.3rem] font-normal'>VR Siddhartha Engineering College</span>
                //                <span className='text-[1rem] font-light'>Bachelor's in Computer Science</span>
                //            </div>
                //            <ul className='pt-2 text-[0.9rem] font-light'>
                //                <li>Operating Systems</li>
                //                <li>Utilized tools like GitHub, VSCode, Docker</li>
                //            </ul>
                //        </div>
                //    </div>
       