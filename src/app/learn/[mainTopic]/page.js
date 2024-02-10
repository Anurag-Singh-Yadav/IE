"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import RenderArticle from "../RenderArticle";
import { useSearchParams } from "next/navigation";
import AppLayout from "@/app/Components/appLoayout";
import { setArticleLoading } from "@/app/GlobalRedux/Features/GlobalStateSlice";
import { useDispatch } from "react-redux";

function Page() {
  const dispatch = useDispatch();
  const params = useSearchParams();
  const [navigator, setNavigator] = useState(null);
  const [navBarClick, setNavBarClick] = useState(false);
  const [contentTable, setContentTable] = useState(null);
  const [contentFlow, setContentFlow] = useState(null);
  const [activeBar, setActiveBar] = useState(null);
  const [activeSubTopics, setActiveSubTopics] = useState(null);
  var title = params.get("title");
  var mainTopic = params.get("mainTopic");
  var mainHeading = params.get("mainHeading");
  const clickHandler = async () => {
    try {
      const paramsto = {
        mainTopic,
        mainHeading,
        title,
      };
      mainTopic = params.get("mainTopic");
      mainHeading = params.get("mainHeading");
      title = params.get("title");
      setActiveBar(mainHeading);
      setActiveSubTopics(title);
      dispatch(setArticleLoading(true));

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ARTICLE}`,
        { params: paramsto }
      );
      dispatch(setArticleLoading(false));
      setNavigator(response.data.navigator);
      setContentFlow(response.data.article.contentFlow);
      let arr = [];
      for (let i = 0; i < response.data.article.contentFlow.length; i++) {
        if (
          response.data.article.contentFlow[i].title == "H2" ||
          response.data.article.contentFlow[i].title === "H3"
        ) {
          arr.push({
            label: response.data.article.contentFlow[i].value,
            index: i,
            title: response.data.article.contentFlow[i].title,
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
  }, [navBarClick, title]);

  return (
    <AppLayout
      navigator={navigator}
      navBarClick={navBarClick}
      setNavBarClick={setNavBarClick}
      data={contentTable}
      activeBar={activeBar}
      activeSubTopics={activeSubTopics}
    >
      <RenderArticle contentFlow={contentFlow} title={title} menu={navigator?.menu} mainHeading={activeBar} mainTopic={navigator?.mainTopic} />
    </AppLayout>
  );
}

export default Page;
