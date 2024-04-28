'use client'
import Link from 'next/link'
import React from 'react'
function CommingSoon() {
  return (
    <div className="w-full gradiant-container flex flex-col justify-around items-center min-h-[70vh]">
        
        <div className="w-[70%] box-shadow border-2 border-green-bg px-4 py-4 rounded-md mx-auto">
        <div className=' font-medium sm:text-lg md:text-2xl text-center'>Coming Soon ....</div>
          <div className="">
            <div className='text-center my-3'>Get ready for the change.</div>
            <div className='text-xs sm:text-sm md:text-base'>We{"'"}re busy crafting something amazing! Keep an eye out for updates. For inquiries, shoot us an email. Thanks for your interest and patience!</div>
          </div>
          <div className='flex justify-center items-center my-4' >
            <Link className="py-3 px-1 sm:px-2 md:px-4 rounded-md btn-gradient-2 w-fit" href="mailto:interviewexpressteam.gmail.com">Send us an email</Link>
          </div>
        </div>
        
      </div>
  )
}

export default CommingSoon
