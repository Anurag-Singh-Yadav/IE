import React, { useEffect } from "react";
import "./PreRender.css"; // Make sure to import the CSS file

const PreRender = ({ count, height , color}) => {
    
    if(!color){
        color = '#f8f5f5'
    }

  return (
    <div className="flex flex-col w-full">
      {Array.from({ length: count }, (_, index) => {
        return (
          <div>
            {!height && (
              <div key={index} className="loading-placeholder my-3" style={{height:'20px', backgroundColor:`${color}`}}></div>
            )}
            {height && (
              <div key={index} className="loading-placeholder my-3" style={{height: `${height}px`, backgroundColor:`${color}`}}></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PreRender;
