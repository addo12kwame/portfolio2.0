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
    I love building software that makes people's day-to-day activities easier and more efficient. I specialize in creating robust backend applications for a wide range of needs, from small businesses to large enterprises. With experience spanning AWS, Python, Java, and Node.js, I design solutions that are scalable, reliable, and tailored to meet unique business challenges.

I’m passionate about streamlining processes and automating complex workflows, always focused on delivering software that has a tangible impact. Whether it's enhancing productivity or solving real-world problems, I take pride in crafting solutions that make a difference.

What would you do if you had a software expert at your fingertips? Let’s build something that transforms your ideas into reality.
    </p>
   </div>
    </div>
  </div>
  </div>
  
  )
}

export default About
