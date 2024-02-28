import React, {useState} from 'react'
import { IoMenu } from "react-icons/io5";
import MobileNav from './MobileNav';
const HamburgerButton = () => {
const [mnavOpen, ismnavOpen] = React.useState(false);

const toggleMnav = () => {
    ismnavOpen(!mnavOpen);
}



  return (
    <div>
      {mnavOpen && <MobileNav />}
      <button onClick={toggleMnav}>
      <IoMenu className='text-[24px] scale-125'/>
      </button>
    </div>
  )
}

export default HamburgerButton


