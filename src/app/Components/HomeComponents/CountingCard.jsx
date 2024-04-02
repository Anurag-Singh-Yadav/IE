"use client";
import React, { useState, useEffect } from "react";
import { BsFillLightbulbFill } from "react-icons/bs";
import { RiEmotionHappyLine } from "react-icons/ri";
import { BsFiles } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
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
    <div className="flex justify-center py-2 bg-primary  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] dark:border-2 dark:rounded-md dark:border-white items-center gap-2">
      {type === "happy" && <RiEmotionHappyLine size={30} />}
      {type === "bulb" && <BsFillLightbulbFill size={30} className="text-yellow-500" />}
      {type === "student" && <PiStudent size={30} />}
      {type === "files" && <BsFiles size={30} />}
      <div>
        <div className="font-bold text-lg">{enrolledStudents}</div>
        <div className="text-sm">{mainText}</div>
      </div>
    </div>
  );
}

export default CountingCard;
