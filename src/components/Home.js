import {motion} from 'framer-motion';

const Home = ({darkMode}) => {
    const darkClassNames = darkMode ? 'bg-black text-gray-500' : 'bg-[#16697A] text-[#FFA62B]'
    return (
        <div className={`${darkClassNames} h-[100vh] flex flex-col justify-center items-center p-2 snap-center `}>
            <div className='w-full h-[80vh] flex flex-col justify-between items-center p-4'>
                <div className="w-full h-[80%] flex flex-col justify-center text-center">
                    <span className={`text-[2.5rem] font-light`}>Preetham Bhavirisetty</span>
                    <span className={`text-[1.5rem] font-light`}>From Student to Fullstack Python Developer</span>
                </div>
                <a href='#about'>
                    <div className='group/learn flex flex-col justify-center space-y-0 items-center p-2'>
                        <motion.span className='block group-hover/learn:hidden'>Logo</motion.span>
                        <motion.span transition={{delay:0.4, duration:1.2}} className='hidden group-hover/learn:block'>Learn More</motion.span>
                        <motion.span transition={{delay:0.4, duration:1.2}} className='hidden group-hover/learn:block border border-t-0 border-l-0 rotate-45 px-2 py-2'></motion.span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Home;