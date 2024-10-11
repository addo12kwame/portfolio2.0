import React from 'react'

function Contact() {
  return (
    <div name="contact" className='bg-[#141619] w-full h-screen flex justify-center items-center p-4'> 
    <form method="POST" action="https://getform.io/f/azylondb" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                Contact me!
            </p>
            <p className='text-gray-300 py-4'>
                Submit form below or send me an email - addo12kwame@outlook.com
            </p>
        </div>
        <input type="text" placeholder='Name' name='name'  className=' bg-[#ccd6f6]' />
        <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]'/>
        <textarea name="message" rows='10' id=""  className=' bg-[#ccd6f6] p-2 'placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
            Connect!!
        </button>
    </form>
       </div>
  )
}

export default Contact
