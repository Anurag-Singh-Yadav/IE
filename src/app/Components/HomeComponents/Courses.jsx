'use client';
import React from 'react'
import courses from './CourseData'
import CourseCard from './CourseCard'

function Courses() {
  return (
    <div className="py-16">
      <div className="font-semibold md:font-bold text-normal sm:text-xl md:text-3xl">
        Our Great <span className="text-green-bg underline">Achievement </span> 
      </div>
      <div className='flex flex-col py-5 justify-center gap-6 items-center'>
      
    <div className='grid grid-cols-1 s2:grid-cols-2 s3:grid-cols-3 gap-x-7 gap-y-7'>
        {
            courses.map((course , index) => {
                return <CourseCard course = {course} key = {index} />
            })
        }
    </div>
    <button className='start px-4 py-2 font-semibold transition-all duration-300'>All Courses</button>
    </div>
    </div>
  )
}

export default Courses
