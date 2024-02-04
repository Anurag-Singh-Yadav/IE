'use client'
import React from 'react'

import { renderMethods } from './RenderMethods'

function RenderArticle({contentFlow}) {
  return (
    <div className='flex flex-col p-4 sm:p-7 md:p-10 lg:p-16'>
        {
            contentFlow && contentFlow.map((content , index) => {

                const Component = renderMethods[content.title];

                return (
                    <Component key={index} value={content.value} correct={content.correct} options={content.options}/>
                )
            })
        }
    </div>
  )
}

export default RenderArticle
