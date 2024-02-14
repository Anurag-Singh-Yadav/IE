"use client";
import parse from "html-react-parser";

const HtmlToDom = ({ htmlContent }) => {
  // Sanitize the HTML content
  const cleanHTML = htmlContent;

  return (
    <div>
      { htmlContent && 
        <div id="article-content-container">{parse(cleanHTML)}</div>
      }
    </div>
  );
};

export default HtmlToDom;
