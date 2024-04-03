"use client";
import React, { useEffect, useState } from "react";
import "./MobileNavbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import MobileNavbarContent from "./MobileNavbarContent";

function MobileNavbar({ navBurger, details , challenges }) {
  const [flag, setFlag] = useState(null);

  function handleScroll() {
    const scrollY = window.scrollY;
    const threshold = window.innerHeight * 0.1;
    let h = document.getElementById("popup");
    if (!h) return;
    if (scrollY > threshold) {
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

  useEffect(() => {
    const clickEvent = (e) => {
      const bars = document.getElementById("popup");
      const mContent = document.getElementById("mobile-navbar");

      if(!bars.contains(e.target) && !mContent.contains(e.target) && flag){
        setFlag(false);
      }
    };

    window.addEventListener("click", clickEvent);

    return () => {
      window.removeEventListener("click", clickEvent);
    };
  });

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
        className={`hidden hamburger font-semibold z-[30] hover:bg-dark-blue bg-green-bg cursor-pointer transition duration-300  rounded-md p-2 `}
      >
        <FaBars size={15} />
      </div>
      <div
        id="mobile-navbar"
        className={`mobile-navbar ${flag === true ? "slide-in-mobile" : ""} ${
          flag === false ? "slide-out-mobile" : ""
        } fixed  items-center right-0 top-0 bg-primary z-[100] h-[100vh]`}
      >
        <div
          onClick={() => {
            handleClick();
            setDelay(false);
          }}
          className={`${
            delay ? "pop-in" : "hidden"
          } fixed top-[2vh] right-[2vw] z-[100] hover:bg-dark-blue transition duration-300 bg-green-bg cursor-pointer rounded-md p-2 dark:text-black`}
        >
          <ImCross size={15} className="text-white"/>
        </div>
        <MobileNavbarContent handleClick={handleClick} details={details} challenges={challenges}/>
      </div>

      {flag && (
        <div className="w-[100vw] h-[100vh] fixed top-0 left-0 darker z-[50]"></div>
      )}
    </div>
  );
}

export default MobileNavbar;
