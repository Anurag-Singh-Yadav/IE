import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image"
import { SiMinutemailer } from "react-icons/si";
import Link from "next/link"
function TeamCard({name, linkedIn,photo , direction ,email}) {
  return (
    <div className={`flex justify-center gap-9 ${direction ? " flex-row-reverse" : "flex-row"} flex-wrap-reverse text-class mt-24 mb-[130px]`}>
      <div className="flex flex-col justify-center items-center gap-5 text-center">
        <p className="text-secondary-text font-semibold">Hello, I'm</p>
        <p className="text-primary-text font-extrabold text-5xl tracking-wider">
          {name}
        </p>
        <p className="text-secondary-text text-2xl font-semibold">
          Full-Stack Developer
        </p>
        <div className="flex gap-4 text-sm font-bold flex-wrap justify-center">
          <button
            className="px-5 py-3 rounded-full border-[1.5px] start-2  text-white"
          >
            Contact info
          </button>
        </div>
        <div className="flex gap-4">
          
          <Link
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer" 
          >
            <FaLinkedin size={35} />
          </Link>
          
          <Link
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMinutemailer size={35} />
          </Link>

        </div>
      </div>
      <Image
        src={photo} 
        width={300}
        height={400}
        className="rounded-full "
        alt="Profile Image" 
      />
    </div>
  );
}

export default TeamCard;
