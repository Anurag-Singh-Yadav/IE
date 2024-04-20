import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Dashboard.css";

function ChallengeProgress() {
  const gradientArray = ["orange", "green", "purple"];

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-4">
        {demoData.map((data, index) => {
          return (
            <div
              key={index}
              className={`bg-white relative flex flex-col items-center gap-1 rounded-md  px-4 pt-[160px] pb-3 my-5`}
            >
              <div
                className={`${gradientArray[index]}-gradient rounded-md overflow-hidden p-1 absolute -top-[20px] w-[90%] box-shadow`}
              >
                <img
                  src={data.image}
                  alt={data.challengeType}
                  className="w-full aspect-auto max-h-[150px]"
                />
              </div>

              <div className="flex flex-col items-center justify-between gap-2 px-5">
                <div>
                  <p className="text-center py-2 w-full font-[500]">
                    {data.challengeType}
                  </p>
                  <p className="text-gray-400 text-sm">{data.description}</p>
                </div>
                <div className="w-[70%]">
                  <CircularProgressbar
                    background={false}
                    styles={{
                      path: {
                        stroke: `rgb(46, 202, 127)`,
                      },
                      trail: {
                        stroke: "#d3f2e4",
                      },
                      text: {
                        fill: `rgb(46, 202, 127)`,
                      },
                      background: {
                        fill: "white",
                      },
                    }}
                    value={data.progress * 100}
                    text={`${data.progress * 100}%`}
                  />
                </div>
              </div>

              <a className={`btn-gradient-2 text-white px-4 py-1 rounded-md font-semibold text-sm mt-5`} href={`/challenges/${data.challengeType}`}>Solve Problems</a>

            </div>
          );
        })}
      </div>
    </div>
  );
}

const demoData = [
  {
    id: 1,
    challengeType: "Binary Blitz",
    progress: 0.66,
    image: "/dsaPractise.png",
    description:
      "Binary Blitz challenges users to solve some cool problems on Binary trees.",
  },
  {
    id: 2,
    challengeType: "Arary Quest",
    progress: 0.33,
    image: "/dsaPractise.png",
    description:
      "Binary Blitz challenges users to solve some cool problems on Binary trees.",
  },
  {
    id: 3,
    challengeType: "String Exploration",
    progress: 0.75,
    image: "/dsaPractise.png",
    description:
      "Binary Blitz challenges users to solve some cool problems on Binary trees.",
  },
];

export default ChallengeProgress;
