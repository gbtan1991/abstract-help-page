import React from 'react'
import HeroSearch from './HeroSearch'

const Hero = () => {
  return (
    <div className='w-screen h-[351px] bg-theme-neutral grid place-content-center'>
        <div className='flex flex-col w-full bg-red-200'>
          <h2>How can we help?</h2>
          <HeroSearch />
        </div>

    </div>
  )
}

export default Hero
