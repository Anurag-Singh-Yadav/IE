import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const pageNumber = [0];

function Pagination({ page, isLastPage, totalQuestion, setPage }) {
  console.log("isLastPAge" , isLastPage);
  return (
    <div className="flex justify-center items-center py-4 gap-4">
      <button
        className={`${page == 0 ? "cursor-not-allowed" : "cursor-pointer"} flex justify-between items-center gap-2 px-4 py-2 rounded-md `}
        onClick={(e) => {
         e.preventDefault();
          if (page > 0) {
            setPage(page - 1);
          }
        }}
        disabled={page == 0}
      >
        <FaArrowLeft />
        <span>Previous</span>
      </button>
      
      {
        pageNumber.map((item) => {
          return (
            <button
              key={item}
              className={`border-2 ${
                 "bg-green-bg border-green-bg"
              } px-2 rounded-md cursor-pointer`}
              onClick={() => {
                setPage(page);
              }}
            >
              {page+1}
            </button>
          );
        })
      }

      <button
        className={`px-4 flex justify-between items-center gap-2 py-2 rounded-md ${isLastPage ? "cursor-not-allowed" : "cursor-pointer"}`}
        onClick={(e) => {
            e.preventDefault();
          setPage(page + 1);
        }}
        disabled={isLastPage}
      >
        <span>Next</span>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
