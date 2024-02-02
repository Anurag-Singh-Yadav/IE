// 'use client'
import React from "react";
import About from "./Components/HomeComponents/About";
import Company from "./Components/HomeComponents/Company";
import Courses from "./Components/HomeComponents/Courses";
import Hero from "./Components/HomeComponents/Hero";
import InterviewExperiance from "./Components/HomeComponents/InterviewExperiance";
import ReviewCard from "./Components/HomeComponents/ReviewCard";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="main-container">
        <Company />
        <Courses />
        <About />
        <InterviewExperiance />
      </div>
      
      <ReviewCard />
    </div>
  );
}
