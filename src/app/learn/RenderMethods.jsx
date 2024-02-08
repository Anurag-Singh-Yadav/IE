'use client'
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const H1 = ({ id, value }) => {
  return <div id={id} className=" text-lg font-semibold">{value}</div>;
};

const H2 = ({ id, value }) => {
  return <div id={id} className=" text-md font-semibold">{value}</div>;
};

const Paragraph = ({ id, value }) => {
  return <div id={id} className=" text-gray-800">{value}</div>;
};

const Code = ({ id, value }) => {
  return <div id={id} className="bg-black text-white">{value}</div>;
};

const Photo = ({ id, value, correct }) => {
  console.log(correct);
  return (
    <div id={id}>
      <img src={value} className={`${correct == 0 && 'w-[10]'} ${correct == 1 && 'w-[25]'} ${correct == 2 && 'w-[45]'} aspect-auto`} /> 
    </div>
  );
};

const Output = ({ id, value }) => {
    const [flag , setFlag] = useState(false);
  return (
    <div id={id}>
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