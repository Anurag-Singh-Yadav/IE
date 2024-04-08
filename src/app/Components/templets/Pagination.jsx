import React from "react";

function Pagination({ page, setPage }) {
  return (
    <div className="flex justify-center items-center py-4 gap-4">
      <div
        className={`${page == 0 ? "cursor-not-allowed" : "cursor-pointer"} start-2 px-4 py-2 rounded-md `}
        onClick={() => {
          if (page > 0) {
            setPage(page - 1);
          }
        }}
      >
        Previous
      </div>
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
      <div
        className="cursor-pointer px-4 py-2 rounded-md start-2"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </div>
    </div>
  );
}

export default Pagination;
