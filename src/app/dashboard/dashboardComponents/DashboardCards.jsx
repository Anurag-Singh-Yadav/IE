import React from "react";
import "./Dashboard.css";
import Image from "next/image";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";



function DashboardCards({ followers, following, profileViews }) {
  const data = [
    {
      title: "Followers",
      value: followers,
      image: FaPeopleGroup,
    },
    {
      title: "Following",
      value: following,
      image: IoPeople,
    },
    {
      title: "Profile Views",
      value: profileViews,
      image: IoEyeSharp,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
      {data.map((obj, index) => {
        const Component = obj.image;
        return (
          <div
            className="dashboard-card h-[100px] relative px-3 py-2 rounded-xl"
            key={index}
          >
            <Component className="absolute right-0 bottom-0 text-gray-200/50" 
            size={60}
            />
            <div className="dashboard-card-text">
              <p className="font-semibold">{obj.title}</p>
              <p className="text-gray-300">{obj.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DashboardCards;
