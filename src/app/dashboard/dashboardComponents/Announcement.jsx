"use client";
import React from "react";
import { FaHandPointRight } from "react-icons/fa";
const announcements = [
  {
    title: "New Feature",
    description: "We have added a new feature to the platform",
  },
  {
    title: "New Feature",
    description: "We have added a new feature to the platform",
  },
  {
    title: "New Feature",
    description:
      "We have ghjh fvhjhkhvgvhj fhhjgghvhjk added a new feature to the platform",
  },
  {
    title: "New Feature",
    description: "We have added a new feature to the platform",
  },
];
function Announcement() {
  
  return (
    <div className="h-fit">
      <div className="text-center my-2 border-2 border-green-bg text-green-bg font-bold py-2">Latest Announcements</div>
      <marquee direction="up" className="w-full" height='250'>
        {
          announcements && announcements.map((item,index)=>{
            return (
              <div key={index} className="gap-2  flex justify-between items-start my-4 px-2">
                <div className="text-green-bg"><FaHandPointRight /></div>
                <p className="border-l-2 pl-2 py-2">{item.description}</p>
              </div>
            )
          })
        }
      </marquee>
    </div>
  );
}

export default Announcement;
