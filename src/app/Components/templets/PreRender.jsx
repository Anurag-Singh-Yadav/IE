import React, { useEffect, useRef } from "react";
import "./PreRender.css"; // Make sure to import the CSS file

const PreRender = ({ count, height, color, width, round }) => {
  const ref = useRef();

  if (!color) {
    color = "#808080";
  }
  if(!width){
    width=`100%`
  }

  if(!height){
    height=20;
  }


  return (
    <div
      className={`flex flex-col w-full opacity-35`}
    >
      {Array.from({ length: count }, (_, index) => {
        return (
            <div key={index} style={ {height:`${height}px` , width:`${width}px` , backgroundColor:`${color}`}} className={`my-3 , ${round && "rounded-full"} loading-placeholder`}></div>
        );
      })}
    </div>
  );
};

export default PreRender;
