import { signOut } from "next-auth/react";
import React from "react";

function Sidenav({ setSelectedMode, selectedMode, setShow, same }) {
  return (
    <div className="sticky top-4 mt-4 w-[94%] md:w-[20%] mx-auto md:mx-0 flex justify-center">
      <div className="w-full rounded-md overflow-hidden flex min-h-[100vh]">
        <div className="w-full flex flex-col">
          <div className="flex-grow my-6">
            <ul className="space-y-2 font-semibold">
              <li
                className={`p-4 cursor-pointer ${
                  selectedMode === "dashboard" || !selectedMode
                    ? "text-white purple-gradient rounded-lg"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => {
                  setSelectedMode("dashboard");
                  setShow(true);
                }}
              >
                Dashboard
              </li>
              {same && (
                <li
                  className={`p-4 cursor-pointer ${
                    selectedMode === "profile-info"
                      ? "text-white purple-gradient rounded-lg"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedMode("profile-info");
                    setShow(true);
                  }}
                >
                  Profile-Info
                </li>
              )}
              {same && (
                <li
                  className={`p-4 cursor-pointer ${
                    selectedMode === "messages"
                      ? "text-white purple-gradient rounded-lg"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedMode("messages");
                    setShow(true);
                  }}
                >
                  Messages
                </li>
              )}
              {same && (
                <li
                  className={`p-4 cursor-pointer ${
                    selectedMode === "privacy-policy"
                      ? "text-white purple-gradient rounded-lg"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => {
                    setSelectedMode("privacy-policy");
                    setShow(true);
                  }}
                >
                  Privacy Policy
                </li>
              )}
            </ul>
          </div>
          <div className="p-4">
            <button onClick={() => {
                localStorage.removeItem("token");
                signOut();
            }} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
