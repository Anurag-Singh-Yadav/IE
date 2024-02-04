"use client";
import React from "react";
import Link from "next/link";
import axios from "axios"; // Don't forget to import axios

function Page({ params }) {
  console.log(params);
  
  const clickHandler = async () => {
    try {
      const mainTopic = params.mainTopic;

      console.log("main topics this ->", mainTopic);
      // Define your parameters
      const paramsto = {
        mainTopic
      };
    console.log("url",`${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ARTICLE}`)
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ARTICLE}`,
        { params:paramsto }
      );
      console.log(response);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div onClick={clickHandler}>
      <Link
        href="/learn/[mainTopic]/[mainHeading]"
        as={`/learn/${params.mainTopic}/`}
        passHref
      >
        hi...{params.mainTopic}
      </Link>
    </div>
  );
}

export default Page;
