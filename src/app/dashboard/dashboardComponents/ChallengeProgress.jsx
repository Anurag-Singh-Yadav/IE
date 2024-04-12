import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./ChallengeProgress.css";
function ChallengeProgress() {
  return (
    <div>
      <div style={{ width: 200, height: 200 }}>
        {demoData.map((data) => {
          return (
            <div key={data.id}>
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
                    fill: '#efeefe',
                  },
                }}
                value={data.progress * 100}
                text={`${data.progress * 100}%`}
              />
              <p>{data.challengeType}</p>
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
];

export default ChallengeProgress;
