import Image from "next/image";
import React from "react";

function AboutUs({ paragraph, imgSrc, title }) {
  return (
    <div className="py-8">
      <div className="font-semibold md:font-bold text-normal sm:text-xl md:text-3xl">
        Our{" "}
        <span className="text-green-bg underline">{title}</span>
      </div>
      <div className="grid grid-col py-8 gap-5 md:gap-2 md:grid-cols-5">
        <div className="col-span-3">
            <Image src={`/${imgSrc}`} width={400} height={600} className=" aspect-video" alt="image"></Image>
        </div>
        <div className="col-span-2 bg-primary px-2 flex justify-center items-center">
            <div className=" text-sm">{paragraph}</div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
