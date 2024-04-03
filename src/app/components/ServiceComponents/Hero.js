// import Image from 'next/image'
import React from 'react'
import '@fontsource/roboto';

const Hero = () => {
  return (
    <div className='relative'>
      <div className='grid grid-cols-2  relative'>
        <div className='p-4 sm:p-6 md:p-8'>
          <h1 className='font-black text-[16px] tracking-wide text-[#434343] sm:text-xl md:text-3xl lg:text-4xl'>Commited To <br />Facilitating your <br /> Academic Success</h1>
          <h3 className='mt-3 tracking-normal text-justify text-[10px] leading-[12px] font-roboto font-bold sm:leading-[23px] sm:text-[12px] md:leading-[26px] md:text-[16px] lg:leading-[28px] lg:text-[20px] '>Use the responsive carousel component to allow users to slide through
            multiple items and navigate between them using the control buttons and indicators.
            Use the responsive to carousel component to allow users to slide through multiple
            items and navigate between them using the control buttons and indicators.</h3>
          <div className='pt-4 pb-4 sm:pt-4 sm:mb-16 md:pt-6 md:pb-6 lg:pb-4 xl:pb-4'><button type='button' className='bg-[#064454] text-white text-sm px-6 py-2 rounded-lg md:py-2 sm:py-1 lg:py-2'>Contact Us</button></div>         
        </div>
        
        {/* <div className='bg-[#064454] px-4 pt-6 rounded-bl-[150px] relative z-0 sm:pt-20'> */}
        <div>
          <div className='bg-[#064454] px-2 pt-6 py-24 rounded-bl-[150px] relative z-0 sm:pt-2 sm:py-16 md:px-4 md:py-28 lg:px-0 lg:py-24 xl:py-15'>
            <div className='flex items-start mt-52 justify-center sm:mt-28 sm:px-2 md:mt-28 lg:mt-8 xl:mt-0 '>
              <img src="/Images/image (1).png" className='w-96 sm:w-96 md:w-96 lg:w-[400px] xl:w-[500px]' alt='image' />
            </div>
          </div>
          
        </div>
      </div>
      <div className='absolute left-0 px-8 py-2 top-[80%] right-[12%]  bg-[#D5E1F285]  rounded-r-full sm:right-[18%] sm:top-[80%] sm:py-5 md:right-[23%] md:top-[82%] md:py-8 lg:top-[79%] lg:py-8 xl:top-[81%] xl:py-8'>
        <div className='flex justify-between'>
          <div>
            <h3 className='text-center text-[#064454] text-[10px] font-black opacity-75 sm:text-[20px]'>99%</h3>
            <h4 className='text-[#064454] text-[10px] font-bold sm:text-[13px]'>Clint Retention</h4>
          </div>

          <div>
            <h3 className='text-center text-[#064454] text-[10px] font-black opacity-75 sm:text-[20px]'>7</h3>
            <h4 className='text-[#064454] text-[10px] font-bold sm:text-[13px]'>Year Of Service</h4>
          </div>

          <div>
            <h3 className='text-center text-[#064454] text-[10px] font-black opacity-75 sm:text-[20px]'>30+</h3>
            <h4 className='text-[#064454] text-[10px] font-bold sm:text-[13px]'>Team Of Professionals</h4>
          </div>

          <div>
            <h3 className='text-center text-[#064454] text-[10px] font-black opacity-75 sm:text-[20px]'>221+</h3>
            <h4 className='text-[#064454] text-[10px] font-bold sm:text-[13px]'>Satisfied Clients</h4>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Hero