"use client";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import "./Login.css";
import {toggleSignPagePopup,setSignInBtn} from '../../GlobalRedux/Features/GlobalStateSlice';
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const isSignup = useSelector((state)=>{return state.GlobalState.isSignup});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className="fixed w-[100vw] left-0 top-0 z-50 h-[100vh] pop-up">
      <div className="fixed overflow-y-auto max-h-[100vh] rounded-lg top-3 border-t-green-bg border-t-[3px] left-0 right-0 sm:w-[70%] lg:w-[55%] w-full bg-white  sm:mx-auto py-2 z-30 border px-4 enlarge-in">
        <div className="py-3 flex justify-center font-sans font-medium">
          <span className="text-center">Please Sign-In To Continue</span>{" "}
          <AiOutlineCloseCircle
            className="cursor-pointer scale-150 absolute right-4 "
            onClick={() => {
              dispatch(toggleSignPagePopup());
            }}
          />
        </div>
        <div className="bg-white px-1 lg:px-6 py-3  rounded-sm">
          <div className="grid grid-cols-2 items-center cursor-pointer text-green-bg md:font-bold my-3">
            <div
              className={`border-2 text-center border-b-2  border-green-bg px-3 py-2 ${
                isSignup
                  ? " bg-green-bg text-white hover:bg-green-bg"
                  : "border-green-bg"
              }`}
              onClick={() => {
                dispatch(setSignInBtn(true));
              }}
            >
              Sign up
            </div>
            <div
              className={`border-2 text-center border-green-bg px-3 py-2 ${
                !isSignup
                  ? "bg-green-bg text-white hover:bg-green-bg"
                  : "border-2 border-green-bg"
              }`}
              onClick={() => {
                dispatch(setSignInBtn(false));
              }}
            >
              Sign In
            </div>
          </div>

          <p className="my-3 text-xl md:text-3xl font-serif font-semibold ">
            Get Started.
          </p>
          {isSignup && (
            <p className="my-3 text-normal md:text-xl">
              Already have an account?{" "}
              <button
                className="text-primarybtn italic font-bold hover:text-green-bg hover:underline font-serif"
                onClick={() => {
                  dispatch(setSignInBtn(false));
                }}
              >
                Sign in
              </button>
            </p>
          )}

          <div className="flex flex-wrap justify-around lg:flex-nowrap  items-center gap-2 lg:gap-3 font-semibold">
            <button
              className="flex gap-1 sm:gap-2 lg:gap-3 justify-between border-[1.5px] rounded-md border-black py-2 px-2 md:px-6 items-center"
              onClick={() => {
                signIn("google");
              }}
            >
              <FcGoogle />
              <span>Sign up with Google</span>
            </button>
            <button
              className="flex gap-1 sm:gap-2 lg:gap-4 justify-between border bg-slate-700 rounded-md text-white py-2 px-2 md:px-10 items-center"
              onClick={() => {
                signIn("github");
              }}
            >
              <FaGithub />
              <span>Sign up with Github</span>
            </button>
          </div>

          <div className="grid grid-cols-7 justify-center items-center my-3">
            <div className="h-[1px] col-span-3 bg-slate-700"></div>
            <div className="col-span-1 mx-auto">or</div>
            <div className="h-[1px] col-span-3  bg-slate-700"></div>
          </div>

          <form onSubmit={handleSubmit}>
            {isSignup && (
              <TextField
                fullWidth
                required
                label="User Name"
                variant="outlined"
                style={{ marginBottom: 10 }}
                name="userName" // Add the name attribute
                onChange={handleChange}
                autoComplete="username"
              />
            )}

            <TextField
              fullWidth
              required
              label="Email Address"
              variant="outlined"
              style={{ marginBottom: 10 }}
              name="email" // Add the name attribute
              onChange={handleChange}
              autoComplete="email"
            />

            <TextField
              fullWidth
              required
              label="Password"
              variant="outlined"
              style={{ marginBottom: 10 }}
              type="password" // Set input type to password
              name="password" // Add the name attribute
              autoComplete="new-password"
              onChange={handleChange}
            />

            {isSignup && (
              <TextField
                fullWidth
                required
                label="Confirm Password"
                variant="outlined"
                style={{ marginBottom: 10 }}
                type="password"
                autoComplete="new-password"
                name="confirmPassword"
                onChange={handleChange}
              />
            )}

            <div className="flex justify-center bg-green-bg py-2 px-4 text-white font font-bold items-center hover:bg-[#00b769] cursor-pointer transition-all duration-300">
              {isSignup ? (
                <button type="submit">Submit</button>
              ) : (
                <button type="submit">Sign In</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
