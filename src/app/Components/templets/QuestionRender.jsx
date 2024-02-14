"use client";
import React,{useEffect, useState} from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
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




  return (
    <div>
      <div className="grid grid-cols-4">
      <div className="col-span-3">
        <div className="flex flex-wrap justify-between items-center">
          <div>All</div>
          <div>Solved</div>
          <div>Unsolved</div>
          <div>Revisited</div>
          <div>
            <FormControl sx={{ m: 1, width: 140 }}>
              <InputLabel
                id="demo-multiple-checkbox-label"
                sx={{ color: "green" }}
              >
                Tag
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={difficulty}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={difficulty.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div>
            <div>
                
            </div>
            <div>
                <Image
                src={`${questionsDetail.imageUrl}`}
                alt="challenge image"
                className="mr-4 overflow-hidden"
                width={120}
                height={80}
                ></Image>
            </div>
        </div>
      </div>
    </div>

    <div>
      <QuestionArray showQuestions={showQuestions} />
    </div>

    </div>
  );
}

export default QuestionRender;
