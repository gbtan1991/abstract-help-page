import { Link } from 'gatsby'
import React from 'react'

const HelpCenter = () => {
  return (
    <div className='font-theme-standard p-2 border-l-2'>
      <Link to="/index.js">
        <p className='text-[24px]/[23px] font-normal' >Help Center</p>
      </Link>
    </div>
  )
}

export default HelpCenter
