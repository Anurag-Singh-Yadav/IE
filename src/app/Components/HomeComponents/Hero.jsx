import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
function Hero() {
  return (
    <div className="relative pt-4 sm:pt-0 min-h-[70vh] flex justify-center items-center border-[2px] border-black sm:min-h-[90vh] background-grid z-10">
      <Image
        className="absolute left-4 -z-20 bottom-0"
        src="./Ellipse4.svg"
        width={180}
        height={180}
        alt="svg"
      ></Image>

      <Image
        className="absolute left-3 -z-20 bottom-0"
        src="./Ellipse4.svg"
        width={200}
        height={200}
        alt="svg"
      ></Image>

      <Image
        className="hidden sm:flex sm:absolute right-0 -z-20 top-0"
        src="./Ellipse5.svg"
        width={200}
        height={200}
        alt="svg"
      ></Image>

      <div className="h-full flex flex-col gap-6 justify-center items-center circular-gradient-div z-10">
        <div className="flex px-3 mx-3 text-xl flex-col gap-4 sm:text-3xl md:text-5xl font-bold text-center">
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
          Embark on a journey to transform your aspirations into reality through
          the art of coding. Learn to code your dreams and shape the blueprint
          of your future with creative design. Unleash the power of technology
          to bring your visions to life.
        </p>


        <div className="flex sm:flex-row flex-col justify-evenly text-xl  gap-4 sm:gap-8 md:gap-36 items-center font-semibold">
          <div className="px-4 py-2 bg-light-green rounded-md hover:bg-green-bg hover:text-white hover:rounded-lg transition-all duration-500">
            Explore Course
          </div>

          <button className="flex start justify-center items-center gap-2 px-4 py-2 text-black">
            <a href="#" className="flex justify-center items-center gap-2">
              <span>Start Learing</span>
              <FaArrowRight />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
