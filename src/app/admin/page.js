'use client'
import React, { useState } from "react";
import InputTextContent from "./InputTextContent";
import axios from "axios";

function Page() {
  const [cnt, setCnt] = useState(1);
  const [content, setContent] = useState({});
  const [formData, setFormData] = useState({
    Maintopics: "",
    MainHeading: "",
    Subheading: "",
    content: [],
    mcq:[],
  });

  const changeHandler = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const contenthandleChange = (key, value) => {
    setContent({
      ...content,
      [key]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // Assuming formData is a state variable managed by useState
      const updatedFormData = {
        ...formData,
        content: Object.entries(formData.content).map(([key, value]) => ({ key, value })),
      };
  
      console.log(updatedFormData);
  
      const res = await axios.post('/api/s3-upload', updatedFormData);
      console.log(res.data); // Assuming you want to log the response data
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const renderInputFields = () => {
    const inputFields = [];
    for (let i = 0; i < cnt; i++) {
      inputFields.push(
        <div key={i}>
          <div>Main content {i + 1}</div>
          <input
            type="text"
            placeholder="Key"
            onChange={(e) => contenthandleChange(e.target.value, e.target.value)}
          />
          <input
            type="text"
            placeholder="Value"
            onChange={(e) => contenthandleChange(e.target.value, e.target.value)}
          />
        </div>
      );
    }
    return inputFields;
  };

  return (
    <div>
      <form className="flex flex-col justify-center mx-auto gap-3 pt-3 w-2/4">
        <InputTextContent
          heading="Maintopics"
          type="text"
          label="Maintopics"
          value={formData.Maintopics}
          onChange={changeHandler}
          placeHolder="Enter Maintopics"
        />
        <InputTextContent
          heading="Enter MainHeading"
          type="text"
          label="MainHeading"
          value={formData.MainHeading}
          onChange={changeHandler}
          placeHolder="Enter MainHeading"
        />
        <InputTextContent
          heading="Subheading"
          type="text"
          label="Subheading"
          value={formData.Subheading}
          onChange={changeHandler}
          placeHolder="Enter Subheading"
        />
        {formData.content && renderInputFields()}
        <div className="flex justify-center gap-40 py-4">
          <button
            type="button"
            onClick={() => {
              setFormData({
                ...formData,
                content: Object.entries(content).map(([key, value]) => ({
                  key,
                  value,
                })),
              });
              setContent({});
              setCnt(cnt + 1);
            }}
          >
            Add More Main-content
          </button>
          <button
            type="button"
            onClick={() => {
              if (cnt > 1) setCnt(cnt - 1);
            }}
          >
            Remove Main-content
          </button>
          <button onClick={submitHandler}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Page;
