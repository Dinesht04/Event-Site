import React from 'react'
import Navbar from './Navbar'

import Register from './Register';


const Speakers = () =>{
    return(
        
        <div className='bg-[#1A1A1A]'>
            <Navbar/>
            <div className='flex'>
                <div id='text-content' className='basis-1/2 flex flex-col'>
                    <div id='hero-text' className='mx-3 md:mx-16 md:my-12 font-Rammetto text-[#EF9003] text-4xl  md:text-8xl'>
                        <h1 className=''>Meet our <br/> SPEAKERS</h1> 
                    </div>
                    <div id='secondary-text' className='mx-3 md:mx-16 md:my-12 text-white text-xl md:text-2xl'>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                    </div>
                </div>
                <div id='speaker-image' className='mx-auto my-auto'>
                    <img src="/speaker.JPG" height={400} width={400} alt="" />
                </div>

            </div>
            <div className='flex flex-row-reverse  mr-28'>
                    <Register/>
            </div>
        </div>
        
    )
}

export default Speakers;