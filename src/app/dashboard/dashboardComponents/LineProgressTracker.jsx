import React from "react";

function LineProgressTracker({ type, qCount, totalQCount, color }) {
  return (
    <div className="w-full grid grid-cols-3 gap-2 px-3">
      <div className="font-medium col-span-2">
        <div>{type}</div>
        <div className="h-2 bg-gray-200 rounded-md">
          <div
            className="h-2 w-full rounded-md"
            style={{
              background: color,
              width: `${(qCount / totalQCount) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <div
        style={{ backgroundColor: color }}
        className="px-2 col-span-1 rounded-md py-1 text-white font-semibold text-xs flex justify-center items-center"
      >
        <span>{qCount}/{totalQCount}</span>
      </div>
    </div>
  );
}

export default LineProgressTracker;
