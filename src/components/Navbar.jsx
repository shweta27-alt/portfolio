import React from 'react';
import logo from '../assets/logo.jpg';
import { FaLinkedin, FaGithub, FaCode, FaInstagram } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center px-6'>
        <img src={logo} alt='logo' className='h-28 w-32 mx-2' />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/shweta-saindane-ab38871a1/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/shweta27-alt" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/shweta__________27/?igsh=dTkwY3RnNGo0YWVz&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://leetcode.com/u/shweta272/" target="_blank" rel="noopener noreferrer">
          <FaCode />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
