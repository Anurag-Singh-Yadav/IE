import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

// LevelMeter component to display progress for each difficulty level
function LevelMeter({ level, value }) {
  const percentage = `${value}%`;
  if (level === "Easy") {
    var backgroundStyle = {
      width: percentage,
      height: "100%",
      backgroundColor: "#008000",
    };
  } else if (level === "Hard") {
    var backgroundStyle = {
      width: percentage,
      height: "100%",
      backgroundColor: "#dc3232",
    };
  } else {
    var backgroundStyle = {
      width: percentage,
      height: "100%",
      backgroundColor: "#ffa500",
    };
  }

  return (
    <div className="grid grid-cols-6 items-center py-1">
      <div className=" col-span-2 text-sm sm:text-sm nmd:text-base">
        {level}:
      </div>
      <div className="w-full border bg-gray-300 col-span-4">
        <div className="h-[10px] w-full relative">
          <div
            className="absolute scale-105 top-0 rounded-r-full left-0"
            style={backgroundStyle}
          ></div>
        </div>
      </div>
    </div>
  );
}

function ScoreMeter({ totalQuestion, solvedQuestion, easy, medium, hard }) {
  return (
    <div className="relative pt-4 pb-8">
      <div className="w-full bg-green-bg text-white rounded-md mb-4 py-2 text-center font-semibold">
        Your Progress
      </div>
      <div className="relative s2:flex nmd:flex-col gap-3 pt-4">
        <div>
          <ReactSpeedometer
            maxValue={
              totalQuestion +
              (totalQuestion % 10 > 0 ? 10 - (totalQuestion % 10) : 0)
            }
            width={250}
            needleColor="red"
            segments={5}
            value={solvedQuestion}
            needleTransitionDuration={4000}
            needleTransition="easeElastic"
          />
        </div>
        <div className="w-full h-fit bg-primary dark:border-2 dark:rounded-md box-shadow absolute s2:relative nmd:absolute top-[65%] py-4 text-xl font-medium px-2 text-green-bg">
          <div className="font-medium py-1">Solved Problem</div>
          <div>
            {/* Progress meter for Easy level */}
            <LevelMeter value={easy} level={"Easy"} />

            {/* Progress meter for Medium level */}
            <LevelMeter value={medium} level={"Medium"} />

            {/* Progress meter for Hard level */}
            <LevelMeter value={hard} level={"Hard"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreMeter;
