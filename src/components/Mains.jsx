import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll';


function Mains() {
  return (
    <div className='w-full h-screen bg-[#0a192f]' name='main'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
         
        <p className='text-pink-600 text-xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kwame</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Engineer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a backend developer specializing in building enterprise softwares with java, python and javascript. Currently working on developing a spring chatting application</p>
        <div>
            <button className='text-white text-xl group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'><Link  to="work" smooth={true} duration={500}>
            View Work
          </Link>
                <span className='group-hover:rotate-90 duration-300'>
                 <HiArrowNarrowRight className='ml-3'/>
                </span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Mains
