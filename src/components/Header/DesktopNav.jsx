import React from 'react'
import CTAButton from './CTAButton'


const DesktopNav = ({callToActionLinks}) => {
  return (
    <div className='flex flex-row '>
        {callToActionLinks.map((cta, index) => {
            <a href={cta.link}><CTAButton /></a>
        })}
        
    </div>
  )
}

export default DesktopNav
