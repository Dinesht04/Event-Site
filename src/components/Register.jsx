import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import brochure from '../assets/brochure.pdf'

const Register = () => {
    return(
        <>
        <button >
            <a href={brochure} download="Brochure">
            <div className='flex bg-[#FF9900] text-black rounded-r-lg md:text-3xl'>
             <div id='brochure-text' className='md:ml-4 my-auto'>GET BROCHURE</div>
             <div id='icon' className='m-2 p-2'><FaArrowCircleRight /></div>
        </div>
        </a>
        </button>
        
        </>
    )
}

export default Register;