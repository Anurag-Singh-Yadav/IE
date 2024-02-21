'use client';
import React from "react";

function Acceptinterview({ adminChoics ,isClick}) {
  return (
    <div className="flex justify-evenly gap-3 py-2">
      <div
        className={`transition-all duration-300 hover:bg-green-bg px-4 py-2 bg-light-green2 rounded-md ${
          isClick == true ? "cursor-wait" : "cursor-pointer"
        }`}
        onClick={() => {
          adminChoics(true);
        }}
      >
        Accept
      </div>
      <div
        className={`transition-all duration-300 hover:bg-green-bg px-4 py-2 bg-light-green2 rounded-md ${
          isClick == true ? "cursor-wait" : "cursor-pointer"
        }`}
        onClick={() => {
          adminChoics(false);
        }}
      >
        Reject
      </div>
    </div>
  );
}

export default Acceptinterview;
