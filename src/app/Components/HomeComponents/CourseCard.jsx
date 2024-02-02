'use client'
import Image from "next/image";
import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import "./CourseCard.css";
function CourseCard({course}) {
  return (
    <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-white flex flex-col gap-3 rounded-lg hover:rounded-none overflow-hidden rounded-b-sm cursor-pointer">
      <Image
        src={course.img}
        alt={course.title}
        className="w-[100%] max-h-[220px]"
      />
      <div className="flex flex-col gap-2 justify-center px-6 pb-6 pt-4">
        <p
         className="btn-gradient-2 text-sm  px-2 py-2 rounded-lg inline w-fit mb-2 text-white font-medium ">
          {course.title}
        </p>
        <p className="font-semibold text-xs hover:text-green-bg transition-all duration-300">{course.description}</p>
        <p>
          <FaBookOpen size={10} className="text-green-bg inline mr-3" />
          <span className="text-xs">{course.lessons} Lessons</span>
        </p>
        <div className="flex gap-4 items-center">
          <p>
            <MdOutlineTimer size={10} className="text-green-bg text-xs inline mr-3" />
            <span className="text-xs">{course.duration}</span>
          </p>
          <p className="text-xs">
            <FaStar size={10} className="text-green-bg inline mr-3" />
            {course.rating}
          </p>
        </div>
        <p>
          <GiNetworkBars size={10} className="text-green-bg text-xs inline mr-3" />
          <span className="font-semibold text-xs">{course.level}</span>
        </p>
      </div>
    </div>
  );
}

export default CourseCard;
