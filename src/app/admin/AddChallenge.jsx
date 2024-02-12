"use client";
import React, { useEffect, useState } from "react";
import SetContent from "./SetContent";
import { MdDelete } from "react-icons/md";
import { FaArrowRotateLeft } from "react-icons/fa6";
import axios from "axios";
import { MenuItem, Select } from "@mui/material";
import Cookies from "js-cookie";
import SetChallengeContent from "./SetChallengeContent";

function AddChallenge() {
  let token = Cookies.get("token");

  const [formData, setFormData] = useState({
    challengeType: "",
    file: null,
    questions: [],
    description: "",
  });


  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (first == false) {
      window.localStorage.setItem("challengeData", JSON.stringify(formData));
    }
    setFirst(false);
  }, [formData]);

  useEffect(() => {
    const data = window.localStorage.getItem("challengeData");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
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
      const data = new FormData();
      data.append('file', formData.file);
      data.append('challengeType', formData.challengeType);
      data.append('description', formData.description);
      data.append('questions', JSON.stringify(formData.questions));
  
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_ADMIN_URL}${process.env.NEXT_PUBLIC_ADD_CHALLENGE_URL}`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        },{
          my_data:{
            "token":"sdfgfd",
            "sdfg":"sdfg"
          }
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
        Add Challenge to InterviewExpress Database
      </p>
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center border-2 border-black p-8 m-4"
      >
        <div className="flex justify-between items-center">
          <div className="font-semibold text-lg p-2">
            <label htmlFor="mainTopic">Challenge-Type:</label>
            <input
              type="text"
              id="mainTopic"
              value={formData.challengeType}
              name="challengeType"
              onChange={(e) => {
                changeHandler(e);
              }}
              className="border-2 border-gray-400 m-3 px-2 py-1"
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="font-semibold text-lg p-2">
            <label htmlFor="mainTopic">Description:</label>
            <input
              type="text"
              id="mainTopic"
              value={formData.description}
              name="description"
              onChange={(e) => {
                changeHandler(e);
              }}
              className="border-2 border-gray-400 m-3 px-2 py-1"
            />
          </div>
        </div>

        <div className="font-semibold text-lg p-2 flex justify-between items-center">
          <div>
            <label htmlFor="main-heading">Image: </label>
            <input
              type="file"
              id="main-heading"
              name="image"
              onChange={(e) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    file: e.target.files[0],
                  };
                });
              }}
              className="border-2 border-gray-400 m-3 px-2 py-1"
            />
          </div>
        </div>

        <div
          className="flex flex-col gap-7 w-[full] border-red-500 border-b-2 border-t-2 pt-16 pb-16 rounded-xl p-5 my-8"
          unused={formData.questions}
        >
          {formData.questions.map((_, index) => {
            return (
              <div key={index} className="flex gap-3 items-center w-full">
                <SetChallengeContent
                  index={index}
                  key={index}
                  formData={formData}
                  setFormData={setFormData}
                ></SetChallengeContent>
                <button
                  onClick={() => {
                    let updated = [];
                    for (let j = 0; j < formData.questions.length; j++) {
                      if (j !== index) updated.push(formData.questions[j]);
                    }
                    setFormData((prev) => {
                      return {
                        ...prev,
                        questions: updated,
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
                      let updated = formData.questions;
                      var temp = updated[index];
                      updated[index] = updated[index - 1];
                      updated[index - 1] = temp;

                      setFormData((prev) => {
                        return { ...prev, questions: updated };
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
              const updated = formData.questions;
              updated.push({
                title: "",
                url: "",
                topics: [],
                difficulty: "",
                company:[],
              });

              setFormData((prev) => {
                return {
                  ...prev,
                  questions: updated,
                };
              });
            }}
            className=" bg-red-500 hover:bg-red-700 rounded-full text-white px-4 py-2"
          >
            Add Questions
          </button>
          <input
            type="submit"
            value="Check form on console"
            className=" bg-green-bg px-12 py-2 text-white rounded-full font-semibold hover:bg-green-700"
          />
        </div>

        {formData.questions.length > 0 && (
          <button
            className="bg-black text-white px-4 py-2 rounded-full font-semibold text-xl my-3"
            onClick={() => {
              setFormData((prev) => {
                return {
                  ...prev,
                  questions: [],
                };
              });
            }}
          >
            Clear all Questions
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

export default AddChallenge;
