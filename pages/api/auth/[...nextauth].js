import axios from "axios";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
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
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "github" || account?.provider === "google") {
        try {
          const res = await axios.post('https://interveiw-express.onrender.com/ie/auto-login', {
            user,
          });
          interviewToken = res.data.token;
          return true;
        } catch (error) {
          console.error("Error occurred:", error);
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
