import React from 'react'
import Logo from './logo'
import SearchIcon from './SearchIcon'
import HamburgerMenu from './HamburgerMenu'
import AbstractLogo from "/images/abstract-logo.svg";

const Header = () => {
  return (
    <div className='h-[88px] bg-theme-black px-[15px] flex items-center justify-between'>
      <Logo AbstractLogo={AbstractLogo}/>
      <div className='text-theme-white flex justify-evenly items-baseline gap-2 '>
      <SearchIcon />
      <HamburgerMenu />
      </div>
    </div>
  )
}

export default Header
