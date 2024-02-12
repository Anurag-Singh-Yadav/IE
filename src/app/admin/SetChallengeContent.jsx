"use client";
import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { companies, dsaTopics } from "../Components/AdminUtilityData";

function SetChallengeContent({ setFormData, formData, index }) {
  const changeHandler = (event) => {
    const updated = formData.questions;

    const keyy = event.target.name,
      value = event.target.value;

    updated[index][keyy] = value;

    setFormData((prev) => {
      return {
        ...prev,
        questions: updated,
      };
    });
  };
  // {title , url , difficulty,   company:[String] , topics:[String]}

  return (
    <div className=" border-4 border-black min-h-[30vh] flex flex-col gap-7 w-[full]">
      <p className="font-semibold text-md text-center">Question: {index + 1}</p>

      {
        <div className="px-7 flex flex-col gap-7 w-[full] font-semibold text-lg">
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="value">Title: </label>
            <input
              type="text"
              id="value"
              name="title"
              onChange={changeHandler}
              value={formData.questions[index].title}
              className="p-2 border-2 border-gray-400"
            />
          </div>

          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="correct">Difficulty: </label>
            <input
              type="text"
              id="correct"
              name="difficulty"
              onChange={changeHandler}
              value={formData.questions[index].difficulty}
              className="p-2 border-2 border-gray-400"
            />
          </div>

          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="value">Url: </label>
            <input
              type="text"
              id="value"
              name="questionUrl"
              onChange={changeHandler}
              value={formData.questions[index].questionUrl}
              className="p-2 border-2 border-gray-400"
            />
          </div>

          {formData.questions[index].company.map((_, i) => {
            return (
              <div key={i} className="flex gap-3 items-center justify-between">
                <div>
                  <label htmlFor={`option-${i}`}>Company{` ${i}`}:</label>
                  <Select
                    type="text"
                    id={`option-${i}`}
                    name={`option-${i}`}
                    value={formData.questions[index].company[i]}
                    onChange={(e) => {
                      const updated = [...formData.questions[index].company];
                      updated[i] = e.target.value;

                      const upd = formData.questions;

                      upd[index].company = updated;

                      setFormData((prev) => {
                        return {
                          ...prev,
                          questions: upd,
                        };
                      });
                    }}
                    className="p-2 border-2 border-gray-400"
                  >
                {companies.map((t, i) => {
                return (
                  <MenuItem key={i} value={t}>
                    {t}
                  </MenuItem>
                );
              })}

                  </Select>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const updated = [];
                    for (
                      let j = 0;
                      j < formData.questions[index].company.length;
                      j++
                    ) {
                      if (j !== i) {
                        updated.push(formData.questions[index].company[j]);
                      }
                    }

                    const upd = formData.questions;

                    upd[index].company = updated;

                    setFormData((prev) => {
                      return {
                        ...prev,
                        questions: upd,
                      };
                    });
                  }}
                >
                  <MdDelete />
                </button>
              </div>
            );
          })}

          <button
            onClick={(e) => {
              e.preventDefault();
              const updated = formData.questions;
              updated[index].company.push("");
              setFormData((prev) => {
                return {
                  ...prev,
                  questions: updated,
                };
              });
            }}
          >
            Add Company
          </button>

          {formData.questions[index].topics.map((_, i) => {
            return (
              <div key={i} className="flex gap-3 items-center justify-between">
                <div>
                  <label htmlFor={`option-${i}`}>Topic{` ${i}`}:</label>
                  <Select
                    type="text"
                    id={`option-${i}`}
                    name={`option-${i}`}
                    value={formData.questions[index].topics[i]}
                    onChange={(e) => {
                      const updated = [...formData.questions[index].topics];
                      updated[i] = e.target.value;

                      const upd = formData.questions;

                      upd[index].topics = updated;

                      setFormData((prev) => {
                        return {
                          ...prev,
                          questions: upd,
                        };
                      });
                    }}
                    className="p-2 border-2 border-gray-400"
                  >
                {dsaTopics.map((t, i) => {
                return (
                  <MenuItem key={i} value={t}>
                    {t}
                  </MenuItem>
                );
              })}

                  </Select>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const updated = [];
                    for (
                      let j = 0;
                      j < formData.questions[index].topics.length;
                      j++
                    ) {
                      if (j !== i) {
                        updated.push(formData.questions[index].topics[j]);
                      }
                    }

                    const upd = formData.questions;

                    upd[index].topics = updated;

                    setFormData((prev) => {
                      return {
                        ...prev,
                        questions: upd,
                      };
                    });
                  }}
                >
                  <MdDelete />
                </button>
              </div>
            );
          })}

          <button
            onClick={(e) => {
              e.preventDefault();
              const updated = formData.questions;
              updated[index].topics.push("");
              setFormData((prev) => {
                return {
                  ...prev,
                  questions: updated,
                };
              });
            }}
          >
            Add Topics
          </button>
        </div>
      }
    </div>
  );
}

export default SetChallengeContent;
