import React, { useState } from "react";

const Logo = ({AbstractLogo}) => {

  return (
    <div className="text-theme-white flex items-center">
      
        <img src={AbstractLogo} alt="abstract-logo" className="h-8 lg:h-9 " />
        <a href="/" className="text-2xl/3  font-medium font-theme-GT-American h-8  pl-[5px] ml-[2px] pt-3 border-l-2 lg:ml-2 lg:mt-1 lg:pt-2 lg:pl-4 ">
          Help Center
        </a>
      
      
    </div>
  );
};

export default Logo;
