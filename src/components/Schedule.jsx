import React from 'react'
import Navbar from './Navbar';


const Schedule = () =>{


    const eventDetails = 
    [
        {
            key:1,
            time:"10:00 AM",
            pdetails:"Quiz",
            Venue:"AB009"
        },
        {
            key:2,
            time:"10:00 AM",
            pdetails:"Quiz",
            Venue:"AB009"
        },
        {
            key:3,
            time:"10:00 AM",
            pdetails:"Quiz",
            Venue:"AB009"
        }]

    return(
        
        <div className='bg-[#1A1A1A]'>
        <Navbar/>
        <div className=' mx-8 my-8 flex flex-col justify-center  text-white'>
            <div id='title' className='flex  font-Poppins text-black font-semibold  mx-24 rounded-full bg-[#FF9900]'>
                <div id='time' className='p-2 basis-1/3 text-center  grow'>Time</div>
                <div id='pdetails' className='p-2 basis-1/3 text-center grow'>Program Details</div>
                <div id='venue' className='p-2 basis-1/3 text-center grow'>Venue</div>
            </div>

            {eventDetails.map((event)=>{
                return(
                    <div key={event.key} id={`${event.key}`} className='flex border-b-4   mx-24 '>
                        <div className='p-4 m-4 basis-1/3 text-center  grow'>{event.time} </div>
                        <div className='p-4 m-4 basis-1/3 text-center  grow'>{event.pdetails}</div>
                        <div className='p-4 m-4 basis-1/3 text-center  grow'>{event.Venue}</div>
                    </div>
                )
                
            })
            
            }
        </div>
        
        
        </div>
    )
}

export default Schedule;