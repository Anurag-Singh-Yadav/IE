"use client";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import WebsiteBanner from "../Components/templets/WebsiteBanner";
function Admin() {
  const [flag, setFlag] = useState(false);
  const verifyAdmin = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_ADMIN_URL}${process.env.NEXT_PUBLIC_VERIFY_ADMIN}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFlag(true);
    } catch (e) {
      alert("You are not authorized to access this page");

      console.log(e);
    }
  };

  useEffect(() => {
    verifyAdmin();
  }, []);

  return (
    <div>
      {
        flag && <div>
          <WebsiteBanner
            heading="Welcome To admin Portal"
            BtnName="Explore"
            imgSrc="interview-Experience.svg"
            paragraph="Interview Experience is a platform where you can find interview experiences of top companies. We have a collection of interview experiences of top companies like Google, Amazon, Microsoft, etc. You can also share your interview experience with us."
          />
          <div className="flex gap-5 flex-wrap justify-evenly py-4">
        <Link href="/admin/add-challenge">Add challenge</Link>
        <Link href="/admin/realtime">Add Articles</Link>
        <Link href="/admin/Enterview-experience">View Enterview-experience</Link>
      </div>
        </div>
      }
    </div>
  );
}

export default Admin;
