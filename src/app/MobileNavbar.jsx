"use client";
import React, { useEffect, useRef, useState } from "react";
import "./MobileNavbar.css";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

function MobileNavbar({ navBurger, setNavBurger }) {
  const [flag, setFlag] = useState(null);

  function handleScroll() {
    let p = document.getElementById("hero");
    let h = document.getElementById("popup");
    if (!h) return;
    let rect = p.getBoundingClientRect();
    let distanceFromTop = rect.top;
    if (distanceFromTop <= 0) {
      h.classList.add("pop-in");
    } else {
      h.classList.remove("pop-in");
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined")
      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (first) {
      setFirst(false);
      return;
    }
    handleClick();
    setTimeout(() => {
      setDelay(true);
    }, 500);
  }, [navBurger]);

  const handleClick = () => {
    setFlag(!flag);
  };

  const [delay, setDelay] = useState(false);

  return (
    <div>
      <div
        id="popup"
        onClick={() => {
          handleClick();
          setTimeout(() => {
            setDelay(true);
          }, 500);
        }}
        className={`hidden hamburger z-[99] bg-dark-blue hover:bg-green-bg cursor-pointer rounded-md p-2 text-white`}
      >
        <FaBars size={15} />
      </div>
      <div
        id="mobile-navbar"
        className={`mobile-navbar ${flag === true ? 'slide-in-mobile' : ''} ${flag === false ? 'slide-out-mobile' : ''} fixed right-0 top-0 w-[50vw] bg-white z-[100] h-[100vh]`}
      >
        <div
          onClick={() => {
            handleClick();
            setDelay(false);
          }}
          className={`${delay ? 'pop-in' : 'hidden'} fixed top-[2vh] right-[2vw] z-[100] bg-dark-blue hover:bg-green-bg cursor-pointer rounded-md p-2 text-white`}
        >
          <RxCross1 size={15} />
        </div>
      </div>
      {flag && (
        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 darker z-[50]"></div>
      )}
    </div>
  );
}

export default MobileNavbar;
