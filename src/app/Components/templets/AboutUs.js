import Image from "next/image";
import React from "react";

function AboutUs({ paragraph, imgSrc, title }) {
  return (
    <div className="py-8">
      <div className="font-semibold md:font-bold text-normal sm:text-xl md:text-3xl">
        Our{" "}
        <span className="text-green-bg underline">{title}</span>
      </div>
      <div className="grid grid-col- py-8 sm:grid-cols-5">
        <div className=" col-span-2">
            <Image src={`/${imgSrc}`} width={280} height={550} className=" aspect-square" alt="image"></Image>
        </div>
        <div className="col-span-3 flex justify-center items-center">
            <div className="sm:font-medium">{paragraph}</div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
