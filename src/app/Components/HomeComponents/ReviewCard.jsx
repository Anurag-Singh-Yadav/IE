"use client";
import React from "react";
import indianCricketers from "../../../../public/dummyData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const CustomButtonGroup = ({ next, previous }) => (
  <div className="absolute top-0 right-2 flex justify-between gap-4 items-center z-40">
    <button className="" onClick={previous}>
      <div className="rounded-full w-fit hover:bg-green-bg transition-all duration-300 hover:text-white ">
        <MdOutlineKeyboardArrowLeft size={35} />
      </div>
    </button>
    <button className="" onClick={next}>
      <div className="rounded-full w-fit hover:bg-green-bg transition-all duration-300 hover:text-white ">
        <MdOutlineKeyboardArrowRight size={35} />
      </div>
    </button>
  </div>
);

const ReviewCard = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full relative">
      <div className="hidden md:flex bg-[#f4f5ff] top-8 left-0 aspect-square -z-10  w-auto rounded-full absolute h-full"></div>

      <div className=" bg-[#f4f5ff] top-28 sm:top-8 right-2 aspect-square -z-10  w-auto rounded-full absolute h-[40%] sm:h-[70%]"></div>

      <div className="relative overflow-x-hidden mx-auto w-[100vw] sm:w-[80vw] overflow-y-clip mb-5 h-fit">
        <div className="relative mx-4 font-normal sm:font-medium md:font-lg lg:font-bold text-xl sm:text-2xl md:text-3xl pt-6 pb-12">
          What Says{" "}
          <span className="text-green-bg underline">Our Students</span>
        </div>
        <Carousel
          className="pt-10"
          responsive={responsive}
          showDots={false}
          infinite={true}
          autoPlay={true}
          arrows={false}
          transitionDuration={100}
          autoPlaySpeed={2500}
          customButtonGroup={<CustomButtonGroup />}
        >
          {indianCricketers.map((review, index) => (
            <div
              key={index}
              className="transition-transform duration-2000 px-2"
            >
              <div className="mx-4 text-dimWhite bg-white rounded-md min-h-[300px] cursor-pointer shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                <div className="flex bg-light-green text-black px-4 py-4 justify-start gap-2 items-center mb-3">
                  <Image
                    src={review.imageUrl}
                    className="h-[70px] rounded-full border aspect-square"
                    alt={review.name}
                    width={70}
                    height={200}
                  />
                  <div className="font-semibold">{review.name}</div>
                </div>
                <div className="px-4 text-sm">{review.description}</div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewCard;
