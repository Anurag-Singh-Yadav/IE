"use client"

import React from 'react'

function Dropdown({label , options}) {

    // options : [ { label : 'abc' , value : 'xyz' , }  , {} ,....]

  return (
    <div className='relative bg-black'>
        <p>{label}</p>
        
        <div className='flex flex-col items-center gap-2 absolute top-0 w-full pt-11'>
        {
            options.map((obj , index) => {
                return <p name={obj.value} key={index} className='bg-red-800'>{obj.label}</p>
            })
        }
        </div>

    </div>
  )
}

export default Dropdown
