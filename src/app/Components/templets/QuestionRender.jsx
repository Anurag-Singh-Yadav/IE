"use client";
import React,{useEffect, useState} from "react";
import Image from "next/image";
import QuestionArray from "./QuestionArray";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = ["Easy", "Medium", "Hard"];

function QuestionRender({questionsDetail}) {
  const [difficulty, setDifficulty] = useState([]);
  const handleChange = (event) => {
    const { value } = event.target;
    setDifficulty(value);
  };

  const [showQuestions , setShowQuestions] = useState(null);

  useEffect(() => {
    console.log('** ' , questionsDetail)
    setShowQuestions(questionsDetail.questionsDetails);
  },[questionsDetail]);

  const [search , setSearch] = useState('');
  const [filter , setFilter] = useState({});

  useEffect(() => {
    setShowQuestions(questionsDetail.questionsDetails.filter(obj => Object.keys(filter).every(key => obj[key] === filter[key])));
  } , [filter])

  return (
    <div className="">
      <div className="">
      <div className="">
        <div className="flex flex-wrap gap-12 px-4 items-center bg-green-bg/10  font-semibold py-2 min-h-[15vh]">
          <div className="bg-white px-4 py-1 rounded-full box-shadow" onClick={() => {
            setFilter({});
          }}>All</div>
          <div className="bg-white px-4 py-1 rounded-full box-shadow" onClick={() => {
            setFilter((prev) => {
              if(prev['solved'] === undefined) {
                prev['solved'] = true;
                return prev;
              }
              else{
                delete prev.solved;
                return prev;
              }
            })
          }}>Solved</div>
          <div className="bg-white px-4 py-1 rounded-full box-shadow" onClick={() => {
            setFilter((prev) => {
              if(prev['solved'] === undefined){
                prev['solved'] = false;
                return prev;
              }
              else{
                delete prev.solved;
                return prev;
              }
            })
          }}>Unsolved</div>

<div className="bg-white px-4 py-1 rounded-full box-shadow" onClick={() => {
            clickHandler({
              solved: false,
            })
          }}>Difficulty</div>

          <form>
            <input className="box-shadow px-4 py-1 rounded-full focus:border-black text-gray-500 font-normal" placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
          </form>
          
        
        </div>
      </div>
      <div className="col-span-1">
        <div>
            <div>
                
            </div>
         
        </div>
      </div>
    </div>

    <div>
      <QuestionArray search={search} showQuestions={showQuestions} />
    </div>

    </div>
  );
}

export default QuestionRender;
