"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';

export default function withAuth(Component) {
  return function WithAuth(props) {
    const [flag, setFlag] = useState(null);
    const router = useRouter();

    useEffect(() => {
      verifyAdmin();
    }, []);

    const verifyAdmin = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          throw new Error("Authentication token not found");
        }

        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_ADMIN_URL}${process.env.NEXT_PUBLIC_VERIFY_ADMIN}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFlag(true);
      } catch (error) {
        console.error("Authentication failed:", error.message);
        setFlag(false);
        router.push('/'); // Redirect to home page
      }
    };

    if (flag) {
      return <Component {...props}></Component>;
    } else {
      return null;
    }
  };
}
