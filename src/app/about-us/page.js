"use client";
import React from "react";
import WebsiteBanner from "../Components/templets/WebsiteBanner";
import AboutUs from "../Components/templets/AboutUs";
import TeamCard from "../Components/templets/TeamCard";
function Page() {
  return (
    <div>
      <div>
        <WebsiteBanner
          heading="Welcome to Interview-Express"
          paragraph="Welcome to Interview-Express, your premier destination for mastering interview skills and accelerating your career growth. We are dedicated to providing you the very best of interview preparation, with an emphasis on quality, reliability, and affordability."
          imgSrc="about-us.webp"
          BtnName={"About Us"}
        />
      </div>
      <div className="main-container bg-[url('/circle.svg')] dark:bg-[url('/circle-dark.svg')]">
        <AboutUs
          paragraph="Our mission is to help you achieve your career goals by providing
            you with the best interview preparation resources. We aim to
            simplify the interview preparation process and help you land your
            dream job. We are committed to providing you with the best
            interview-preparation resources, including interview questions,
            answers, and tips, to help you succeed in your job search."
          title="Mission"
          imgSrc={"mission.png"}
        />
      </div>
      <div className="main-container pt-6 pb-2 gradiant-container">
        <div className="font-semibold md:font-bold text-normal sm:text-xl md:text-3xl">
          <span className="text-green-bg underline">Founders</span>
        </div>

        <TeamCard
          name={"Anurag Singh Yadav"}
          linkedIn={"https://www.linkedin.com/in/anurag-singh-yadav-02686322b/"}
          photo={
            "https://interview-express.s3.ap-south-1.amazonaws.com/1712389115774"
          }
          email={"anuragsinghyadav0005@gmail.com"}
          direction={true}
        />

        <TeamCard
          name={"Aditya Kumar"}
          linkedIn={"https://www.linkedin.com/in/aditya-kumar-293a05284/"}
          photo={
            "https://interview-express.s3.ap-south-1.amazonaws.com/1712389810163"
          }
          direction={false}
          email={"adityakumar.tech24@gmail.com"}
        />
      </div>
    </div>
  );
}

export default Page;
