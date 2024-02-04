'use client'
import React from 'react'

import { renderMethods } from './RenderMethods'

function RenderArticle({contentFlow}) {
  return (
    <div className='flex flex-col px-6 py-4 sm:py-7 md:py-10 lg:py-16'>
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
