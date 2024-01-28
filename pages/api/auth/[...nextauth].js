// 'use client'
import axios from "axios";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Cookies from "js-cookie";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      console.log("user", user);
      console.log("provider", account);
      if (account?.provider === "github") {
        try {
          const res = await axios.post("http://localhost:4000/ie/auto-login", {
            user,
          });
          Cookies.set("token", res.token, { expires: 7 });
          console.log("Response", res.data);
          return true;
        } catch (error) {
          console.error("Error occurred:", error);
          return false;
        }
      }

      if (account?.provider == "google") {
        try {
          const res = await axios.post("http://localhost:4000/ie/auto-login", {
            user,
          });
          console.log("Response", res.data);
          Cookies.set("token", res.token, { expires: 7 });
          return true;
        } catch (error) {
          console.error("Error occurred:", error);
          return false;
        }
      }
      return false;
    },
  },
};

export default NextAuth(authOptions);
