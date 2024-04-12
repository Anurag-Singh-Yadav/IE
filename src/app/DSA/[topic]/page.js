"use client";
import QuestionRender from "@/app/Components/templets/QuestionRender";
import WebsiteBanner from "@/app/Components/templets/WebsiteBanner";
import axios from "axios";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page({}) {
  const query = useSearchParams();
  const [difficulty, setDifficulty] = useState([false, false, false]);  
  const [page,setPage] = useState(0);
  const [questions, setQuestions] = useState();
  var topic = query.get("topic");
  const [isLastPage, setLastPage] = useState(false);
  const fetchQuestions = async () => {
    try {
      topic = query.get("topic");
      const token = Cookies.get("token");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_QUESTION_BY_TOPIC}/${topic}/${page}/${difficulty[0]}/${difficulty[1]}/${difficulty[2]}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setQuestions(response.data.data);
      setLastPage(response.data.isLastPage);
    } catch (e) {
      console.error("There was an error!", e);
    }
  };

  useEffect(() => {
    fetchQuestions();
  },[topic, page,difficulty]);
  return (
    <div>
      <div>
        <WebsiteBanner imgSrc={"dsaPractise.png"} BtnName={"Start Solving"} />
      </div>
      <div className="main-container">
        <div className="font-semibold sm:py-4 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Explore all{" "}
          <span className="text-green-bg underline">Data-Structure Questions</span>
        </div>
      </div>
      {questions && <QuestionRender isLastPage={isLastPage} questionsDetails={questions} page={page} setPage={setPage} difficulty={difficulty}
       setDifficulty={setDifficulty} />}
    </div>
  );
}
export default Page;
