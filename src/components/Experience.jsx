import React from 'react'
import { EXPERIENCES } from '../constants'

function Experience() {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
      <h2 className='my-20 text-center text-4xl'>Experience</h2>
      <div>
        {EXPERIENCES.map((Experience, index)=>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                   <p className='mb-2 text-sm text-purple-800'>{Experience.year}</p>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                  <h6 className='mb-2 font-semibold'>
                    {Experience.role} -  
                    <span className='text-sm text-purple-800'>
                        {Experience.company}
                    </span>
                  </h6>
                  <p className='mb-4 text-purple-600'>{Experience.description}</p>
                  {Experience.technologies.map((tech, index)=>(
                    <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 tech-sm font-medium text-purple-500'>{tech}</span>
                ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
