"use client";
import HtmlToDom from "@/app/Components/templets/HtmlToDom";
import PreRender from "@/app/Components/templets/PreRender";
import { FaChevronUp } from "react-icons/fa";
import { setArticleLoading } from "@/app/GlobalRedux/Features/GlobalStateSlice";
import { useDispatch } from "react-redux";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";

import "../interviewBlog.css";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import Comments from "@/app/Components/Comments";

function InterviewBlog({ params }) {
  const dispatch = useDispatch();

  const { id } = params;

  const [blog, setBlog] = useState(null);

  const [comment, setComment] = useState("");

  const [userComments, setUserComments] = useState(null);

  const [updatedContent, setUpdatedContent] = useState(true);

  useEffect(() => {
    // setPosting(true);
    const getResponse = async () => {
      const token = Cookies.get("token");
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_INTERVIEW_EXPERIENCE_BY_ID}`,
          {
            id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBlog(res.data?.interview);
        setUserComments(res.data?.comments);
        dispatch(setArticleLoading(false));
      } catch (e) {
        console.error(e);
      }
    };
    getResponse();
  }, [updatedContent]);

  const [showComments, setShowComments] = useState(true);

  const [posting, setPosting] = useState(false);

  const voteBlog = async (value) => {
    const token = Cookies.get("token");
    if (!token) {
      alert("Please login first");
      return;
    }
    console.log('fuck');

    try {
      setPosting(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_VOTE_BLOG}`,
        {
          id,
          value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if(res.data?.success === true){
        setPosting(false);
        setUpdatedContent(!updatedContent);
      }
    } catch (err) {
      console.log('Error while uploading user-vote' , err);
    }
  };

  const submitHandler = async () => {
    const token = Cookies.get("token");

    if (!token) {
      alert("Please login / sign-up to post comments.");
      return;
    }
    try {
      setPosting(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_POST_COMMENT}`,
        {
          comment,
          interviewId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPosting(false);
      if (res.data?.success === true) {
        setComment("");
      }
      setUpdatedContent(!updatedContent);
    } catch (err) {
      setPosting(false);
      alert("An error occurred");
    }
  };

  const [first, setFirst] = useState(true);

  const ref = useRef(null);

  useEffect(() => {
    if (first) {
      const data = Cookies.get("user-comment");
      if (data) {
        setComment(data);
      }
    }
    Cookies.set("user-comment", comment, { expires: 5 / 1440 });
    setFirst(false);
  }, [comment]);

  return (
    <div
      className={` main-container flex justify-center flex-col items-center ${
        showComments && "pb-[90vh]"
      } `}
    >
      <div className=" relative px-4 pt-10 mt-5 rounded-xl min-w-[95%] md:min-w-[94%] lg:min-w-[90%] flex flex-col items-center">
        {!blog && <PreRender count={15} />}

        <div className="">
          {blog && (
            <div className="flex items-start">
              <HtmlToDom htmlContent={blog.blog} />
            </div>
          )}
          {blog && (
            <div className="flex gap-7 items-center justify-center my-4">
              <div
                title="Upvote"
                onClick={() => {
                  if (!posting) voteBlog(true);
                }}
                className={`cursor-pointer flex flex-col justify-center gap-1 items-center ${
                  blog.userVote === 1 && "text-green-bg"
                }  transition duration-300`}
              >
                <BiSolidUpvote size={30} />
                <p>{blog.likedBy.length}</p>
              </div>
              <div
                title="Downvote"
                onClick={() => {
                  if (!posting) voteBlog(false);
                }}
                className={`cursor-pointer flex flex-col justify-center gap-1 items-center ${
                  blog.userVote === 2 && "text-red-500"
                }  transition duration-300`}
              >
                <BiSolidDownvote size={30} />
                <p>{blog.dislikedBy.length}</p>
              </div>
            </div>
          )}
          {blog && (
            <div className="flex flex-col gap-7 justify-center items-center mt-10 px-5 w-full">
              <button
                onClick={async () => {
                  setShowComments(!showComments);
                }}
                className="flex justify-between gap-4 items-center my-7 btn-gradient-2 px-4 py-1 rounded-md"
              >
                <div>
                  {!showComments && <p className=" text-base">Show comments</p>}
                  {showComments && <p className=" text-base">Hide comments</p>}
                </div>
                <FaChevronUp
                  className={`${
                    showComments === false && " rotate-180"
                  } transition duration-500`}
                />
              </button>
            </div>
          )}
        </div>

        {showComments && (
          <div
            id="comment-top-level-div"
            className={`z-[1] absolute bottom-1 w-full translate-y-[99%] bg-gray-100 transition duration-500 py-10 overflow-y-auto  rounded-xl p-4 `}
            ref={ref}
          >
            <div className="flex flex-col gap-2 items-center w-full mb-5">
              <textarea
                type="text"
                placeholder="Add a comment...."
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                  e.target.style.height = "auto";
                  const contentHeight = e.target.scrollHeight;
                  e.target.style.height = `${contentHeight}px`;
                }}
                className={` min-h-[25px] outline-white transition-all overflow-hidden ring-white resize-none ring-0 focus:ring-0 duration-300 w-full rounded-md border-none`}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (posting === false) submitHandler();
                }}
                title="Post Comment"
                className={`btn-gradient-2 px-4 py-1 rounded-md ${
                  posting && " cursor-wait"
                }`}
              >
                Post
              </button>
            </div>
            <div className="flex flex-col gap-7 h-[80vh] py-5">
              {userComments &&
                userComments.map((comment, index) => {
                  return (
                    <Comments
                      key={index}
                      data={comment}
                      articleId={id}
                      setUpdatedContent={setUpdatedContent}
                      updatedContent={updatedContent}
                    />
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InterviewBlog;
