import React from 'react'
import { MdEmail } from 'react-icons/md'; // Importing from Material Design
import { RiMapPinFill } from "react-icons/ri";

const GetinTouch = () => {
  return (
    <>
      <div className='w-full 2xl:px-40 xl:px-40 lg:px-40 md:px-10 sm:px-6 px-4 py-14'>
        <div className='2xl:px-20 xl:px-20 lg:px-20 md:px-8 sm:px-4 px-4 2xl:py-10 xl:py-10 lg:py-10 md:py-6 sm:py-4 py-4 bg-[#064454A1] rounded-[60px]'>

          <h1 className=' flex items-center justify-center text-white text-[36px] tracking-[2px] font-black leading-[50px]'>Get in Touch</h1>
          <p className='flex items-center justify-center text-white text-[14px] 2xl:tracking-[6px] xl:tracking-[6px] lg:tracking-[6px] md:tracking-[2px] sm:tracking-[1px] tracking-[0px]'>We'd love to hear from you </p>

          <div className='grid grid-cols-2 items-center justify-between gap-x-10 2xl:gap-y-4 xl:gap-y-4 lg:gap-y-4 md:gap-y-2 sm:gap-y-1 gap-y-1 2xl:py-5 xl:py-5 lg:py-5 md:py-3 sm:py-3 py-2 2xl:px-32 px-0'>

            <div className='pe-20'>
              <a href='#' className='pe-5 ps-2 py-2 rounded-lg items-center flex justify-start'>
                <div className='bg-white rounded-md items-center flex justify-center cursor-pointer border-[1px] px-5 py-1'>
                  <MdEmail className="text-3xl text-zinc-500" />
                </div>
              </a>
            </div>

            <div className='ps-20'>
              <a href='#' className='ps-5 py-2  rounded-lg items-center flex justify-end'>
                <div className='items-center flex justify-center cursor-pointer ps-3 pe-2 py-1'>
                  <RiMapPinFill className='text-4xl text-white' />
                </div>
              </a>
            </div>

            <div className='grid col-span-2'>
              <div className='2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-4 px-4 2xl:py-7 xl:py-7 lg:py-7 md:py-4 sm:py-4 py-4 rounded-[20px] bg-white text-[#0026496B] text-[14px]'>

                <form>

                  <div className="mb-4 border-[1px] border-[#00000047] rounded-md p-2">
                    <input type="text" id="full_name" name="full_name" className="form-input block w-full" placeholder="Full Name" required />
                  </div>

                  <div className='grid grid-cols-2 gap-x-14'>
                    <div className="mb-4 border-[1px] border-[#00000047] rounded-md p-2">
                      <input type="email" id="email" name="email" className="form-input block w-full" placeholder="Mail" required />
                    </div>
                    <div className="mb-4 border-[1px] border-[#00000047] rounded-md p-2">
                      <input type="tel" id="contact_number" name="contact_number" className="form-input block w-full" placeholder="Contact" required />
                    </div>
                  </div>

                  <div className="mb-4 border-[1px] border-[#00000047] rounded-md p-2">
                    <select id="research_format" name="research_format" className="form-select block w-full">
                      <option value="Research Area">Research Area</option>
                      <option value="presentation">Presentation</option>
                      <option value="workshop">Workshop</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-4 border-[1px] border-[#00000047] rounded-md p-2">
                    <select id="research_domain" name="research_domain" className="form-select block w-full">
                      <option value="Research Domain">Research Domain</option>
                      <option value="technology">Technology</option>
                      <option value="engineering">Engineering</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="arts">Arts</option>
                      <option value="humanities">Humanities</option>
                    </select>
                  </div>
                  <div className="mb-4 border-[1px] border-[#00000047] rounded-md p-2">
                    <textarea id="research_description" name="research_description" className="form-textarea block w-full" rows="4" placeholder="Please Write Your Concern here..."></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button type="submit" className="bg-[#2A96B1] text-white px-20 py-2 rounded-full hover:bg-cyan-700">Send</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default GetinTouch
