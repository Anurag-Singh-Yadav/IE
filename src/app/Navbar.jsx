"use client";
import React, { useState } from "react";
import Dropdown from "./Components/NavbarComponents/Dropdown";
import Login from "./Components/NavbarComponents/Login";
import './globals.css'
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
    <div className="flex justify-between h-[10vh] items-center">
      <p className="px-4 py-2 text-yellow-400   font-bold text-3xl">{a}</p>

      {/* Dropdowns */}
      <div className="flex gap-7 font-semibold">
        {dropdownData.map((obj, index) => {
          return (
            <Dropdown label={obj.label} options={obj.options} key={index} />
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-6">
        <div>
        <button className="btn-4 py-1 px-4 rounded-md  font-semibold border-2 border-black transition duration-300"
          onClick={() => {
            setSignInBtn(false);
            setFlag(true);
          }}
        >
          Sign In
        </button>
        </div>
        <button className="py-2 px-4 text-white font-semibold rounded-lg btn-gradient"
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
  );
}

export default Navbar;
