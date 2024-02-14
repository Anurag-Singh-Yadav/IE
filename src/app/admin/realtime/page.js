'use client'
import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import HtmlToDom from '@/app/Components/templets/HtmlToDom';

export default function App() {

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const [htmlContent , setHtmlContent] = useState('');

  const changeHandler = (e) => {
    setHtmlContent(editorRef.current.getContent());
  }

  return (
    <div> 
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        init={{
          images_upload_url: `${process.env.NEXT_PUBLIC_ADMIN_URL}${process.env.NEXT_PUBLIC_GET_IMAGE_URL}`,
          height: 500,
          menubar: 'insert',
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'image'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help | image',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:18px }',
        }}
        
        apiKey='gagh8gfnr4xbrlstg8z8nhmtfm0p6l1oard8jespd91ijask' 
        onChange={changeHandler}
      />
        <HtmlToDom htmlContent={htmlContent} />

    </div>
  );
}
