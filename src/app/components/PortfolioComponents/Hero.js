import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className='bg-[#064454] w-full 2xl:mb-10 xl:mb-10 lg:mb-10 md:mb-4 sm:mb-2 mb-2 flex items-center justify-center'>        
      <Image  width={900} height={400} src="/Images/portfolio-img.jpg" alt="image" />
      </div>
    </>
  )
}

export default Hero
