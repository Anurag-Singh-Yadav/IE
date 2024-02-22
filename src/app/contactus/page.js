"use client";
import React, { useState } from "react";
import WebsiteBanner from "../Components/templets/WebsiteBanner";
import Image from "next/image";

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{

    }catch(e){

    }
  };

  return (
    <div>
      <div>
        <WebsiteBanner
          BtnName="Contact Us"
          heading="Get in Touch with Us"
          paragraph="Have questions, feedback, or just want to say hello? We'd love to hear from you! Fill out the form below or use the contact information provided to reach out to our team. We're here to assist you in any way we can."
          imgSrc="contactUs.svg"
        />
      </div>
      <div className="main-container py-4 bg-[url('/dotted.svg')]">
        <div className="font-semibold sm:py-4 md:py-8 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Reach Out <span className="text-green-bg underline">To Us</span>
        </div>
        <div className="grid grid-cols-1 justify-center md:grid-cols-2">
          <div>
            <Image
              src="/Talk-to-us.svg"
              alt="contact us"
              width={400}
              height={400}
            ></Image>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div className="box-shadow py-4 px-2">
                <label htmlFor="name" className="block text-base mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name.."
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-full py-3 outline-white transition-all overflow-hidden ring-white resize-none ring-0 focus:ring-0 duration-300 w-full rounded-md border-2 border-dark-blue focus:border-green-bg"
                />
              </div>
              <div className="box-shadow py-4 px-2">
                <label htmlFor="email" className="block text-base mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email.."
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-full py-3 outline-white transition-all overflow-hidden ring-white resize-none ring-0 focus:ring-0 duration-300 w-full rounded-md border-2 border-dark-blue  focus:border-green-bg"
                />
              </div>
              <div className="min-h-[20vh] py-4 px-2 box-shadow">
                <label
                  htmlFor="message"
                  className="block text-base mb-2 font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your Message here.."
                  value={formData.message}
                  onChange={(e)=>{
                    handleChange(e);
                    e.target.style.height = "auto";
                      const contentHeight = e.target.scrollHeight;
                      e.target.style.height = `${contentHeight -7}px`;
                  }}
                  className="h-full py-3 outline-white transition-all overflow-hidden ring-white resize-none ring-0 focus:ring-0 duration-300 w-full rounded-md border-2 border-dark-blue focus:border-green-bg"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button type="submit" className="bg-green-bg text-white py-2 px-4 rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
