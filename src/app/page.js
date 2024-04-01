'use client'
import React from "react";
import About from "./Components/HomeComponents/About";
import Company from "./Components/HomeComponents/Company";
import Courses from "./Components/HomeComponents/Courses";
import Hero from "./Components/HomeComponents/Hero";
import InterviewExperiance from "./Components/HomeComponents/InterviewExperiance";
import ReviewCard from "./Components/HomeComponents/ReviewCard";
import "./globals.css";
import { useSelector } from "react-redux";
export default function Home() {
  const isLight = useSelector((state) => {
    return state.GlobalState.isLight;
  });
  return (
    <div>
      <Hero />
      <div className="bg-primary">
        <div className={`main-container ${!isLight ? "gradiant-container" : "bg-primary"}`}>
          <Company />
        </div>
        <div className="main-container bg-[url('/circle.svg')]">
          <Courses />
        </div>
        <div className="main-container gradiant-container">
          <About />
        </div>
        <div className="main-container bg-[url('/dotted.svg')]">
          <InterviewExperiance />
        </div>
        <div className="background-gradient">
          <ReviewCard />
        </div>
      </div>
    </div>
  );
}
