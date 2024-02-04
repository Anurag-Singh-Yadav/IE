"use client";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

function SetContent({ setFormData, formData, index }) {
  const changeHandler = (event) => {
    const updated = formData.article;

    const keyy = event.target.name,
      value = event.target.value;

    updated[index][keyy] = value;

    setFormData((prev) => {
      return {
        ...prev,
        article: updated,
      };
    });
  };

  return (
    <div className=" border-4 border-black min-h-[30vh] flex flex-col gap-7 w-[full]">
      <p className="font-semibold text-md text-center">Section: {index + 1}</p>

      {
        <div className="px-7 flex flex-col gap-7 w-[full] font-semibold text-lg">
          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={changeHandler}
              value={formData.article[index].title}
              className="p-2 border-2 border-gray-400"
            />
          </div>

          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="value">Value: </label>
            <input
              type="text"
              id="value"
              name="value"
              onChange={changeHandler}
              value={formData.article[index].value}
              className="p-2 border-2 border-gray-400"
            />
          </div>

          <div className="flex gap-2 items-center justify-between">
            <label htmlFor="correct">Correct: </label>
            <input
              type="text"
              id="correct"
              name="correct"
              onChange={changeHandler}
              value={formData.article[index].correct}
              className="p-2 border-2 border-gray-400"
            />
          </div>

          {
            formData.article[index].options.map((_, i) => {
              return (
                <div key={i} className="flex gap-3 items-center justify-between">
                  <div>
                    <label htmlFor={`option-${i}`}>Option{` ${i}`}:</label>
                    <input
                      type="text"
                      id={`option-${i}`}
                      name={`option-${i}`}
                      value={formData.article[index].options[i]}
                      onChange={(e) => {
                        const updated = [...formData.article[index].options];
                        updated[i] = e.target.value;

                        const upd = formData.article;

                        upd[index].options = updated;

                        setFormData((prev) => {
                          return {
                            ...prev,
                            article: upd,
                          }
                        })
                      }}
                      className="p-2 border-2 border-gray-400"
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const updated = [];
                      for (let j = 0; j < formData.article[index].options.length; j++) {
                        if (j !== i) {
                          updated.push(formData.article[index].options[j]);
                        }
                      }

                      const upd = formData.article;

                      upd[index].options = updated;

                      setFormData((prev) => {
                        return {
                          ...prev,
                          article: upd,
                        }
                      })
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
              const updated = formData.article;
              updated[index].options.push('');
              setFormData((prev) => {
                return {
                  ...prev,
                  article: updated,
                };
              });
            }}
          >
            Add Option
          </button>
        </div>
      }
    </div>
  );
}

export default SetContent;
