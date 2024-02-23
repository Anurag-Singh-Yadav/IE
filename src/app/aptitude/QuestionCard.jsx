"use client";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { FaPersonChalkboard } from "react-icons/fa6";

function QuestionCard({ question, index }) {
  const { statement, options, answer, explanation } = question;

  const [selected, setSelected] = useState(null);

  const [flag, setFlag] = useState(false);

  return (
    <div className="my-6 border-b py-4 flex flex-col gap-4">
      <FormLabel>
        <FormLabel id="demo-controlled-radio-buttons-group">
          <p>{`${index + 1}) ${statement}`}</p>
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="select-option"
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
          }}
        >
          {options.map((option, index) => {
            return (
              <div className="flex flex-wrap gap-3 items-center">
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
                {selected === option &&
                  (selected === answer ? (
                    <div className="text-green-bg">Correct answer !!</div>
                  ) : (
                    <div className="text-red-500">Oops, wrong answer !!</div>
                  ))}
              </div>
            );
          })}
        </RadioGroup>
      </FormLabel>

      <div
        title={`View solution`}
        className="cursor-pointer flex gap-2 items-center hover:text-green-bg w-fit transition duration-300"
        onClick={() => {
          setFlag(!flag);
        }}
      >
        <FaPersonChalkboard size={20} />
        <p className="text-sm">{`${flag ? 'Hide Solution' : 'View Solution'}`}</p>
      </div>

      {flag && (
        <div>
          <div className="flex gap-1">
            <strong className="text-green-bg">{`Answer: `}</strong>
            <p>{answer}</p>
          </div>
          <details className="flex gap-2 mt-4">
            <summary className="text-green-bg transition duration-300 cursor-pointer"><strong>Explanation</strong></summary>
            <p>{explanation}</p>
          </details>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
