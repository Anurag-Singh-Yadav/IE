import React, { useState } from "react";

export default renderMethods = {
    
  h1: ({ article }) => {
    return (
      <div>
        <p className=" h-2">{article.title}</p>
        <p>{article.value}</p>
      </div>
    );
  },

  h2: ({ article }) => {
    return (
      <div>
        <p className=" h-1">{article.title}</p>
        <p>{article.value}</p>
      </div>
    );
  },

  mcq: ({ article }) => {

    const [selected , setSelected] = useState(-1);

    const [flag , setFlag] = useState(true);

    const clickHandler = (e) => {
        setSelected(e.target.value);
        setFlag(false);
        if(e.target.value == article.correct){

        }
    }

    return (
      <div>
        <p>{article.title}</p>
        <form onSubmit={(e) => e.preventDefault()}>
          {article.options.map((opt, index) => {
            return (
                <div>
                    <label htmlFor={`option${index+1}`}>index+1 {') '}{opt}</label>
                    <input id={`option${index+1}`} type="radio" value={index + 1} onClick={() => { if(flag)clickHandler() } } checked={selected == index + 1} />
                </div>
            )
          })}
        </form>
        {correct == 1 && <p><span className="text-green-bg">Correct Answer :)</span>, Congratulations</p>}
        {correct == 2 && <p><span className=" text-red-600">Wrong Answer :(</span>, Correct option: {article.correct}</p>}
      </div>
    );
  },

  h3: ({ article }) => {

  },
};
