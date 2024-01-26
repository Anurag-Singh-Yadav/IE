"use client";
import React, { useState } from "react";
import Dropdown from "./Components/NavbarComponents/Dropdown";
import Login from "./Components/NavbarComponents/Login";
import "./globals.css";
import './Navbar.css';
import MobileNavbar from "./Components/NavbarComponents/MobileNavbar";
import { FaBars } from "react-icons/fa";
import { dropdownData } from "./Components/NavbarComponents/NavbarData";

function Navbar() {

  const [isSignup, setSignInBtn] = useState(true);
  const [flag, setFlag] = useState(false);
  let a = "</IE>";

  const [navBurger , setNavBurger] = useState(false);

  return (
    <div>
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
              setFlag(true);
            }}
          >
            Sign In
          </button>
        </div>
        <button
          className="py-2 px-4 text-white font-semibold rounded-lg btn-gradient-2 hidden sm:flex"
          onClick={() => {
            setSignInBtn(true);
            setFlag(true);
          }}
        >
          Sign Up
        </button>
      </div>
      {flag && (
        <Login
          isSignup={isSignup}
          setSignInBtn={setSignInBtn}
          setFlag={setFlag}
        ></Login>
      )}

    </div>
      <MobileNavbar navBurger={navBurger} setNavBurger={setNavBurger}/>
    </div>
  
  );
}

export default Navbar;
