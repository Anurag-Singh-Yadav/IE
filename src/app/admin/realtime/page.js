'use client'
import React, { useRef, useState } from 'react';
import TextEditor from '@/app/Components/templets/TextEditor';

export default function App() {

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const [htmlContent , setHtmlContent] = useState('');

  return (
    <div> 
      <TextEditor htmlContent={htmlContent} setHtmlContent={setHtmlContent} formName={'admin-uploading-form'} />
    </div>
  );
}
