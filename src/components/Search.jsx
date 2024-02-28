import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import SearchBar from "./SearchBar";

const Search = ({ toggleSearch }) => {
  return (
    <div className="absolute top-0 left-0 w-full bg-theme-white h-[88px] z-10">
      <div className="h-full flex justify-between items-center gap-5 p-[20px]">
        <SearchBar />
        <button
          className="scale-150 cursor-pointer text-theme-black bg-transparent"
          onClick={toggleSearch}
        >
          <FaXmark />
        </button>
      </div>
    </div>
  );
};

export default Search;
