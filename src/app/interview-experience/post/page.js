"use client";
import WebsiteBanner from "@/app/Components/templets/WebsiteBanner";
import React, { useState, useEffect } from "react";
import { Select, MenuItem } from "@mui/material";
import TextEditor from "@/app/Components/templets/TextEditor";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";


function PostBlog() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    round: "",
    position: "",
    selected: "",
    blog: "",
  });

  const [htmlContent, setHtmlContent] = useState(null);

  useEffect(() => {
    setFormData((prev) => {
      return {
        ...prev,
        blog: htmlContent,
      };
    });
  }, [htmlContent]);

  const submitHandler = async () => {
    const token = Cookies.get("token");

    if (!token) {
      alert("Please login first to post blog");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_ADD_INTERVIEW_BLOG}`,
        {
          data: formData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data?.success === true) {
        setFormData({
          name: "",
          company: "",
          round: "",
          position: "",
          selected: "",
          blog: "",
        });
        toast.success('Blog posted successfully');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Unknown error while posting.");
    }
  };

  return (
    <div>
      <WebsiteBanner
        imgSrc={"interview-experience.svg"}
        BtnName={"Continue"}
        heading={"Share Your Interview Journey"}
        paragraph={
          'Welcome to "Share Your Interview Journey," the ultimate platform where you can share your firsthand interview experiences across various industries and roles. Our mission is to provide a comprehensive repository of interview stories that offers insights, lessons learned, and actionable advice to job seekers aiming to navigate their own interview processes successfully.'
        }
      />
      <div className="main-container">
        <div className="mt-8 flex flex-col gap-4 items-center">
          <ol className="rounded-md flex flex-col gap-2">
            <div className="font-semibold text-lg text-center bg-green-bg text-white w-full py-1 md:py-2 rounded-mg">
              Community Guidelines & Respectful Sharing
            </div>
            <li className="text-gray-600 py-1 md:py-2 border-l-2 border-white px-4 hover:border-l-2 hover:border-green-bg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
              <strong className="text-black dark:text-green-bg">
                Respect Privacy:
              </strong>{" "}
              Do not share identifiable details about interviewers or other
              individuals involved in your interview process. Focus on the
              experience and insights gained rather than personal specifics.
            </li>

            <li className="text-gray-600 py-1 md:py-2 border-l-2 border-white px-4 hover:border-l-2 hover:border-green-bg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
              <strong className="text-black dark:text-green-bg">
                Constructive Sharing:
              </strong>
              While we encourage honesty and transparency in sharing your
              interview experiences, it is crucial to maintain a constructive
              tone. Avoid derogatory comments, personal attacks, or any form of
              disrespectful language towards individuals or companies.
            </li>

            <li className="text-gray-600 py-1 md:py-2 border-l-2 border-white px-4 hover:border-l-2 hover:border-green-bg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
              <strong className="text-black dark:text-green-bg">
                No Targeting:
              </strong>{" "}
              This platform is not a venue for settling scores or targeting
              specific individuals or organizations negatively. Our aim is to
              share experiences that are educational and beneficial for job
              seekers, not to foster negativity or defamation.
            </li>

            <li className="text-gray-600 py-1 md:py-2 border-l-2 border-white px-4 hover:border-l-2 hover:border-green-bg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
              <strong className="text-black dark:text-green-bg">
                {" "}
                Professionalism:
              </strong>{" "}
              Remember that your contributions reflect on you as a professional.
              Share your experiences with the intent of helping others grow and
              learn, keeping your narrative professional and focused on the
              interview process.
            </li>
          </ol>
        </div>

        <div className="text-center font-semibold text-lg mt-6">
          Please fill all the details below:
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className={
            "flex flex-wrap gap-7 py-7 w-[70%] bg-blue-100 dark:bg-primary dark:border-white border rounded-2xl p-5 justify-center mx-auto my-7"
          }
        >
          <div>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              required={true}
              value={formData.name}
              className="block rounded-full px-4 py-1"
              onChange={(e) =>
                setFormData((prev) => {
                  return {
                    ...prev,
                    name: e.target.value,
                  };
                })
              }
            />
          </div>

          <div>
            <label htmlFor="position">Position you applied for:</label>
            <input
              type="text"
              required
              id="position"
              value={formData.position}
              className="block rounded-full px-4 py-1"
              onChange={(e) =>
                setFormData((prev) => {
                  return {
                    ...prev,
                    position: e.target.value,
                  };
                })
              }
            />
          </div>

          <div>
            <label htmlFor="round">Round:</label>
            <input
              type="number"
              id="round"
              required={true}
              value={formData.round}
              className="block rounded-full px-4 py-1"
              onChange={(e) =>
                setFormData((prev) => {
                  return {
                    ...prev,
                    round: e.target.value,
                  };
                })
              }
            />
          </div>

          <div>
            <label htmlFor="company">Organization you applied for:</label>
            <input
              type="text"
              id="company"
              required={true}
              value={formData.company}
              className="block rounded-full px-4 py-1"
              onChange={(e) =>
                setFormData((prev) => {
                  let val = e.target.value;
                  return {
                    ...prev,
                    company: val,
                  };
                })
              }
            />
          </div>

          <div>
            <label htmlFor="selected">Did you get selected?</label>
            <Select
              id="selected"
              value={formData.selected}
              onChange={(e) =>
                setFormData((prev) => {
                  return {
                    ...prev,
                    selected: e.target.value,
                  };
                })
              }
              displayEmpty={false}
              inputProps={{ "aria-label": "Without label" }}
              required={true}
              className="block ml-3 bg-white"
            >
              <MenuItem value={"yes"} className="">Yes</MenuItem>
              <MenuItem value={"no"} className="">No</MenuItem>
              <MenuItem value={"pending"} className="">Did not recieve reply yet</MenuItem>
            </Select> 
            
          </div>
        </form>

        <div className=" text-2xl font-semibold my-5">
          Share Your{" "}
          <stong className="text-green-bg underline">Experience</stong>
        </div>

        <TextEditor
          htmlContent={htmlContent}
          setHtmlContent={setHtmlContent}
          formName={`user-interview-experience-draft`}
        />

        <div
          onClick={submitHandler}
          className="btn-gradient-2 px-4 py-1 rounded-md mx-auto w-fit mt-5 text-lg font-semibold cursor-pointer"
        >
          Post blog
        </div>
      </div>
    </div>
  );
}

export default PostBlog;
