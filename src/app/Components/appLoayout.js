import { Inter } from "next/font/google";
import Navigator from "./Navigator";
import { useEffect, useRef, useState } from "react";
import "./navigator.css";
import { MdOutlineDoubleArrow } from "react-icons/md";
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
  const [showBurger, setShowBurger] = useState(false);

  const navigatorRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      const navigatorDiv = document.getElementById("navigator");
      setShowBurger((window.innerWidth < 1000));
      if (navigatorDiv) {
        if (window.innerWidth < 1000) {
          navigatorDiv.classList.add("navigator");
        } else {
          navigatorDiv.classList.remove("navigator");
          navigatorDiv.classList.remove("slide-left");
          navigatorDiv.classList.remove("slide-right");
        }
      }
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  

  useEffect(() => {
    const handleClick = (e) => {
      let b = document.getElementById('navigator')
      let a = document.getElementById('article-burger');
      if(!a)return;
      if(!b.contains(e.target) && !a.contains(e.target)){
          b.classList.add('slide-left')
          b.classList.remove('slide-right')
      }
    }
    document.addEventListener('click' , handleClick)
    return () => {
        document.removeEventListener('click' , handleClick);
    }
  } , [])

  const clickHandle = () => {
    const a = document.getElementById('navigator');
    if (a.classList.contains('slide-right')) {
      a.classList.remove('slide-right');
      a.classList.add('slide-left');
    }else{
      a.classList.remove('slide-left');
      a.classList.add('slide-right');
    }
  }

  return (
    <div>
      {showBurger && (
        <div id="article-burger" className="fixed top-2 left-2 z-[15] p-1 rounded-full overflow-hidden bg-green-bg text-white" onClick={clickHandle} ref={navigatorRef}>
          <MdOutlineDoubleArrow size={20}/>
        </div>
      )}
      <div className="relative flex min-h-[100vh]">
        <div
          id="navigator"
          className="min-w-[25vw] fixed nmd:sticky h-[100vh] pl-2 pr-1 py-4 box-shadow overflow-y-auto top-0 left-0 bg-white z-[16]"
        >
          {navigator && (
            <Navigator
              navigator={navigator}
              setNavBarClick={setNavBarClick}
              navBarClick={navBarClick}
              activeBar={activeBar}
              activeSubTopics={activeSubTopics}
              clickHandle={clickHandle}
              showBurger={showBurger}
            ></Navigator>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
