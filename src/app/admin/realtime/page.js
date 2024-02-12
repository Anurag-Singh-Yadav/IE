"use client";
import React, { useRef, useState, useCallback } from "react";
import JoditEditor from "jodit-react";

function Page() {

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    placeholder: "Start typing...",
  };

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => {setContent(newContent);}}
      />
      {content}
    </div>
  );
}

export default Page;
