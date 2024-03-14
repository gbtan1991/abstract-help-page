import React, {useState} from 'react'

import MobileNav from './MobileNav';
import { Turn as Hamburger } from 'hamburger-react'

const HamburgerButton = ({ismnavOpen, mnavOpen, callToActionLinks }) => {

  const toggleMnav = () => {
    ismnavOpen(!mnavOpen);
}


  return (
    <div>
      {mnavOpen && <MobileNav  callToActionLinks={callToActionLinks}/>}
      <button onClick={toggleMnav}>
      <Hamburger toggled={mnavOpen} toggle={ismnavOpen} size={23} />
      </button>
    </div>
  )
}

export default HamburgerButton


