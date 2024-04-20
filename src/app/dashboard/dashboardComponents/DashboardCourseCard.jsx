import Image from "next/image";
import React from "react";

function DashboardCourseCard() {
  return (
    <div className="relative overflow-hidden yellow-gradient text-white min-h-[150px] flex justify-between items-center gap-2 py-2 px-4 rounded-lg">
      <div className="absolute bg-yellow-100/20 rotate-45 h-[100px] w-[100px] -top-[30] left-2 " />
      <div className="z-[1] flex flex-col gap-3">
        <p className="font-bold text-lg">Explore our well curated articles</p>
        <p className="font-semibold text-sm">
          Gain expertise on various domains with our courses.
        </p>
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <Image
          src={"/dsa-logo.png"}
          alt="loading"
          loading="lazy"
          height={130}
          width={130}
        />
        <a
          href="/learn"
          className="white-gradient text-center text-black font-semibold px-3 py-1 rounded-md"
        >
          Learn
        </a>
      </div>
    </div>
  );
}

export default DashboardCourseCard;
