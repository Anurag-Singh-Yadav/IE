"use client";
import CountingCard from "./CountingCard";

function About() {

  return (
    <div className="py-16">
      <div className="font-semibold md:font-bold text-normal sm:text-xl md:text-3xl">
        Our Great <span className="text-green-bg underline">Achievement</span>
      </div>
      <div id="about" className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center sm:gap-6 md:gap-10 lg:gap-14 items-center">
        <CountingCard mainText={"Enrolled Students"} targetNumber={352} type={"happy"} ></CountingCard>
        <CountingCard mainText={"Academic Programs"} targetNumber={502} type={"files"} ></CountingCard>
        <CountingCard mainText={"Selected Students"} targetNumber={1000} type={"bulb"} ></CountingCard>
        <CountingCard mainText={"Certified Students"} targetNumber={1000} type={"student"} ></CountingCard>
      </div>
    </div>
  );
}

export default About;
