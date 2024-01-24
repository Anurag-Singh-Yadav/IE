import React from "react";

function Hero() {
  return (
    <div className=" h-[90vh] background-grid -z-10">
      <div className="h-full flex flex-col justify-center items-center circular-gradient-div z-10">
        <div className="flex flex-col gap-4 text-5xl font-bold text-center">
          <div className="flex">
            <div>Learn to </div>
            <div className="bg-green-bg skew-y-6 px-4 py-1 text-white">
              code
            </div>
            <div> your</div>
          </div>
          <div className="flex mt-3">
            <div>dreams and</div> <div className="bg-dark-blue skew-y-6 px-4 py-1 text-white">design</div> <div>your</div>
          </div>
          <div>future</div>
        </div>
        <div>
          <button>Explore Course</button>
          <button>Start Learing</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
