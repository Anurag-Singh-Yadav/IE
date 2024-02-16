"use client";
import QuestionRender from "@/app/Components/templets/QuestionRender";
import WebsiteBanner from "@/app/Components/templets/WebsiteBanner";
import axios from "axios";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page({}) {
  const query = useSearchParams();

  const [questions, setQuestions] = useState();
  var topic = query.get("topic");
  const fetchQuestions = async () => {
    try {
      topic = query.get("topic");
      const token = Cookies.get("token");
      console.log("topic", topic);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_QUESTION_BY_TOPIC}/${topic}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setQuestions(response.data.data);
    } catch (e) {
      console.error("There was an error!", e);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [topic]);
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
      {questions && <QuestionRender questionsDetails={questions} />}
    </div>
  );
}

export default Page;
