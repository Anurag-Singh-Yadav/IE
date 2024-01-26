"use client";
import React, { useState, useEffect } from "react";
import CountingCard from "./CountingCard";

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
    <div className="my-4 py-6">
      <div className="font-semibold md:font-bold text-normal sm:text-xl md:text-3xl">
        Our Great <span className="text-green-bg underline">Achievement</span>
      </div>
      <div id="about" className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center sm:gap-6 md:gap-10 lg:gap-14 items-center">
        <CountingCard mainText={"Enrolled Students"} targetNumber={352} type={"happy"} ></CountingCard>
        <CountingCard mainText={"Academic Programs"} targetNumber={502} type={"files"} ></CountingCard>
        <CountingCard mainText={"Selected Students"} targetNumber={1000} type={"bulb"} ></CountingCard>
        <CountingCard mainText={"Certified Students"} targetNumber={1000} type={"student"} ></CountingCard>
      </div>
    </div>
  );
}

export default About;
