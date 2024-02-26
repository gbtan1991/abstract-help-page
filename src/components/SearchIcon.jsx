import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import Search from "./Search";


const SearchIcon = () => {
    const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div>
      {searchOpen && <Search />}
      <div className="flex items-center text-theme-white">
      <button onClick={() => setSearchOpen(!searchOpen)}>
        <FaSearch className="text-[24px]" />
        </button>
      </div>
    </div>
  )
}

export default SearchIcon
