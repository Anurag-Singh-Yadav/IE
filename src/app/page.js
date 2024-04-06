"use client";
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
    <div className="relative">
      <Hero />
      <div className="bg-primary">
        <div className="main-container gradiant-container">
          <Company />
        </div>
        <div className="main-container bg-[url('/circle.svg')] dark:bg-[url('/circle-dark.svg')]">
          <Courses />
        </div>
        <div className="main-container gradiant-container">
          <About />
        </div>
        <div className="main-container bg-[url('/dotted.svg')] dark:bg-[url('/dotted-dark.svg')]">
          <InterviewExperiance />
        </div>
        <div className="gradiant-container">
          <ReviewCard />
        </div>
      </div>
    </div>
  );
}
