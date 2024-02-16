import React from 'react'
import Logo from './Logo'
import CallToAction from './CallToAction'
import HelpCenter from './HelpCenter'

const Header = () => {
  return (
    <div className='w-full h-11 bg-theme-black bg-theme'>
      <Logo />
      <HelpCenter />
      <CallToAction />
    </div>
  )
}

export default Header
