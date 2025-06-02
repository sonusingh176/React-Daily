import React from 'react'
import profileImg from '../../assets/sk14.png'
import { FaLinkedin, FaWhatsapp, FaCode } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const home = () => {
  return (
   <section className='min-h-screen flex items-center justify-center bg-white'>
    <div className='w-full flex   md:flex-row  md:px-16 '>
      {/* left content */}
      <div className='flex-1 ms-36'>
       
        <h3 className='text-4xl font-bold'>Hello,my name is </h3>
        <h1 className='text-7xl font-extrabold mt-2'>Sonu Kr singh</h1>
        <p className='mt-4 text-5xl'>I'm a {" "}
        <TypeAnimation
            sequence={[
              'Full Stack Developer', 2000,
              'Frontend Developer', 2000,
              'Backend Developer', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className=" mt-1 text-5xl text-red-600 font-bold"
        />
        </p>

        {/* Resume Button */}
        <div className='mt-6 flex gap-4 items-center'>
          <button className='bg-red-600 text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-red-700'>RESUME</button>
        </div>
      </div>

      {/* right content */}
      <div className=' flex flex-1 justify-center'>
        <div className='w-full h-95 bg-red-600 polygon absolute'></div>
        <img src={profileImg} alt="" className='w-80 h-90 relative top-5 ' />
      </div>
    </div>

    {/* social Icons -fixed left */}
    <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 text-xl text-gray-700">
        <FaCode className="hover:text-orange-600 cursor-pointer" />
        <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
        <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
    </div>
   </section>
  )
}

export default home