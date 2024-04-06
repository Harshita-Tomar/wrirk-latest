// import Image from 'next/image'
import React from 'react'
import '@fontsource/roboto';
import '@fontsource/poppins'; 

const Hero = () => {
  return (
    <div className='relative'>
      <div className='grid grid-cols-2  relative'>
        <div className='p-4 sm:p-6 md:p-8'>
          <h1 className='font-[#434343] font-poppins  font-bold text-[13px] text-[#434343] xs:text-[13px]  sm:text-[20px]  md:text-[25px]  lg:text-[32px]  lg:leading-[47.84px] xl:text-[32px]  xl:leading-[47.84px]'>Commited To <br />Facilitating your <br /> Academic Success</h1>
          <h3 className='mt-3 font-roboto text-[9px] font-normal  xs:text-[11px] sm:leading-[21px]  sm:text-[12px] md:leading-[24px] md:text-[13px]  lg:leading-[28px]  lg:text-[14px] xl:text-[14px] '>
            Lead generation strategy refers to the marketing process of involving and capturing interest 
            in a product or service in order to establish sales strategies and, as a result, solicit new
            clients. Lead generation is a common demand-creation approach that has a significantly
            wider reach due to its multichannel led distribution of the created message.</h3>
          <div className='hidden  pt-4 pb-2 sm:block sm:pt-4 sm:mb-16 md:pt-6 md:pb-6 lg:pb-4 xl:pb-4'><button type='button' className='bg-[#064454] text-white text-[12px] px-6 py-2 rounded-lg md:py-2 sm:py-1 sm:text-[14px] lg:py-2 lg:text-[14px]'>Contact Us</button></div>
        </div>

        {/* <div className='bg-[#064454] px-4 pt-6 rounded-bl-[150px] relative z-0 sm:pt-20'> */}
        <div>
          <div className='bg-[#064454] px-2 pt-6 py-[48px] rounded-bl-[100px] relative z-0 xs:pt-2 xs:py-20 xs:rounded-bl-[105px] sm:pt-2 sm:py-16 sm:rounded-bl-[150px] md:px-4 md:py-28 md:rounded-bl-[150px] lg:px-0 lg:py-24 lg:rounded-bl-[150px] xl:py-15 xl:rounded-bl-[150px]'>
            <div className='flex items-start mt-14 justify-center xs:mt-14 sm:mt-28 sm:px-2 md:mt-2 lg:mt-0 xl:mt-0 '>
              <img src="/Images/service_hero.png" className='w-96 sm:w-96 md:w-96 lg:w-[400px] xl:w-[400px]' alt='image' />
            </div>
          </div>

        </div>
      </div>
      <div className='absolute left-0 px-8 py-4 top-[78.5%] right-[12%]  bg-[#D5E1F285]  rounded-r-full xs:right-[20%] xs:top-[75%] xs:py-7 sm:right-[18%] sm:top-[80%] sm:py-5 md:right-[23%] md:top-[78%] md:py-9 lg:top-[78%] lg:py-9 xl:top-[78%] xl:py-9'>
        <div className='flex justify-between'>
          <div>
            <h3 className='text-center text-[#064454] text-[12px] font-bold opacity-75 sm:text-[17px] md:lg:text[56px] lg:text[56px] xl:text[56px]'>99%</h3>
            <h4 className='text-[#064454] text-[7px] font-bold sm:text-[13px] md:text[23px] lg:text[23px] xl:text[23px]'>Clint Retention</h4>
          </div>

          <div>
            <h3 className='text-center text-[#064454] text-[12px] font-bold opacity-75 sm:text-[17px] md:lg:text[56px] lg:text[56px] xl:text[56px]'>7</h3>
            <h4 className='text-[#064454] text-[7px] font-bold sm:text-[13px] md:text[23px] lg:text[23px] xl:text[23px]'>Year Of Service</h4>
          </div>

          <div>
            <h3 className='text-center text-[#064454] text-[12px] font-bold opacity-75 sm:text-[17px] md:lg:text[56px] lg:text[56px] xl:text[56px]'>30+</h3>
            <h4 className='text-[#064454] text-[7px] font-bold sm:text-[13px] md:text[23px] lg:text[23px] xl:text[23px]'>Team Of Professionals</h4>
          </div>

          <div>
            <h3 className='text-center text-[#064454] text-[12px] font-bold opacity-75 sm:text-[17px] md:lg:text[56px] lg:text[56px] xl:text[56px]'>221+</h3>
            <h4 className='text-[#064454] text-[7px] font-bold sm:text-[13px] md:text[23px] lg:text[23px] xl:text[23px]'>Satisfied Clients</h4>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Hero