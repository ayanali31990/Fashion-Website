import React from 'react'
import Video from './Video'

function HomeHeroText() {
  return (
    <div className='font-[font2] pt-5 text-center text-[#c2f230]'>
        <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>UNLOCK</div>

        <div className='text-[9.5vw] justify-center flex items-start uppercase leading-[8vw]'>THE
            <div className='h-[8vw] w-[16vw] rounded-full -mt-3 overflow-hidden'><Video/></div>
            NEW
        </div>

        <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>FASHION</div>
    </div>
  )
}

export default HomeHeroText