import About from './components/About';
import Projects from './components/Projects';
import Workex from './components/Workex';
import Footer from './components/Footer';

import {motion} from 'framer-motion';

import {useEffect, useRef, useState} from 'react';

const LeftBar = ({pageactive, darkMode, setDarkMode} ) => {
  const pageActiveClassnames = 'font-bold text-xl';
  return(
    <>
      <div className='flex flex-col justify-left text-left px-8'>
        <span className='text-[2.2rem] font-bold font-dance'>Preetham Bhavirisetty</span>
        <span className='text-[1.1rem] font-normal'>Master's student at University in Binghamton</span>
        <span className='text-[1rem] font-light'>I am driven by the thrill of turning ideas into functional and beautiful software.</span>
      </div>
      <div className='flex flex-col justify-center text-right w-[30%] '>
        {
          [
            ['About','#about',0],
            ['Projects','#projects',2],
            ['Experience','#academics',3],
            ['Contact','#contact',4]
          ].map(([title,url,page]) => (
          <div className='flex flex-row '>
            <span className={`${pageactive === page ? !darkMode ? 'border-t-cyan-800 px-[20px]' : 'px-[20px]' : 'px-[10px]'} border-b-0 border-l-0 border-r-0 border-t-2 py-0 mt-[13px] mr-[5px]`}></span> 
            <a  href={url} className={`${pageactive ===  page ? pageActiveClassnames : 'font-light'}`}>{title}</a>
          </div>)
          )
        }
      </div>
      <div className={`${darkMode ? '' : 'border-cyan-600'} border rounded-full w-[40%] flex flex-row justify-around`}>
          <button className={`${darkMode ? 'bg-[#CBE4DE] text-black' : ''} rounded-full w-[50%] text-sm  p-2`} onClick={() => {setDarkMode(true); localStorage.setItem('dl967', true)}}>Dark <i className="fa fa-moon-o"></i> </button>
          <button className={`${!darkMode ? 'bg-[#CBE4DE] text-black' : ''} rounded-full w-[50%] text-sm p-2`} onClick={() => {setDarkMode(false); localStorage.setItem('dl967', false)}}>Light <i className="fa fa-sun-o"></i> </button>
      </div>
      <div className='w-[40%] flex justify-around items-center'>
        <i className='fa fa-envelope'></i>
        <i className='fa fa-linkedin'></i>
        <i className='fa fa-github'></i>
      </div>
    </>
  )
}

function App() {
  const [scrollYProgress, setScrollYProgress] = useState(0);
  const [pageActive, setPageActive] = useState(1);
  // const [isTop, setIsTop] = useState(true);


  // -------------[Active NavBar Setup]-------------
  const refs = {
    homeref: useRef(0),
    aboutref: useRef(0),
    projectsref: useRef(0),
    academicsref: useRef(0),
    contactref: useRef(0)
  }
  const HandleScroll = () => {
    const progress = (window.scrollY)/(document.documentElement.scrollHeight - window.innerHeight);
    setScrollYProgress(progress);
  }
  useEffect(() => {
    window.addEventListener('scroll', HandleScroll);
    return () => { window.removeEventListener('scroll', HandleScroll)};
  }, []);

  useEffect(() => {
    const homeRect = refs.homeref.current.getBoundingClientRect();
    const aboutRect = refs.aboutref.current.getBoundingClientRect();
    const projectsRect = refs.projectsref.current.getBoundingClientRect();
    const academicsRect = refs.academicsref.current.getBoundingClientRect();
    const contactRect = refs.contactref.current.getBoundingClientRect();

    // homeRect.top >= 0 ? setIsTop(true): setIsTop(false);
    console.log(homeRect.top)

    if(homeRect.top >= 0 && homeRect.top <= window.innerHeight){
      setPageActive(0);
    }
    else if(aboutRect.top >= 0 && aboutRect.top <= window.innerHeight){
      setPageActive(1);
    }
    else if(projectsRect.top >= 0 && projectsRect.top <= window.innerHeight){
      setPageActive(2);
    }
    else if(academicsRect.top >= 0 && academicsRect.top <= window.innerHeight){
      setPageActive(3);
    }
    else if(contactRect.top >= 0 && contactRect.top <= window.innerHeight){
      setPageActive(4);
    }
  });

  // -------------[Dark Mode]-------------
  const [darkMode, setDarkMode] = useState(localStorage.getItem('dl967', null) === 'true' ? true : false);
  const darkModeClasses = darkMode ? "bg-black text-white" : "bg-white text-cyan-900 font-bold";


  return (
    <>
      <div ref={refs.homeref}></div>
      {/* <Home darkMode={darkMode}/> */}
      <motion.div className={`hidden mobile:flex tablet:flex fixed ${darkModeClasses} top-0 left-0 right-0 flex justify-between items-center w-full z-10 p-2 snap-y snap-proximity`}>
            <span className="text-xl font-bold text-left">About</span>
            <span className='text-[1.4rem] font-bold font-dance ml-10'>Preetham</span>
            <div className={`${darkMode ? '' : 'border-cyan-600'} border rounded-full w-[40%] flex flex-row justify-around`}>
                <button className={`${darkMode ? 'bg-[#CBE4DE] text-black' : ''} rounded-full w-[50%] text-sm  p-2`} onClick={() => {setDarkMode(true); localStorage.setItem('dl967', true)}}>Dark <i className="fa fa-moon-o"></i> </button>
                <button className={`${!darkMode ? 'bg-[#CBE4DE] text-black' : ''} rounded-full w-[50%] text-sm p-2`} onClick={() => {setDarkMode(false); localStorage.setItem('dl967', false)}}>Light <i className="fa fa-sun-o"></i> </button>
            </div>
        </motion.div>
      <div className={`${darkModeClasses} w-full h-full flex flex-row justify-between items-center`}>
        <div 
        className={`border-r mt- fixed top-0 left-0 bottom-0 w-[30%] flex flex-col justify-between items-center py-20
        mobile:invisible tablet:invisible`}>
          <LeftBar pageactive={pageActive} darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <div className="w-[70%] ml-[30%] mobile:w-full mobile:ml-0 tablet:w-full tablet:ml-0">
          {/* <Navbar darkMode={darkMode} setDarkMode={setDarkMode} pageactive={pageActive} isTop={isTop}/> */}

          <div ref={refs.aboutref}>
            <About pageactive={pageActive} darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          <div ref={refs.projectsref} >
            <Projects pageactive={pageActive} darkMode={darkMode} setDarkMode={setDarkMode}  />
          </div>

          <div ref={refs.academicsref}>
            <Workex pageactive={pageActive} darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
          <div ref={refs.contactref}>
            <Footer pageactive={pageActive} darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
