"use client";

import { Checkbox, Table } from "flowbite-react";
import Link from "next/link";
import { useEffect } from "react";

export default function QuestionArray({ showQuestions, search, difficulty }) {
  const mapD = {
    Easy: 0,
    Medium: 1,
    Hard: 2,
  };

  return (
    <div>
      {showQuestions?.length === 0 && <div className="text-center font-bold text-lg py-5">
          No Questions available yet !!
        </div>}
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
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                        <Table.Cell className="p-4">
                          <Checkbox checked={questionData?.solved} />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          <Link href={question.questionUrl}>
                            {question.title}
                          </Link>
                        </Table.Cell>
                        <Table.Cell>
                          {question.difficulty === "Easy"
                            ? 10
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
