"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

import Image from "next/image";
import QuestionArray from "./QuestionArray";
import { Diversity1Rounded, WindowRounded } from "@mui/icons-material";
import { FaCheck } from "react-icons/fa";
import PreRender from "./PreRender";
import Pagination from "./Pagination";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = ["Easy", "Medium", "Hard"];

function QuestionRender({ questionsDetails, setPage ,page }) {
  const diff = useRef(null);

  const [difficulty, setDifficulty] = useState([false, false, false]);

  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setDifficulty(value);
  };

  useEffect(() => {
    const handler = (event) => {
      if (!diff.current.contains(event.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  const [showQuestions, setShowQuestions] = useState(null);

  useEffect(() => {
    setShowQuestions(questionsDetails);
  }, [questionsDetails]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({});

  useEffect(() => {
    setShowQuestions(
      questionsDetails.filter((obj) =>
        Object.keys(filter).every((key) => obj[key] === filter[key])
      )
    );
  }, [filter]);

  const handleDifficulty = (index) => {
    setDifficulty((prev) => {
      let updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="flex flex-wrap gap-2 md:gap-5 lg:gap-7 px-5 lg:px-10 items-center bg-green-bg/10  font-semibold py-2 min-h-[15vh]">
            <div
              className="bg-primary px-4 py-1 rounded-full box-shadow cursor-pointer"
              onClick={() => {
                setFilter({});
              }}
            >
              All
            </div>
            <div
              className="bg-primary px-4 py-1 rounded-full box-shadow cursor-pointer"
              onClick={() => {
                setFilter((prev) => {
                  let newState = { ...prev }; // create a copy of the state
                  if (
                    newState["isSolved"] === undefined ||
                    newState["isSolved"] === false
                  ) {
                    newState["isSolved"] = true;
                  } else {
                    delete newState.isSolved;
                  }
                  return newState; // return the updated copy
                });
              }}
            >
              Solved
            </div>
            <div
              className="bg-primary px-4 py-1 rounded-full box-shadow cursor-pointer"
              onClick={() => {
                setFilter((prev) => {
                  let newState = { ...prev };
                  if (
                    newState["isSolved"] === undefined ||
                    newState["isSolved"] === true
                  ) {
                    newState["isSolved"] = false;
                  } else {
                    delete newState.isSolved;
                  }
                  return newState;
                });
              }}
            >
              Unsolved
            </div>

            <div className="relative cursor-pointer" ref={diff}>
              <div
                onClick={() => {
                  setOpen(true);
                }}
                className="rounded-full box-shadow bg-primary px-4 py-1"
              >
                Difficulty
              </div>

              {open === true && (
                <div className="absolute -top-[15px] bg-primary z-[100] pop-in-fast flex flex-col  py-2 rounded-lg box-shadow">
                  <button
                    onClick={() => {
                      handleDifficulty(0);
                    }}
                    className="hover:bg-gray-100 dark:hover:bg-green-bg dark:hover:text-white px-4 py-1 text-gray-600 flex items-center justify-between gap-2"
                  >
                    <p>Easy</p>
                    <div className={`${difficulty[0] ? "text-green-bg" : ""}`}>
                      <FaCheck size={15} />
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      handleDifficulty(1);
                    }}
                    className="hover:bg-gray-100 dark:hover:bg-green-bg dark:hover:text-white px-4 py-1 text-gray-600 flex items-center justify-between gap-2"
                  >
                    <p>Medium</p>
                    <div className={`${difficulty[1] ? "text-green-bg" : ""}`}>
                      <FaCheck size={15} />
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      handleDifficulty(2);
                    }}
                    className="hover:bg-gray-100 dark:hover:bg-green-bg dark:hover:text-white px-4 py-1 text-gray-600 flex items-center justify-between gap-2"
                  >
                    <p>Hard</p>
                    <div className={`${difficulty[2] ? "text-green-bg" : ""}`}>
                      <FaCheck size={15} />
                    </div>
                  </button>
                </div>
              )}
            </div>

            <form
              className="search-bar flex items-center gap-1 rounded-full pl-4 bg-primary box-shadow text-gray-500"
              onSubmit={(e) => e.preventDefault()}
            >
              <IoSearchSharp size={18} />
              <input
                className="px-4 py-1 rounded-full bg-primary font-normal caret-slate-600 w-full"
                placeholder={"Search"}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <div></div>
          </div>
        </div>
      </div>

      <div>
        {showQuestions && (
          <QuestionArray
            search={search}
            showQuestions={showQuestions}
            setShowQuestions={setShowQuestions}
            difficulty={difficulty}
          />
        )}
      </div>

      <div>
        <Pagination page={page} setPage={setPage}></Pagination>
      </div>
    </div>
  );
}

export default QuestionRender;
