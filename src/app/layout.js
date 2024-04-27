import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "./Navbar";
import { Providers } from "./GlobalRedux/Providers";
import { Analytics } from "@vercel/analytics/next"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from "./Footer";
import MyApp from "../../pages/_app";
import { ThemeProvider } from "./Components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "🚂Interview-Express",
  description: "Ace your interiews with Interview-Express :) ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MyApp>
            <Providers>
              <Navbar />
              {children}
              <Analytics />
              <SpeedInsights />
              <div className="gradiant-container pt-[1px]">
                {" "}
                <Footer />
              </div>
              <ToastContainer />
            </Providers>
          </MyApp>
        </ThemeProvider>
      </body>
    </html>
  );
}
