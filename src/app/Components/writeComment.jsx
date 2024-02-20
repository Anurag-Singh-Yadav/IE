"use client";
import { CircularProgress } from "@mui/material";
import React, { useEffect, useRef } from "react";

function WriteComment({ text, setText, submitHandler, posting }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.style.height = "auto";
    const contentHeight = ref.current.scrollHeight;
    ref.current.style.height = `${contentHeight - 7}px`;
    const element = document.getElementById("comment-top-level-div");
    element.scrollTo({
    top: element.scrollTop + 100,
    behavior: 'smooth'
});
  }, []);

  return (
    <div
      id="comment-top-level-div"
      className="w-full z-[20] flex items-center"
    >
      <div className="w-full flex flex-col md:grid grid-cols-10">
        <div className="col-span-8 border-b-2 border-green-bg w-full">
          <textarea
            ref={ref}
            type="text"
            placeholder="Write from here.."
            className={`h-[35px] outline-white transition-all overflow-hidden ring-white resize-none ring-0 focus:ring-0 duration-300 w-full rounded-md border-none`}
            value={text}
            required
            onChange={(e) => {
              setText(e.target.value);
              e.target.style.height = "auto";
              const contentHeight = e.target.scrollHeight;
              e.target.style.height = `${contentHeight - 7}px`;
            }}
          />
        </div>
        <div className="col-span-2">
          {!posting && (
            <button
              className="btn-gradient-2 px-4 py-1 rounded-md"
              onClick={submitHandler}
            >
              Post
            </button>
          )}
          {posting && <CircularProgress size={25} color="success" />}
        </div>
      </div>
    </div>
  );
}

export default WriteComment;
