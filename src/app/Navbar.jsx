"use client";
import React from "react";
import Dropdown from "./Components/NavbarComponents/Dropdown";

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


  let a = '</IE>';

  return (
    <div className="flex justify-between h-[10vh] items-center">
      <p className='px-4 py-2 text-yellow-400   font-bold text-3xl'>{a}</p>

      {/* Dropdowns */}
      <div className="flex gap-7 font-semibold">
        {dropdownData.map((obj, index) => {
          return (
            <Dropdown label={obj.label} options={obj.options} key={index} />
          );
        })}
      </div>

      <div>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
