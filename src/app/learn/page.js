"use client";
import Link from "next/link";
import React from "react";
function Page() {
  
  return (
    <div className="h-[100vh]">
      <Link href="/learn/[mainTopic]" as="/learn/object-oriented-programming">
        OOPs
      </Link>
      <Link href="/learn/[mainTopic]" as="/learn/DSA">
        DSA
      </Link>
    </div>
  );
}

export default Page;
