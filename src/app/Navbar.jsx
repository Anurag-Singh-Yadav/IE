"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { fetchUserDetails } from "./fetchDetails/fetchUserDetails";
import Dropdown from "./Components/NavbarComponents/Dropdown";
import Login from "./Components/NavbarComponents/Login";
import "./globals.css";
import "./Navbar.css";
import MobileNavbar from "./Components/NavbarComponents/MobileNavbar";
import { FaBars } from "react-icons/fa";
import { dropdownData, links } from "./Components/NavbarComponents/NavbarData";
import {
  setLogin,
  toggleSignPagePopup,
  setSignInBtn,
  setUserDetails,
  toggleLight,
} from "./GlobalRedux/Features/GlobalStateSlice";

import { FaCircleArrowUp } from "react-icons/fa6";
import Avatar from "react-avatar";
import Cookies from "js-cookie";
import NavbarPopup from "./Components/NavbarComponents/NavbarPopup";
import axios from "axios";
import Link from "next/link";
import ToggleTheme from "./Components/ToggleTheme";
function Navbar() {
  const [showLoader, setShowLoader] = useState(false);

  const [challenges, setChallenges] = useState(null);

  const dispatch = useDispatch();
  const { data: session, status } = useSession();

  const isLogin = useSelector((state) => {
    return state.GlobalState.isLogin;
  });
  const [details, setDetails] = useState({});

  const [showNavPopup, setShowNavPopup] = useState(false);

  useEffect(() => {
    const mode = window.localStorage.getItem("theme");
    if(mode === 'dark'){
      console.log('Hehehe');
      dispatch(toggleLight(false));
    }
  } , []);

  const getResponse = async (token) => {
    setShowLoader(true);
    try {
      const res = await fetchUserDetails(token);
      if (res?.data?.success == true) {
        const { userHandle, avatar, email, name } = res.data;

        setDetails((prevDetails) => ({
          ...prevDetails,
          userHandle,
          avatar,
          email,
          name,
        }));
        setShowLoader(false);
        dispatch(setLogin(true));
        dispatch(setUserDetails(res.data));
      }
      setShowLoader(false);
    } catch (err) {
      console.log("Following error occured while fetching user details: ", err);
      setShowLoader(false);
    }
  };

  useEffect(() => {
    const fetchAllChallenges = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_ALL_CHALLENGES}`
        );
        setChallenges(res.data?.data);
      } catch (err) {}
    };

    if (!challenges) fetchAllChallenges();
  }, []);

  useEffect(() => {
    const storedCookie = Cookies.get("token");

    if (!details.avatar && storedCookie) {
      getResponse(storedCookie);
    } else if (!details.avatar && session?.user?.interviewToken) {
      Cookies.set("token", session.user.interviewToken, { expires: 7 });
      getResponse(session.user.interviewToken);
    }
  }, [session]);

  const isSignup = useSelector((state) => {
    return state.GlobalState.isSignup;
  });

  const flag = useSelector((state) => {
    return state.GlobalState.isSignPagePopup;
  });
  let a = "</IE>";

  const [navBurger, setNavBurger] = useState(false);

  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showThreshold = 300;
    setShowBackToTop(scrollY > showThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-container bg-primary border-b">
      {/* {showLoader && <Loader />} */}
      <div
        className={`fixed bottom-4 bg-white rounded-full w-fit z-10 right-2 cursor-pointer text-dark-blue hover:text-green-bg transition-all duration-300 back-to-top ${
          showBackToTop ? "rotate-in" : "rotate-out"
        }`}
        title="Back to top"
        onClick={scrollToTop}
      >
        <FaCircleArrowUp size={40} />
      </div>
      <div className="flex justify-between h-[10vh] items-center">
        <Link
          href={"/"}
          className="px-4 py-2 text-yellow-400   font-bold text-3xl"
        >
          {a}
        </Link>
        {/* Dropdowns */}
        <div className="gap-7 font-semibold hidden nmd:flex items-center ">
          {dropdownData.map((obj, index) => {
            return (
              <div key={index}>
                {obj.label !== "Challenges" && (
                  <Dropdown label={obj.label} options={obj.options} />
                )}
                {obj.label === "Challenges" && (
                  <Dropdown label={obj.label} options={challenges} />
                )}
              </div>
            );
          })}
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={`/${link.value}`}
                className="border-b-2 border-white hover:border-green-bg hover:text-green-bg transition duration-300"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div onClick={() => setNavBurger(!navBurger)} className="nmd:hidden">
          <FaBars size={25} />
        </div>

        {!isLogin ? (
          <div className="hidden nmd:flex items-center gap-6">
            <ToggleTheme/>
            <div>
              <button
                className="py-2 px-4 start-2  font-semibold rounded-md transition duration-300"
                onClick={() => {
                  dispatch(setSignInBtn(false));
                  dispatch(toggleSignPagePopup());
                }}
              >
                Sign In
              </button>
            </div>
            <button
              className="py-2 px-4 text-white font-semibold rounded-lg btn-gradient-2 hidden sm:flex"
              onClick={() => {
                dispatch(setSignInBtn(true));
                dispatch(toggleSignPagePopup());
              }}
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className="relative hidden nmd:flex gap-7 items-center w-fit rounded-full">
            <ToggleTheme/>
            <Avatar
              name={details.name}
              src={details.avatar}
              size="50"
              round={true}
              onClick={() => {
                setShowNavPopup(!showNavPopup);
              }}
              className="cursor-pointer"
            ></Avatar>
            {showNavPopup && (
              <NavbarPopup
                details={details}
                setShowNavPopup={setShowNavPopup}
              />
            )}
          </div>
        )}

        {flag && <Login></Login>}
      </div>
      <MobileNavbar
        navBurger={navBurger}
        details={details}
        setNavBurger={setNavBurger}
        challenges={challenges}
      />
    </div>
  );
}

export default Navbar;
