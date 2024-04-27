"use client";
import Link from "next/link";
import React from "react";
import PreRender from "./PreRender";

function TopicsTemplets({ topics , isAptitude}) {
  return (
    <div>
      {topics && (
        <div>
          <div className="grid grid-cols-2 gap-4">
            {topics.map((topic, index) => {
              if (isAptitude !== true) {
                return (
                  <Link
                    key={index}
                    className="bg-primary text-xs sm:text-base sm:font-medium border-2 text-center border-white hover:border-l-green-bg dark:hover:border-green-bg p-2 box-shadow cursor-pointer"
                    href={{
                      pathname: `/DSA/${topic.link}`,
                      query: {
                        topic: topic.name,
                      },
                    }}
                  >
                    {topic.name}
                  </Link>
                );
              } else {
                return (
                  <Link
                    key={index}
                    className="bg-white text-xs sm:text-base sm:font-medium border-2 text-center border-white hover:border-l-green-bg p-2 box-shadow cursor-pointer"
                    href={{
                      pathname: `/aptitude/${topic}`,
                      query: {
                        topic: topic,
                      },
                    }}
                  >
                    {topic}
                  </Link>
                );
              }
            })}
          </div>
        </div>
      )}
      {
        !topics && (
          <div>
            {
              Array(10).fill().map((_ , index) => {
                return <PreRender key={index} count={1} height={30}  color={'#c2bfb8'}/>
              })
            }
          </div>
        )
      }
    </div>
  );
}

export default TopicsTemplets;
