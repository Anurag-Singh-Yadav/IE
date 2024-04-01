import axios from "axios";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import Credentials from 'next-auth/providers/credentials';

var interviewToken;
const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { type: "email" },
        password: { labtype: "password" },
      },
      async authorize(credentials) {
        // console.log('********* ' , credentials);
        try {
          // const res = await axios.post(`${process.env.BASE_URL}${process.env.AUTO_LOGIN}`, {
          //   email: credentials.email,
          //   password: credentials.password,
          // });
          // interviewToken = res.data.token;
          if(credentials.email && credentials.password){
            return credentials;
          }
          else {
            console.log('Error while authorizinggggg');
            return null;
          }
        } catch (error) {
          console.log('Error while authorizing');
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "github" || account?.provider === "google" || account?.provider === "credentials") {
        try {
          const res = await axios.post(`${process.env.BASE_URL}${process.env.AUTO_LOGIN}`, {
            user,
          });
          interviewToken = res.data.token;
          return true;
        } catch (error) {
          return false;
        }
      }
      return false;
    },
    session({ session }) {
      if (session) {
        session.user.interviewToken = interviewToken;
      }
      return session;
    },
  },
};


export default NextAuth(authOptions);
