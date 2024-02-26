import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className="text-xl/8 border border-theme-black rounded-[4px]">
        <div className="px-4 py-2 w-full ">
        <input
          type="text"
          placeholder="Search"
          className=""
          
        />
      </div>
      </div>
    </div>
  );
};

export default SearchBar;
