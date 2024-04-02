import React from 'react'
import Image from 'next/image';

const TestimonialCards = () => {
  return (
    <>
      <div className='2xl:rounded-lg xl:rounded-lg lg:rounded-lg md:rounded-[20px] sm:rounded-[20px] rounded-[20px] bg-white 2xl:px-8 xl:px-8 lg:px-8 md:px-4 sm:px-4 px-4 2xl:py-10 xl:py-10 lg:py-10 md:py-6 sm:py-4 py-4'>
        <Image className="ps-1" width={100} height={100} src="/Images/linkedin.png" alt="image" />
        <p className='text-[14px] font-thin text-[#514F6E] py-5 leading-[30px]'>It works really wonders in the hybrid culture. No echo and seamless integration with the current workflow. Love this application.</p>
        <div className='flex gap-5'>
          <div>
            <Image className="ps-1" width={50} height={50} src="/Images/linkedprofile.png" alt="image" />
          </div>
          <div>
            <h2 className='font-semibold text-[14px]'>Beth Wilson</h2>
            <p className='text-[#6F6C90] font-normal text-[14px]'>Product Manager at LinkedIn</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialCards
