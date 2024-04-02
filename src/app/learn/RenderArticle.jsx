"use client";
import React, { useEffect, useState } from "react";
import { renderMethods } from "./RenderMethods";
import PreRender from "../Components/templets/PreRender";
import Link from "next/link";
import { useSelector } from "react-redux";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import HtmlToDom from "../Components/templets/HtmlToDom";

function RenderArticle({ contentFlow, title, menu, mainHeading, mainTopic }) {
  
  const [np, setNp] = useState({});

  const articleLoading = useSelector((state) => {
    return state.GlobalState.articleLoading;
  });

  useEffect(() => {
    if (menu) {
      for (let i = 0; i < menu.length; i++) {
        if (menu[i]?.mainHeading === mainHeading) {
          for (let j = 0; j < menu[i]?.articles.length; j++) {
            if (menu[i].articles[j] === title) {
              if (menu[i].articles.length > j && menu[i].articles[j + 1]) {
                setNp((prev) => {
                  return {
                    ...prev,
                    next: {
                      mainHeading,
                      title: menu[i].articles[j + 1],
                    },
                  };
                });
              } else if (
                menu.length > i &&
                menu[i + 1] &&
                menu[i + 1].articles.length > 0 &&
                menu[i + 1].articles[0]
              ) {
                setNp((prev) => {
                  return {
                    ...prev,
                    next: {
                      mainHeading: menu[i + 1].mainHeading,
                      title: menu[i + 1].articles[0],
                    },
                  };
                });
              }

              if (j > 0) {
                setNp((prev) => {
                  return {
                    ...prev,
                    previous: {
                      mainHeading,
                      title: menu[i].articles[j - 1],
                    },
                  };
                });
              } else if (i > 0 && menu[i - 1].articles.length > 0) {
                setNp((prev) => {
                  return {
                    ...prev,
                    previous: {
                      mainHeading: menu[i - 1].mainHeading,
                      title: menu[i - 1].articles[0],
                    },
                  };
                });
              }
            }
          }
        }
      }
    }
    return () => {
      setNp({});
    }
  }, [menu, mainHeading , articleLoading]);

  return (
    <div className=" w-full dark:border-r flex flex-col justify-between mb-3 dark:mb-0 py-4">
      <div
        className="flex flex-col justify-between px-6 pb-[30vh] mb-3 py-4"
        style={{ letterSpacing: "0.8px" }}
      >
        {contentFlow && !articleLoading && (
          <HtmlToDom htmlContent={contentFlow} />
        )}

        {articleLoading && <PreRender count={10} />}
      </div>
      {!articleLoading && (
        <div className="grid grid-cols-2 gap-6 mt-6 px-4 w-full mx-auto max-w-[70%]">
          {np.previous && np.previous.title && np.previous.mainHeading ? (
            <Link
              className="py-3 text-sm px-2 font-medium hover:cursor-pointer flex items-center gap-5 justify-center hover:bg-green-bg hover:text-white transition duration-300 rounded-md"
              href={"/learn/[mainTopic]"}
              as={`/learn/${mainTopic}?mainTopic=${mainTopic}&mainHeading=${np.previous.mainHeading}&title=${np.previous.title}`}
            >
              <GrLinkPrevious size={25} />
              <div className="flex flex-col gap-1 text-center">
                {/* <p className="mx-2 my-1 text-xs">{np.previous.title}</p> */}
                <p className=" text">Previous</p>
              </div>
            </Link>
          ) : (
            <div className="py-3 text-sm px-2 font-medium flex items-center  gap-5 justify-center bg-gray-100 cursor-not-allowed rounded-md text-gray-600">
              <GrLinkPrevious size={25} />
              <div className="flex flex-col gap-1 text-center">
                {/* <p className="mx-2 my-1 text-xs">Begin</p> */}
                <p className=" ">Previous</p>
              </div>
            </div>
          )}

          {np.next && np.next.title && np.next.mainHeading ? (
            <Link
              className="py-3 text-sm px-2 font-medium hover:cursor-pointer flex items-center gap-5 justify-center hover:bg-green-bg hover:text-white transition duration-300 rounded-md"
              href={"/learn/[mainTopic]"}
              as={`/learn/${mainTopic}?mainTopic=${mainTopic}&mainHeading=${np.next.mainHeading}&title=${np.next.title}`}
            >
              <div className="flex flex-col gap-1 text-center">
                {/* <p className="mx-2 my-1 text-xs">{np.next.title}</p> */}
                <div>Next</div>
              </div>
              <GrLinkNext size={25} />
            </Link>
          ) : (
            <div className="py-3 text-sm px-2 font-medium cursor-not-allowed flex justify-center items-center gap-5 bg-gray-100 rounded-md text-gray-600">
              <div className="flex flex-col gap-1 text-center">
                {/* <p className="mx-2 my-1 text-xs">End</p> */}
                <div>Next</div>
              </div>
              <GrLinkNext size={25} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RenderArticle;
