'use client'
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const H1 = ({ value }) => {
  return <div className=" text-lg font-semibold">{value}</div>;
};

const H2 = ({ value }) => {
  return <div className=" text-md font-semibold">{value}</div>;
};

const Paragraph = ({ value }) => {
  return <div className=" text-gray-800">{value}</div>;
};

const Code = ({ value }) => {
  return <div className="bg-black text-white">{value}</div>;
};

const Photo = ({ value, correct }) => {
  console.log(correct);
  return (
    <div>
      <img src={value} className={`${correct == 0 && 'w-[10]'} ${correct == 1 && 'w-[25]'} ${correct == 2 && 'w-[45]'} aspect-auto`} /> 
    </div>
  );
};

const Output = ({ value }) => {
    const [flag , setFlag] = useState(false);
  return (
    <div>
      <div onClick={() => {
        setFlag(!flag);
      }}>Guess the output {' '}<FaChevronDown className={`${flag && 'rotate-180'} transition duration-300`} /></div> 
      {flag && <div>{value}</div>}
    </div>
  );
};

export const renderMethods = {
    H1,
    H2,
    Paragraph,
    Code,
    Photo,
    Output,
}
