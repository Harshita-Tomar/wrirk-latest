import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div className='w-full h-20 px-6 py-3 flex items-center justify-between'>
        <Image className="rounded-full" width={60} height={60} src="/Images/wrirkLogo.png" alt="image" />
        <div className='hidden lg:flex gap-7 items-center'>
          <a href="/" className='text-[#000000B2] hover:text-black'>Home</a>
          <a href="/research" className='text-[#000000B2] hover:text-black'>Research</a>
          <a href="/Pricing" className='text-[#000000B2] hover:text-black'>Pricing</a>
          <a href="/service" className='text-[#000000B2] hover:text-black'>Services</a>
          <a href="/Portfolio" className='text-[#000000B2] hover:text-black'>Portfolio</a>
          <div className='h-9 border-s-[1px] border-[#000000B2] py-3 px-1'></div>
          <a href="/Pricing/AdmissionProposal" className='hover:text-[#2E8095]'>Sign in</a>
          <a href="#" className='px-12 py-2 border-[1px] text-[#2E8095] border-[#2E8095] rounded-xl hover:bg-[#2E8095] hover:text-white'>Contact Us</a>
        </div>
        <div className='2xl:hidden xl:hidden lg:hidden md:flex sm:flex flex items-center'>
          <button className='text-[#000000B2] hover:text-black'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <div className='2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden gap-7 items-center'>
            <a href="#" className='hover:text-[#2E8095]'>Sign in</a>
            <a href="#" className='px-4 py-2 border-[1px] text-[#2E8095] border-[#2E8095] rounded-xl hover:bg-[#2E8095] hover:text-white'>Contact Us</a>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header
