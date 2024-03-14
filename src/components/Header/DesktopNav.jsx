import React from 'react'



const DesktopNav = ({callToActionLinks}) => {
  return (
    <div className='flex flex-row pr-10 gap-3 '>
        
        {callToActionLinks.map((cta, index) => {
          return(
          <div key={index} className={`text-2xl/3 py-5 px-8 rounded-lg cursor-pointer ${index === 0 ? "bg-theme-black border border-theme-white" : "bg-theme-accent hover:text-theme-black hover:bg-theme-white transition-all ease-in"}`}>
            
          <a href="/">{cta.name}</a>

          </div>
            );
            
        })}
        
    </div>
  )
}

export default DesktopNav
