"use client";
import PreRender from "@/app/Components/templets/PreRender";
import { fetchLeaderboardPage } from "@/app/fetchDetails/fetchUserDetails";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { IoBookmarkSharp } from "react-icons/io5";
import { useSelector } from 'react-redux'

function LeaderboardList({ data, totalUsers }) {

  const {userHandle} = useSelector((state) => state.GlobalState.userDetails)

  const [top3, setTop3] = useState([]);

  const [pageData, setPageData] = useState({});

  let pageCounter = 1;

  const [fetchingPage , setFetchingPage] = useState(false);

  const fetchPageByIndex = async (index) => {
    if (pageData[index] || index < 0) return;
    setFetchingPage(true);
    try {
      const res = await fetchLeaderboardPage(index);
      if (res) {
        setPageData((prev) => {
          return {
            ...prev,
            [index]: res,
          };
        });
      }
    } catch (err) {
      console.error(err);
    }finally{
      setFetchingPage(false);
    }
  };

  useEffect(() => {
    if (data && pageCounter === 1) {
      setTop3(data.slice(0, 3));
      setPageData(() => {
        return {
          1: data,
        };
      });
    }
  }, [data]);

  const [currentPage, setCurrentPage] = useState(1);

  const nextHandler = () => {
    setCurrentPage((prev) => prev + 1);
    pageCounter++;
    fetchPageByIndex(pageCounter);
  };

  const prevHandler = () => {
    setCurrentPage((prev) => prev - 1);
    pageCounter--;
    fetchPageByIndex(pageCounter);
  };

  return (
    <div>
      {data ? (
        <div className="bg-white mt-12">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 pb-4 px-2 rounded-lg">
            {top3.map(
              ({ name, avatar, dsaScore: score, userHandle }, index) => {
                return (
                  <div
                    key={index}
                    className={`rounded-xl relative flex flex-col items-center ${
                      index === 0 && "yellow-gradient md:-top-[60px]"
                    } ${index === 1 && "bg-gray-100 md:-top-[30px]"} ${
                      index === 2 && "bronze-gradient"
                    } py-3 px-1 gap-2 box-shadow`}
                  >
                    <IoBookmarkSharp
                      size={45}
                      className={`text-[#2eca7f] absolute top-0 right-4`}
                    />
                    <p className="absolute top-2 right-[32px] text-white z-10">
                      {index + 1}
                    </p>
                    <Avatar
                      name={name || userHandle}
                      src={avatar}
                      round={true}
                    />
                    <div className="text-center">
                      <p className=" text-sm font-[500]">
                        {name || userHandle}
                      </p>
                      <p className={`text-xs font-semibold`}>
                        Score:{` ${score}`}
                      </p>
                    </div>
                    <p className=" font-extrabold">Rank: {index + 1}</p>
                  </div>
                );
              }
            )}
          </div>

          <div className="flex flex-col gap-4 pt-5 pb-12 px-2">
            {!fetchingPage && pageData[currentPage] &&
              pageData[currentPage].map((obj, index) => {
                return (
                  <LeaderboardCard
                    key={index}
                    obj={obj}
                    userHandle={userHandle}
                    index={(currentPage - 1) * 10 + index}
                  />
                );
              })}
              {
                fetchingPage && 
                <div>
                  <PreRender count={10} height={50} />
                </div>
              }
          </div>

          <div className="flex gap-12 justify-center py-16">
            <button
              onClick={() => {
                if(currentPage > 1)
                prevHandler();
              }}
              className={`${currentPage > 1 ? 'orange-gradient' : 'bg-gray-400 cursor-not-allowed'} text-white font-semibold px-3 py-1 rounded-md`}
            >
              Previous
            </button>
            <div className="flex gap-3">
              {Array(Math.ceil(totalUsers/10)).fill().map((_, index) => {
                return (
                  <button
                    className={`box-shadow p-2 w-[50px] font-bold ${
                      currentPage === index+1 && "green-gradient text-white"
                    }`}
                    key={index}
                    onClick={() => {
                      if(!fetchingPage){
                        setCurrentPage(index+1);
                        pageCounter = index+1;
                        fetchPageByIndex(index+1);
                      }
                    }}
                  >
                    {index+1}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => {
                if(currentPage < Math.ceil(totalUsers / 10))
                nextHandler();
              }}
              className={`${currentPage < Math.ceil(totalUsers/10) ? 'orange-gradient' : 'bg-gray-400 cursor-not-allowed'} text-white font-semibold px-3 py-1 rounded-md`}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>
          <PreRender count={10} height={50} />
        </div>
      )}
    </div>
  );
}

export default LeaderboardList;

function LeaderboardCard({ obj, index , userHandle:handle}) {
  const [flag, setFlag] = useState(false);
  const { name, avatar, dsaScore: score, userHandle } = obj;

  const handleMessage = () => {

  }

  return (
    <div
      className={`${handle === userHandle ? 'green-gradient text-white' : 'bg-gray-100 text-black'} transition duration-200 relative flex items-center gap-16 md:gap-20 lg:gap-32 py-2 shadow-md rounded-lg px-5 `}
      onMouseEnter={() => setFlag(true)}
      onMouseLeave={() => setFlag(false)}
    >
      <p className="font-bold text-lg">{index + 1}</p>
      <a
        href={`/dashboard/${obj.userHandle}`}
        className="flex gap-4 items-center cursor-pointer"
      >
        <Avatar
          src={avatar}
          alt={name || userHandle}
          name={name || userHandle}
          round={true}
          size="50"
        />
        <div>
          <p className="text-sm font-[600]">{name || userHandle}</p>
          <p className="text-xs text-gray-500">Score:{` ${score}`}</p>
        </div>
      </a>

      <div
        className={`bg-white text-black ${
          flag ? "hidden md:flex" : "hidden"
        } flex-col gap-2 items-center box-shadow absolute top-2 right-8 p-4 rounded-xl z-[1]`}
      >
        <Avatar
          src={avatar}
          alt={name || userHandle}
          name={name || userHandle}
          size="50"
          round
        />
        <p className="font-[600]">{name || userHandle}</p>
        <p className="text-xs text-gray-400">Score: {` ${score}`}</p>
        <div className="w-full h-[1px] bg-gray-200 my-5"></div>

        <div className="flex items-center gap-5 justify-center mt-3">
          <button onClick={handleMessage}className="start-2 py-2 px-3 rounded-md block mx-auto">
            Message
          </button>
          <a
            href={`/dashboard/${userHandle}`}
            target="_blank"
            className="btn-gradient-2 py-2 px-3 rounded-md block mx-auto"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}
