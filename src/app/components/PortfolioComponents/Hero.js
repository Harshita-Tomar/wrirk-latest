import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className='bg-[#064454] w-full mb-10 flex items-center justify-center'>
        
      <Image  width={900} height={500} src="/Images/portfolio-img.png" alt="image" />
      </div>
    </>
  )
}

export default Hero
