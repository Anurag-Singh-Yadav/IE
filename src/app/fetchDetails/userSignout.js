'use client'
import Cookies from "js-cookie";
import { setLogin } from "@/app/GlobalRedux/Features/GlobalStateSlice";
import { signOut } from "next-auth/react";
import { useDispatch } from "react-redux";

export const userSignout = () => {
    const dispatch = useDispatch();
    Cookies.remove("token");
    dispatch(setLogin(false));
    signOut();
};