import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Footer = ({darkMode, setDarkMode, pageActive}) => {
    let apiurl = 'https://www.ramchandra.info/portfolio/';
    let [message, setMessage] = useState('');
    let [email, setEmail] = useState('');
    const [rec, setRec] = useState(false);
    let [msg, setMsg] = useState('');

    const darkBG = darkMode ? 'bg-gray-900' : 'bg-neutral-100';
    const darkText = darkMode ? 'text-[#D1D2D3]' : 'text-gray-900';
    const darkBorder = darkMode ? 'border-[#D1D2D3]' : 'border-gray-900';


    // --------------------****--------------------
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(email, message, rec)
        var email_regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        email = email.trim().toLowerCase();
        if (email_regex.test(email)){
            var user_data = {
                "email": email,
                "feedback": message,
                "recruiter": rec ? true : false,
            }
            console.log(rec)
        }
        else{
            return 
        }
        axios.post(`${apiurl}post-feedback-pree/`, user_data)
        .then((res => {
            console.log(res.data);
            rec ? 
            setMsg("Thanks for your feedback! I have mailed you little more info about me") :
            setMsg("Thanks for your Feedback!")
        }))
        .catch(err => console.log(err))
        console.log(user_data);
        setMessage("");
        setEmail("");
        setRec("");
    }
    useEffect(()=>{
        const timer = setTimeout(() => {
            setMsg("");
        }, 6000)
        return () => clearTimeout(timer);
    }, [msg, rec])
    return (
        <div className="flex flex-col mb-0 -space-y-[80vh]">
        <div className={`sticky top-0 right-0 left-0 bottom-0 w-full z-[0] p-2 ${darkMode ? "bg-gradient-to-r from-gray-800 to-gray-900":"bg-gradient-to-r from-green-200 to-[#7AA874]"}   h-[100vh] flex flex-col items-center justify-start`}>
            <span className="text-[2.5rem] font-normal mt-10">Get in touch!</span>
        </div>
        {/* <div className={`hidden mobile:flex tablet:flex sticky top-0 left-0 right-0 flex justify-between items-center w-full z-10 p-2`}>
            <span className={`text-xl font-bold text-left ${darkMode ? 'bg-black' : 'bg-white'} p-2`}>Contact</span>
        </div> */}
        <div id="contact" className={`h-[100vh] z-20 w-[80%] mx-auto ${darkMode ? "shadow shadow-black shadow-3xl" : "shadow-3xl"} bg-transparent rounded-xl  mobile:w-full flex flex-col justify-center items-center px-8 pt-10 mobile:p-2 mobile:mt-[5rem]`}>
        {/* mobile:snap-center tablet:snap-center laptop:snap-center desktop:snap-center */}
            <div className='w-[70%] h-[60vh] flex flex-col mobile:w-full'>
                <div className="bg-inherit w-full h-[78%] flex flex-col justify-around items-center mx-auto p-4 small:w-full mobile:w-full transition duration-700">
                    <span className="font-light text-md transition duration-500 ease-in-out">{msg}</span>
                    <form className="w-full flex flex-col items-center justify-around space-y-2 p-4" onSubmit={handleSubmit}>
                        <span className="flex">
                            <span className={`text-[2rem] font-bold ${darkMode ? 'text-gray-200':'text-emrald-300'} small:text-[1.5rem]`}>Fe</span>
                            <span className={`text-[2rem] font-bold ${darkMode ? 'text-gray-200':'text-emrald-300'} border-b-2 border-b-rose-800 w-[70px] small:text-[1.5rem] small:w-[60px]`}>edback</span>
                        </span>
                        <span className="text-md font-light small:text-[0.7rem] mobile:text-sm">I'd love to hear from you!</span>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border-2 border-gray-200 outline-none p-2 pl-2 text-md font-normal text-black w-[70%] mobile:w-[80%]" required/>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="border-2 border-gray-200 outline-none p-2 pl-2 text-md  font-normal text-black w-[70%] mobile:w-[80%]" rows="5" required></textarea>
                        <span>
                            <input type="checkbox" checked={rec} onChange={() => setRec(!rec)} id="recruiter"></input>
                            <label for="recruiter" className='font-light'> Wanna hire me? &#128540; </label>
                        </span>
                        <button type="submit" className="p-2 m-2 bg-green-100 text-black font-normal rounded-lg hover:opacity-[0.6]">Submit</button>
                    </form>
                </div>
            </div>
            <div className='w-[50%] flex justify-evenly items-center'>
                <span><i className='fa fa-linkedin'></i></span>
                <span><i className='fa fa-github'></i></span>
                <span><i className='fa fa-envelope-o'></i></span>
                <span><i className='fa fa-phone'></i></span>
            </div>
            <span className='text-sm font-light mt-10'>Copyrights &#169; 2023</span>
        </div>
    </div>
    )
}

