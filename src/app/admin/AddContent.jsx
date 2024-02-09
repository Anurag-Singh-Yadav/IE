"use client";
import React, { useEffect, useState } from "react";
import SetContent from "./SetContent";
import { MdDelete } from "react-icons/md";
import { FaArrowRotateLeft } from "react-icons/fa6";
import axios from "axios";
import { MenuItem, Select } from "@mui/material";
import Cookies from "js-cookie";

function AddContent() {
  const [mainHeadingData, setMainHeadingData] = useState([]);
  const [mainTopicData, setMainTopicData] = useState([]);

  let token = Cookies.get('token');

  const [formData, setFormData] = useState({
    article: [],
    mainTopic: "",
    mainHeading: "",
    title: "",
  });

  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (first == false) {
      window.localStorage.setItem("formData", JSON.stringify(formData));
    }
    setFirst(false);
  }, [formData]);

  useEffect(() => {
    const data = window.localStorage.getItem("formData");
    if (data) {
      setFormData(JSON.parse(data));
      getRequestHeading(JSON.parse(data).mainTopic);
    }
    getRequestMainTopic();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    // setShowInspect(true);
  };

  const getRequestMainTopic = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_ADMIN_URL}${process.env.NEXT_PUBLIC_GET_MAIN_TOPICS}`,
       
      );

      if (res?.data?.success === true) {
        setMainTopicData(res.data.mainTopics);
      }
    } catch (err) {}
  };

  const getRequestHeading = async (mainTopic) => {
    const obj = {
      mainTopic,
    };
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_ADMIN_URL}${process.env.NEXT_PUBLIC_GET_MAIN_HEADINGS}`,
        {
          params: obj,
        }
      );

      if (res?.data?.success === true) {
        setMainHeadingData(res.data.mainHeadings);
      }
    } catch (err) {}
  };

  const getMainHeadings = async (e) => {
    const mainTopic = e.target.value;
    setTimeout(async () => {
      if (mainTopic === e.target.value) {
        getRequestHeading(e.target.value);
      }
    }, 1000);
  };

  const changeHandler = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const pushToDatabase = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_ADMIN_URL}${process.env.NEXT_PUBLIC_ADD_ARTICLE_URL}`,
        {
          data: formData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <p className="text-xl font-bold text-center my-6 underline">
        Add content to InterviewExpress Database
      </p>
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center border-2 border-black p-8 m-4"
      >
        <div className="flex justify-between items-center">
          <div className="font-semibold text-lg p-2">
            <label htmlFor="mainTopic">Main-Topic:</label>
            <input
              type="text"
              id="mainTopic"
              value={formData.mainTopic}
              name="mainTopic"
              onChange={(e) => {
                changeHandler(e);
                getMainHeadings(e);
              }}
              className="border-2 border-gray-400 m-3 px-2 py-1"
            />
          </div>
          <Select
              label="Main-Topic"
              value={formData.mainTopic}
              onChange={(e) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    mainTopic: e.target.value,
                  };
                });
                getMainHeadings(e);
              }}
            >
              {mainTopicData.map((t, i) => {
                return (
                  <MenuItem key={i} value={t}>
                    {t}
                  </MenuItem>
                );
              })}
            </Select>
        </div>

        {formData.mainTopic.length > 0 && (
          <div className="font-semibold text-lg p-2 flex justify-between items-center">
            <div>
              <label htmlFor="main-heading">Main-Heading: </label>
              <input
                type="text"
                id="main-heading"
                value={formData.mainHeading}
                name="mainHeading"
                onChange={changeHandler}
                className="border-2 border-gray-400 m-3 px-2 py-1"
              />
            </div>
            <Select
              label="Main-Topic"
              value={formData.mainHeading}
              onChange={(e) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    mainHeading: e.target.value,
                  };
                });
              }}
            >
              {mainHeadingData.map((t, i) => {
                return (
                  <MenuItem key={i} value={t}>
                    {t}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
        )}

        {formData.mainTopic.length > 0 && formData.mainHeading.length > 0 && (
          <div className="font-semibold text-lg p-2">
            <label htmlFor="title"> Title :</label>
            <input
              type="text"
              id="title"
              value={formData?.title}
              name="title"
              onChange={changeHandler}
              className="border-2 border-gray-400 m-3 px-2 py-1"
            />
          </div>
        )}

        {formData.mainTopic.length > 0 &&
          formData.mainHeading.length > 0 &&
          formData?.title.length > 0 && (
            <div
              className="flex flex-col gap-7 w-[full] border-red-500 border-b-2 border-t-2 pt-16 pb-16 rounded-xl p-5 my-8"
              unused={formData.article}
            >
              {formData.article.map((_, index) => {
                return (
                  <div key={index} className="flex gap-3 items-center w-full">
                    <SetContent
                      index={index}
                      key={index}
                      formData={formData}
                      setFormData={setFormData}
                    ></SetContent>
                    <button
                      onClick={() => {
                        let updated = [];
                        for (let j = 0; j < formData.article.length; j++) {
                          if (j !== index) updated.push(formData.article[j]);
                        }
                        setFormData((prev) => {
                          return {
                            ...prev,
                            article: updated,
                          };
                        });

                        window.location.reload();
                      }}
                      className=" bg-red-600 p-2 rounded-full w-fit text-white hover:bg-red-800"
                    >
                      <MdDelete />
                    </button>

                    {index > 0 && (
                      <button
                        onClick={() => {
                          let updated = formData.article;
                          var temp = updated[index];
                          updated[index] = updated[index - 1];
                          updated[index - 1] = temp;

                          setFormData((prev) => {
                            return { ...prev, article: updated };
                          });

                          window.location.reload();
                        }}
                        className=" bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
                      >
                        <FaArrowRotateLeft />
                      </button>
                    )}
                  </div>
                );
              })}

              <button
                onClick={() => {
                  const updated = formData.article;
                  updated.push({
                    title: "",
                    value: "",
                    options: [],
                    correct: "",
                  });
                  setFormData((prev) => {
                    return {
                      ...prev,
                      article: updated,
                    };
                  });
                }}
                className=" bg-red-500 hover:bg-red-700 rounded-full text-white px-4 py-2"
              >
                Add more content to article
              </button>
              <input
                type="submit"
                value="Check form on console"
                className=" bg-green-bg px-12 py-2 text-white rounded-full font-semibold hover:bg-green-700"
              />
            </div>
          )}

        {formData.article.length > 0 && (
          <button
            className="bg-black text-white px-4 py-2 rounded-full font-semibold text-xl my-3"
            onClick={() => {
              setFormData((prev) => {
                return {
                  ...prev,
                  article: [],
                };
              });
            }}
          >
            Clear all Articles
          </button>
        )}
      </form>

      <div
        className=" bg-yellow-500 text-white p-8 rounded-full flex justify-center w-fit mx-auto font-bold text-2xl hover:bg-yellow-600 transition duration-300"
        onClick={pushToDatabase}
      >
        <button>Push to Databse</button>
      </div>
    </div>
  );
}

export default AddContent;
