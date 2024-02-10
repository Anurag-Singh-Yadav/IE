"use client";
import WebsiteBanner from "@/app/Components/templets/WebsiteBanner";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

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

export default function Page({ params }) {
  const query = useSearchParams();
  const [difficulty, setDifficulty] = useState([]);
  const handleChange = (event) => {
    const { value } = event.target;
    setDifficulty(value);
  };
  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_CHALLENGE_BY_ID}/${params.id}`
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [params.id]);

  return (
    <div>
      <div>
        <WebsiteBanner
          imgSrc={"onGoingChallenges.gif"}
          BtnName={"Start Challenge"}
        ></WebsiteBanner>
      </div>
      <div className="main-container font-semibold sm:py-4 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Start Your <span className="text-green-bg underline">Challenges</span>
      </div>

      <div className="grid grid-cols-4">
        <div className="col-span-3">

          <div className="flex flex-wrap justify-between items-center">
            <div>All</div>
            <div>Solved</div>
            <div>Unsolved</div>
            <div>Revisited</div>
            <div>
              <FormControl sx={{ m: 1, width: 140}} >
                <InputLabel id="demo-multiple-checkbox-label" sx={{color:'green'}}>Tag</InputLabel>
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
                    <MenuItem key={name}  value={name}>
                      <Checkbox checked={difficulty.indexOf(name) > -1}  />
                      <ListItemText primary={name}  />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          
          

        </div>
        <div className="col-span-1">{/* scored */}</div>
      </div>
    </div>
  );
}
