"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./navigator.css";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
function Navigator({
  navigator,
  setNavBarClick,
  navBarClick,
  activeBar,
  activeSubTopics,
}) {
  // const [activeBar, setActiveBar] = useState(-1);
  // const [activeSubTopics, setActiveSubTopics] = useState(0);
  const { menu } = navigator;

  return (
    <div className="">
      <div className="text-xl whitespace-nowrap font-bold">
        {navigator.mainTopic}
      </div>
      <div>
        {menu.map((item, index) => {
          return (
            <div key={index} className="sm:py-7 md:py-10">
              <div
                className={`flex items-center justify-between text-sm hover:bg-green-bg py-2 rounded-sm transition-all duration-300 hover:text-white hover:cursor-pointer font-semibold px-4 ${
                  activeBar == item.mainHeading
                    ? "bg-green-bg text-white"
                    : "bg-light-green"
                }`}
              >
                <span>{item.mainHeading}</span>
                <FaChevronDown />
              </div>
              <div
                className={`${
                    "drop-downanimation-add"
                } px-8`}
              >
                <div className="flex flex-col">
                  {item.articles.map((subItem, i) => {
                    return (
                      <div
                        key={i}
                        className="flex items-center border-l-2 border-green-bg"
                      >
                        <div className="h-[2px] w-[18px] bg-green-bg flex "></div>
                        {activeBar == item.mainHeading &&
                          activeSubTopics == subItem && (
                            <FaCircle className="text-green-bg" />
                          )}

                        {activeBar == item.mainHeading &&
                          activeSubTopics != subItem && (
                            <FaCircle className="text-white" />
                          )}

                        <Link
                          className="py-3 text-sm px-2 font-medium hover:cursor-pointer"
                          href={"/learn/[mainTopic]"}
                          as={`/learn/${navigator.mainTopic}?mainTopic=${navigator.mainTopic}&mainHeading=${item.mainHeading}&title=${subItem}`}
                          onClick={()=>{
                            setNavBarClick(!navBarClick)
                          }}
                        >
                          {subItem}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navigator;
