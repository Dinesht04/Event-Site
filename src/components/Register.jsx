import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

const Register = () => {
    return(
        <>
        <button>
            <div className='flex bg-[#FF9900] text-black rounded-full text-3xl'>
             <div id='brochure-text' className='ml-4 my-auto'>REGISTER NOW</div>
             <div id='icon' className='m-2 p-2'><FaArrowCircleRight /></div>
        </div>
        </button>
        
        </>
    )
}

export default Register;