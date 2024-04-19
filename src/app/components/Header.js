"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [showdata, setShowdata] = useState(false);
  const changeShowhandler = () => {
    setShowdata(true)
  }

  const changeHidehandler = () => {
    setShowdata(false)
  }

  return (
    <>
      <div className='w-full h-20 px-6 py-3 flex items-center justify-between'>
        <Image className="rounded-full" width={60} height={60} src="/Images/wrirkLogo.png" alt="image" />
        <div className='2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden gap-7 items-center'>
          <Link href="/" className='text-[#000000B2] hover:text-black'>Home</Link>
          <Link href="/research" className='text-[#000000B2] hover:text-black'>Research</Link>
          <Link href="/blogs" className='text-[#000000B2] hover:text-black'>blogs</Link>

          <Link href="/Pricing" id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-[#000000B2] hover:text-black focus:outline-none font-medium rounded-lg text-center inline-flex items-center" type="button" onMouseEnter={changeShowhandler}>Pricing
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </Link>

          {/* <!-- Dropdown menu --> */}
          <div id="dropdownHover" className="z-10 hidden bg-[#2E8095] divide-y divide-gray-100 rounded-lg shadow w-52">
            {
              showdata ?
                <ul className="py-2 text-sm" aria-labelledby="dropdownHoverButton">
                  <li>
                    <Link href="/Pricing/AdmissionProposal" className="block px-4 py-2 text-white hover:text-black hover:bg-white" onClick={changeHidehandler}>Admission Proposal</Link>
                  </li>
                  <li>
                    <Link href="/Pricing/Book" className="block px-4 py-2 text-white hover:text-black hover:bg-white" onClick={changeHidehandler}>Book</Link>
                  </li>
                  <li>
                    <Link href="/Pricing/Implementation" className="block px-4 py-2 text-white hover:text-black hover:bg-white" onClick={changeHidehandler}>Implementation/ Analysis</Link>
                  </li>
                  <li>
                    <Link href="/Pricing/MasterDissertation" className="block px-4 py-2 text-white hover:text-black hover:bg-white" onClick={changeHidehandler}>Master Dissertation</Link>
                  </li>
                  <li>
                    <Link href="/Pricing/Paper" className="block px-4 py-2 text-white hover:text-black hover:bg-white" onClick={changeHidehandler}>Paper</Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 text-white hover:text-black hover:bg-white" onClick={changeHidehandler}>Publication</Link>
                  </li>
                  <li>
                    <Link href="/Pricing/Synopsis" className="block px-4 py-2 text-white hover:text-black hover:bg-white" onClick={changeHidehandler}>Research Proposal/ Synopsis</Link>
                  </li>
                  <li>
                    <Link href="/Pricing/ReviewDoc" className="block px-4 py-2 text-white hover:text-black hover:bg-white" onClick={changeHidehandler}>Review On Document</Link>
                  </li>
                  <li>
                    <Link href="/Pricing/Thesis" className="block px-4 py-2 text-white hover:text-black hover:bg-white" onClick={changeHidehandler}>Thesis</Link>
                  </li>
                  <li>
                    <Link href="/Pricing/TopicDescprition" className="block px-4 py-2 text-white hover:text-black hover:bg-white" onClick={changeHidehandler}>Topic Description</Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 text-white hover:text-black hover:bg-white" onClick={changeHidehandler}>Wrirk Membership</Link>
                  </li>
                  <li>
                    <Link href="/Pricing/Writing" className="block px-4 py-2 text-white hover:text-black hover:bg-white" onClick={changeHidehandler}>Writing</Link>
                  </li>
                </ul>
                : ""
            }

          </div>
          {/* <!--End Dropdown menu --> */}

          <Link href="/service" className='text-[#000000B2] hover:text-black'>Services</Link>
          <Link href="/Portfolio" className='text-[#000000B2] hover:text-black'>Portfolio</Link>
          <div className='h-9 border-s-[1px] border-[#000000B2] py-3 px-1'></div>
          <Link href="" className='hover:text-[#2E8095]'>Sign in</Link>
          <Link href="/ContactUs" className='px-12 py-2 border-[1px] text-[#2E8095] border-[#2E8095] rounded-xl hover:bg-[#2E8095] hover:text-white'>Contact Us</Link>
        </div>

        {/* <!----for mobile----> */}
        <div className='2xl:hidden xl:hidden lg:hidden md:flex sm:flex flex items-center'>
          <button className='text-[#000000B2] hover:text-black focus:ring-blue-300 font-medium rounded-lg text-sm pe-1 py-2.5' type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" data-drawer-placement="right" aria-controls="drawer-navigation">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* <!-- drawer component for mobile --> */}

      <div id="drawer-navigation" className="fixed top-0 right-0 z-40 h-screen p-4 rounded-l-3xl overflow-y-auto transition-transform translate-x-full bg-[#2E8095] w-52" tabIndex="-1" aria-labelledby="drawer-right-label">
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-white uppercase">Menu</h5>

        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" >
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link href="/" className="flex text-white items-center p-2 rounded-lg" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">
                <span className="flex-1 whitespace-nowrap" >Home</span>
              </Link>
            </li>

            <li>
              <Link href="/research" className="flex text-white items-center p-2 rounded-lg" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">
                <span className="flex-1 whitespace-nowrap">Research</span>
              </Link>
            </li>

            {/* sub menu */}
            <li>
              <button type="button" className="flex items-center text-white w-full p-2 text-base transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-[#2E8095]" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <span className="flex-1 text-left rtl:text-right whitespace-nowrap">Pricing</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <ul id="dropdown-example" className="hidden py-2">

                <li>
                  <Link href="/Pricing" className="flex items-center text-white w-full p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:text-[#2E8095] " data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">Main</Link>
                </li>
                <li>
                  <Link href="/Pricing/AdmissionProposal" className="flex items-center text-white w-full p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:text-[#2E8095] " data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">Admission Proposal</Link>
                </li>
                <li>
                  <Link href="/Pricing/Book" className="flex items-center text-white w-full p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:text-[#2E8095] " data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">Book</Link>
                </li>
                <li>
                  <Link href="/Pricing/Implementation" className="flex items-center text-white w-full p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:text-[#2E8095] " data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">Implementation/ Analysis</Link>
                </li>
                <li>
                  <Link href="/Pricing/MasterDissertation" className="flex items-center text-white w-full p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:text-[#2E8095] " data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">Master Dissertation</Link>
                </li>
                <li>
                  <Link href="/Pricing/Paper" className="flex items-center text-white w-full p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:text-[#2E8095] " data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">Paper</Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center text-white w-full p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:text-[#2E8095] " data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">Publication</Link>
                </li>
                <li>
                  <Link href="/Pricing/Synopsis" className="flex items-center text-white w-full p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:text-[#2E8095] " data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">Research Proposal/ Synopsis</Link>
                </li>
                <li>
                  <Link href="/Pricing/ReviewDoc" className="flex items-center text-white w-full p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:text-[#2E8095] " data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">Review On Document</Link>
                </li>
                <li>
                  <Link href="/Pricing/Thesis" className="flex items-center text-white w-full p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:text-[#2E8095] " data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">Thesis</Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center text-white w-full p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:text-[#2E8095] " data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">Topic Description</Link>
                </li>
                <li>
                  <Link href="#" className="flex items-center text-white w-full p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:text-[#2E8095] " data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">Wrirk Membership</Link>
                </li>
                <li>
                  <Link href="/Pricing/Writing" className="flex items-center text-white w-full p-2 transition duration-75 rounded-lg hover:bg-gray-100 hover:text-[#2E8095] " data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">Writing</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/service" className="flex items-center text-white p-2 rounded-lg" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">
                <span className="flex-1 whitespace-nowrap">Service</span>
              </Link>
            </li>

            <li>
              <Link href="/Portfolio" className="flex items-center text-white p-2 rounded-lg" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">
                <span className="flex-1 whitespace-nowrap">Portfolio</span>
              </Link>
            </li>


          </ul>
          <div className='container flex items-center justify-center relative'>
            <div className='fixed bottom-[15px] right-[8%] origin-bottom '>
              <Link href="/ContactUs" className="flex items-center justify-center ring-2 ring-white text-white py-2 px-8 rounded-lg bg-[#2E8095] hover:bg-gray-100 hover:text-[#2E8095]" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">
                <span className="flex whitespace-nowrap">Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
