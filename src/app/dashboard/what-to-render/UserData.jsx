"use client";
import React, { useEffect, useRef, useState } from "react";
import ApexChart from "../dashboardComponents/CircularRadial";
import LeaderboardPercentageChart from "../dashboardComponents/LeaderboardPercentageChart";
import DashboardCards from "../dashboardComponents/DashboardCards";
import { GiFlame } from "react-icons/gi";
import ChallengeProgress from "../dashboardComponents/ChallengeProgress";
import Announcement from "../dashboardComponents/Announcement";
import LineProgressTracker from "../dashboardComponents/LineProgressTracker";
import LeaderboardList from "../dashboardComponents/LeaderboardList";
import DashboardCourseCard from "../dashboardComponents/DashboardCourseCard";
import { FaSearch } from "react-icons/fa";
import { fetchUsersByUserInput } from "@/app/fetchDetails/fetchUserDetails";
import PreRender from "@/app/Components/templets/PreRender";

function UserData({ data }) {
  const [search, setSearch] = useState("");

  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchPopup, setSearchPopup] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setSearchPopup(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  async function searchUsers(search) {
    try {
      const res = await fetchUsersByUserInput(search);
      if (res) setSearchResults(res);
    } catch (err) {
      console.log(err.message);
    } finally {
      setSearching(false);
    }
  }

  const changeHandler = async (e) => {
    const input = e.target.value;
    setSearch(e.target.value);

    setSearchPopup(true);
    setSearching(true);

    if (input.length === 0) {
      setSearchPopup(false);
      return;
    }

    setTimeout(() => {
      if (input === e.target.value && input.length > 0) {
        searchUsers(input);
      }
    }, 800);
  };

  return (
    <div>
      {!data ? (
        <div>
          <PreRender count={20} height={40} />
        </div>
      ) : (
        <div className="flex flex-col gap-12 min-h-[300vh]">

          <header className="flex justify-between flex-wrap gap-2 mt-5">
            <p className="font-bold text-2xl">{"Dashboard"}</p>
            <div ref={ref} className="relative flex gap-2 items-center">
              <div className="border-[2.1px] rounded-md border-black">
              <input
                type="text"
                value={search}
                onChange={changeHandler}
                placeholder="Find your friends"
                className="px-3 py-2 rounded-md"
                ></input>
              </div>
              <FaSearch size={25} className="cursor-pointer" />

              {searchPopup && (
                <div className="absolute flex justify-center bg-white rounded-lg z-[1] box-shadow top-[40px] left-0 min-h-[150px] w-full">
                  {searching ? (
                    <div className="mt-[40px]">
                      <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full max-h-[250px] overflow-y-auto">
                      {searchResults.length > 0 ? (
                        searchResults.map((item, index) => {
                          return (
                            <a
                            key={index}
                            className="flex gap-2 items-center p-2 cursor-pointer bg-white hover:bg-gray-100"
                            href={`/dashboard/${item.userHandle}`}
                            >
                              <img
                                src={item.avatar}
                                alt={item.name}
                                className="rounded-full"
                                width="40"
                                height="40"
                              />
                              <p>{item.name || item.userHandle}</p>
                            </a>
                          );
                        })
                      ) : (
                        <p className="text-center">No results found</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </header>

          {/* Dashboard Cards */}

          <DashboardCards data={data.cardData} />

          {/* Progress Analysis */}

          <p className="font-bold text-2xl">{"Progress Analysis"}</p>

          <div className="grid grid-cols-1 dmd:grid-cols-6">
            <div className="col-span-4 flex flex-col gap-2 px-2 justify-between h-full">
              <div className="bg-primary md:mr-[70px] rounded-lg grid grid-cols-1 s2:grid-cols-2">
                <ApexChart data={[(data.progressData.solved.Easy || 0),(data.progressData.solved.Medium || 0),(data.progressData.solved.Hard || 0)]} />
                <div className="p-4 rounded-xl white-gradient box-shadow relative md:-right-[50px] flex orange-gradient h-fit my-auto flex-wrap lg:w-full flex-col gap-3  justify-center items-start">
                  <LineProgressTracker
                    color={"#5CB85C"}
                    type={"Easy"}
                    qCount={data.progressData.solved.Easy || 0}
                    totalQCount={data.progressData.total.Easy || 0}
                  ></LineProgressTracker>
                  <LineProgressTracker
                    color={"#FFA500"}
                    type={"Medium"}
                    qCount={data.progressData.solved.Medium || 0}
                    totalQCount={data.progressData.total.Medium || 0}
                  ></LineProgressTracker>
                  <LineProgressTracker
                    type={"Hard"}
                    color={"#FF0000"}
                    qCount={data.progressData.solved.Hard || 0}
                    totalQCount={data.progressData.total.Hard || 0}
                  ></LineProgressTracker>
                </div>
              </div>
              <LeaderboardPercentageChart data={data.leaderboardData} />
            </div>

            <div className="col-span-2 bg-white h-full flex flex-col justify-between pb-5">
              <Announcement></Announcement>
              <DashboardCourseCard />
            </div>
          </div>

          <p className="font-bold text-2xl">{"Challege Progress"}</p>

          <div className="">
            <ChallengeProgress data={data.challengeData} />
          </div>

          <p className="font-bold text-2xl">{"Leaderboard"}</p>

          <div>
            <LeaderboardList data={data.leaderboardList} totalUsers={data.totalUsers}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserData;
