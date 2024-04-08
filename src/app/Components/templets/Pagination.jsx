import React from "react";

function Pagination({ page, totalQuestion, setPage }) {
    console.log("totalQuestion", totalQuestion);
  return (
    <div className="flex justify-center items-center py-4 gap-4">
      <button
        className={`${page == 0 ? "cursor-not-allowed" : "cursor-pointer"} start-2 px-4 py-2 rounded-md `}
        onClick={(e) => {
         e.preventDefault();
          if (page > 0) {
            setPage(page - 1);
          }
        }}
        disabled={page == 0}
      >
        Previous
      </button>
      <div
        className={`border-2 ${
          page === 0 ? "border-green-bg" : "border-black"
        } px-2 cursor-pointer`}
        onClick={() => {
          setPage(0);
        }}
      >
        1
      </div>
      <div
        className={`border-2 ${
          page === 1 ? "border-green-bg" : "border-black"
        } px-2 cursor-pointer`}
        onClick={() => {
          setPage(1);
        }}
      >
        2
      </div>
      <div
        className={`border-2 ${
          page === 2 ? "border-green-bg" : "border-black"
        } px-2 cursor-pointer`}
        onClick={() => {
          setPage(2);
        }}
      >
        3
      </div>
      <button
        className={`px-4 py-2 rounded-md start-2 ${totalQuestion < 10 ? "cursor-not-allowed" : "cursor-pointer"}`}
        onClick={(e) => {
            e.preventDefault();
          setPage(page + 1);
        }}
        disabled={totalQuestion < 10}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
