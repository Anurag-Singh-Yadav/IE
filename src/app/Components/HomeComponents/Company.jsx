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
      breakpoint: { max: 700, min: 401 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-[80vw] pt-2 mx-auto">
      <div className="w-fit mx-auto rounded-2xl text-sm sm:text-base sm:font-bold  text-green-bg text-center bg-light-green2 py-2 mb-3 sm:px-4 px-2">Trusted Company Arround The World!</div>
      <Carousel
        responsive={responsive}
        showDots={false}
        infinite={true}  
        autoPlay={true}
        arrows={false}
        transitionDuration={5000}
        autoPlaySpeed={3500}
      >
        {imgData.map((src, i) => (
          <div className="flex justify-center items-center gap-2">
            <Image
            key={i}
            src={src}
            width={144}
            alt={`image-${i}`}
            className="aspect-w-4 aspect-h-1"
          />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Company;
