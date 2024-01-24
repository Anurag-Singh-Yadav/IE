"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import './Dropdown.css';

import React from "react";

function Dropdown({ label, options }) {
  // options : [ { label : 'abc' , value : 'xyz' , }  , {} ,....]

  const mouseEnter = () => {
      let b = document.getElementById(label);
      if(b.classList.contains('animate-out'))b.classList.remove('animate-out');
      b.classList.add('animate-in');
  }

  const mouseLeave = () => {
    let b = document.getElementById(label);
    if(b.classList.contains('animate-in'))b.classList.remove('animate-in');
    b.classList.add('animate-out');
  }

  return (
    <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="relative flex justify-center z-50">
      <p className='hover:cursor-pointer hover:text-green-bg transition duration-200'>{label}<RiArrowDropDownLine size={30} className="inline-block"/></p>

      <div id={label} className="dropdown-content top-[0vh] pt-[10vh] w-[100%] flex justify-center">
        <div className='flex flex-col bg-white rounded-lg shadow-md shadow-gray-500 p-2 border-t-[3px] border-green-bg w-fit'>
        {options.map((obj, index) => {
          return (
            <p name={obj.value} key={index} className=" whitespace-nowrap hover:bg-green-bg px-4 py-2 transition duration-200 hover:text-white font-semibold">
              {obj.label}
            </p>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
