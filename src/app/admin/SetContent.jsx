"use client";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

function SetContent({ setFormData, formData, index }) {
  const [content, setContent] = useState({
    title: "",
    value: "",
    options: [],
    correct: "",
  });

  //   console.log("Index = ", index, " -> ", content);

  const [first, setFirst] = useState(true);

  useEffect(() => {
    const data = window.localStorage.getItem("formData");

    if (data) {
      setContent(JSON.parse(data).article[index]);
      console.log(content);
    }
  }, []);

  useEffect(() => {
    if (first == false) {
      const updatedArray = formData.article;
      updatedArray[index] = content;

      setFormData((prev) => {
        return {
          ...prev,
          article: updatedArray,
        };
      });
    }
    setFirst(false);
  }, [content]);

  const changeHandler = (event) => {
    setContent((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div className=" border-4 border-black min-h-[30vh] flex flex-col gap-7 w-[full]">
      
      <p className="font-semibold text-md text-center">Section: {index + 1}</p>
      
      <div className="px-7 flex flex-col gap-7 w-[full] font-semibold text-lg">
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={changeHandler}
            value={content.title}
            className="p-2 border-2 border-gray-400"
          />
        </div>

        <div>
          <label htmlFor="value">Value: </label>
          <input
            type="text"
            id="value"
            name="value"
            onChange={changeHandler}
            value={content.value}
            className="p-2 border-2 border-gray-400"
          />
        </div>

        <div>
          <label htmlFor="correct">Correct: </label>
          <input
            type="text"
            id="correct"
            name="correct"
            onChange={changeHandler}
            value={content.correct}
            className="p-2 border-2 border-gray-400"
          />
        </div>

        {content.options &&
          content.options.map((_, i) => {
            return (
              <div key={i} className="flex gap-3 items-center">
                <div>
                  <label htmlFor={`option-${i}`}>Option{` ${i}`}:</label>
                  <input
                    type="text"
                    id={`option-${i}`}
                    name={`option-${i}`}
                    value={content.options[i]}
                    onChange={(e) => {
                      const updated = [...content.options];
                      updated[i] = e.target.value;

                      setContent((prev) => {
                        return {
                          ...prev,
                          options: updated,
                        };
                      });
                    }}
                    className="p-2 border-2 border-gray-400"
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const updated = [];
                    for (let j = 0; j < content.options.length; j++) {
                      if (j !== i) {
                        updated.push(content.options[j]);
                      }
                    }
                    setContent((prev) => {
                      return {
                        ...prev,
                        options: updated,
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
            const updated = content.options;
            updated.push("");
            setContent((prev) => {
              return {
                ...prev,
                options: updated,
              };
            });
          }}
        >
          Add Option
        </button>
      </div>
    </div>
  );
}

export default SetContent;
