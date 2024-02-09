import React from 'react'
import WebsiteBanner from '../Components/templets/WebsiteBanner'

function page() {
  return (
    <div>
        <div>
            <WebsiteBanner
                imgSrc={'onGoingChallenges.gif'}
                BtnName={"Accepts Challenges"}
            ></WebsiteBanner>
        </div>

        

    </div>
  )
}

export default page
