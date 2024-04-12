import React from "react";

function LineProgressTracker({ type, qCount, totalQCount, color }) {
  return (
    <div className="w-full grid grid-cols-3 gap-2">
      <div className="font-medium col-span-2">
        <div>{type}</div>
        <div className="h-2 bg-primary rounded-md">
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
        className="px-2 col-span-1 rounded-sm py-1"
      >
        {qCount}/{totalQCount}
      </div>
    </div>
  );
}

export default LineProgressTracker;
