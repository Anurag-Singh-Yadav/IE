'use client'
import Cookies from "js-cookie";
import { signOut } from "next-auth/react";

export const userSignout = () => {
    Cookies.remove("token");
    signOut();
};