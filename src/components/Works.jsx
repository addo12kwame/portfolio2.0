import React, { useState } from 'react';
import Mp3 from '../assets/mp3sport.gif';
import Youtube from '../assets/youtube-gif.gif';
import Auth from '../assets/authen.gif';

// Modal Component
function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800 w-96">
        <h2 className="text-2xl font-bold mb-4">Project Details</h2>
        <p>{content}</p>
        <div className="mt-6 text-right">
          <button onClick={onClose} className="bg-pink-600 text-white px-4 py-2 rounded-md">Close</button>
        </div>
      </div>
    </div>
  );
}

function Work() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content: string) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid item */}
          <div style={{backgroundImage:`url(${Mp3})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Java MusicPlayer
              </span>
              <div className='pt-8 text-center'>
                <button onClick={() => openModal('This is a Java MusicPlayer project built using Java and JavaFX. It includes multithreading for playing, pausing, skipping and deleting tracks and provides a sleek UI.') } 
                  className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  View
                </button>
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
                <button onClick={() => openModal('This project is a YouTube video downloader built with Python. It allows users to download YouTube videos in a high quality format using a simple GUI.') }
                  className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  View
                </button>
                <a href="https://github.com/addo12kwame/youtubedownloader">
                  <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{backgroundImage:`url(${Auth})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Authentication with Django and React
              </span>
              <div className='pt-8 text-center'>
                <button onClick={() => openModal('This project demonstrates authentication using Django and React. It includes JWT-based user authentication and a frontend login system with secure API calls.') }
                  className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  View
                </button>
                <a href="https://github.com/addo12kwame/django-react-auth">
                  <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Popup */}
        <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
      </div>
    </div>
  );
}

export default Work;
