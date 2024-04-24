import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Dashboard.css";
import PreRender from "@/app/Components/templets/PreRender";

function ChallengeProgress({ data }) {
  const gradientArray = ["orange", "green", "purple"];

  return (
    <div>
      {data ? (
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-4">
            {data.map(({ challenge: data, progress }, index) => {
              return (
                <div
                  key={index}
                  className={`bg-white relative flex flex-col items-center gap-1 rounded-md  px-4 pt-[160px] pb-3 my-5`}
                >
                  <div>
                    <div
                      className={` rounded-md p-1 flex justify-center absolute -top-[20px] left-0 right-0 w-full`}
                    >
                      <img
                        src={data.imageUrl}
                        alt={data.challengeType}
                        className="w-[80%] aspect-video h-[150px]  rounded-lg box-shadow"
                      />
                    </div>

                    <div className="flex flex-col items-center justify-between gap-5 px-5">
                      <div>
                        <p className="text-center py-2 w-full font-[500]">
                          {data.challengeType}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {data.description.split(" ").slice(0, 18).join(" ") +
                            " ..."}
                        </p>
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
                          value={progress || 0}
                          text={`${progress || 0}%`}
                        />
                      </div>
                    </div>
                  </div>

                  <a
                    className={`btn-gradient-2 text-white px-4 py-1 rounded-md font-semibold text-sm mt-5`}
                    href={`/onGoingChallenges/${data._id}`}
                  >
                    Solve Problems
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <PreRender count={2} height={200} />
        </div>
      )}
    </div>
  );
}

const demoData = [
  {
    id: 1,
    challengeType: "Binary Blitz",
    progress: 0.66,
    imageUrl: "/dsaPractise.png",
    description:
      "Binary Blitz challenges users to solve some cool problems on Binary trees.",
  },
  {
    id: 2,
    challengeType: "Arary Quest",
    progress: 0.33,
    imageUrl: "/dsaPractise.png",
    description:
      "Binary Blitz challenges users to solve some cool problems on Binary trees.",
  },
  {
    id: 3,
    challengeType: "String Exploration",
    progress: 0.75,
    imageUrl: "/dsaPractise.png",
    description:
      "Binary Blitz challenges users to solve some cool problems on Binary trees.",
  },
];

export default ChallengeProgress;
