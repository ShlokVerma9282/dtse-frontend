import React from "react";
import {
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 ">
      <SearchBar />
      <div className="flex items-center space-x-4 w-1/2 justify-end gap-4">
        <button className="relative p-2 rounded-lg bg-[#FBD9EA]">
          <BellIcon className="h-6 w-6 text-[#E20074]" />
          <span className="text-[7px] absolute -top-1 right-0 flex items-center justify-center h-4 w-4 bg-[#E20074] text-white rounded-full">
            21
          </span>
        </button>
        <button className="relative p-2 rounded-lg bg-[#FBD9EA]">
          <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-[#E20074]" />
          <span className="text-[7px] absolute -top-1 right-0 flex items-center justify-center h-4 w-4 bg-[#E20074] text-white rounded-full">
            53
          </span>
        </button>
        <button className="relative p-2 rounded-lg bg-[#FBD9EA]">
          <Cog8ToothIcon className="h-6 w-6 text-[#E20074]" />
        </button>
        <div className="border-l-2 border-l-[#D0D6DE] h-8 "></div>
        <div className="flex items-center space-x-2">
          <span className="font-medium">Hello, Thomas</span>
          <img
            src="/images/user-profile.png"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
