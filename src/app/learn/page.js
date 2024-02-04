"use client";
import Image from "next/image";
import React from "react";
function Page() {
  return (
    <div className="min-h-[100vh]">
      {/* <Link href="/learn/[mainTopic]" as="/learn/object-oriented-programming">
        OOPs
      </Link>
      <Link href="/learn/[mainTopic]" as="/learn/DSA">
        DSA
      </Link> */}

      <div className="main-container gradiant-container grid grid-cols-1 md:grid-cols-2 items-center justify-center py-4 min-h-[80vh]">
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
          <button className="px-4 py-2 mt-3 btn-gradient rounded-md btn-gradient-2 cursor-pointer text-white hover:rounded-lg transition-all duration-500 font-medium">Browse course</button>
        </div>

      </div>
      <div>

      </div>
    </div>
  );
}

export default Page;
