import React from 'react'
import Logo from './Logo';
import Register from './Register'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Home = () =>{

    return(
        <>
            <div className='bg-[#1A1A1A] h-screen md:h-full'>
                <div id='container' className='flex '>
                    <div id='left'>
                        <div id='logo' className='flex w-1 mt-2 md:mx-8 md:p-8 max-w-fit'>
                                <button onClick={()=>{
                                    window.location.href = 'https://blockchain-club-vitb.vercel.app/';
                                }}  ><Logo /></button>  
                            
                        </div>
                        <div className='flex'>
                            <div id='text-content' className='flex flex-col ml-4'>
                                <div id='hero-text' className='mt-12 md:mt-24 md:ml-16 my-auto font-Rammetto text-[#EF9003] text-xl  md:text-8xl'>
                                    <h1 className=''>BlockChain <br/> Club</h1> 
                                </div>
                                <div id='secondary-text' className=' font-Poppins md:ml-20  text-white  md:text-2xl'>
                                    VIT Bhopal
                                </div>
                            </div>
                        </div>
                        <div id='socials' className=' mt-16 text-white md:text-4xl flex md:flex-row-reverse'>
                            <div id='insta' className='hover:cursor-pointer m-2 p-2 md:m-4 md:my-8 md:p-2'><FaInstagram onClick={()=>{
                                window.location.href = 'https://www.instagram.com/blockchain.vitb/';
                            }}   /></div>
                            <div id='linkedin'className='hover:cursor-pointer m-2 p-2 md:m-4 md:my-8 md:p-2'><FaLinkedin onClick={()=>{
                                window.location.href = 'https://www.linkedin.com/company/blockchain-club-vitb/';
                            }}  /></div>
                            <div id='youtube'className='hover:cursor-pointer m-2 p-2 md:m-4 md:my-8 md:p-2'><FaYoutube onClick={()=>{
                                window.location.href = 'https://blockchain-club-vitb.vercel.app/';
                            }}   /></div>
                        </div>

                        <div id='brochureDownload' className='mt-20 pt-4 md:mt-8 md:pt-8'>
                            <Register/>
                        </div>
                        
                    </div>
                    <div className='flex flex-col '>
                        <img src='/vitLogo.png' alt='vitLogo' className='w-24 self-end m-2 p-2 md:w-40 md:my-8 md:mr-16 '/>
                        <div id='right' className="grid mx-auto mt-20 p-2 md:m-8 md:p-8 relative ">
                            <style>
                                {`
                                    @media (max-width: 768px) {
                                        .responsive-img {
                                            width: 100% !important; /* Forces images to stretch to the container's width */
                                            height: auto !important; /* Maintains aspect ratio */
                                        }
                                    }
                                `}
                            </style>
                            <img src="/Hero-img1.png" alt="Image 1" style={{ width: '80%', height: 'auto' }} className="row-start-1 row-end-4 col-start-1 col-end-5 responsive-img" />
                            <img src="/Hero-img2.png" alt="Image 2" style={{ width: '90%', height: 'auto' }} className="col-start-3 col-end-6 row-start-3 row-end-5 responsive-img" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;