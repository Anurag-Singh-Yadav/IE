"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const H1 = ({ id, value }) => {
  return (
    <div id={id} className=" text-lg font-semibold mb-7">
      {value}
    </div>
  );
};

const H2 = ({ id, value }) => {
  return (
    <div id={id} className=" text-md font-semibold mb-6">
      {value}
    </div>
  );
};

const H3 = ({ id, value }) => {
  return (
    <div id={id} className=" text-md font-semibold mb-3">
      {value}
    </div>
  );
};

const Paragraph = ({ id, value }) => {
  return (
    <div id={id} className=" text-gray-800 mb-2">
      {value}
    </div>
  );
};

const Code = ({ id, value }) => {
  return (
    <div id={id} className="bg-black text-white mb-2">
      {value}
    </div>
  );
};

const Photo = ({ id, value, correct }) => {
  console.log(correct);
  return (
    <div id={id}>
      <img
        src={value}
        className={`mb-2 ${correct == 0 && "w-[10]"} ${correct == 1 && "w-[25]"} ${
          correct == 2 && "w-[45]"
        } aspect-auto`}
      />
    </div>
  );
};

const Output = ({ id, value }) => {
  const [flag, setFlag] = useState(false);
  return (
    <div id={id}>
      <div
        onClick={() => {
          setFlag(!flag);
        }}
      >
        Guess the output{" "}
        <FaChevronDown
          className={`${flag && "rotate-180"} transition duration-300 mb-2`}
        />
      </div>
      {flag && <div>{value}</div>}
    </div>
  );
};

const LinePara = ({ id, value, correct }) => {
  return (
    <div id={id} className="mb-2">
      <p>
        <span className="font-semibold">{value}: </span>
        {correct}
      </p>
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
  H3,
  LinePara,
};
