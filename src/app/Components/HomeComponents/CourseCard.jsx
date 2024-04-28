'use client'
import Image from "next/image";
import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import "./CourseCard.css";
import { courseDetails } from "./CourseData";
import Link from "next/link";
function CourseCard({course , index}) {
  const {lessons , duration , rating , level} = courseDetails[index];
  return (
    <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] bg-primary flex flex-col gap-3 rounded-lg hover:rounded-none overflow-hidden rounded-b-sm cursor-pointer">
      <img
        src={course.url}
        alt={course.title}
        className="w-[100%] max-h-[220px] aspect-video overflow-hidden"
      />
      <div className="flex flex-col gap-2 justify-center px-6 pb-6 pt-4">
        <Link href={`/learn/${course.link}`}
         className="btn-gradient-2 w-full text-sm  px-2 py-2 rounded-lg mb-2 text-primary font-medium ">
          {course.name}
        </Link>
        <p>
          <FaBookOpen size={10} className="text-green-bg inline mr-3" />
          <span className="text-xs">{lessons} Lessons</span>
        </p>
        <div className="flex gap-4 items-center">
          <p>
            <MdOutlineTimer size={10} className="text-green-bg text-xs inline mr-3" />
            <span className="text-xs">{duration}</span>
          </p>
          <p className="text-xs">
            <FaStar size={10} className="text-green-bg inline mr-3" />
            {rating}
          </p>
        </div>
        <p>
          <GiNetworkBars size={10} className="text-green-bg text-xs inline mr-3" />
          <span className="font-semibold text-xs">{level}</span>
        </p>
      </div>
    </div>
  );
}

export default CourseCard;
