import React from 'react'



const DesktopNav = ({callToActionLinks}) => {
  return (
    <div className='flex flex-row '>
        
        {callToActionLinks.map((cta, index) => {
          return(
          <div key={index} className={index === 0 ? "bg-theme-black text-2xl" : "bg-theme-accent text-2xl"}>
            
          <a href="/">{cta.name}</a>

          </div>
            );
            
        })}
        
    </div>
  )
}

export default DesktopNav
