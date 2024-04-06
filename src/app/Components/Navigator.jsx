"use client";
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./navigator.css";
import { FaCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
function Navigator({
  navigator,
  setNavBarClick,
  navBarClick,
  activeBar,
  activeSubTopics,
  clickHandle,
  showBurger,
}) {
  const [clickedTab, setClickedTab] = useState(-1);
  const { menu } = navigator;

  useEffect(() => {
    const {menu} = navigator;
    for(let i = 0; i < menu.length; i++){
      if(menu[i].mainHeading === activeBar){
        setClickedTab(i);
        break;
      }
    }
  } , [navigator])

  return (
    <div className="relative px-1 sm:px-2  md:px-4 lg:px-7 h-full ">
      {showBurger && <div className="flex justify-start mb-3" onClick={clickHandle}>
        <RxCross2 size={30}/>
      </div>}
      <div className={`text-xl font-bold text-center mb-2`}>
        {navigator.mainTopic}
      </div>
      <div>
        {menu.map((item, index) => {
          return (
            <div key={index} className="py-2">
              <div
                className={`flex items-center justify-between text-sm hover:bg-green-bg py-2 rounded-sm transition-all duration-300 hover:text-white hover:cursor-pointer font-semibold px-4 ${
                  activeBar == item.mainHeading
                    ? "bg-green-bg text-white"
                    : "bg-light-green"
                }`}
                onClick={() => {
                  if(clickedTab == index) 
                  setClickedTab(-1);
                  else setClickedTab(index);
                }}
              >
                <span>{item.mainHeading}</span>
                <FaChevronDown />
              </div>
              <div
                className={`${
                  clickedTab == index ? "drop-downanimation-add" : "hidden"
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
                          onClick={() => {
                            setNavBarClick(!navBarClick);
                            if(showBurger)clickHandle();
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
