import React from 'react'

import { renderMethods } from './RenderMethods'

function RenderArticle({contentFlow}) {
  return (
    <div>
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
