"use client";
import React, { useEffect, useState } from "react";
import "./MobileNavbar.css";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

function MobileNavbar() {
  const [flag, setFlag] = useState(false);

  function handleScroll() {
    if(flag)return;
    let p = document.getElementById("hero");
    let h = document.getElementById("popup");
    let rect = p.getBoundingClientRect();
    let distanceFromTop = rect.top;
    if (distanceFromTop <= 0) {
      h.classList.add("pop-in");
      h.classList.remove("pop-out");
    } else {
      h.classList.remove("pop-in");
      h.classList.add("pop-out");
    }
  }

  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    handleScroll();
  }, []);

  const handleClick = () => 
  {
    setFlag(!flag);
    if(document.body.classList.contains('no-scroll'))document.body.classList.remove('no-scroll');
    else document.body.classList.add('no-scroll');
  }

  return (
    <div>
      <div
        id="popup"
        onClick={handleClick}
        className={`nmd:hidden hamburger  z-[100] bg-dark-blue hover:bg-green-bg cursor-pointer rounded-md p-2 text-white`}
      >
        {!flag && <FaBars size={15} />}
        {flag && <RxCross1  size={15} />}
      </div>
      <div
        id="mobile-navbar"
        className={`mobile-navbar ${flag ? 'slide-in-mobile' : 'slide-out-mobile'} fixed right-0 top-0 w-[50vw] bg-white z-[51] h-[100vh]`}
      >

      </div>
      {flag && <div className=" w-[100vw] h-[100vh] fixed top-0 left-0 darker z-[50]"></div>}

    </div>
  );
}

export default MobileNavbar;
