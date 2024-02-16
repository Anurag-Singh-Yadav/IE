import React from "react";

function WebsiteBanner({ imgSrc, BtnName,paragraph, heading }) {
  return (
    <div className="main-container gradiant-container grid grid-cols-1 md:grid-cols-2 items-center justify-center py-4 min-h-[85vh]">
      <div className="pr-4 mr-4">
        <img src={`../${imgSrc}`} alt="gif" className="aspect-auto"></img>
      </div>
      <div className="">
        <div className="font-bold sm:text-xl md:text-2xl lg:text-4xl">
          {heading}
        </div>
        <div className="py-2 text-xs sm:text-sm md:text-normal">
          {paragraph}
        </div>
        {BtnName && (
          <button className="px-4 py-2 mt-3 btn-gradient rounded-md btn-gradient-2 cursor-pointer text-white hover:rounded-lg transition-all duration-500 font-medium">
            {BtnName}
          </button>
        )}
      </div>
    </div>
  );
}

export default WebsiteBanner;
