import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import Search from "./Search";


const MenuSearch = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    
    const toggleSearch = () => {
      setSearchOpen(!searchOpen);
    }

  return (
    <div>
      {searchOpen && <Search toggleSearch={toggleSearch} />}
      <div className="flex items-center text-theme-white">
      <button onClick={toggleSearch}>
        <FaSearch className={searchOpen ? "scale-150 -z-10" : "scale-100 text-[24px]"} />
        </button>
      </div>
    </div>
  )
}

export default MenuSearch
