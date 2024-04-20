"use client";
import React, { useState } from "react";
import Avatar from "react-avatar";
import { IoBookmarkSharp } from "react-icons/io5";


function LeaderboardList() {
  const data = [
    {
      avatar: "https://randomuser.me/api/portraits",
      name: "Random Name",
      score: 100,
    },
    {
      avatar: "https://randomuser.me/api/portraits",
      name: "Random Name",
      score: 100,
    },
    {
      avatar: "https://randomuser.me/api/portraits",
      name: "Random Name",
      score: 100,
    },
    {
      avatar: "https://randomuser.me/api/portraits",
      name: "Random Name",
      score: 100,
    },
    {
      avatar: "https://randomuser.me/api/portraits",
      name: "Random Name",
      score: 100,
    },
    {
      avatar: "https://randomuser.me/api/portraits",
      name: "Random Name",
      score: 100,
    },
    {
      avatar: "https://randomuser.me/api/portraits",
      name: "Random Name",
      score: 100,
    },
    {
      avatar: "https://randomuser.me/api/portraits",
      name: "Random Name",
      score: 100,
    },
    {
      avatar: "https://randomuser.me/api/portraits",
      name: "Random Name",
      score: 100,
    },
    {
      avatar: "https://randomuser.me/api/portraits",
      name: "Random Name",
      score: 100,
    },
  ];

  const top3 = [
    {
      avatar: "https://randomuser.me/api/portraits",
      name: "Random Name",
      score: 100,
    },
    {
      avatar: "https://randomuser.me/api/portraits",
      name: "Random Name",
      score: 100,
    },
    {
      avatar: "https://randomuser.me/api/portraits",
      name: "Random Name",
      score: 100,
    },
  ];

  const [currentPage , setCurrentPage] = useState(1);

  return (
    <div className="bg-white mt-12">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 pb-4 px-2 rounded-lg">
        {top3.map((item, index) => {
          return (
            <div key={index} className={`rounded-xl relative flex flex-col items-center ${index === 0 && 'yellow-gradient md:-top-[60px]'} ${index === 1 && 'bg-gray-100 md:-top-[30px]'} ${index === 2 && 'bronze-gradient'} py-3 px-1 gap-2 box-shadow`}>
              <IoBookmarkSharp
                size={45}
                className={`text-[#2eca7f] absolute top-0 right-4`}
              />
              <p className="absolute top-2 right-[32px] text-white z-10">
                {index + 1}
              </p>
              <Avatar name={item.name} src={item.avatar} round={true} />
              <div className="text-center">
                <p className=" text-sm font-[500]">{item.name}</p>
                <p className={`text-xs font-semibold`}>
                  Score:{` ${item.score}`}
                </p>
              </div>
              <p className=" font-extrabold">Rank: {index + 1}</p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 pt-5 pb-12 px-2">
        {data.map((obj, index) => {
          return <LeaderboardCard key={index} obj={obj} index={index} />;
        })}
      </div>

        <div className="flex gap-12 justify-center py-16">
          <button className="orange-gradient text-white font-semibold px-3 py-1 rounded-md">Previous</button>
          <div className="flex gap-3">
            {
              [1,2,3,4,5].map((item,index)=>{
                return <button className={`box-shadow p-2 w-[50px] font-bold ${currentPage === item && 'green-gradient text-white'}`} key={index}>{item}</button>
              })
            }
          </div>
          <button className="orange-gradient text-white font-semibold px-3 py-1 rounded-md">Next</button>
        </div>

    </div>
  );
}

export default LeaderboardList;

function LeaderboardCard({ obj, index }) {
  const [flag, setFlag] = useState(false);
  return (
    <div
      className=" transition duration-200 relative flex items-center gap-16 md:gap-20 lg:gap-32 py-2 shadow-md rounded-lg px-5 bg-gray-100"
      onMouseEnter={() => setFlag(true)}
      onMouseLeave={() => setFlag(false)}
    >
      <p className="font-bold text-lg">{index + 1}</p>
      <a href={`/dashboard/${obj.userHandle}`} className="flex gap-4 items-center cursor-pointer">
        <Avatar
          src={obj.avatar}
          alt={obj.name}
          name={obj.name}
          round={true}
          size="50"
        />
        <div>
          <p className="text-sm font-[600]">{obj.name}</p>
          <p className="text-xs text-gray-500">Score:{` ${obj.score}`}</p>
        </div>
      </a>

      <div
        className={`bg-white ${
          flag ? "hidden md:flex" : "hidden"
        } flex-col gap-2 items-center box-shadow absolute top-2 right-8 p-4 rounded-xl z-[1]`}
      >
        <Avatar
          src={obj.avatar}
          alt={obj.name}
          name={obj.name}
          size="50"
          round
        />
        <p className="font-[600]">{obj.name}</p>
        <p className="text-xs text-gray-400">Score: {` ${obj.score}`}</p>
        <div className="w-full h-[1px] bg-gray-200 my-5"></div>

        <div className="flex items-center gap-5 justify-center mt-3">
          <button className="start-2 py-2 px-3 rounded-md block mx-auto">
            Add Friend
          </button>
          <a href={`/dashboard/${obj.userHandle}`} className="btn-gradient-2 py-2 px-3 rounded-md block mx-auto">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}