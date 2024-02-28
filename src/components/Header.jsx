import React from 'react'
import Logo from './logo'

import HamburgerButton from './HamburgerButton'
import AbstractLogo from "/images/abstract-logo.svg";
import MenuSearch from './MenuSearch';

const Header = () => {
  return (
    <div className='h-[88px] bg-theme-black px-[15px] flex items-center justify-between'>
      <Logo AbstractLogo={AbstractLogo}/>
      <div className='text-theme-white flex justify-evenly items-baseline gap-2'>
      <MenuSearch />
      <HamburgerButton />
      </div>
    </div>
  )
}

export default Header
