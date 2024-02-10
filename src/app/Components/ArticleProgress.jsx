"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ArticleProgress.css";
import { FaChevronLeft } from "react-icons/fa";
import PreRender from "./templets/PreRender";

function ArticleProgress({ data }) {
  // data = [ { index: Number , label: String } ]

  const articleLoading = useSelector((state) => {
    return state.GlobalState.articleLoading;
  });

  const handleClick = (index) => {
    const element = document.getElementById(`content-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [show , setShow] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      setShow(window.innerWidth > 1000);
    }

    handleResize();

    window.addEventListener("resize",handleResize);

    return () => {
        window.removeEventListener("resize",handleResize);
    }
  } , [])

  return (
    <div>
      {articleLoading && show && <div className="min-w-[20vw] min-h-[70vh] border-2 border-green-bg p-2 rounded-lg">
        <PreRender count={5} />
      </div>}
      { !articleLoading && data &&
        <div
          onMouseEnter={() => {
            if (window.innerWidth >= 1000) return;
            const a = document.getElementById("content-table");
            a.classList.add("appear");
            a.classList.remove("content-table");
          }}
          onMouseLeave={async () => {
            if (window.innerWidth >= 1000) return;
            const a = document.getElementById("content-table");
            a.classList.remove("appear");
            a.classList.add("disappear");
            setTimeout(() => {
              a.classList.remove("disappear");
              a.classList.add("content-table");
            }, 300);
          }}
          className="sticky top-[10vh] h-fit flex flex-col items-end gap-3 bg-white  right-0 transition duration-300"
        >
          <div
            id="content-table-icon"
            className="fixed top-[10vh] right-0 rounded-l-full p-1 pr-4 "
          >
            <FaChevronLeft size={30} />
          </div>

          <div
            id="content-table"
            className="mr-1 rounded-md ml-10 px-4 py-2 min-w-[20vw] min-h-[70vh] content-table flex flex-col gap-4 bg-white border-2 border-green-bg"
          >
            <p className=" text-lg font-semibold text-center">
              Table of <span className="text-green-bg underline">Contents</span>
            </p>
            <div className="flex flex-col items-start">
              {data.map((obj, i) => {
                return (
                  <div
                    key={i}
                    className="hover:text-green-bg hover:underline transition duration-300 flex justify-between items-center gap-4 cursor-pointer"
                  >
                    {obj.title === "H2" && (
                      <div className="h-[5px] w-[5px] rounded-full bg-black" />
                    )}
                    <div
                      className={`${
                        obj.title === "H3"
                          ? "ml-12 border-l-2 border-green-bg"
                          : "ml-3"
                      } flex items-center py-2 gap-2`}
                    >
                      {obj.title === "H3" && (
                        <p className="w-[14px] h-[2px] bg-green-bg"></p>
                      )}
                      <p
                        key={i}
                        onClick={() => {
                          handleClick(obj.index);
                        }}
                        className={``}
                      >
                        {obj.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default ArticleProgress;
