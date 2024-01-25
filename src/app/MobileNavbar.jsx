"use client";
import React, { useEffect, useState } from "react";
import "./MobileNavbar.css";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

function MobileNavbar() {
  function handleScroll() {
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

  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    let b = document.getElementById("mobile-navbar");
    if (b && !flag) {
      b.classList.add("slide-in-mobile");
      b.classList.remove("slide-out-mobile");
    } else if(b) {
        b.classList.add("slide-out-mobile");
        b.classList.remove("slide-in-mobile");
    }
    setFlag(!flag);
  };

  document.addEventListener('click' , (event) => {

    let popup = document.getElementById('mobile-navbar')
    let button = document.getElementById('popup')

    if (!popup.contains(event.target) && event.target !== button) {
        handleClick();
    }
  })

  return (
    <div>
      <div
        id="popup"
        onClick={handleClick}
        className="nmd:hidden hamburger z-[100] bg-dark-blue hover:bg-green-bg cursor-pointer rounded-md p-2 text-white"
      >
        {!flag && <FaBars size={15} />}
        {flag && <RxCross1  size={15} />}
      </div>
      <div
        id="mobile-navbar"
        className="mobile-navbar fixed right-0 top-0 w-[50vw] bg-white z-[51] h-[100vh]"
      >

      </div>
      {flag && <div className=" w-[100vw] h-[100vh] fixed top-0 left-0 darker z-[50]"></div>}



    </div>
  );
}

export default MobileNavbar;
