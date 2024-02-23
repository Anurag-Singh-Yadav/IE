"use client";
import React from "react";
import WebsiteBanner from "../Components/templets/WebsiteBanner";
import AboutUs from "../Components/templets/AboutUs";
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
      <div className="main-container">
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
      <div>

      </div>
    </div>
  );
}

export default Page;
