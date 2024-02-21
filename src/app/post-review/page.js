'use client'
import React from 'react'
import WebsiteBanner from '../Components/templets/WebsiteBanner'

function Page() {
  return (
    <div>
        <div>
            <WebsiteBanner
            heading={"Post your review"}
            paragraph={"Millions of people have used Interview Express to decide which online course to take. We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone."}
            imgSrc={"postReview.png"}
            ></WebsiteBanner>
        </div>
        <div>
            <div className="main-container">
                <div className="font-semibold sm:py-4 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    Post Your <span className='text-green-bg underline'>Reviews</span>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Page
