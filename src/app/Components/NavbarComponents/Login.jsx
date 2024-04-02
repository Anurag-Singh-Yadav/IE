"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Box from "@mui/material/Box";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./Login.css";
import {
  toggleSignPagePopup,
  setSignInBtn,
} from "../../GlobalRedux/Features/GlobalStateSlice";
import axios from "axios";
import { handleSubmit } from "@/app/fetchDetails/credentialLogin";

function Login() {

  const { data: session, status } = useSession();


  useEffect(() => {
    if(session){
      console.log(session);
    }

  } , [session]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [linkSend, setLinkSend] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const isSignup = useSelector((state) => {
    return state.GlobalState.isSignup;
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [isClick, setIsClick] = useState(false);

  const loginHandler = async (e) => {
    try{
      e.preventDefault();
      const result = await signIn('credentials',{
        redirect: false,
        email: formData.email,
        password: formData.password,
        callbackUrl: '/',
      });
      console.log('Result = ' , result);
      if(result.error){
        alert(result.error);
      }
      else{
        window.location.reload();
      }
    }catch(err){
      
    }
  }

  const signUpHandler = async (e) => {
    console.log('signUpHandler')
    setIsClick(true);
    try {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        setIsClick(false);
        alert("Passwords do not match");
        return;
      }
      await handleSubmit(formData , 1);
      setLinkSend(true);
    } catch (e) {
      console.error(e);
    }
    finally {
      setIsClick(false);
    }
  }

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
          <form>
            {isSignup && (
              <TextField
                id="outlined-basic"
                fullWidth
                required
                label="User Name"
                variant="outlined"
                style={{ marginBottom: 10 }}
                name="userHandle"
                onChange={handleChange}
                autoComplete="userHandle"
              />
            )}

            <TextField
              fullWidth
              required
              label="Email Address"
              variant="outlined"
              style={{ marginBottom: 10 , outline:'none' }}
              name="email" // Add the name attribute
              onChange={handleChange}
              onFocus={(e) => e.target.style.border = 'none'}
              autoComplete="email"
            />

            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <FormControl
                variant="outlined"
                className="w-full"
                style={{ marginBottom: 10 }}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  name="password"
                  onChange={handleChange}
                />
              </FormControl>
            </Box>

            {isSignup && (
              <FormControl
                variant="outlined"
                className="w-full"
                style={{ marginBottom: 10 }}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                  name="confirmPassword"
                  onChange={handleChange}
                />
              </FormControl>
            )}

            {!linkSend ? (
              <>
                {isSignup && (
                  <button
                    className={`flex w-full justify-center bg-green-bg py-2 px-4 text-white font font-bold items-center hover:bg-[#00b769] transition-all duration-300 ${
                      isClick ? " cursor-wait" : " cursor-pointer"
                    }`}
                    disabled={isClick}
                    onClick={signUpHandler}
                  >
                    Submit
                  </button>
                )}
                {!isSignup && (
                  <button
                    className={`flex w-full justify-center bg-green-bg py-2 px-4 text-white font font-bold items-center hover:bg-[#00b769] transition-all duration-300 ${
                      isClick ? " cursor-wait" : " cursor-pointer"
                    }`}
                    disabled={isClick}
                    onClick={loginHandler}
                  >
                    Sign In
                  </button>
                )}
              </>
            ) : (
              <div
                className={`flex justify-center bg-green-bg py-2 px-4 text-white font font-bold items-center hover:bg-[#00b769] transition-all duration-300 `}
              >
                Verification link sent to your email
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
