"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import RenderArticle from "../RenderArticle";
import { useSearchParams } from "next/navigation";
import AppLayout from "@/app/Components/appLoayout";
import { setArticleLoading } from "@/app/GlobalRedux/Features/GlobalStateSlice";
import { useDispatch , useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const params = useSearchParams();
  const [navigator, setNavigator] = useState(null);
  const [navBarClick, setNavBarClick] = useState(false);
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
    } catch (error) {
      router.push('/coming-soon');
    }
  };

  const articleLoading = useSelector((state) => state.articleLoading);

  useEffect(() => {
    dispatch(setArticleLoading(articleLoading));
  },[contentFlow])

  useEffect(() => {
    console.log("navBarClick", navBarClick);
    clickHandler();
  }, [navBarClick, title]);

  return (
    <AppLayout
      navigator={navigator}
      navBarClick={navBarClick}
      setNavBarClick={setNavBarClick}
      activeBar={activeBar}
      activeSubTopics={activeSubTopics}
      title={title}
    >
      <RenderArticle contentFlow={contentFlow} title={title} menu={navigator?.menu} mainHeading={activeBar} mainTopic={navigator?.mainTopic} />
    </AppLayout>
  );
}

export default Page;
