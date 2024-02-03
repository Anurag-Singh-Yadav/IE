"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="fixed top-0 right-0 pt-4 h-[100vh] w-[100vw] flex justify-center items-center  background-grid -z-10">
        <div
          id="hero"
          className="absolute w-[50%] right-0 h-full right-gradient "
        ></div>
        <div className="absolute w-[50%] left-0 h-full left-gradient"></div>

        <div className="absolute w-full left-0 h-full down-gradient z-[12]" />
      </div>

      <div className="pt-4 pb-3 relative sm:pt-0 min-h-[70vh] w-[100vw] flex justify-center items-center sm:min-h-[90vh] ">
        <div className="h-full flex flex-col gap-6 justify-center items-center z-20">
          <div className="flex px-3 mx-3 text-xl flex-col gap-4 sm:text-3xl md:text-5xl font-bold text-center">
            <Image
              className="absolute left-0 z-[13] bottom-0"
              src="./Ellipse4.svg"
              width={180}
              height={180}
              alt="svg"
            ></Image>

            <Image
              className="absolute left-0 z-[13] bottom-0"
              src="./Ellipse4.svg"
              width={200}
              height={200}
              alt="svg"
            ></Image>

            <Image
              className="hidden sm:flex sm:absolute right-0 z-[13] top-0"
              src="./Ellipse5.svg"
              width={200}
              height={200}
              alt="svg"
            ></Image>
            <div className="flex">
              <div>Learn to </div>
              <div className="bg-green-bg skew-y-6 px-2 sm:px-4 py-1 text-white">
                code
              </div>
              <div> your</div>
            </div>
            <div className="flex mt-3">
              <div className=" whitespace-nowrap">dreams and</div>
              <div className="bg-dark-blue skew-y-6 px-2 sm:px-4 py-1 text-white">
                design
              </div>
              <div>your</div>
            </div>
            <div>future</div>
          </div>

          <p className="sm:hidden text-center px-2">
            Master coding to shape your dreams and design a limitless future.
            Unleash creativity, turning lines of code into pathways to success.
          </p>
          <p className="hidden sm:flex text-center px-4 sm:mx-10 md:mx-20 lg:mx-44 lg:px-16 mb-4">
            Embark on a journey to transform your aspirations into reality
            through the art of coding. Learn to code your dreams and shape the
            blueprint of your future with creative design. Unleash the power of
            technology to bring your visions to life.
          </p>

          <div className="flex sm:flex-row flex-col justify-evenly text-xl  gap-4 sm:gap-8 md:gap-36 items-center font-semibold">
            <div className="px-4 py-2 btn-gradient rounded-md btn-gradient-2 cursor-pointer text-white hover:rounded-lg transition-all duration-500">
              Explore Course
            </div>

            <button className="flex start justify-center items-center gap-2 px-4 py-2 text-black">
              <a href="#" className="flex justify-center items-center gap-2">
                <span>Start Learning</span>
                <FaArrowRight />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
