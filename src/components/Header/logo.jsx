import React, { useState } from "react";

const Logo = ({AbstractLogo}) => {

  return (
    <div className="text-theme-white flex items-center">
      
        <img src={AbstractLogo} alt="abstract-logo" className="h-8" />
        <h3 className="text-2xl font-medium font-theme-lato h-8 pb-[2px] pl-[5px] ml-[2px] border-l-2">
          Help Center
        </h3>
      
      
    </div>
  );
};

export default Logo;
