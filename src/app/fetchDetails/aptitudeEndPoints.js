"use client";

import axios from "axios";
import Cookies from "js-cookie";

export const getAllAptitudeQuestions = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_APTITUDE_TOPICS}`
    );
    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const getAptitudeByTopic = async (topic) => {
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_APTITUDE_QUESTIONS}/${topic.split(' ').join('-')}`)
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_APTITUDE_QUESTIONS}/${topic.split(' ').join('-')}`
    );
    return response;
  } catch (e) {
    throw new Error(e);
  }
};

export const postAptitudeQuestions = async (data) => {
  try {
    const token = Cookies.get("token");
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_ADMIN_URL}${process.env.NEXT_PUBLIC_ADD_APTITUDE_QUESTIONS}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);    
  }
}