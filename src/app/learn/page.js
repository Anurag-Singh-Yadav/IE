"use client";
import Image from "next/image";
import { courses } from "./courses.js";
import React from "react";
import Link from "next/link";
function Page() {
  console.log(courses);

  return (
    <div className="min-h-[100vh]">
      {/* <Link href="/learn/[mainTopic]" as="/learn/object-oriented-programming">
        OOPs
      </Link>
      <Link href="/learn/[mainTopic]" as="/learn/DSA">
        DSA
      </Link> */}

      <div className="main-container gradiant-container grid grid-cols-1 md:grid-cols-2 items-center justify-center py-4 min-h-[85vh]">
        <div className="">
          <img src="./learn.gif" alt="gif" className="aspect-auto"></img>
        </div>
        <div className="">
          <div className="font-bold sm:text-xl md:text-2xl lg:text-4xl">
            The world’s largest selection of online courses
          </div>
          <div className="py-2 text-xs sm:text-sm md:text-normal">
            Millions of people have used{" "}
            <span className="font-bold text-green-bg text-xl">
              Interview Express
            </span>{" "}
            to decide which online course to take. We aggregate courses from
            many universities to help you find the best courses on almost any
            subject, wherever they exist. Our goal is to make online education
            work for everyone.
          </div>
          <button className="px-4 py-2 mt-3 btn-gradient rounded-md btn-gradient-2 cursor-pointer text-white hover:rounded-lg transition-all duration-500 font-medium">
            Browse course
          </button>
        </div>
      </div>

      <div className="main-container bg-[url('/star2.svg')]">
        <div className="font-semibold sm:py-4 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Explore Top <span className="text-green-bg underline">Course</span>
        </div>

        <div className="grid pb-8 grid-col-1 md:grid-cols-2 gap-4">
          {courses &&
            courses.map((course, index) => (
              <Link href={{
                pathname: `/learn/${course.link}`,
                query: { mainTopic: course.name },
              }}>
                <div
                  key={index}
                  className="flex text-xs sm:text-sm md:text-normal  items-center border-2 border-white hover:border-l-green-bg hover:cursor-pointer p-4 transition-all duration-300 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
                >
                  <img
                    src={course.url}
                    alt={course.name}
                    className="mr-4 w-24 aspect-auto"
                  />
                  <div>
                    <div className="font-bold">{course.name}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
