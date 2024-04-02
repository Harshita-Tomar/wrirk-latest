import React from 'react'
import Image from 'next/image';
import { global } from 'styled-jsx/css'
// import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className='w-full h-20 pe-10 ps-7 py-3 flex items-center justify-between'>
        <Image className="rounded-full"  width={60} height={60} src="/Images/wrirkLogo.png" alt="image" />
        <div className='flex gap-7 items-center'>
            <a href="/" className='text-[#000000B2] hover:text-black'>Home</a>
            <a href="research" className='text-[#000000B2] hover:text-black'>Research</a>
            <a href="#" className='text-[#000000B2] hover:text-black'>Pricing</a>
            <a href="#" className='text-[#000000B2] hover:text-black'>Services</a>
            <a href="#" className='text-[#000000B2] hover:text-black'>Portfolio</a>
            <div className='h-9 border-s-[1px] border-[#000000B2] py-3 px-1'></div>
            <a href="#" className='hover:text-[#2E8095]'>Sign in</a>
            <a href="#" className='px-12 py-2 border-[1px] text-[#2E8095] border-[#2E8095] rounded-xl hover:bg-[#2E8095] hover:text-white'>Contact Us</a>
        </div>
      </div>

    </>
  )
}

export default Header
