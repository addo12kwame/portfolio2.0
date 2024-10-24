import React from 'react'
import Mp3 from '../assets/mp3sport.gif';
import Youtube from '../assets/youtube-gif.gif';

function  Work() {
  return (
    <div name="work" className='w-full bg-[#141619] md:h-screen text-gray-300 '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6 text-xl'>
            Recent projects I worked on
          </p>
        </div>
        {/* Container */}
        <div 
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid item */}
          <div style={{backgroundImage:`url(${Mp3})`}}
         className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
    
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Java MusicPlayer 
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                </a>
                <a href="https://github.com/addo12kwame/Java-MusicPlayer">
                  <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage:`url(${Youtube})`}}
         className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Youtube Downloader
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                </a>
                <a href="https://github.com/addo12kwame/youtubedownloader">
                  <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
       
        </div>
        
      </div>
    </div>
  )
}

export default Work
