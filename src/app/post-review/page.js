"use client";
import React, { useState, useRef, useEffect } from "react";
import WebsiteBanner from "../Components/templets/WebsiteBanner";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { useSelector } from "react-redux";
import Rating from "react-rating";
import Avatar from "react-avatar";
import { postReview } from "../fetchDetails/postReview";
import Cookies from "js-cookie";

function Page() {

  const userDetails = useSelector((state) => {
    return state.GlobalState.userDetails;
  });

  const [isClick, setIsClick] = useState(false);

  const [description, setDescription] = useState("");

  const [rating, setRating] = useState(0);

  useEffect(() => {
    const savedDescription = localStorage.getItem("reviewDescription");
    if (savedDescription) {
      setDescription(JSON.parse(savedDescription));
    }
    
  }, []);

  const [first , setFirst] = useState(true);

  useEffect(() => {
    if(first === false){
    localStorage.setItem("reviewDescription", JSON.stringify(description));
    }
    setFirst(false);
  }, [description]);

  const clickHandler = async () => {
    setIsClick(true);
    const token = Cookies.get("token");
    const res = await postReview({ details: { token, description, rating } });
    
    if (res.data?.success) {
      setDescription("");
      setRating(0);
      setIsClick(false);
      alert("Review posted successfully");
    }else{
      alert(res.response?.data?.message);
      setIsClick(false);
    }
  };

  return (
    <div>
      <div>
        <WebsiteBanner
          heading={"Post your review"}
          paragraph={
            "Millions of people have used Interview Express to decide which online course to take. We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone."
          }
          imgSrc={"postReview.png"}
        ></WebsiteBanner>
      </div>
      <div>
        <div className="main-container">
          <div className="font-semibold sm:py-4 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Post Your <span className="text-green-bg underline">Reviews</span>
          </div>

          {userDetails && (
            <div>
              <div className="grid grid-cols-1 gap-4 nmd:grid-cols-2">
                <div className="h-fit box-shadow py-4 pl-3">
                  <div className="flex gap-2 justify-start items-center">
                    <Avatar
                      src={userDetails.avatar}
                      name={userDetails.name}
                      round={true}
                      size={60}
                    ></Avatar>
                    <div>{userDetails.name}</div>
                  </div>
                  <div className="italic underline text-green-bg overflow-clip text-xs sm:text-sm">
                    {userDetails.email}
                  </div>
                  <div className="flex justify-center items-center py-2">
                    <Rating
                      initialRating={rating}
                      onChange={(value) => setRating(value)}
                      emptySymbol={
                        <IoIosStarOutline size={30} className="text-black" />
                      } // Empty star icon
                      fullSymbol={
                        <IoIosStar size={30} className=" text-[#ffbd35]" />
                      }
                    />
                  </div>
                </div>

                <div className="min-h-[20vh] box-shadow">
                  <textarea
                    type="description"
                    placeholder="Write your review here.."
                    className={`h-full py-3 outline-white transition-all overflow-hidden ring-white resize-none ring-0 focus:ring-0 duration-300 w-full rounded-md border-none`}
                    value={description}
                    required
                    onChange={(e) => {
                      setDescription(e.target.value);
                      e.target.style.height = "auto";
                      const contentHeight = e.target.scrollHeight;
                      e.target.style.height = `${contentHeight -7}px`;
                    }}
                  />
                </div>
              </div>

              <div className="flex my-4 justify-center items-center">
                <button
                  className={`flex justify-center px-5 cursor-pointer py-2 items-center text-lg start ${
                    isClick === true ? "cursor-wait" : "cursor-pointer"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    clickHandler();
                  }}
                  disabled={isClick === true ? true : false}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
