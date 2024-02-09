import { Inter } from "next/font/google";
import Navigator from "./Navigator";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "🚂Interview-Express",
  description: "Ace your interiews with Interview-Express :) ",
};
export default function AppLayout({
  children,
  navigator,
  data,
  setNavBarClick,
  navBarClick,
  activeBar,
  activeSubTopics,
}) {
  return (
    <div>
      <div className="relative flex">
        <div className="min-w-[25vw] sticky h-[100vh] pl-2 pr-1 py-4 border-2 overflow-y-auto top-0 left-0">
          {navigator && (
            <Navigator
              navigator={navigator}
              setNavBarClick={setNavBarClick}
              navBarClick={navBarClick}
              activeBar={activeBar}
              activeSubTopics={activeSubTopics}
            ></Navigator>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
