import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"
function ScoreMeter() {
  return (
    <div>
      <ReactSpeedometer 
      maxValue={500}
      needleColor="red"
      segments={10}
      value={333}
      needleTransitionDuration={4000}
      needleTransition="easeElastic"
      />
    </div>
  )
}

export default ScoreMeter
