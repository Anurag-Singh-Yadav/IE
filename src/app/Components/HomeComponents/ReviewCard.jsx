"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fetchReviews } from "../../fetchDetails/fetchReviews";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import Avatar from "react-avatar";
import PreRender from "../templets/PreRender";
const CustomButtonGroup = ({ next, previous }) => (
  <div className="absolute top-0 right-2 flex justify-between gap-2 items-center z-40">
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

function makeStar({ number }) {
  let stars = [];
  for (let i = 0; i < number; i++) {
    stars.push(<IoIosStar key={i} size={20} className=" text-[#ffbd35]" />);
  }
  let empty = [];
  for (let i = 0; i < 5 - number; i++) {
    empty.push(
      <IoIosStarOutline key={i + 5} size={20} className="text-black" />
    );
  }
  return [...stars, ...empty];
}

const ReviewCard = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchReviews(false);
      setReviews(data);
    };
    fetchData();
  }, []);

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
    <div className="w-full border border-primary sm:pt-8 pb-4 relative">
      <div className="relative font-normal sm:font-medium md:font-lg lg:font-bold text-xl sm:text-2xl md:text-3xl pt-6 pb-8 main-container">
        What Says <span className="text-green-bg underline">Our Students</span>
      </div>

      {reviews && (
        <div className="relative  overflow-x-clip mx-auto w-[100vw] sm:w-[80vw] overflow-y-clip mb-5 h-fit">
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
            {reviews.map((review, index) => (
              <div
                key={index}
                className="transition-transform duration-2000 px-2 h-[300px]"
              >
                <div className="sm:mx-4 h-full text-dimWhite bg-primary flex flex-col rounded-md shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                  <div className="flex bg-light-green text-black px-4 py-2 justify-start gap-2 items-center mb-3">
                    <Avatar
                      src={review.avatar}
                      size={50}
                      alt={review.name}
                      round={true}
                    />
                    <div className="font-semibold">{review.name}</div>
                  </div>

                  <div className="flex px-4 flex-col justify-between items-start min-h-[190px]">
                    <div className="text-sm">{review.description}</div>
                    <div className="flex w-full justify-evenly">
                      {makeStar({ number: review.rating })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}

      {!reviews && (
        <div className="grid grid-cols-3 justify-between px-4">
          {Array(3)
            .fill(0)
            .map((_, index) => {
              return (
                <div key={index} className="mx-2">
                  <PreRender count={1} height={200} color={"#dbcccc"} />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
