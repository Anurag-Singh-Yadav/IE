'use client'
import { SessionProvider } from "next-auth/react";

const MyApp = ({children})=>{
  return <SessionProvider>{children}</SessionProvider>
}

MyApp.displayName = 'MyApp';

export default MyApp;