import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div className='w-full h-20 px-6 py-3 flex items-center justify-between'>
        <Image className="rounded-full" width={60} height={60} src="/Images/wrirkLogo.png" alt="image" />
        <div className='2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden gap-7 items-center'>
          <a href="/" className='text-[#000000B2] hover:text-black'>Home</a>
          <a href="/research" className='text-[#000000B2] hover:text-black'>Research</a>

          <a href="/Pricing" id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-[#000000B2] hover:text-black focus:outline-none font-medium rounded-lg text-center inline-flex items-center" type="button">Pricing <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </a>

          {/* <!-- Dropdown menu --> */}
            <div id="dropdownHover" className="z-10 hidden bg-[#2E8095] divide-y divide-gray-100 rounded-lg shadow w-52">
              <ul className="py-2  text-sm " aria-labelledby="dropdownHoverButton">
                <li>
                  <a href="/Pricing/AdmissionProposal" className="block px-4 py-2 text-white hover:text-black hover:bg-white">Admission Proposal</a>
                </li>
                <li>
                  <a href="/Pricing/Book" className="block px-4 py-2 text-white hover:text-black hover:bg-white">Book</a>
                </li>
                <li>
                  <a href="/Pricing/Implementation" className="block px-4 py-2 text-white hover:text-black hover:bg-white">Implementation/ Analysis</a>
                </li>
                <li>
                  <a href="/Pricing/MasterDissertation" className="block px-4 py-2 text-white hover:text-black hover:bg-white">Master Dissertation</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-white hover:text-black hover:bg-white">Paper</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-white hover:text-black hover:bg-white">Publication</a>
                </li>
                <li>
                  <a href="/Pricing/Synopsis" className="block px-4 py-2 text-white hover:text-black hover:bg-white">Research Proposal/ Synopsis</a>
                </li>
                <li>
                  <a href="/Pricing/ReviewDoc" className="block px-4 py-2 text-white hover:text-black hover:bg-white">Review On Document</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-white hover:text-black hover:bg-white">Thesis</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-white hover:text-black hover:bg-white">Topic Description</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-white hover:text-black hover:bg-white">Wrirk Membership</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-white hover:text-black hover:bg-white">Writing</a>
                </li>
              </ul>
            </div>
          {/* <!--End Dropdown menu --> */}

          <a href="/service" className='text-[#000000B2] hover:text-black'>Services</a>
          <a href="/Portfolio" className='text-[#000000B2] hover:text-black'>Portfolio</a>
          <div className='h-9 border-s-[1px] border-[#000000B2] py-3 px-1'></div>
          <a href="" className='hover:text-[#2E8095]'>Sign in</a>
          <a href="/ContactUs" className='px-12 py-2 border-[1px] text-[#2E8095] border-[#2E8095] rounded-xl hover:bg-[#2E8095] hover:text-white'>Contact Us</a>
        </div>

        {/* <!----for mobile----> */}
          <div className='2xl:hidden xl:hidden lg:hidden md:flex sm:flex flex items-center'>
            <button className='text-[#000000B2] hover:text-black focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5' type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" data-drawer-placement="right" aria-controls="drawer-navigation" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
      </div>

      {/* <!-- drawer component for mobile --> */}
      <div id="drawer-navigation" className="fixed top-0 right-0 z-40 h-screen p-4 rounded-l-3xl overflow-y-auto transition-transform translate-x-full bg-[#2E8095] w-52" tabIndex="-1" aria-labelledby="drawer-right-label">
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-white uppercase">Menu</h5>
        <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center " >
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="/" className="flex text-white items-center p-2 text-gray-900 rounded-lg">
                <span className="ms-3">Home</span>
              </a>
            </li>

            <li>
              <a href="/research" className="flex text-white items-center p-2 text-gray-900 rounded-lg">
                <span className="flex-1 ms-3 whitespace-nowrap">Research</span>
              </a>
            </li>

          {/* sub menu */}
            <li>

              <button type="button" className="flex items-center text-white w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 hover:text-black" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Princing</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <ul id="dropdown-example" className="hidden py-2 space-y-2">

                <li>
                  <a href="/Pricing/AdmissionProposal"className="flex items-center text-white w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 ">Admission Proposal</a>
                </li>
                <li>
                  <a href="/Pricing/Book"className="flex items-center text-white w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 ">Book</a>
                </li>
                <li>
                  <a href="/Pricing/Implementatio"className="flex items-center text-white w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 ">Implementation/ Analysis</a>
                </li>
                <li>
                  <a href="/Pricing/MasterDissertation"className="flex items-center text-white w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 ">Master Dissertation</a>
                </li>
                <li>
                  <a href="#"className="flex items-center text-white w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 ">Paper</a>
                </li>
                <li>
                  <a href="#"className="flex items-center text-white w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 ">Publication</a>
                </li>
                <li>
                  <a href="/Pricing/Synopsis"className="flex items-center text-white w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 ">Research Proposal/ Synopsis</a>
                </li>
                <li>
                  <a href="/Pricing/ReviewDoc"className="flex items-center text-white w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 ">Review On Document</a>
                </li>
                <li>
                  <a href="#"className="flex items-center text-white w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 ">Thesis</a>
                </li>
                <li>
                  <a href="#"className="flex items-center text-white w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 ">Topic Description</a>
                </li>
                <li>
                  <a href="#"className="flex items-center text-white w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 ">Wrirk Membership</a>
                </li>
                <li>
                  <a href="#"className="flex items-center text-white w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 ">Writing</a>
                </li>

              </ul>
            </li>

            <li>
              <a href="/service" className="flex items-center text-white p-2 text-gray-900 rounded-lg">

                <span className="flex-1 ms-3 whitespace-nowrap">Service</span>
              </a>
            </li>

            <li>
              <a href="/Portfolio" className="flex items-center text-white p-2 text-gray-900 rounded-lg">
                <span className="flex-1 ms-3 whitespace-nowrap">Portfolio</span>
              </a>
            </li>

            {/* <li>
              <a href="#" className="flex items-center text-white p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <span className="flex-1 ms-3 whitespace-nowrap">Contact Us</span>
              </a>
            </li> */}
            <li>
              <a href="/ContactUs" className="fixed bottom-[13px] right-5  ring-2 ring-white text-white p-2 text-gray-900 rounded-lg hover:text-black">
                <span className="flex-1 ms-3 whitespace-nowrap">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
