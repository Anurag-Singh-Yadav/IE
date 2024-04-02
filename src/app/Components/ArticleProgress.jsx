"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./ArticleProgress.css";
import { FaChevronLeft } from "react-icons/fa";
import PreRender from "./templets/PreRender";

function hasChildElements(element) {
  return Array.from(element.childNodes).some(
    (node) => node.nodeType === Node.ELEMENT_NODE
  );
}
function ArticleProgress({ title }) {
  const [data, setData] = useState(null);
  const articleLoading = useSelector((state) => {
    return state.GlobalState.articleLoading;
  });

  useEffect(() => {
    let arr = [];

    let articleContainer = document.getElementById("article-content-container");
    if (!articleContainer || articleLoading) {
      return;
    }
    let hTags = articleContainer.querySelectorAll("h1, h2, h3, h4, h5, h6, li");

    for (let i = 0; i < hTags.length; i++) {
      let currentElement = hTags[i];
      const tagName = currentElement.tagName;

      while (currentElement && hasChildElements(currentElement)) {
        currentElement = currentElement.firstElementChild;
      }

      if (currentElement.innerText.length < 30) {
        hTags[i].id = `content-${i}`;
        arr.push({
          label: currentElement.innerText,
          value: `content-${i}`,
          tagName,
        });
      }
    }

    if (title) {
      if (arr[0].label.toLowerCase() != title.toLowerCase()) {
        arr.unshift({
          label: title,
          value: `content-${title}`,
          tagName: "title",
        });
      }
    }

    setData(arr);
  }, [articleLoading]);

  const handleClick = (value) => {
    let articleContainer = document.getElementById("article-content-container");
    const element = document.getElementById(`${value}`);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShow(window.innerWidth > 1000);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      {articleLoading && show && (
        <div className="min-w-[20vw] min-h-[100vh] bg-gray-100 dark:bg-primary  p-2 rounded-lg">
          <PreRender count={7} />
        </div>
      )}
      {!articleLoading && data && show && (
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
          className="sticky top-[10vh] h-fit flex flex-col items-end gap-3 right-0 transition duration-300"
        >
          <div
            id="content-table-icon"
            className="fixed top-[10vh] right-0 rounded-l-full p-1 pr-4 "
          >
            <FaChevronLeft size={30} />
          </div>

          <div
            id="content-table"
            className="mr-1 rounded-md ml-10 px-4 min-w-[20vw] min-h-[100vh] content-table flex flex-col gap-4 bg-gray-100 dark:bg-primary py-6"
          >
            <p className=" text-lg font-semibold text-center">
              Table of <span className="text-green-bg underline">Contents</span>
            </p>
            <div className="flex flex-col text-sm items-start">
              {data.map((obj, i) => {
                return (
                  <div
                    key={i}
                    className="hover:text-green-bg hover:underline transition duration-300 flex justify-between items-center gap-4 cursor-pointer"
                  >
                    {obj.tagName.toLowerCase() !== "li" && (
                      <div className="h-[5px] w-[5px] rounded-full bg-black" />
                    )}
                    <div
                      className={`${
                        obj.tagName.toLowerCase() === "li"
                          ? "ml-12 border-l-2 border-green-bg"
                          : "ml-3"
                      } flex items-center py-2 gap-2`}
                    >
                      {obj.tagName.toLowerCase() === "li" && (
                        <p className="w-[14px] h-[2px] bg-green-bg"></p>
                      )}
                      <p
                        key={i}
                        onClick={() => {
                          obj.tagName !== "title"
                            ? handleClick(obj.value)
                            : window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                              });
                        }}
                        className={`px-2 py-1`}
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
      )}
    </div>
  );
}

export default ArticleProgress;
