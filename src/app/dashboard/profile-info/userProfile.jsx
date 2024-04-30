"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Avatar from "react-avatar";
import { FaCamera } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "@/app/GlobalRedux/Features/GlobalStateSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { validateUserHandle } from "@/app/fetchDetails/fetchUserDetails";

function UserProfile() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [flag, setflag] = useState(false);
  const [file, setFile] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [openUploadBox, setOpenUploadBox] = useState(false);

  const [valid, setValid] = useState(1);

  const userInfo = useSelector((state) => state.GlobalState.userDetails);

  const [updatedUserInfo, setUpdatedUserInfo] = useState({
    name: userInfo.name,
    email: userInfo.email,
    github: userInfo.github,
    linkedIn: userInfo.linkedIn,
    userHandle: userInfo.userHandle,
    avatar: userInfo.avatar,
  });

  useEffect(() => {
    setUpdatedUserInfo(userInfo);
  }, [userInfo]);

  const saveUserDetails = async () => {
    let obj = updatedUserInfo;
    try {
      const token = Cookies.get("token");
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GET_IMAGE_URL}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setAvatarUrl(res.data.location);
        obj = {
          ...updatedUserInfo,
          avatar: res.data.location,
        };
        setUpdatedUserInfo(obj);
      }

      const res1 = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_UPDATE_USER_DETAILS}`,
        {
          updatedUserInfo: obj,
          token,
        },
        {
          header: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setUserDetails(obj));

      router.push(`/dashboard/${obj.userHandle}`);

      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const validate = async (handle) => {
    try {
      const res = await validateUserHandle(handle);
      return res;
    } catch (err) {
      toast.error("Error while validating user");
      throw new Error(
        err.response?.data?.message || "Unknown error while validating user"
      );
    }
  };

  const handleUserHandleChange = async (e) => {
    const { value } = e.target;

    setUpdatedUserInfo({
      ...updatedUserInfo,
      userHandle: value,
    });
    if (e.target.value.length === 0) {
      setValid(2);
      return;
    }
    setValid(0);
    try {
      setTimeout(() => {
        if (value === e.target.value && value.length > 0)
          validate(value).then((res) => {
            if (res === true) {
              setValid(1);
            } else {
              setValid(-1);
            }
          });
      }, 800);
    } catch (err) {
      console.log(err);
      toast.error(err.message || "Error");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUserInfo({
      ...updatedUserInfo,
      [name]: value,
    });
  };

  return (
    <div className="overflow-x-auto">
      {openUploadBox && (
        <UploadAvatar
          setOpenUploadBox={setOpenUploadBox}
          setAvatarUrl={setAvatarUrl}
          avatarUrl={avatarUrl}
          handleInputChange={handleInputChange}
          avatar={updatedUserInfo.avatar}
          file={file}
          setFile={setFile}
        ></UploadAvatar>
      )}
      <div className="flex justify-start gap-5 items-center">
        <div className="text-center py-2 font-medium text-lg">
          Account Information
        </div>
        <div
          className="relative"
          onMouseEnter={() => setflag(true)}
          onMouseLeave={() => setflag(false)}
        >
          <Avatar
            name={userInfo.name}
            src={avatarUrl || userInfo.avatar}
            size="70"
            round={true}
            className="mx-auto cursor-pointer border transition-all duration-300 hover:border-green-bg"
          />
          <div
            className={`absolute top-0 left-0 z-[10] h-full flex justify-center items-center w-full bg-gray-200 bg-opacity-[0.1] rounded-full backdrop-filter backdrop-blur-sm  ${
              flag ? "opacity-1" : "opacity-0"
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setOpenUploadBox(true)}
          >
            <FaCamera size={25} />
          </div>
        </div>
      </div>
      {updatedUserInfo && (
        <div className="flex flex-col gap-5 capitalize my-2">
          <div className="relative">
            <TextField
              id={"userHandle"}
              fullWidth
              label={"userHandle"}
              value={updatedUserInfo.userHandle}
              variant="outlined"
              style={{ marginBottom: 10 }}
              name={"userHandle"}
              autoComplete={"userHandle"}
              onChange={handleUserHandleChange}
            />
            {valid === 0 && (
              <div className="absolute right-2 top-2">
                <div className="">
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            )}
            {valid === 1 && (
              <FaCheckCircle
                size={20}
                className="text-green-bg absolute top-4 right-2"
              />
            )}
            {valid === -1 && (
              <>
                <RxCross2
                  size={20}
                  className="text-red-500 absolute top-4 right-2"
                />
                <p className="text-gray-400 text-xs">
                  User handle already taken
                </p>
              </>
            )}
          </div>
          {data.map((item, index) => (
            <TextField
            id={item}
            fullWidth
            label={item}
            InputProps={{
              readOnly: item === 'email', // Set readOnly to true only if item is 'email'
            }}
            value={updatedUserInfo[item]}
            variant="outlined"
            style={{ marginBottom: 10 }}
            name={item}
            autoComplete={item}
            onChange={handleInputChange}
            key={index}
          />
          ))}
        </div>
      )}
      <div
        className="cursor-pointer btn-gradient-2 text-white py-2 px-3 rounded-md text-center"
        onClick={() => {
          if (valid === 1) saveUserDetails();
          else toast.error("Userhandle check failed");
        }}
      >
        Save Details
      </div>
    </div>
  );
}

const data = ["name", "email", "github", "linkedIn"];

function UploadAvatar({
  setOpenUploadBox,
  avatarUrl,
  setAvatarUrl,
  avatar,
  setFile,
}) {
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setAvatarUrl(URL.createObjectURL(file));
  };

  useEffect(() => {}, []);

  return (
    <div className="fixed w-[100vw] dark:text-white left-0 top-0 z-50 h-[100vh] pop-up">
      <div className="fixed overflow-y-auto max-h-[100vh] mx-auto rounded-lg top-[20vh] border-t-green-bg border-t-[3px] left-0 right-0 w-[90%] sm:w-[70%] lg:w-[45%] bg-primary sm:mx-auto py-2 z-30 border px-4 enlarge-in">
        <div className="flex justify-end items-center">
          <RxCross2
            size={20}
            className=" cursor-pointer text-green-bg"
            onClick={() => setOpenUploadBox(false)}
          />
        </div>
        <div className=" capitalize pb-2 text-center font-bold text-base sm:text-lg">
          Upload New Avatar
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <Avatar src={avatarUrl || avatar} alt="avatar" />
          <input name="avatar" type="file" onChange={handleAvatarChange} />
        </div>

        <div className="flex justify-center items-center">
          <div
            className="text-center cursor-pointer p-2 w-fit my-2 rounded-md btn-gradient-2"
            onClick={() => setOpenUploadBox(false)}
          >
            Save
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
