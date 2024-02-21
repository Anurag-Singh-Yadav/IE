// 'use client'
import React, { useEffect, useRef } from 'react';
import parse from 'html-react-parser';

const HtmlToDom = ({ htmlContent }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const elements = ref.current.getElementsByTagName('*');
      for (let i = 0; i < elements.length; i++) {
        const computedStyle = window.getComputedStyle(elements[i]);
        if (parseFloat(computedStyle.fontSize) < 14) {
          elements[i].style.fontSize = '14px';
        }
      }
    }
  }, [htmlContent]);

  return (
    <div>
      { htmlContent && 
        <div id="article-content-container" ref={ref}>{parse(htmlContent)}</div>
      }
    </div>
  );
};

export default HtmlToDom;