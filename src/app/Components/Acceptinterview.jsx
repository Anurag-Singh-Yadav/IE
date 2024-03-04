'use client';
import React from "react";
import {adminChoics} from "@/app/fetchDetails/adminChoics";
function Acceptinterview({ id, setIsClicked ,isClick}) {
  return (
    <div className="flex justify-evenly gap-3 py-2">
      <div
        className={`transition-all duration-300 hover:bg-green-bg px-4 py-2 bg-light-green2 rounded-md ${
          isClick == true ? "cursor-wait" : "cursor-pointer"
        }`}
        onClick={async() => {
          setIsClicked(true);
          await adminChoics(id,true);
          setIsClicked(false);
        }}
      >
        Accept
      </div>
      <div
        className={`transition-all duration-300 hover:bg-green-bg px-4 py-2 bg-light-green2 rounded-md ${
          isClick == true ? "cursor-wait" : "cursor-pointer"
        }`}
        onClick={async() => {
          setIsClicked(true);
          await adminChoics(id,false);
          setIsClicked(false);
        }}
      >
        Reject
      </div>
    </div>
  );
}

export default Acceptinterview;
