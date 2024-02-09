"use client";
import React from "react";
import { renderMethods } from "./RenderMethods";
function RenderArticle({ contentFlow , title}) {
  console.log("content flow ->", contentFlow);
  return (
    <div>
      <div className="flex flex-col px-6 pb-[50vh] mb-3 py-4">
        {title && <p className="font-bold text-lg mb-7">{title}</p>}
        {contentFlow &&
          contentFlow.map((content, index) => {
            const Component = renderMethods[content.title];

            return (
              <Component
                id={`content-${index}`}
                key={index}
                value={content.value}
                correct={content.correct}
                options={content.options}
              />
            );
          })}
      </div>
    </div>
  );
}

export default RenderArticle;
