import React from 'react'
import Image1 from '../assets/Image1.jpeg'
import { ABOUT_TEXT } from '../constants'

function About() {
  return (
    <div className='border-b border-pink-300 pb-4'>
        <h2 className='my-20 text-center text-4xl text-red-800'>About
        <span className='text-indigo-300'> Me</span>
        </h2>

        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
               <div className='flex items-center justify-center'>
                 <img src={Image1} alt="About me" className='w-[23rem] h-[25rem] rounded-lg'/>
               </div>
            </div>
            <div className='w-full lg:w-1/2'>
              <div className='flex justify-center lg: justify-start'>
                <p className='max-w-xl py-28 font-light tracking-tighter'>{ABOUT_TEXT}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About
