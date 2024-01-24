'use client';
import React from 'react'
import Image from "next/image";
import assets from "@/assets/allImages";
function Company() {
  const imgData = [
     assets.microsoft,
    assets.google,
     assets.amazon,
     assets.facebook,
    assets.netflix,
     assets.samsung,
  ]
  return (
    <div className="flex flex-wrap bg-grey-bg gap-4 px-8 justify-evenly items-center">
        {
          imgData.map((src,i)=>{
            return(
              <Image
              key={i}
                src={src}
                width={144}
                alt="microsoft"
                className="aspect-w-4 aspect-h-1"
              />
            )
          })
        }
        
      </div>
  )
}

export default Company;


