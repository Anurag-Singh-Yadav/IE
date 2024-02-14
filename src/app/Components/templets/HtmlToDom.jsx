"use client";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { setArticleLoading } from "@/app/GlobalRedux/Features/GlobalStateSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const HtmlToDom = ({ htmlContent }) => {
  const dispatch = useDispatch();
  // Sanitize the HTML content
  const cleanHTML = DOMPurify.sanitize(htmlContent);

  return <div id="article-content-container">{parse(cleanHTML)}</div>;
};

export default HtmlToDom;
