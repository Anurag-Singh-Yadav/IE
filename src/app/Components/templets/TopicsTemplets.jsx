'use client'
import Link from 'next/link'
import React from 'react'
function TopicsTemplets({topics}) {
  return (
    <div>
      {
        topics && <div>
            <div className="grid grid-cols-2 gap-4">
                {
                topics.map((topic, index) => {
                    return (
                    <Link key={index} className="bg-white text-xs sm:text-base sm:font-medium border-2 text-center border-white hover:border-l-green-bg p-2 box-shadow cursor-pointer"
                    href={{
                        pathname: `/DSA/${topic.link}`,
                        query: {
                            topic: topic.name,
                        },
                    }}
                    >
                        {topic.name}
                    </Link>
                    )
                })
                }
            </div>
        </div>
      }
    </div>
  )
}

export default TopicsTemplets
