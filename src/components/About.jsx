import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
       <div className='sm:text-right pb-8 pl-4'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
      </div>
      <div>

      </div>
      </div>

      <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 '>
       <div className='sm:text-right text-4xl font-bold '>
        <p>Hi, I'm Kwame, nice to meet you. Please take a look around</p>
       </div>
   
   <div>
    <p>
      I love building softwares that makes people day to day activities easier. I specialize in creating backend applications ranging from small businesses to large enterprise. What would you do if you have software expert available at your fingers?
  
    </p>
   </div>
    </div>
  </div>
  </div>
  
  )
}

export default About
