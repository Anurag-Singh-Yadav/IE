"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getAptitudeByTopic } from "@/app/fetchDetails/aptitudeEndPoints";
import QuestionCard from "../QuestionCard";

function TopicWiseAptitude() {
  const query = useSearchParams();
  var topic = query.get("topic");

  const [questions, setQuestions] = useState(null);

  const fetchQuestions = async () => {
    try {
      const res = await getAptitudeByTopic(topic);
      console.log(res);
      setQuestions(res.data?.questions);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="main-container">
      <div className="bg-green-bg py-2 mt-4 mb-6 text-center rounded-md text-white text-sm s2:text-base md:text-lg font-medium">
        {topic}
      </div>
      {questions &&
        questions.map(({ question }, index) => {
          // question -> {statement,options,explanation,answer};
          return (
            <div key={index}>
              <QuestionCard question={question} index={index} />
            </div>
          );
        })}
    </div>
  );
}

export default TopicWiseAptitude;
