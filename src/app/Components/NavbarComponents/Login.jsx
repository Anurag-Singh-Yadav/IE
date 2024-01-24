"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import "./signup.css";


function Login({ setSignInBtn }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSignup, setIsgnup] = useState(true);

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
    <div className="sm:w-[70%] lg:w-[55%] w-full bg-[#e9ecef] sm:mx-auto mx-2 py-2 z-20 border px-4 relative">
      <div className="py-3 flex justify-center font-sans font-medium">
        <span className=" text-center">Please Sign-In To Continue</span>{" "}
        <AiOutlineCloseCircle
          className="cursor-pointer scale-150 absolute right-4 "
          onClick={() => setSignInBtn(false)}
        />{" "}
      </div>
      <div className="bg-white px-1 lg:px-6 py-3  rounded-sm">
        <div className="grid grid-cols-2 items-center cursor-pointer text-[#5739b0] md:font-bold my-3">
          <div
            className={`border-t-2 border-l-2 text-center border-b-2  border-l-[#5f3dc4] border-t-[#5f3dc4] px-3 py-2 ${
              isSignup
                ? "border-b-white bg-[#886fd4] text-white hover:bg-[#473382]"
                : "border-b-[#5f3dc4]"
            }`}
            onClick={() => {
              setIsgnup(true);
            }}
          >
            Sign up
          </div>
          <div
            className={`border-t-2 border-b-2 text-center border-r-2 border-t-[#5f3dc4] border-r-[#5f3dc4] px-3 py-2 ${
              !isSignup
                ? "border-b-white bg-[#886fd4] text-white hover:bg-[#473382]"
                : "border-b-2 border-b-[#5f3dc4]"
            }`}
            onClick={() => {
              setIsgnup(false);
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
            <button className="text-primarybtn italic font-bold hover:text-[#7A0BC0] hover:underline font-serif" onClick={()=>{setIsgnup(false);}}>
              Sign in
            </button>
          </p>
        )}

        <div className="flex flex-wrap justify-around lg:flex-nowrap  items-center gap-2 lg:gap-3 font-semibold">
          <button className="flex gap-1 sm:gap-2 lg:gap-3 justify-between border-[1.5px] rounded-md border-black py-2 px-2 md:px-6 items-center" onClick={()=>{signIn('google')}}>
            <FcGoogle />
            <span>Sign up with Google</span>
          </button>
          <button className="flex gap-1 sm:gap-2 lg:gap-4 justify-between border bg-slate-700 rounded-md text-white py-2 px-2 md:px-10 items-center" onClick={()=>{signIn('github')}}>
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

          <div className="flex justify-center bg-[#886fd4] py-2 px-4 text-white font font-bold items-center hover:bg-[#473382]">
            {
              isSignup ? (<button type="submit">Submit</button>) : (<button type="submit">Sign In</button>)
            }
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
