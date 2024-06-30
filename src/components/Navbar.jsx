import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    

    return(
        <>
            <div id='container' className='bg-[#1A1A1A] flex text-white'>
                <div id='links' className='flex'>
                    <div className={`m-3 md:my-12 md:mx-16 hover:cursor-pointer ${window.location.pathname === '/' ? 'text-[#FF9900]':''}`}> 
                        <NavLink  to={'/'}> HOME </NavLink>
                    </div>
                    <div className={`m-3 md:my-12 md:mx-16 hover:cursor-pointer ${window.location.pathname === '/speakers' ? 'text-[#FF9900]':''}`}>
                        <NavLink  to={'/speakers'}> SPEAKERS </NavLink>
                    </div>
                    <div className={`m-3 md:my-12 md:mx-16 hover:cursor-pointer ${window.location.pathname === '/schedule' ? 'text-[#FF9900]':''}`} >
                        <NavLink  to={'/schedule'}> SCHEDULE </NavLink>
                    </div>
                </div>
                <div id='logo' className=' grow flex flex-row-reverse '>
                    <div className='md:mr-8 m-4 p-4 '>
                        <img src='/logo.png' width={100} className='' alt='vitb-logo'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;