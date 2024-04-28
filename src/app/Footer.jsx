"use client";
import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css";
import Cookies from "js-cookie";
import { getSubscribe, getSubscription } from "./fetchDetails/subscribe";
import Link from 'next/link'
import NotLoginAlterBox from "./Components/templets/NotLoginAlterBox";
function Footer() {
  const logo = "<IE/>";
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const updateFooterClass = () => {
    const footerElement = document.querySelector("#f-top");
    const isSmallScreen = window.innerWidth <= 640;

    if (isSmallScreen) {
      footerElement.classList.remove("footer-top");
      footerElement.classList.add("footer-top-sm");
    } else {
      footerElement.classList.remove("footer-top-sm");
      footerElement.classList.add("footer-top");
    }
  };

  useEffect(() => {
    updateFooterClass();
    window.addEventListener("resize", updateFooterClass);
    return () => {
      window.removeEventListener("resize", updateFooterClass);
    };
  }, []);

  const getSubscribe1 = async (token) => {
    try{
      const res = await getSubscribe(token);
      return res;
    }catch(e){
      return "error";
    }
  }

  useEffect(()=>{
    const token = Cookies.get("token");
    if (!token) {
      setSubscribed(false);
      return;
    }
    const response = getSubscribe1(token).then((resolve)=>{
      if(resolve.subscribed === true){
        setSubscribed(true);
        return;
      }else{
        setSubscribed(false);
      }
    })

    if (response === "error") {
      setSubscribed(false);
      return;
    }
    if (response === "invalid token") {
      setSubscribed(false);
      return;
    }
    if(response.subscribed === true){
      setSubscribed(true);
      return;
    }else{
      setSubscribed(false);
    }
  },[])

  const clickHandler = async (value) => {
    const token = Cookies.get("token");
    if (!token) {
      setOpen(true);
      setMessage("Please login to subscribe");
      setSubscribed(false);
      return;
    }
    const response = await getSubscription(token, value);
    console.log(response);
    if (response === "error") {
      setOpen(true);
      setMessage("Some error occured. Please try again later.")
      setSubscribed(false);
      return;
    }
    if (response === "invalid token") {
      setOpen(true);
      setMessage("Invalid token. Please login again.");
      setSubscribed(false);
      return;
    }
    if(response.subscribed === true){
      setSubscribed(true);
      return;
    }else{
      setOpen(true);
      setMessage("Please login to subscribe");
      setSubscribed(false);
    }
  };

  return (
    <div className="relative footer-container">
        {
          open && <NotLoginAlterBox open={open} details={"This feature is available to registered users only. Please Log in now!"} message={message} setOpen={setOpen}></NotLoginAlterBox>
        }
      <div
        className={`grid grid-cols-1 gap-x-3 gap-y-7 md:grid-cols-6 items-start text-sm py-2 sm:py-3 md:py-6 text-center`}
      >
        <div
          id="f-top"
          className={`footer-top background-grid flex justify-around flex-wrap items-center bg-white text-black overflow-hidden w-[94vw] sm:w-[88vw] md:w-[87vw] lg:w-[80vw] rounded-3xl px-7 sm:rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]`}
        >
          <div className="absolute w-[50%] right-0 h-full right-gradient " />

          <div className="absolute w-[50%] left-0 h-full left-gradient" />

          <div className="absolute w-full left-0 h-full down-gradient" />
          <div className="z-[1]">
            <p className="text-green-bg text-lg font-semibold">
              Ready to get started?
            </p>
            <p className="text-dark-blue">Check out out courses today.</p>
          </div>

          <button className="font-bold text-base  md:text-lg z-[1] start px-6 py-3">
            Get Started {"-->"}
          </button>
        </div>

        <Link href={'/'} className="text-green-bg text-xl font-bold mx-auto max-w-[10vw] col-span-1">
          {logo}
        </Link>

        <div className="flex flex-wrap-reverse gap-x-14 gap-y-4 col-span-5">
          <div className="flex flex-col gap-4 justify-start items-center mx-auto p-3">
            <p className="text-gray-300">Interview Express</p>
            <div className="flex flex-col gap-2">
              <p>Home</p>
              <Link href={'/about-us'}>About Us</Link>
              <Link href={'/contactus'}>Contact Us</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-start items-center mx-auto p-3">
            <p className="text-gray-300">Features</p>
            <div className="flex flex-col gap-2">
              <div>Courses</div>
              <div>Roadmaps</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-start items-center mx-auto p-3">
            <p className="text-gray-300">
              Want to stay up-to-date with latest features?
            </p>
            <div className="flex flex-col gap-2">
              <p>Subscribe to get important updates on your mail.</p>
              {!subscribed && (
                <div
                  className="py-2 px-4 start-2 text-black font-semibold rounded-md transition duration-300 cursor-pointer"
                  onClick={() => {
                    clickHandler(true);
                  }}
                >
                  Subscribe
                </div>
              )}

              {subscribed && (
                <div className="py-2 px-4 bg-red-500 text-black font-semibold rounded-md transition duration-300 cursor-pointer"
                onClick={() => {
                  clickHandler(false);
                }}>
                  UnSubscribe
                </div>
              )}

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
