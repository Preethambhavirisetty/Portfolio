import {motion, useTransform, useScroll} from 'framer-motion';
import {useRef} from 'react';

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

const Content = ({darkMode}) => {
    // const work = useRef(null);
    // const {scrollYProgress} = useScroll({taget: work});
    // const y = useParallax(scrollYProgress, 300);
    const darkBG = darkMode ? 'bg-gray-900' : 'bg-neutral-100';
    const darkText = darkMode ? 'text-[#D1D2D3]' : 'text-gray-900';
    const darkBorder = darkMode ? 'border-[#D1D2D3]' : 'border-gray-900';

    const work = useRef(null);
    const { scrollYProgress } = useScroll({ target: work });
    const y = useParallax(scrollYProgress, 300);
    return (
        <section id="academics" className='relative h-[100vh] snap-center flex flex-col justify-center items-center px-8'>
            <div className='w-full h-[25%] flex flex-row justify-center text-center'>
                <div className={` w-[49%] h-[40%] flex flex-col justify-center items-center text-right px-4`}>
                    <span className='text-[1.2rem] font-light'>August 2022 - Present</span>
                </div>
                <div className={`w-[5%] h-full flex flex-col`}></div>
                <div className=' w-[5%] h-full flex flex-col items-center text-center'>
                    <span className={`w-[0%] border ${darkBorder} h-[15%]`}></span>
                    <span className={`${darkText} w-full border rounded-full p-2`}><i className='fa fa-graduation-cap'></i></span>
                    <span className={`w-[0%] border ${darkBorder} h-full`}></span>
                </div>
                <div className='w-[5%] h-fit flex flex-col '></div>
                <div className={`${darkBG} ${darkText} relative w-[49%] h-[80%] border border-transparent flex flex-col text-left rounded-xl px-4 py-4
                before:content-[''] before:absolute before:top-[30px] before:-left-3 before:rotate-45 before:bg-inherit before:border before:border-l-transparent before:border-b-transparent before:border-t-0 before:border-r-0 before:p-[12px]`}>
                    <div className={`border-b ${darkBorder} flex flex-col`}>
                        <span className='text-[1.3rem] font-normal'>Binghamton University</span>
                        <span className='text-[1rem] font-light'>Master's in Computer Science</span>
                    </div>
                    <ul className='pt-2 font-light'>
                        <li>Data structres and algorithms</li>
                        <li>Utilized tools like GitHub, VSCode, Docker</li>
                    </ul>
                </div>
            </div>
            {/* 2nd div */}
            <div className=' w-full h-[25%] flex flex-row justify-center text-center'>
            <div className={`${darkBG} ${darkText} relative w-[49%] h-[80%] border border-transparent flex flex-col text-left rounded-xl px-4 py-4 
                before:content-[''] before:absolute before:top-[30px] before:-right-3 before:rotate-45 before:bg-inherit before:border before:border-l-transparent before:border-b-transparent before:border-t-0 before:border-r-0 before:p-[12px]`}>
                    <div className={`border-b ${darkBorder} flex flex-col`}>
                        <span className='text-[1.3rem] font-normal'>Accenture Pvt Ltd</span>
                        <span className='text-[1rem] font-light'>Internship</span>
                    </div>
                    <ul className='pt-2 font-light'>
                        <li>Operating Systems</li>
                        <li>Utilized tools like GitHub, VSCode, Docker</li>
                    </ul>
                </div>
                <div className='w-[5%] h-full flex flex-col '></div>
                <div className=' w-[5%] h-full flex flex-col items-center text-center'>
                    <span className={`w-[0%] border ${darkBorder} h-[15%]`}></span>
                    <span className='w-full border rounded-full p-2 '><i className='fa fa-briefcase'></i></span>
                    <span className={`w-[0%] border ${darkBorder} h-full`}></span>
                </div>
                <div className='w-[5%] h-fit flex flex-col '></div>
                <div className='w-[49%] h-[40%] flex flex-col justify-center rounded-lg text-left px-4'>
                    <span className='text-[1.2rem] font-light'> September 2020 - June 2021</span>
                </div>
            </div>
            {/* 3rd div */}
            <div className=' w-full h-[25%] flex flex-row justify-center text-center pb-0'>
                <div className='w-[49%] h-[40%] flex flex-col justify-center items-center text-right px-4'>
                    <span className='w-full text-[1.2rem] font-light '>July 2018 - May 2022</span>
                </div>
                <div className='w-[5%] h-full flex flex-col '></div>
                <div className=' w-[5%] h-full flex flex-col items-center text-center'>
                    <span className={`w-[0%] border ${darkBorder} h-[15%]`}></span>
                    <span className='w-full border rounded-full p-2 '><i className='fa fa-graduation-cap'></i></span>
                    <span className={`w-[0%] border ${darkBorder} h-full`}></span>
                </div>
                <div className='w-[5%] h-fit flex flex-col '></div>
                <div className={`${darkBG} ${darkText} relative w-[49%] h-[80%] border border-transparent flex flex-col text-left rounded-xl px-4 py-4
                before:content-[''] before:absolute before:top-[30px] before:-left-3 before:rotate-45 before:bg-inherit before:border before:border-l-transparent before:border-b-transparent before:border-t-0 before:border-r-0 before:p-[12px]`}>
                    <div className={`border-b ${darkBorder} flex flex-col pl-2`}>
                        <span className='text-[1.3rem] font-normal'>VR Siddhartha Engineering College</span>
                        <span className='text-[1rem] font-light'>Bachelor's in Computer Science</span>
                    </div>
                    <ul className='pt-2 text-[0.9rem] font-light'>
                        <li>Operating Systems</li>
                        <li>Utilized tools like GitHub, VSCode, Docker</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

const Workex = ({darkMode}) => {
    return (
        <Content darkMode={darkMode} />
    )
}

export default Workex;




            // <div className='border-2 relative w-full h-full text-center grid grid-cols-3 gap-0 justify-items-center overflow-scroll px-4 py-2'>
            //     <div className=' border text-right'>
            //         <span className="border">August 2022 - Present</span>
            //     </div>
            //     <div className=' w-[0%] border'>
            //         <span className='border rounded-full p-2'><i className='fa fa-graduation-cap'></i></span>
            //     </div>
            //     <div className='border text-left'>
                    // <span className="">Binghamton University</span>
                    // <span>Master's in Computer Science</span>
            //     </div>
            //     {/* 2nd Exp */}
            //     <div className='border text-right'>
            //         <span className="">Binghamton University</span>
            //         <span>Master's in Computer Science</span>
            //     </div>
            //     <div className=' w-[0%] border'>
            //         <span className='border rounded-full p-2'><i className='fa fa-briefcase'></i></span>
            //     </div>
            //     <div className=' w-[100%] border text-left'>
            //         <span className="border">August 2022 - Present</span>
            //     </div>
            // </div>