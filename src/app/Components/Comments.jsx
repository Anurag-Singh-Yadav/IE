"use client";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { FaChevronUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import WriteComment from "./writeComment";

function Comments({
  data,
  articleId,
  parentCommentId,
  setUpdatedContent,
  updatedContent,
  parentState,
  setParentState,
}) {
  const userEmail = useSelector((state) => {
    return state.GlobalState.userEmail;
  });

  const [currState, setCurrState] = useState(false);

  const [posting, setPosting] = useState(false);

  const { comment, userInfo } = data;

  const replies = comment.replies;

  const { avatar, email } = userInfo;

  const [showReply, setShowReply] = useState(false);

  const [repliesArray, setRepliesArray] = useState(null);

  const [replyComment, setReplyComment] = useState("");

  const [editComment, setEditComment] = useState(data.comment?.comment.trim());

  const [replyCommentEditor, setReplyCommentEditor] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    const clickHandler = (e) => {};
    window.addEventListener("click", clickHandler);
    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, []);

  const voteComment = async (value) => {
    const token = Cookies.get("token");
    if (!token) {
      alert("Please login first");
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_VOTE_COMMENT}`,
        {
          id: data.comment?._id,
          value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data?.success === true) {
        setUpdatedContent(!updatedContent);
        setCurrState(!currState);
        if (setParentState) setParentState(!parentState);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const postReply = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("token");
      if (!token) {
        alert("Please login / sign-up to post comments.");
        return;
      }

      setPosting(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_POST_COMMENT}`,
        {
          commentId: comment._id,
          comment: replyComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data?.success === true) {
        setUpdatedContent(!updatedContent);
        setReplyCommentEditor(false);
        setCurrState(!currState);
        setReplyComment("");
      }
      setPosting(false);
    } catch (err) {
      console.log(err);
      setPosting(false);
    }
  };

  const getResponse = async () => {
    const token = Cookies.get("token");
    try {
      setPosting(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_COMMENT}`,
        { id: comment._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRepliesArray(res.data?.replies);
      setPosting(false);
    } catch (err) {
      console.log(err);
      setPosting(false);
    }
  };

  const deleteComment = async () => {
    const token = Cookies.get("token");
    if (!token) {
      sajfhas;
      alert("Please log in first");
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_DELETE_COMMENT}`,
        {
          articleId,
          commentId: comment._id,
          parentCommentId: parentCommentId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data?.success === true) {
        setUpdatedContent(!updatedContent);
        if (setParentState) setParentState(!parentState);
        else {
          console.log(comment?.comment);
        }
      }
    } catch (err) {}
  };

  const postEditComment = async () => {
    const token = Cookies.get("token");
    if (!token) {
      alert("Please login first");
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_EDIT_COMMENT}`,
        {
          commentId: data.comment?._id,
          text: editComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data?.success === true) {
        setShowEdit(false);
        if (setParentState) setParentState(!parentState);
      }
    } catch (e) {}
  };

  useEffect(() => {
    getResponse();
  }, [currState]);

  return (
    <div className=" bg-white rounded-t-lg px-3 py-2">
      <div className="flex gap-3 items-center flex-wrap justify-start border-b pb-1">
        <Avatar src={avatar} round={true} name={email} size="50" />
        <p>{email.split("@")[0]}</p>
      </div>
      <p className={`whitespace-pre-wrap mt-4`}>
        {data?.comment.comment.trim()}
      </p>
      <div className=" flex flex-col gap-4 items-center flex-wrap  mt-5">
        <div className={"flex flex-wrap gap-2 items-center w-full"}>
          <div className="flex gap-3 py-3 items-center flex-wrap">
            <div className="flex gap-2 items-center ">
              <div
                className={`flex gap-1 items-center ${
                  data.comment?.userVote === 1 && "text-green-bg"
                } hover:text-green-bg cursor-pointer text-sm`}
              >
                <BiSolidLike size={22} onClick={() => voteComment(true)} />
                <span>{data.comment?.likedBy.length}</span>
              </div>
              <div
                className={`flex gap-1 items-center ${
                  data.comment?.userVote === 2 && "text-red-500"
                } hover:text-red-500 cursor-pointer text-sm`}
              >
                <BiSolidDislike size={22} onClick={() => voteComment(false)} />
                <span>{data.comment?.dislikedBy.length}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setShowEdit(false);
                setReplyCommentEditor(!replyCommentEditor);
              }}
              className="hover:text-green-bg hover:underline"
            >
              Reply
            </button>
            {data.comment?.email === userEmail && (
              <button
                onClick={() => {
                  setEditComment(data.comment?.comment.trim());
                  setReplyCommentEditor(false);
                  setShowEdit(!showEdit);
                }}
                className="hover:text-green-bg hover:underline"
              >
                Edit
              </button>
            )}
            {comment.email === userEmail && (
              <div onClick={deleteComment} className=" rounded-full p-1 flex items-center gap-1 cursor-pointer text-red-500 hover:text-red-600">
                <MdDelete size={20}  />
                <p>Delete</p>
              </div>
            )}
          </div>
        </div>
        {replyCommentEditor && (
          <WriteComment
            setFlag={setReplyCommentEditor}
            text={replyComment}
            setText={setReplyComment}
            submitHandler={postReply}
            posting={posting}
          />
        )}
        {showEdit && (
          <WriteComment
            text={editComment}
            setText={setEditComment}
            submitHandler={postEditComment}
            posting={posting}
          />
        )}
        {(repliesArray
          ? repliesArray.length > 0
          : data?.comment.replies && data?.comment.replies.length > 0) && (
          <button
            onClick={() => {
              if (!repliesArray) getResponse();
              setShowReply(!showReply);
            }}
            className="flex justify-between gap-4 items-center px-4 py-1 rounded-full  transition duration-300"
          >
            {!showReply && (
              <p className=" text-base whitespace-nowrap">
                Show{" "}
                <span className="mr-1">
                  {repliesArray ? repliesArray.length : replies.length}
                </span>
                {(repliesArray ? repliesArray.length > 1 : replies.length > 1)
                  ? "replies"
                  : "reply"}
              </p>
            )}
            {showReply && (
              <p className=" text-base whitespace-nowrap">Hide replies</p>
            )}
            <FaChevronUp
              className={`${
                showReply === false && " rotate-180"
              } transition duration-500`}
            />
          </button>
        )}
        <div className="md:pl-1 w-full">
          {showReply &&
            repliesArray &&
            repliesArray.length > 0 &&
            repliesArray.map((reply, index) => {
              return (
                <Comments
                  key={index}
                  data={reply}
                  parentCommentId={comment._id}
                  parentState={currState}
                  setParentState={setCurrState}
                  setUpdatedContent={setUpdatedContent}
                  updatedContent={updatedContent}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Comments;
