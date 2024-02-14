"use client";
import parse from "html-react-parser";

const HtmlToDom = ({ htmlContent }) => {
  // Sanitize the HTML content
  const cleanHTML = htmlContent

  return <div id="article-content-container">{parse(cleanHTML)}</div>;
};

export default HtmlToDom;