export default Footer;


// import {useEffect, useState} from 'react'; 
// import {motion} from "framer-motion";
// import axios from 'axios';


// function Footer(){
//     // --------------------****--------------------
    // let apiurl = 'http://127.0.0.1:8000/portapi/';
    // let [message, setMessage] = useState('');
    // let [email, setEmail] = useState('');
    // const [rec, setRec] = useState(false);
    // let [msg, setMsg] = useState('');

    // // --------------------****--------------------
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     console.log(email, message, rec)
    //     var email_regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    //     email = email.trim().toLowerCase();
    //     if (email_regex.test(email)){
    //         var user_data = {
    //             "email": email,
    //             "feedback": message,
    //             "recruiter": rec ? true : false,
    //         }
    //         console.log(rec)
    //     }
    //     else{
    //         return 
    //     }
    //     axios.post(`${apiurl}post-feedback/`, user_data)
    //     .then((res => {
    //         console.log(res.data);
    //         rec ? 
    //         setMsg("Thanks for your feedback! I have mailed you little more info about me") :
    //         setMsg("Thanks for your Feedback!")
    //     }))
    //     .catch(err => console.log(err))
    //     console.log(user_data);
    //     setMessage("");
    //     setEmail("");
    //     setRec("");
    // }
//     useEffect(()=>{
//         const timer = setTimeout(() => {
//             setMsg("");
//         }, 6000)
//         return () => clearTimeout(timer);
//     }, [msg, rec])
//     return (
//          <div id="contact" className="w-full h-[100vh] flex flex-col justify-center items-center snap-center bg-gray-800 ">        
            // <div className="bg-inherit w-full h-[78%] flex flex-col justify-around items-center text-white mx-auto p-4 small:w-full mobile:w-full tablet:w-full transition duration-700">
            //     <span className="font-light text-md text-[#D1D2D3] transition duration-500 ease-in-out">{msg}</span>
            //     <form className="w-full flex flex-col items-center justify-around space-y-2 p-4" onSubmit={handleSubmit}>
            //         <span className="flex">
            //             <span className="text-[2.5rem] font-bold text-[#D1D2D3] small:text-[1.5rem]">C</span>
            //             <span className="text-[2.5rem] font-bold text-[#D1D2D3] border-b-2 border-b-rose-200 w-[100px] small:text-[1.5rem] small:w-[60px]">ontact</span>
            //         </span>
            //         <span className="text-md font-light small:text-[0.7rem] mobile:text-sm">Please provide a feedback or get in touch!</span>
            //         <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border-none outline-none p-2 pl-2 bg-gray-200 text-md font-normal text-black w-[80%] rounded-md" required autoFocus/>
            //         <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="border-none outline-none p-2 pl-2 text-md bg-gray-200 font-normal text-black w-[80%] rounded-md" rows="5" required></textarea>
            //         <span>
            //             <label for="recruiter">Are you a Recruiter? </label>
            //             <input type="checkbox" checked={rec} onChange={() => setRec(!rec)} id="recruiter"></input>
            //         </span>
            //         <button type="submit" className="p-2 m-2 bg-red-900 rounded-lg">Submit</button>
            //     </form>
            // </div>
//             <div className="flex flex-col justify-center items-center space-x-4 text-white w-full mb-20 small:space-x-2 mobile:space-x-2 p-[1px] font-light">
//                 <div className="small:flex small:flex-col small:justify-center small:items-center small:space-y-4 small:text-[0.8rem] ">
//                     <span className="text-md  small:text-[0.7rem] small:text-[0.8rem] mobile:text-[0.7rem] px-2"><i class="fa fa-home"></i> Binghamton, NY</span>
//                     <span className="text-md small:text-[0.7rem] small:text-[0.8rem] mobile:text-[0.7rem] px-2"><i class="fa fa-phone"></i> +1 (716) 617-1918</span>
//                     <span className="text-md small:text-[0.7rem] small:text-[0.8rem] mobile:text-[0.7rem] px-2"><i class="fa fa-envelope"></i> rcb.26498@gmail.com</span>
//                 </div>
//                 <div className="small:flex small:flex-col small:justify-center small:items-center small:space-y-4 small:mt-4 small:text-[0.8rem]">
//                     <span className="text-md small:text-[0.8rem] mobile:text-[0.8rem] px-2"><i class="fa fa-linkedin-in"></i> LinkedIn</span>
//                     <span className="text-md small:text-[0.8rem] mobile:text-[0.8rem] px-2"><i class="fa fa-github"></i> GitHub</span>
//                 </div>
//             </div>
//             <div className="w-full p-2 text-center mb-10 animate-bounce">
//                 <a href="#navbar" className=""><i class="fa fa-arrow-up" style={{color: "#D1D2D3", fontSize:"2rem"}}></i></a>
//             </div>
//         </div>
//     )
// }

// export default Footer;