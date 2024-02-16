import React from "react";

function WebsiteBanner({ imgSrc, BtnName, heading, description }) {
  const tempHeading = "The world’s largest selection of online courses";

  return (
    <div className="main-container gradiant-container grid grid-cols-1 md:grid-cols-2 items-center justify-center py-4 min-h-[85vh]">
      <div className="">
        <img src={`../${imgSrc}`} alt="gif" className="aspect-auto"></img>
      </div>
      <div className="ml-5">
        <div className="font-bold sm:text-xl md:text-2xl lg:text-4xl">
          {heading ? heading : tempHeading}
        </div>
        <div className="py-2 text-xs sm:text-sm md:text-normal">
          {!description && (
            <div>
              Millions of people have used{" "}
              <span className="font-bold text-green-bg text-xl">
                Interview Express
              </span>{" "}
              to decide which online course to take. We aggregate courses from
              many universities to help you find the best courses on almost any
              subject, wherever they exist. Our goal is to make online education
              work for everyone.
            </div>
          )}
          {description && <div className="py-2 text-xs sm:text-sm md:text-normal">{description}</div>}
        </div>
        {BtnName && (
          <button
            className="px-4 py-2 mt-3 btn-gradient rounded-md btn-gradient-2 cursor-pointer text-white hover:rounded-lg transition-all duration-500 font-medium"
            onClick={() => {
              window.scrollBy({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            {BtnName}
          </button>
        )}
      </div>
    </div>
  );
}

export default WebsiteBanner;
