import React from 'react'

const MobileNav = ({callToActionLinks}) => {
  
  return (
    <div className='w-full h-[201px] absolute left-0 top-[88px]  bg-theme-black grid place-content-center border-t-[1px] border-theme-white border-opacity-50'>
      <div className='flex flex-col items-center text-2xl px-4 py-8'>
        {callToActionLinks.map((cta, index) => (
          <div key={index}>
            <a href={cta.link}><h3 className={index === 0 ? `my-0 mx-4 py-4 border-b-[1px] border-theme-white border-opacity-50` : `my-0 mx-4 py-4`}>{cta.name}</h3></a>
          </div>

        ))}
        
      
      </div>
    </div>
  )
}

export default MobileNav
