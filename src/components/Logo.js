import React from "react";
import abstractLogo from "../images/abstract-logo.svg";

const Logo = () => {
  return (
    <div>
      <img src={abstractLogo} alt="abstract-logo" className="h-8"/>
    </div>
  );
};

export default Logo;