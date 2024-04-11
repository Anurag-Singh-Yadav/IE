import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ChallengeProgress() {
  return (
    <div>
      <div style={{ width: 200, height: 200 }}>
      <CircularProgressbar value={0.66} maxValue={1} text={`${66}%`} />;
      </div>
    </div>
  );
}

export default ChallengeProgress;
