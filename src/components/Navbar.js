import {useEffect, useState} from 'react'; 
// import logo from '../logo.svg';
import logo from '../images/preetham.png';
import {motion} from "framer-motion";

function Left(){
    return (
        <div className='w-[30%] flex justify-center items-center p-2'>
            {/* <img src={logo} alt="Logo" className="w-40 h-10"/> */}
            <span>Preetham.DEV</span>
        </div>
    )
}

function Right({mobileStyles, setDarkMode, pageactive, isTop}){
    const isTopClassnamesRight = isTop ? 'justify-evenly w-[50%]' : 'w-[60%] justify-evenly';
    return (
        <motion.div className={`${isTopClassnamesRight} ${mobileStyles} w-[70%] p-2 flex items-center`}>
            <a  href="#about" className={`${pageactive === 1 ? 'font-bold' : 'font-light'}`}>About</a>
            <a  href="#projects" className={`${pageactive === 2 ? 'font-bold' : 'font-light'}`}>Projects</a>
            <a  href="#academics" className={`${pageactive === 3 ? 'font-bold' : 'font-light'}`}>Academics</a>
            <a  href="#contact" className={`${pageactive === 4 ? 'font-bold' : 'font-light'}`}>Contact</a>
            <div className={`${true ? 'bg-black text-white' : 'bg-neutral-200 text-black'} flex flex-row justify-around`}>
                <button onClick={() => {setDarkMode(true); localStorage.setItem('dl967', true)}}>Dark <i className="fa fa-moon-o "></i> </button>
                <button onClick={() => {setDarkMode(false); localStorage.setItem('dl967', false)}}>light <i className="fa fa-sun-o"></i> </button>
            </div>
        </motion.div>
    )
}

function Navbar({darkMode, setDarkMode, pageactive, isTop}){
    const isMobileScreen = {
        outerdiv: 'mobile:w-full mobile:text-sm',
        innerdiv: 'mobile:w-full mobile:flex mobile:flex-col',
        innerLeft: 'mobile:p-0 mobile:text-sm',
        innerRight: 'mobile:flex mobile:justify-between mobile:w-full'
    }
  // -------------[If NavBar isTop]-------------
    const isTopClassnames = isTop ? 
    'w-full justify-between' : 
    'bg-opacity-5 rounded-full bg-gray-400 text-black shadow-xl mobile:rounded-lg';
    const darkClassNames = darkMode ? 'bg-black text-gray-800' : 'bg-[#16697A] text-[#F8F1F1]'

    return (
        <motion.div 
        transition={{duration:0.5}} 
        animate={{scale:[1,2,1]}} 
        className={`${isMobileScreen.outerdiv}  sticky top-0 left-0 right-0 flex justify-center items-center p-2 z-40`}>
            <div className={`${isMobileScreen.innerdiv} ${darkClassNames} relative w-[50%] bg-opacity-70 rounded-full shadow-xl flex justify-between space-x-2 p-2 `}>
                <Left 
                    isTop={isTop}
                />
                <Right 
                    setDarkMode={setDarkMode}
                    mobileStyles={isMobileScreen.innerRight} 
                    isTop={isTop} 
                    pageactive={pageactive}
                />
            </div>
        </motion.div>
    )
}

export default Navbar;