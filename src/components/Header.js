import React from 'react'
import Logo from './Logo'
import CallToAction from './CallToAction'
import HelpCenter from './HelpCenter'

const Header = () => {
  return (
    <div className='w-full h-[88px] bg-theme-black font-bold text-theme-white px-4 '>
      <div className='flex flex-wrap justify-between'>
      <div className='flex items-center'>
      <Logo />
      <HelpCenter />
      </div>
      <div>
        <CallToAction />
      </div>
      
      </div>
    </div>
  )
}

export default Header
