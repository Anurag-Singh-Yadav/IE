import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Navigator({ navigator }) {
  console.log("navigator component ", navigator);
  const [activeBar, setActiveBar] = useState(0);
  const { menu } = navigator;

  return (
    <div className="w-[30vw]">
      <div>{navigator.mainTopic}</div>
      <div>
        {menu.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex items-center justify-between hover:bg-green-bg py-2 rounded-sm transition-all duration-300 hover:text-white font-semibold px-4">
                <span>{item.mainHeading}</span>
                <FaChevronDown onClick={() => setActiveBar(index)} />
              </div>
              <div className={`${activeBar === index ? "flex flex-col gap-2" : "hidden"}`}>
                {item.articles.map((subItem, i) => {
                  return (
                    <div key={i}>
                      <div>{subItem}</div>
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
