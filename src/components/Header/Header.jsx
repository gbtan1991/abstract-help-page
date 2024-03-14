import React, {useState} from 'react'
import Logo from './logo'

import HamburgerButton from './HamburgerButton'
import AbstractLogo from "/images/abstract-logo.svg";
import MenuSearch from './MenuSearch';
import DesktopNav from './DesktopNav';

const Header = () => {
  const [mnavOpen, ismnavOpen] = useState(false);

  const callToActionLinks = [
    { 
      name : "Submit a request",
      link : "/",
    },
    {
      name : "Sign In",
      link : "/",
    }
  ]






  return (
    <div className={`h-[88px] ${mnavOpen ? 'bg-theme-black' : 'bg-black'} px-[10px] pl-3 lg:px-[30px] grid place-content-center lg:block `}>
      <div className='flex items-center justify-around lg:justify-between lg:py-7 lg:px-16 gap-2'>
      <Logo AbstractLogo={AbstractLogo}/>
     
      <div className='text-theme-white flex items-center gap-2'>
      
      <div className='lg:hidden flex flex-row items-center '>
      <MenuSearch />
      <HamburgerButton mnavOpen={mnavOpen} ismnavOpen={ismnavOpen} callToActionLinks={callToActionLinks}/>
      </div>

      <div className='hidden lg:block'>
        <DesktopNav callToActionLinks={callToActionLinks} />
      </div>

      

      </div>
      </div>
    </div>
  )
}

export default Header
