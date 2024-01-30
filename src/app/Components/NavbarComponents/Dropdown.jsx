"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
import './Dropdown.css';

import React from "react";

function Dropdown({ label, options }) {
  // options : [ { label : 'abc' , value : 'xyz' , }  , {} ,....]

  const mouseEnter = () => {
    if(options.length == 0)return;
      let b = document.getElementById(`dd-${label}`);
      b.classList.add('animate-in');
  }

  const mouseLeave = () => {
    if(options.length == 0)return;
    let b = document.getElementById(`dd-${label}`);
    b.classList.remove('animate-in');
    b.classList.add('animate-out');
    setTimeout(() => {
      b.classList.remove('animate-out');
    } , 300);
  }

  return (
    <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="relative flex justify-center z-20">
      <p className='hover:cursor-pointer hover:text-green-bg transition duration-400'>{label}{options.length > 0 && <RiArrowDropDownLine size={30} className="inline-block"/>}</p>

      {options.length > 0 && <div id={`dd-${label}`} className="dropdown-content top-[0vh] pt-[10vh] w-[100%] flex justify-center">
        <div className='flex flex-col bg-white rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-2 border-t-[3px] border-green-bg w-fit'>
        {options.map((obj, index) => {
          return (
            <p name={obj.value} key={index} className="whitespace-nowrap cursor-pointer hover:bg-green-bg px-4 py-2 transition duration-200 hover:text-white font-semibold">
              {obj.label}
            </p>
          );
        })}
        </div>
      </div>}
    </div>
  );
}

export default Dropdown;
