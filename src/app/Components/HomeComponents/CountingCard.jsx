"use client";
import React, { useState, useEffect } from "react";
import { BsFillLightbulbFill } from "react-icons/bs";
import { LuLightbulb } from "react-icons/lu";

import { RiEmotionHappyLine } from "react-icons/ri";
import { BsFiles } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import { HiOutlineAcademicCap } from "react-icons/hi";

function CountingCard({ mainText, targetNumber, type }) {
  const [enrolledStudents, setEnrolledStudents] = useState(0);
  const [flag, setFlag] = useState(0);
  const [first, setFirst] = useState(0);
  const [reset, setReset] = useState(0);

  useEffect(() => {
    if (!first) {
      setFirst(1);
      return;
    }
    // const targetNumber = 1000;
    const increment = Math.ceil(targetNumber / 20);
    const intervalId = setInterval(() => {
      setEnrolledStudents((prevCount) =>
        Math.min(prevCount + increment, targetNumber)
      );
    }, 50);
    return () => clearInterval(intervalId);
  }, [flag]);

  function handleScroll (){
    let div = document.getElementById('about');
    if(!div)return;
    let divPosition = div.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(divPosition < screenPosition){
      setFlag(1);
    }else{
        setReset(1);
        setEnrolledStudents(0);
        setFlag(0);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined")
      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex gap-4 py-2  dark:border-2 dark:rounded-md dark:border-white items-center">
      {type === "happy" && <RiEmotionHappyLine size={32} className="text-green-bg" />}
      {type === "bulb" && <LuLightbulb size={32} className="text-green-bg"/>}
      {type === "student" && <PiStudent size={32} className="text-green-bg" />}
      {type === "files" && <HiOutlineAcademicCap size={32} className="text-green-bg" />}
    <div>
        <div className="font-bold text-2xl mt-2">{enrolledStudents}</div>
        <div className="text-gray-500 dark:text-white text-sm">{mainText}</div>
      </div>
    </div>
  );
}

export default CountingCard;
