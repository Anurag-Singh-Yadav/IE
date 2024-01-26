"use client";
import React, { useState, useEffect } from "react";
import { RiEmotionHappyLine } from "react-icons/ri";
import { BsFiles } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";

function About() {
  const [enrolledStudents, setEnrolledStudents] = useState(0);
  const [flag, setFlag] = useState(0);
    const [first ,setFirst] = useState(0);
  const[reset,setReset] = useState(0);

  useEffect(() => {
    if(!first){
        setFirst(1);
        return;
    }
    const targetNumber = 1000;
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
    <div className="px-4 sm:px-6 my-4 py-6">
      <div className="font-semibold md:font-bold text-normal sm:text-xl md:text-3xl">
        Our Great <span className="text-green-bg underline">Achievement</span>
      </div>
      <div id="about" className="flex my-8 justify-center gap-2 sm:gap-6 md:gap-10 lg:gap-14 items-center">
        <div className="flex justify-center items-center gap-2">
          <RiEmotionHappyLine />
          <div>
            <div>{enrolledStudents}</div>
            <div>Enrolled Students</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <BsFiles />
          <div>
            <div>{enrolledStudents}</div>
            <div>Academic Programs</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <RiEmotionHappyLine />
          <div>
            <div>{enrolledStudents}</div>
            <div>Selected Students</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <PiStudent />
          <div>
            <div>{enrolledStudents}</div>
            <div>Certified Students</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
