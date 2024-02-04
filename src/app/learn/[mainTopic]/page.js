"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios"; // Don't forget to import axios
import Navigator from "@/app/Components/Navigator";
import RenderArticle from "../RenderArticle";

function Page({ params }) {
  const [navigator,setNavigator] = useState(null);

  const [title , setTitle] = useState(null);

  const [contentFlow , setContentFlow] = useState(null);

  const clickHandler = async () => {
    try {
      const mainTopic = params.mainTopic;

      const paramsto = {
        mainTopic
      };
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ARTICLE}`,
        { params:paramsto }
      );
      console.log("navigator",response.data);
      setNavigator(response.data.navigator);
      setContentFlow(response.data.article.contentFlow);
      setTitle(response.data.article.title);
    } catch (error) {

      console.error("There was an error!", error);
    }
  };

  useEffect(()=>{
    console.log("useEffect");
    clickHandler();
  },[]);

  return (
    <div onClick={clickHandler} className="flex">
      <Link
        href="/learn/[mainTopic]/[mainHeading]"
        as={`/learn/${params.mainTopic}/`}
        passHref
      >
        hi...{params.mainTopic}
        {
          navigator && <Navigator navigator={navigator} ></Navigator>
        }
      </Link>
      <RenderArticle contentFlow={contentFlow} />
    </div>
  );
}

export default Page;
