'use client'
import Image from "next/image";
import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { GoClockFill } from "react-icons/go";

import { FaStar } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import "./CourseCard.css";
import { IoIosArrowRoundForward } from "react-icons/io";

import { courseDetails } from "./CourseData";
import Link from "next/link";
function CourseCard({queryPara, course , index}) {
  const {lessons , duration , rating , level} = courseDetails[index];
  return (
    <Link className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-primary flex flex-col gap-3 rounded-lg  overflow-hidden rounded-b-sm cursor-pointer group" 
    href={{
      pathname: `/learn/${course.name}`,
      query: {
        mainTopic: course.name,
        mainHeading: queryPara[course.name]?.mainHeading,
        title: queryPara[course.name]?.title,
      },
    }}
    >
      <div className="aspect-video w-full overflow-hidden">
      <img
        src={course.url}
        alt={course.title}
        className="w-[100%] max-h-[220px] aspect-video  group-hover:scale-110 transition"
      />
      </div>

      <div className="flex flex-col gap-2 justify-center px-6 pb-6 pt-2">
        {/* <Link href={`/learn/${course.link}`}
         className="btn-gradient-2 w-full text-sm  px-2 py-2 rounded-lg mb-2 text-primary font-medium ">
          {course.name}
        </Link> */}
        <h1 className="font-bold text-sm tracking-tighter">{course.name}</h1>
        <div className="flex justify-between  mt-4">
        <p className="flex items-center">
          <FaBookOpen size={12} className="text-green-bg inline mr-2" />
          <span className="text-xs font-medium text-gray-600">{lessons} Lessons</span>
        </p>
        <p className="flex items-center">
            <GoClockFill size={12} className="text-green-bg text-xs inline mr-2" />
            <span className="text-xs font-medium text-gray-600">{duration}</span>
          </p>
        </div>
        <div className="flex justify-between items-center mt-2">
         
        <p className="flex items-center text-sm font-medium text-gray-600">
            <FaStar size={12} className="text-green-bg inline mr-2" />
            {rating}
          </p>

          <p className="flex items-center">
          <GiNetworkBars size={12} className="text-green-bg text-xs inline mr-2" />
          <span className="text-xs font-medium text-gray-600">{level}</span>
        </p>
        </div>
       
        <div className="mt-4 text-green-bg flex items-center gap-1 ">
      <p className="font-medium text-sm">Learn now</p>
        <IoIosArrowRoundForward size={18} className="group-hover:translate-x-1 transition"/>
      </div>
      </div>
      
    </Link>
  );
}

export default CourseCard;
