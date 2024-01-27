"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";


import Dropdown from "./Components/NavbarComponents/Dropdown";
import Login from "./Components/NavbarComponents/Login";
import "./globals.css";
import './Navbar.css';
import MobileNavbar from "./Components/NavbarComponents/MobileNavbar";
import { FaBars } from "react-icons/fa";
import { dropdownData } from "./Components/NavbarComponents/NavbarData";
import {toggleSignPagePopup,setSignInBtn} from './GlobalRedux/Features/GlobalStateSlice';
import { FaCircleArrowUp } from "react-icons/fa6";
function Navbar() {

  const { data: sessionData } = useSession();
  console.log('session ',sessionData);

  const isSignup = useSelector((state)=>{return state.GlobalState.isSignup});

  const dispatch = useDispatch();
  const flag = useSelector((state)=>{
    return state.GlobalState.isSignPagePopup;
  })
  let a = "</IE>";

  const [navBurger , setNavBurger] = useState(false);

  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showThreshold = 300; // Adjust this threshold as needed

    setShowBackToTop(scrollY > showThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
          className={`fixed bottom-4 bg-white rounded-full w-fit z-10 right-2 cursor-pointer text-dark-blue hover:text-green-bg transition-all duration-300 back-to-top ${showBackToTop ? 'rotate-in' : 'rotate-out'}`}
          title="Back to top"
          onClick={scrollToTop}
        >
          <FaCircleArrowUp size={40} />
        </div>
      <div className="flex justify-between h-[10vh] items-center">
      <p className="px-4 py-2 text-yellow-400   font-bold text-3xl">{a}</p>

      {/* Dropdowns */}
      <div className="gap-7 font-semibold hidden nmd:flex">
        {dropdownData.map((obj, index) => {
          return (
            <Dropdown label={obj.label} options={obj.options} key={index} />
          );
        })}
      </div>

      <div onClick={()=>setNavBurger(!navBurger)} className="nmd:hidden">
        <FaBars size={25}/>
      </div>

      <div className="hidden nmd:flex items-center gap-6">
        <div>
          <button
            className="py-2 px-4 start-2  font-semibold rounded-md transition duration-300"
            onClick={() => {
              setSignInBtn(false);
              dispatch(toggleSignPagePopup());
            }}
          >
            Sign In
          </button>
        </div>
        <button
          className="py-2 px-4 text-white font-semibold rounded-lg btn-gradient-2 hidden sm:flex"
          onClick={() => {
            setSignInBtn(true);
            dispatch(toggleSignPagePopup());
          }}
        >
          Sign Up
        </button>
      </div>
      {flag && (
        <Login
          isSignup={isSignup}
          setSignInBtn={setSignInBtn}
          
        ></Login>
      )}

    </div>
      <MobileNavbar navBurger={navBurger} setNavBurger={setNavBurger}/>
    </div>
  
  );
}

export default Navbar;
