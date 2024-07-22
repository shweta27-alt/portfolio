import React from 'react';
import logo from '../assets/logo.jpg'
import{ FaLinkedin } from "react-icons/fa"
import{ FaGithub } from "react-icons/fa"
import{ FaCode } from "react-icons/fa"
import{ FaInstagram } from "react-icons/fa"

function Navbar() {
  return (
   <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center px-6'>
        <img src={logo} alt='logo' className='h-28 w-32 mx-2'/>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
        <FaCode/>
       </div>
   </nav>
  )
}

export default Navbar
