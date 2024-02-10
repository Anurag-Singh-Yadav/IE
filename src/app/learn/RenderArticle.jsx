"use client";
import React from "react";
import { renderMethods } from "./RenderMethods";
import PreRender from "../Components/templets/PreRender";
import { useSelector } from "react-redux";

function RenderArticle({ contentFlow , title}) {

  const articleLoading = useSelector((state) => {
    return state.GlobalState.articleLoading;
  });

  return (
    <div className=" w-full">
      <div className="flex flex-col px-6 pb-[50vh] mb-3 py-4" style={{ letterSpacing: "0.8px" }}>
        {title && <p className="font-bold text-lg mb-7">{title}</p>}
        {contentFlow && !articleLoading &&
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

          {
            articleLoading && 
            <PreRender count = {10} />
          }
      </div>
    </div>
  );
}

export default RenderArticle;
