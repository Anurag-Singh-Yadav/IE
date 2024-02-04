"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios"; // Don't forget to import axios
import Navigator from "@/app/Components/Navigator";

function Page({ params }) {
  console.log(params);

  const [navigator,setNavigator] = useState(null);

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
      console.log("navigator",response.data.navigator);
      setNavigator(response.data.navigator);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  useEffect(()=>{
    console.log("useEffect");
    clickHandler();
  },[]);

  return (
    <div onClick={clickHandler}>
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
    </div>
  );
}

export default Page;
