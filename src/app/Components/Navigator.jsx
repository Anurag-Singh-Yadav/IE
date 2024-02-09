'use client'
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./navigator.css";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
function Navigator({ navigator,setNavBarClick,navBarClick }) {
  const [activeBar, setActiveBar] = useState(-1);
  const [activeSubTopics, setActiveSubTopics] = useState(0);
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
                  activeBar === index
                    ? "bg-green-bg text-white"
                    : "bg-light-green"
                }`}
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
                    <div
                      key={i}
                      className="flex justify-between items-center border-l-2 border-green-bg"
                    >
                      <div className="h-[2px] w-[18px] bg-green-bg flex "></div>
                      {activeBar == index && activeSubTopics === i && (
                        <FaCircle className="text-green-bg" />
                      )}
                      <Link
                        className="py-3 text-sm px-2 font-medium hover:cursor-pointer"
                        onClick={() => {
                          setActiveSubTopics(i);
                          setNavBarClick(!navBarClick);
                        }}
                        href={'/learn/[mainTopic]'} as={`/learn/${navigator.mainTopic}?mainTopic=${navigator.mainTopic}&mainHeading=${item.mainHeading}&title=${subItem}`}
                      >
                        {subItem}
                      </Link>
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
