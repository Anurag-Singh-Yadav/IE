import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const H1 = ({ value }) => {
  return <div className="">{value}</div>;
};

const H2 = ({ value }) => {
  return <div className="">{value}</div>;
};

const Paragraph = ({ value }) => {
  return <div className="">{value}</div>;
};

const Code = ({ value }) => {
  return <div className="bg-black text-white">{value}</div>;
};

const Photo = ({ value, correct }) => {
  return (
    <div>
      <Image
        src={value}
        alt="loading.."
        className={`aspect-auto ${correct == 0 && "w-20"} ${
          correct == 1 && " w-32"
        } ${correct == 2 && " w-40"} `}
      />
    </div>
  );
};

const Output = ({ value }) => {
    const [flag , setFlag] = useState(false);
  return (
    <div>
      <div onClick={() => {
        setFlag(!flag);
      }}>Guess the output {' '}<FaChevronDown className={`${flag && ' rotate-180'} transition duration-300`} /></div> 
      {flag && <div>{value}</div>}
    </div>
  );
};

export default renderMethods = {
    H1,
    H2,
    Paragraph,
    Code,
    Photo,
    Output,
}
