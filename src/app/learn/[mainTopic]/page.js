"use client";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
import axios from "axios"; //  Don't forget to import axios
// import Navigator from "@/app/Components/Navigator";
import RenderArticle from "../RenderArticle";
// import ArticleProgress from "@/app/Components/ArticleProgress";
import { useSearchParams } from "next/navigation";
import AppLayout from "@/app/Components/appLoayout";

function Page() {
  const params = useSearchParams();
  const [navigator, setNavigator] = useState(null);
  const [navBarClick, setNavBarClick] = useState(false);
  const [contentTable, setContentTable] = useState(null);
  const [contentFlow, setContentFlow] = useState(null);
  const mainTopic = params.get("mainTopic");
  const mainHeading = params.get("mainHeading");
  const title = params.get("title");
  const clickHandler = async () => {
    try {
      const paramsto = {
        mainTopic,
        mainHeading,
        title,
      };
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ARTICLE}`,
        { params: paramsto }
      );
      console.log("navigator", response.data);
      setNavigator(response.data.navigator);
      setContentFlow(response.data.article.contentFlow);
      let arr = [];
      for (let i = 0; i < response.data.article.contentFlow.length; i++) {
        if (response.data.article.contentFlow[i].title == "H2") {
          arr.push({
            label: response.data.article.contentFlow[i].value,
            index: i,
          });
        }
      }
      setContentTable(arr);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  useEffect(() => {
    console.log("navBarClick", navBarClick);
    clickHandler();
  }, [navBarClick]);

  return (
    // <div onClick={clickHandler} className="flex">
    //   {navigator && <Navigator navigator={navigator} mainHeading={mainHeading} mainTopic={mainTopic} title={title}></Navigator>}
    //   <RenderArticle contentFlow={contentFlow} />
    //   {contentTable && <ArticleProgress data={data} />}
    // </div>
    <AppLayout
      navigator={navigator}
      navBarClick={navBarClick}
      setNavBarClick={setNavBarClick}
      data={contentTable}
    >
      {/* <Link href={'/learn/[mainTopic]'} as={'/learn/object-oriented-programming?value=3'}>hllo</Link> */}
      <RenderArticle contentFlow={contentFlow} />
    </AppLayout>
  );
}

export default Page;
