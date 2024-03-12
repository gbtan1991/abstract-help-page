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
    <div className={`h-[88px] ${mnavOpen ? 'bg-theme-black' : 'bg-black'} px-[10px] flex items-center justify-between`}>
      <Logo AbstractLogo={AbstractLogo}/>
      <div className='text-theme-white flex justify-evenly items-center gap-2'>
      
      <div className='lg:hidden flex flex-row items-center'>
      <MenuSearch />
      <HamburgerButton mnavOpen={mnavOpen} ismnavOpen={ismnavOpen} callToActionLinks={callToActionLinks}/>
      </div>

      <div className='hidden lg:block'>
        <DesktopNav callToActionLinks={callToActionLinks} />
      </div>

      


      </div>
    </div>
  )
}

export default Header
