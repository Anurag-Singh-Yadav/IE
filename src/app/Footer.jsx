"use client";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const logo = "<IE/>";

  const [userEmail, setUserEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // subscribe 'userEmail'

    setUserEmail("");
  };

  return (
    <div className="relative footer-container ">
      <div className="grid grid-cols-1 gap-x-3 gap-y-7 sm:grid-cols-6 items-start text-sm py-2 sm:py-3 md:py-6 text-center">

        <div className="background-grid flex justify-around flex-wrap items-center footer-top  bg-white text-black overflow-hidden w-[94vw] sm:w-[88vw] md:w-[87vw] lg:w-[80vw] rounded-lg sm:rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
          <div className="absolute w-[50%] right-0 h-full right-gradient " />

          <div className="absolute w-[50%] left-0 h-full left-gradient" />

          <div className="absolute w-full left-0 h-full down-gradient" />
          <div className="z-[1]">
            <p className="text-green-bg text-lg font-semibold">Ready to get started?</p>
            <p className="text-dark-blue">Check out out courses today.</p>
          </div>

          <button className="font-bold text-base  md:text-lg z-[1] start px-6 py-3">
            Get Started {'-->'}
          </button>
        </div>

        <p className="text-yellow-500 text-xl font-bold mx-auto max-w-[10vw] col-span-1">
          {logo}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 col-span-5 gap-x-4 gap-y-7">
          <div className="flex flex-col gap-4 justify-start items-center mx-auto">
            <p className="text-gray-300">Interview Express</p>
            <div className="flex flex-col gap-2">
              <p>Home</p>
              <div>About Us</div>
              <div>Contact Us</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-start items-center mx-auto">
            <p className="text-gray-300">Features</p>
            <div className="flex flex-col gap-2">
              <div>Courses</div>
              <div>Roadmaps</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-4 justify-start items-center mx-auto">
            <p className="text-gray-300">
              Want to stay up-to-date with latest features?
            </p>
            <div className="flex flex-col gap-2">
              <p>Subscribe to get important updates on your mail.</p>
              <form onSubmit={submitHandler}>
                <input
                  type="email"
                  value={userEmail}
                  placeholder="Enter email"
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="p-2 rounded-md text-black"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className=" cursor-pointer btn-gradient-2 p-2 rounded m-2"
                />
              </form>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex flex-col items-center gap-4 py-3">
          <ul className="wrapper text-black grid sm:grid-cols-3 md:grid-cols-5 grid-cols-2"> 
            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              <span>
                <FaFacebook className="fab fa-facebook-f"></FaFacebook>
              </span>
            </li>
            <li className="icon twitter">
              <span className="tooltip">Twitter</span>
              <span>
                <FaTwitter className="fab fa-twitter"></FaTwitter>
              </span>
            </li>
            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <span>
                <FaSquareInstagram className="fab fa-instagram"></FaSquareInstagram>
              </span>
            </li>
            <li className="icon github">
              <span className="tooltip">Github</span>
              <span>
                <FaGithub className="fab fa-github"></FaGithub>
              </span>
            </li>
            <li className="icon youtube">
              <span className="tooltip">Youtube</span>
              <span>
                <FaYoutube className="fab fa-youtube"></FaYoutube>
              </span>
            </li>
          </ul>
          <p className="text-sm tracking-wide">
            {" "}
            Copyright © InterviewExpress <span id="year"></span> | All rights
            reserved
          </p>
        </div>
    </div>
  );
}

export default Footer;
