import React, { useEffect } from 'react'

function page({params}) {

  return (
    <div>
      last level....{params.title}
    </div>
  )
}

export default page
