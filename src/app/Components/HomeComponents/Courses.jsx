'use client';
import React from 'react'
import courses from './CourseData'
import CourseCard from './CourseCard'

function Courses() {
  return (
    <div className='flex flex-col justify-center gap-6 items-center'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-7 my-7'>
        {
            courses.map((course , index) => {
                return <CourseCard course = {course} key = {index} />
            })
        }
    </div>
    <button className='start px-4 py-2 font-semibold transition-all duration-300'>All Courses</button>
    </div>
  )
}

export default Courses
