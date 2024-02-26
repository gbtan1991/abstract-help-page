import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import SearchBar from "./SearchBar";

const Search = () => {
  return (
    <div className=" block h-[88px] absolute left-0 top-0 right-0 z-10 p-[20px] bg-red-400 text-theme-black font-theme-lato border ">
      <div className="mx-0 my-auto w-full">
        <div className="flex items-center justify-between h-full">
          <SearchBar />
          <button>
            <IoCloseSharp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
