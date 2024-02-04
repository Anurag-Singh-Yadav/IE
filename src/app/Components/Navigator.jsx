import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./navigator.css";
import { FaCircle } from "react-icons/fa";
function Navigator({ navigator }) {
  const [activeBar, setActiveBar] = useState(-1);
  const [activeSubTopics, setActiveSubTopics] = useState(0);
  const { menu } = navigator;

  return (
    <div className="max-w-[35vw] min-h-[90vh] overflow-y-auto border px-10 py-2">
      <div className="px-auto text-xl font-bold py-8">{navigator.mainTopic}</div>
      <div>
        {menu.map((item, index) => {
          return (
            <div key={index}>
              <div
                className={`flex items-center justify-between text-sm hover:bg-green-bg py-2 rounded-sm transition-all duration-300 hover:text-white font-semibold px-4 ${activeBar === index ? "bg-green-bg text-white" : "bg-light-green"}`}
                onClick={() => {
                  if (activeBar === index) setActiveBar(-1);
                  else setActiveBar(index);
                  setActiveSubTopics(0);
                }}
              >
                <span>{item.mainHeading}</span>
                <FaChevronDown />
              </div>
              <div
                className={`${
                  activeBar === index ? "drop-downanimation-add" : "hidden"
                } px-8`}
              >
                {item.articles.map((subItem, i) => {
                  return (
                    <div key={i} className="flex justify-between items-center border-l-2 border-green-bg">
                      <div className="h-[2px] w-[18px] bg-green-bg flex"></div>
                      {
                        (activeBar == index && activeSubTopics === i) && <FaCircle className="text-green-bg"/>
                      }
                      <div className="py-3 text-sm px-2 font-medium" onClick={()=>{setActiveSubTopics(i)}}>{subItem}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navigator;
