import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Python from '../assets/python.png';
import Java from '../assets/java (2).png';
import GitHub from '../assets/github.png';
import Aws from '../assets/aws.png';


function Skills() {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className=''>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>Tech Stacks</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={HTML} alt='html icon' className='w-20 mx-auto'/>
                <p className='my-4'> HTML </p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={CSS} alt='html icon' className='w-20 mx-auto'/>
                <p className='my-4'> CSS </p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={JavaScript} alt='html icon' className='w-20 mx-auto'/>
                <p className='my-4'> JAVASCRIPT </p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Java} alt='html icon' className='w-20 mx-auto'/>
                <p className='my-4'> JAVA </p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Python} alt='html icon' className='w-20 mx-auto'/>
                <p className='my-4'> Python </p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={GitHub} alt='html icon' className='w-20 mx-auto'/>
                <p className='my-4'> GITHUB </p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={ReactImg} alt='html icon' className='w-20 mx-auto'/>
                <p className='my-4'> REACT </p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Aws} alt='html icon' className='w-20 mx-auto'/>
                <p className='my-4'> AWS </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
