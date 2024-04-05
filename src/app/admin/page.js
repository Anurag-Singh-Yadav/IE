"use client";
import Link from "next/link";
import WebsiteBanner from "../Components/templets/WebsiteBanner";
import withAuth from "./WithAuth";

function Admin() {
  return (
    <div>
      <div>
        <WebsiteBanner
          heading="Welcome To admin Portal"
          BtnName="Explore"
          imgSrc="interview-Experience.svg"
          paragraph="Interview Experience is a platform where you can find interview experiences of top companies. We have a collection of interview experiences of top companies like Google, Amazon, Microsoft, etc. You can also share your interview experience with us."
        />
        <div className="flex gap-5 flex-wrap justify-evenly py-4">
          <Link href="/admin/add-challenge">Add challenge</Link>
          <Link href="/admin/add-article">Add Articles</Link>
          <Link href="/admin/interview-experience">
            View Enterview-experience
          </Link>
          <Link href="/admin/Website-reviews">View Website Reviews</Link>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Admin);
