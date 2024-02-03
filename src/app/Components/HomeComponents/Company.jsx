"use client";
import React from "react";
import Image from "next/image";
import assets from "@/assets/allImages";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Company() {
  const imgData = [
    assets.microsoft,
    assets.google,
    assets.amazon,
    assets.facebook,
    assets.netflix,
    assets.samsung,
    assets.microsoft,
    assets.google,
    assets.amazon,
    assets.facebook,
    assets.netflix,
    assets.samsung,
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1301 },
      items: 5,
    },
    superLargeDesktop: {
      breakpoint: { max: 1300, min: 951 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 950, min: 701 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 700, min: 550 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 490, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-[80vw] py-16 mx-auto">
      <div className="w-fit mx-auto rounded-2xl text-sm sm:text-base sm:font-bold  text-green-bg text-center bg-light-green2 py-2 mb-3 sm:px-4 px-2">Trusted Company Arround The World!</div>

      <Carousel
       className="bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
        responsive={responsive}
        showDots={false}
        infinite = {true}
        autoPlay={true}
        arrows={false}
        transitionDuration={5000}
        autoPlaySpeed={3500}
      >
        {imgData.map((src, i) => (
          <div key={i} className="flex h-full  justify-center items-center gap-2">
            <Image
            src={src}
            width={144}
            alt={`image-${i}`}
            className=""
          />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Company;
