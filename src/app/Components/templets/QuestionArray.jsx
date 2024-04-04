"use client";

import React, { useState } from "react";
import { Checkbox, Table } from "flowbite-react";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { toggleSignPagePopup } from "../../GlobalRedux/Features/GlobalStateSlice";
import NotLoginAlterBox from "./NotLoginAlterBox";

export default function QuestionArray({
  showQuestions,
  setShowQuestions,
  search,
  difficulty,
}) {
  const mapD = {
    Easy: 0,
    Medium: 1,
    Hard: 2,
  };

  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);
  const [open, setOpen] = React.useState(false);

  const markSolved = async (index, _id) => {
    const token = Cookies.get("token");
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_UPDATE_QUESTIONS_STATUS}`,
        {
          questionId: _id,
          token,
          action: !showQuestions[index].isSolved,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      showQuestions[index].isSolved = !showQuestions[index].isSolved;
      setShowQuestions([...showQuestions]);
    } catch (e) {
      if (e?.response?.data.message === "Please login first") {
        setMessage(e?.response?.data?.message);
        setOpen(true);
      } 
      if (e?.response?.data.message === "invalid token") {
        setMessage(e?.response?.data?.message);
        setOpen(true);
      } 
    }
  };

  return (
    <div>
      {open && (
        <NotLoginAlterBox
          heading={message}
          open={open}
          setOpen={setOpen}
          details={"This feature is available to registered users only. Please Log in now!"}
        ></NotLoginAlterBox>
      )}

      {showQuestions?.length === 0 && (
        <div className="text-center font-bold text-lg py-5">
          No Questions available yet !!
        </div>
      )}
      {showQuestions?.length > 0 && (
        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="p-4"></Table.HeadCell>
              <Table.HeadCell>QUESTION</Table.HeadCell>
              <Table.HeadCell>SCORE</Table.HeadCell>
              <Table.HeadCell>DIFFICULTY</Table.HeadCell>
              <Table.HeadCell>COMPANIES</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {showQuestions && (
              <Table.Body className="divide-y">
                {showQuestions.map((questionData, index) => {
                  const question = questionData.question;
                  if (
                    (search.length === 0 ||
                      question.title
                        .toLowerCase()
                        .includes(search.trim().toLowerCase())) &&
                    (difficulty[mapD[question.difficulty]] === true ||
                      difficulty.every((key) => key === false))
                  )
                    return (
                      <Table.Row
                        key={index}
                        className="dark:border-gray-700 bg-primary"
                      >
                        <Table.Cell className="p-4">
                          <Checkbox
                            checked={questionData?.isSolved}
                            onClick={() => {
                              markSolved(index, question._id);
                            }}
                            className="text-dark-blue focus:ring-dark-blue"
                          />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          <Link href={question.questionUrl} target="_black">
                            {question.title}
                          </Link>
                        </Table.Cell>
                        <Table.Cell>
                          {question.difficulty === "Easy"
                            ? 5
                            : question.difficulty === "Hard"
                            ? 20
                            : 10}
                        </Table.Cell>
                        <Table.Cell>
                          <div
                            className={`${question.difficulty?.toLowerCase()} mr-5 py-1 rounded-md font-semibold`}
                          >
                            {question.difficulty}
                          </div>
                        </Table.Cell>
                        <Table.Cell>Companies</Table.Cell>
                        <Table.Cell></Table.Cell>
                      </Table.Row>
                    );
                  // else return <></>;
                })}
              </Table.Body>
            )}
          </Table>
        </div>
      )}
    </div>
  );
}
