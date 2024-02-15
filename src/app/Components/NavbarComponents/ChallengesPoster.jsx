import Link from "next/link";
import React from "react";

function ChallengesPoster({ challenges }) {
  return (
    <div className="flex flex-col gap-1">
      {challenges &&
        challenges.map((challengeData, index) => {
          const challenge = challengeData.challenge;
            if(index < 2)
          return (
            <Link
              href={{
                pathname: `/onGoingChallenges/${challengeData.challenge?._id}`,
              }}
              className="flex items-center w-full gap-5 min-w-[600px] hover:bg-gray-100"
              key={index}
            >
              <img
                src={challenge.imageUrl}
                className="aspect-auto max-w-[250px]"
              />
              <div className="flex flex-col justify-center gap-3 py-5 h-full">
                <div className="font-semibold text-sm">
                  {challenge.challengeType}
                </div>
                <div className=" text-gray-600 text-xs font-medium">
                  {challenge.description}
                </div>
                {challengeData.userScore && (
                  <div className=" text-xs border-[1.5px] border-green-bg text-green-bg px-3 py-1 rounded-full w-fit">
                    {"Points: "} {challengeData.userScore}
                    {" / "}
                    {challenge.maxScore}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      <Link
        href={"/onGoingChallenges"}
        className="btn-gradient-2 w-fit px-4 py-2 rounded-md mx-auto mt-3"
      >
        All Challenges
      </Link>
    </div>
  );
}

export default ChallengesPoster;
