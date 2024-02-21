import Link from 'next/link';
import React from 'react'

function ChallengePosterMobile({challenges , handleClick}) {
  return (
    <div className='flex flex-col gap-1 mt-3'>
        {
            challenges && challenges.map((challengeData , index) => {
                

                const challenge = challengeData.challenge;

                if(index < 2){
                    return(
                        <Link
                        href={{
                          pathname: `/onGoingChallenges/${challengeData.challenge?._id}`,
                        }}
                        onClick={handleClick}
                        className="flex items-center w-full gap-5 hover:bg-gray-100"
                        key={index}
                      >
                        <img
                          src={challenge.imageUrl}
                          className="aspect-auto max-w-[30%]"
                        />
                        <div className="flex flex-col justify-center gap-3 py-5 h-full">
                          <div className="font-semibold text-sm">
                            {challenge.challengeType}
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
                    )
                }
            })
        }
        <Link href='/onGoingChallenges' className='btn-gradient-2 px-4 py-2 rounded-md w-fit mx-auto mt-3'>
            All Challenges
        </Link>
    </div>
  )
}

export default ChallengePosterMobile
