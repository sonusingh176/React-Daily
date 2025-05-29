import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillSun } from "react-icons/ai";
import { AiOutlineMoon } from "react-icons/ai";

const Header = () => {

    




  return (
   <header className="bg-white">      
    <nav className="w-full px-8 bg-purple-700 text-white py-4">
            <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold text-dark">SONU</h1>
            </div>
            <ul className="md:flex space-x-8 hidden text-xl font-semibold">
                <li><Link to='/' className='text-yellow-600'>home</Link></li>
                <li><Link to='/about'>about</Link></li>
                <li><Link to='/works'>work</Link></li>
                <li><Link to='/skills'>skills</Link></li>
                <li><Link to='/contact'>contact</Link></li>
                <li><Link to='/about'>resume</Link></li>
                
            </ul>
           
           <label htmlFor=""> { } <AiFillSun /> <AiOutlineMoon /></label>
            <div className="md:hidden">
                <a className="text-4xl font-semibold" href="#">&#8801;</a>
            </div>
            </div>
    </nav>
   </header>
  )
}

export default Header