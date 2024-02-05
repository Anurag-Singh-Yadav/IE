import React from "react";

function ArticleProgress({ data }) {
  // data = [ { index: Number , label: String } ]

  const handleClick = (index) => {
    const element = document.getElementById(`content-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <p className=" whitespace-nowrap text-lg font-semibold">Table of contents</p>
      <div className="flex flex-col gap-2 items-start">
        {data.map((obj, i) => {
          return (
            <div className="hover:text-green-bg hover:underline transition duration-300 flex justify-between items-center gap-4 cursor-pointer" >
              <div className="h-[5px] w-[5px] rounded-full bg-black" />
              <p
                key={i}
                onClick={() => {
                  handleClick(obj.index);
                }}
              >
                {obj.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArticleProgress;
