import React from "react";

function Sidenav({ setSelectedMode, selectedMode, show }) {
  return (
    <div className="mt-4 w-[94%] md:w-[20%] mx-auto md:mx-0 flex justify-center">
      <div className=" w-full rounded-md overflow-hidden bg-primary  flex min-h-[100vh]">
        <div className=" w-full flex flex-col">
          <div className="flex-grow my-6">
            <ul className="space-y-2">
              <li
                className={`p-4 cursor-pointer ${
                  selectedMode === "dashboard"
                    ? "text-white purple-gradient rounded-lg"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedMode("dashboard")}
              >
                Dashboard
              </li>
              <li
                className={`p-4 cursor-pointer ${
                  selectedMode === "profile-info"
                    ? "text-white purple-gradient rounded-lg"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedMode("profile-info")}
              >
                Profile-Info
              </li>
              <li
                className={`p-4 cursor-pointer ${
                  selectedMode === "messages"
                    ? "text-white purple-gradient rounded-lg"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedMode("messages")}
              >
                Messages
              </li>
              <li
                className={`p-4 cursor-pointer ${
                  selectedMode === "privacy-policy"
                    ? "text-white purple-gradient rounded-lg"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedMode("privacy-policy")}
              >
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="p-4">
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
