import React from "react";
import Link from "next/link";
function page({ params }) {
  console.log(params);
  return (
    <div>
      <Link href="/learn/[mainTopic]/[mainHeading]/[title]" as={`/learn/${params.mainTopic}/${params.mainHeading}/Introduction`}>
        hi....{params.mainHeading}
      </Link>
    </div>
  );
}

export default page;
