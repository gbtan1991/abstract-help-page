import { Fade as Hamburger} from 'hamburger-react'
import React, {useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const HamburgerMenu = () => {
    const [isOpen, setOpen] = useState(false);
  return (
    <div className=''>
        <button onClick={() =>{
            setOpen(!isOpen);

        }}>
        <RxHamburgerMenu className='text-[26px]'/>
        </button>
      {/* <Hamburger size={23} toggled={isOpen} toggle={setOpen} className=""/> */}
    </div>
  )
}

export default HamburgerMenu
