"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut, useSession } from "next-auth/react";

import Dropdown from "./Components/NavbarComponents/Dropdown";
import Login from "./Components/NavbarComponents/Login";
import "./globals.css";
import "./Navbar.css";
import MobileNavbar from "./Components/NavbarComponents/MobileNavbar";
import { FaBars } from "react-icons/fa";
import { dropdownData } from "./Components/NavbarComponents/NavbarData";
import {
  setLogin,
  toggleSignPagePopup,
  setSignInBtn,
} from "./GlobalRedux/Features/GlobalStateSlice";

import { FaCircleArrowUp } from "react-icons/fa6";
import Avatar from "react-avatar";
import Cookies from "js-cookie";
import Loader from "./Components/Loader";
import NavbarPopup from "./Components/NavbarComponents/NavbarPopup";
import axios from "axios";
function Navbar() {
  const [showLoader, setShowLoader] = useState(false);

  const dispatch = useDispatch();
  const { data: session, status } = useSession();

  const isLogin = useSelector((state) => {
    return state.GlobalState.isLogin;
  });
  const [details, setDetails] = useState({});

  const [showNavPopup, setShowNavPopup] = useState(false);

  const getResponse = async (token) => {
    setShowLoader(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_FETCH_USER_DETAILS}`,
        {
          token: token,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res?.data);

      if (res?.data?.success == true) {
        const { userHandle, avatar, email, name } = res.data;

        setDetails(prevDetails => ({
          ...prevDetails,
          userHandle,
          avatar,
          email,
          name,
        }));
        setShowLoader(false);
        return true;
      }
      setShowLoader(false);
      return false;
    } catch (err) {
      console.log("Following error occured while fetching user details: ", err);
      setShowLoader(false);
      return false;
    }
  };

  useEffect(() => {
    const storedCookie = Cookies.get("token");

    if (!details.avatar && storedCookie && getResponse(storedCookie)) {
      dispatch(setLogin(true));
    } else if (!details.avatar && session?.user?.interviewToken && getResponse(session.user.interviewToken)) {
      Cookies.set("token", session.user.interviewToken, { expires: 7 });
      dispatch(setLogin(true));
    }
    else Cookies.remove('token');
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
    <div>
      {showLoader && <Loader />}
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
        <p className="px-4 py-2 text-yellow-400   font-bold text-3xl">{a}</p>
        {/* Dropdowns */}
        <div className="gap-7 font-semibold hidden nmd:flex">
          {dropdownData.map((obj, index) => {
            return (
              <Dropdown label={obj.label} options={obj.options} key={index} />
            );
          })}
        </div>
        <div onClick={() => setNavBurger(!navBurger)} className="nmd:hidden">
          <FaBars size={25} />
        </div>

        {!isLogin ? (
          <div className="hidden nmd:flex items-center gap-6">
            <div>
              <button
                className="py-2 px-4 start-2  font-semibold rounded-md transition duration-300"
                onClick={() => {
                  setSignInBtn(false);
                  dispatch(toggleSignPagePopup());
                }}
              >
                Sign In
              </button>
            </div>
            <button
              className="py-2 px-4 text-white font-semibold rounded-lg btn-gradient-2 hidden sm:flex"
              onClick={() => {
                setSignInBtn(true);
                dispatch(toggleSignPagePopup());
              }}
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className="relative hidden nmd:flex items-center w-fit rounded-full">
            <Avatar
              name={details.name}
              src={details.avatar}
              size="50"
              round={true}
              onClick={() => {
                setShowNavPopup(!showNavPopup);
              }}
            ></Avatar>
            {showNavPopup && <NavbarPopup details={details} setShowNavPopup={setShowNavPopup}/>}
          </div>
        )}

        {flag && <Login></Login>}
      </div>
      <MobileNavbar navBurger={navBurger} details={details} setNavBurger={setNavBurger} />
    </div>
  );
}

export default Navbar;
