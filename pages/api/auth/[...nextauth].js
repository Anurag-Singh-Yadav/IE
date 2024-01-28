// 'use client'
import axios from "axios";
import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn(user, account) {
      const res = await axios.post('http://localhost:4000/ie/auto-login' , {
        email: user.user.email,
      })
      return true;
    }
  },
}

export default NextAuth(authOptions)