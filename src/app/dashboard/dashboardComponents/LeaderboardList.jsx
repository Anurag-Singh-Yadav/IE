import React, { useEffect } from "react";
import Avatar from "react-avatar";
import { FaTrophy } from "react-icons/fa6";

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

  return (
    <div className="bg-primary pb-5 rounded-md">
      <div className="bg-green-bg py-4 text-white rounded-t-md">
        <p className="text-center font-bold text-xl py-4">Leaderboard</p>
        <div className="flex items-center justify-around mt-20">
          {top3.map((leader, index) => {
            return (
              <div
                key={index}
                className={`${
                  index === 1 && "scale-110 -translate-y-5"
                } flex flex-col items-center gap-2`}
              >
                <Avatar
                  src={leader.avatar}
                  alt={leader.name}
                  name={leader.name}
                  className="rounded-full box-shadow"
                  size={index === 1 ? 70 : 60}
                />
                <p className="text-lg font-semibold">{leader.name}</p>
                <div className="flex gap-2 items-center">
                  <FaTrophy size={50} className=" text-yellow-300" />
                  <p className="text-white text-lg font-bold">
                    {index === 0 ? 2 : index === 2 ? 3 : 1}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-3 px-7 mt-7">
        {data.map((item, index) => {
          return (
            <div className="flex gap-4 items-center" key={index}>
              <div className="flex gap-2 items-center">
                <FaTrophy size={40} className=" text-yellow-300" />
                <p className="font-bold md:text-lg">{index + 4}</p>
              </div>
              <a
                className="p-1 h-fit rounded-full flex gap-3 items-center"
                href={`/dashboard/${item.userHandle}`}
                target="_blank"
              >
                <Avatar
                  src={item.avatar}
                  alt={item.name}
                  name={item.name}
                  className="rounded-full"
                  size={40}
                />{" "}
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-400 text-sm">{item.score}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LeaderboardList;
