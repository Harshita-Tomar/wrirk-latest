import React from 'react'
import Image from 'next/image';
import '@fontsource/mulish';
import { RiArrowRightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className='w-full bg-[#064454] 2xl:py-10 xl:py-10 lg:py-10 md:py-10 sm:py-6 py-6 2xl:px-20 xl:px-20 lg:px-20 md:px-10 sm:px-10 px-8 font-mulish'>
        <div className='grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 2xl:gap-10 xl:gap-10 lg:gap-10 md:gap-6 sm:gap-4 gap-4 items-start justify-start pt-6 pb-2'>

          <div>
            <Image className="ps-1" width={80} height={80} src="/Images/wrirkfootlogo.png" alt="image" />
            <p className='py-2 pe-5 ps-2 text-[14px] text-[#FFFFFF]'>Collaboration platform for modern teams.</p>
          </div>

          <div className='text-white'>
            <h1 className='p-2 font-bold tracking-widest'>COMPANY</h1>
            <ul className="flex-wrap justify-start inline-block font-thin text-[14px]">
              <li className="p-2"><a href="#" className="hover:text-zinc-400">Product</a></li>
              <li className="p-2"><a href="#" className="hover:text-zinc-400">Blog</a></li>
              <li className="p-2"><a href="#" className="hover:text-zinc-400">Support</a></li>
            </ul>
          </div>

          <div className='text-white'>
            <h1 className='p-2 font-bold tracking-widest'>FEATURES</h1>
            <ul className="flex-wrap justify-start inline-block font-thin text-[14px]">
              <li className="p-2"><a href="#" className="hover:text-zinc-400">Screen Sharing</a></li>
              <li className="p-2"><a href="#" className="hover:text-zinc-400">iOS & Android Apps</a></li>
              <li className="p-2"><a href="#" className="hover:text-zinc-400">File Sharing</a></li>
              <li className="p-2"><a href="#" className="hover:text-zinc-400">User Management</a></li>
            </ul>
          </div>

          <div className='text-white'>
            <h1 className='p-2 font-bold tracking-widest'>CONTACT US</h1>
            <ul className="flex-wrap justify-start inline-block font-thin text-[14px]">
              <li className="p-2"><a href="#" className="hover:text-zinc-400">info@wrirk.com</a></li>
              <li className="p-2"><p>TeamMP Research Work
                SM Tower Plot no.13, Saraswati kund, Near National Chamber, Masani Bypass Road, Mathura (U.P.)-281003</p></li>
            </ul>
          </div>

          <div className='text-white 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-1 col-span-1'>
            <h1 className='p-2 font-bold tracking-widest'>STAY UP TO DATE</h1>
            <ul className="flex-wrap justify-start inline-block font-thin w-full text-[14px]">
              <li className="p-2"><p>Subscribe to our newsletter.</p></li>
              <li className="p-2">
                <div className="flex">
                  <div className="mb-4 border-[1px] border-[#00000047] rounded-tl-md rounded-bl-md bg-white w-[90%] p-2">
                    <input type="email" id="email" name="email" className="form-input block   placeholder:font-medium placeholder:text-[#064454]" placeholder="Email" required />
                  </div>
                  <button type="button" className="rounded-tr-md rounded-br-md bg-white mb-4 mx-0 text-black py-0 px-2">
                  <RiArrowRightLine className='text-[26px] text-[#064454]' />
                  </button>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className='flex justify-start items-center gap-5 2xl:py-0 xl:py-0 lg:py-0 md:py-4 sm:py-4 py-4'>
          <a href="#"><Image className="ps-1" width={30} height={30} src="/Images/foot-facebook.png" alt="image" />
          </a>
          <a href="#"><Image className="ps-1" width={30} height={30} src="/Images/foot-linkedin.png" alt="image" />
          </a>
          <a href="#"><Image className="ps-1" width={30} height={30} src="/Images/foot-twitter.png" alt="image" />
          </a>
          <a href="#"><Image className="ps-1" width={30} height={30} src="/Images/foot-instagram.png" alt="image" />
          </a>
        </div>

        <div className='justify-end items-center 2xl:py-0 xl:py-0 lg:py-0 md:py-4 sm:py-4 py-4'>
          <p className='font-normal text-[14px] text-end text-[#FFFFFFB0]'>© 2023. Copyright Team MP Research Work Pvt. Ltd.
           <br/> -Powered by <a href="/" className='hover:text-white'>MP2IT</a> </p>
        </div>
      </div>
    </>
  )
}

export default Footer
