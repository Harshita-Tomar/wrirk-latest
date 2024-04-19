// import Image from 'next/image'
import React from 'react'
import '@fontsource/roboto';
import '@fontsource/poppins';

const Hero = () => {
  return (
    <div className='relative'>
      <div className='grid grid-cols-1 sm:grid-cols-2 relative'>
        <div className='block relative sm:hidden'>
          <img src="/Images/mobile-service-image.png" className='object-fill w-full h-[430px] xs:h-96' alt='image' />
        </div>

        <div className='p-4 absolute top-0 sm:relative sm:p-6 md:p-8'>
          <h1 className='text-white font-poppins leading-10 font-bold text-2xl  xs:text-2xl sm:text-[#434343] sm:text-[20px]  md:text-[25px]  lg:text-[32px]  lg:leading-[47.84px] xl:text-[32px]  xl:leading-[47.84px]'>Commited To <br />Facilitating your <br /> Academic Success</h1>
          <h3 className='mt-3 font-roboto leading-6 text-white text-base font-normal  xs:text-base sm:text-[#000000] sm:leading-[21px]  sm:text-[12px] md:leading-[24px] md:text-[13px]  lg:leading-[28px]  lg:text-[14px] xl:text-[14px] '>
            Lead generation strategy refers to the marketing process of involving and capturing interest
            in a product or service in order to establish sales strategies and, as a result, solicit new
            clients. Lead generation is a common demand-creation approach that has a significantly
            wider reach due to its multichannel led distribution of the created message.</h3>
          <div className='hidden pt-4 pb-2 sm:block sm:pt-4 sm:mb-16 md:pt-6 md:pb-6 lg:pb-4 xl:pb-4'><button type='button' className='bg-[#064454] text-white text-[12px] px-6 py-2 rounded-lg md:py-2 sm:py-1 sm:text-[14px] lg:py-2 lg:text-[14px]'>Contact Us</button></div>
        </div>
          
          {/* for only mobile */}
        <div className='block absolute left-0 bottom-1 right-0  px-8 py-4 bg-gray-800 opacity-50 rounded-full sm:hidden'>
          <div className='flex justify-between'>
            <div>
              <h3 className='text-center text-white font-bold text-lg'>99%</h3>
              <h4 className='text-white font-bold text-[9px] xs:text-xs '>Clint Retention</h4>
            </div>

            <div>
              <h3 className='text-center text-white font-bold text-lg'>7</h3>
              <h4 className='text-white font-bold text-[9px] xs:text-xs'>Year Of Service</h4>
            </div>

            <div>
              <h3 className='text-center text-white font-bold text-lg'>30+</h3>
              <h4 className='text-white font-bold text-[9px] xs:text-xs'>Team Of Professionals</h4>
            </div>

            <div>
              <h3 className='text-center text-white font-bold text-lg'>221+</h3>
              <h4 className='text-white font-bold text-[9px] xs:text-xs'>Satisfied Clients</h4>
            </div>

          </div>
        </div>

        {/* <div className='bg-[#064454] px-4 pt-6 rounded-bl-[150px] relative z-0 sm:pt-20'> */}
        <div className='hidden sm:block'>
          <div className='bg-[#064454] px-2 pt-6 py-[48px] rounded-bl-[100px] relative z-0 xs:pt-2 xs:py-20 xs:rounded-bl-[105px] sm:pt-2 sm:py-16 sm:rounded-bl-[150px] md:px-4 md:py-15 md:pb-28 md:rounded-bl-[150px] lg:px-0 lg:py-10 lg:pb-32  lg:rounded-bl-[150px] xl:py-10 xl:pb-24 xl:rounded-bl-[150px]'>
            <div className='flex items-start mt-14 justify-center xs:mt-14 sm:mt-28 sm:px-2 md:mt-14 lg:mt-12 xl:mt-12 '>
              <img src="/Images/service_hero.png" className='w-96 sm:w-96 md:w-96 lg:w-[400px] xl:w-[400px]' alt='image' />
            </div>
          </div>
        </div>
      </div>
      <div className='hidden absolute left-0 px-8 py-4  bg-[#D5E1F285]  rounded-r-full sm:block sm:right-[18%] sm:top-[80%] sm:py-5 md:right-[23%] md:top-[74%] md:py-9 lg:top-[75%] lg:py-9 xl:top-[73%] xl:py-9'>
        <div className='flex justify-between'>
          <div>
            <h3 className='text-center text-[#064454] font-bold opacity-75 sm:text-base md:text-lg lg:text-2xl xl:text-3xl'>99%</h3>
            <h4 className='text-[#064454] font-bold sm:text-sm md:text-base lg:text-md xl:text-xl'>Clint Retention</h4>
          </div>

          <div>
            <h3 className='text-center text-[#064454] font-bold opacity-75 sm:text-base md:text-xl lg:text-2xl xl:text-3xl'>7</h3>
            <h4 className='text-[#064454] font-bold sm:text-sm md:text-base lg:text-lg xl:text-xl'>Year Of Service</h4>
          </div>

          <div>
            <h3 className='text-center text-[#064454] font-bold opacity-75 sm:text-base md:text-xl lg:text-2xl xl:text-3xl'>30+</h3>
            <h4 className='text-[#064454] font-bold sm:text-sm md:text-base lg:text-lg xl:text-xl'>Team Of Professionals</h4>
          </div>

          <div>
            <h3 className='text-center text-[#064454] font-bold opacity-75 sm:text-base md:text-xl lg:text-2xl xl:text-3xl'>221+</h3>
            <h4 className='text-[#064454] font-bold sm:text-sm md:text-base lg:text-lg xl:text-xl'>Satisfied Clients</h4>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero