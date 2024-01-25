"use client";
import React, { useEffect, useState } from "react";
import Dropdown from "./Components/NavbarComponents/Dropdown";
import Login from "./Components/NavbarComponents/Login";
import "./globals.css";
import './Navbar.css';
import MobileNavbar from "./MobileNavbar";

function Navbar() {

  const dropdownData = [
    {
      label: "Roadmaps",
      options: [
        {
          label: "DSA",
          value: "dsa",
        },
        {
          label: "Computer Fundamentals",
          value: "computerFundamentals",
        },
        {
          label: "DSA",
          value: "dsa",
        },
        ,
        {
          label: "DSA",
          value: "dsa",
        },
      ],
    },
    {
      label: "Practice",
      options: [
        {
          label: "DSA",
          value: "dsa",
        },
        {
          label: "Computer Fundamentals",
          value: "computerFundamentals",
        },
        {
          label: "DSA",
          value: "dsa",
        },
        ,
        {
          label: "DSA",
          value: "dsa",
        },
      ],
    },
    {
      label: "Tutorials",
      options: [
        {
          label: "DSA",
          value: "dsa",
        },
        {
          label: "Computer Fundamentals",
          value: "computerFundamentals",
        },
        {
          label: "DSA",
          value: "dsa",
        },
        ,
        {
          label: "DSA",
          value: "dsa",
        },
      ],
    },
    {
      label: "Challenges",
      options: [
        {
          label: "DSA",
          value: "dsa",
        },
        {
          label: "Computer Fundamentals",
          value: "computerFundamentals",
        },
        {
          label: "DSA",
          value: "dsa",
        },
        ,
        {
          label: "DSA",
          value: "dsa",
        },
      ],
    },
  ];

  const [isSignup, setSignInBtn] = useState(true);
  const [flag, setFlag] = useState(false);
  let a = "</IE>";

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

      <div className="flex items-center gap-6">
        <div>
          <button
            className="btn-4 py-1 px-4 rounded-md  font-semibold border-2 border-black transition duration-300"
            onClick={() => {
              setSignInBtn(false);
              setFlag(true);
            }}
          >
            Sign In
          </button>
        </div>
        <button
          className="py-2 px-4 text-white font-semibold rounded-lg btn-gradient hidden sm:flex"
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
    <MobileNavbar />
    </div>
  
  );
}

export default Navbar;
