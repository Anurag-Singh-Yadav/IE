'use client';
import React, { useState , useEffect } from 'react'
import CourseCard from './CourseCard'
import { courses } from '@/app/learn/courses';
import axios from 'axios';
function Courses() {
  const [queryPara, setQueryPara] = useState(null);
  const findMyFirstTopic = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_MY_TOPICS}`
      );
      setQueryPara(response.data.data);
    } catch (e) {
      console.error("There was an error!", e);
    }
  };

  useEffect(() => {
    findMyFirstTopic();
  }, []);

  return (
    <div className="py-32">
      
       <h1 className="md:text-4xl text-2xl text-center font-bold mb-8">Our Great <span className="text-green-bg"> Achievement </span></h1>

      <div className='flex flex-col py-5 justify-center gap-6 items-center'>
      
    <div className='grid grid-cols-1 s2:grid-cols-2 s3:grid-cols-3 gap-x-10 gap-y-10'>
        {
            queryPara && courses.map((course , index) => {
                return <CourseCard queryPara = {queryPara} course = {course} key = {index} index={index} />
            })
        }
    </div>
    <button className='start px-6 py-2 font-semibold transition-all dark:text-black duration-300'>All Courses</button>
    </div>
    </div>
  )
}

export default Courses
