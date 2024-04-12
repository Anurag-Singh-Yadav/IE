import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function ChallengeProgress() {
  return (
    <div className="">
      <div className="flex justify-between gap-4">
        {demoData.map((data) => {
          return (
            <div key={data.id} className="h-[30px]">
              <CircularProgressbar
              background={true}
                styles={{
                  path: {
                    stroke: `rgba(46, 202, 127)`,
                  },
                  trail: {
                    stroke: '#d3f2e4',
                  },
                  text: {
                    fill: `rgba(46, 202, 127)`,
                  },
                  background: {
                    fill: 'white',
                  },
                }}
                value={data.progress * 100}
                text={`${data.progress * 100}%`}
              />
              <p className="text-center py-2 my-2">{data.challengeType}</p>
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
    challengeType: "Challenge 1",
    progress: 0.66,
  },
  {
    id: 2,
    challengeType: "Challenge 2",
    progress: 0.33,
  },
  {
    id: 3,
    challengeType: "Challenge 3",
    progress: 0.75,
  }
];

export default ChallengeProgress;
