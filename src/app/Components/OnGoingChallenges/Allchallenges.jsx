import React from "react";
import { TbTargetArrow } from "react-icons/tb";
function Allchallenges() {
  return (
    <div>
      <div className="py-4 sm:py-6 md:py-8">
        <p className="font-semibold md:font-bold text-normal sm:text-xl md:text-3xl">Select the <span className="text-green-bg underline">Challenges {" "}<TbTargetArrow className="inline" /></span></p>
        <p className="font-normal sm:font-medium sm:text-base text-xs py-2">Understand the problem, evaluate efficiency, choose suitable data structures and algorithms to overcome challenges effectively.</p>
      </div>
    </div>
  );
}

export default Allchallenges;
