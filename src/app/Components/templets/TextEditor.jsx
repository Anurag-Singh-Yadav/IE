"use client";
import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import HtmlToDom from "@/app/Components/templets/HtmlToDom";

export default function TextEditor({ htmlContent, setHtmlContent, formName }) {
  useEffect(() => {
    const data = formName ? window.localStorage.getItem(`${formName}`) : null;
    if (data) {
      setHtmlContent(JSON.parse(data));

    }
  }, []);

  const [first, setFirst] = useState(true);
  useEffect(() => {
    if (first == false && formName) {
      window.localStorage.setItem(`${formName}`, JSON.stringify(htmlContent));
    }
    setFirst(false);
  }, [htmlContent]);

  const editorRef = useRef(null);

  const changeHandler = () => {
    setHtmlContent(editorRef.current.getContent());
  };

  const [flag, setFlag] = useState(false);

  return (
    <div>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          images_upload_url: `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_IMAGE_URL}`,
          height: 500,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
            "image",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help | image" +
            "blocks fontfamily fontsize",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:18.6px }",
        }}
        apiKey="6ag7jotxmhvti08pmxib24byppmankv6a5tq3xtholje7zgg"
        onEditorChange={changeHandler}
        value={htmlContent}
      />
      {/* <p>{htmlContent}</p> */}
      {<div className="flex justify-center">
        <button
          className="btn-gradient-2 px-4 py-2 rounded-md mx-auto my-5 text-lg"
          onClick={() => {
            setFlag(!flag);
          }}
        >
          {flag ? 'Close Preview' : 'Preview'}
        </button>
      </div>}
      {flag && (
        <div>
          <HtmlToDom htmlContent={htmlContent} />
        </div>
      )}
      {/* <p>{htmlContent}</p> */}
    </div>
  );
}
