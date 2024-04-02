import Image from 'next/image'
import React from 'react'
import '@fontsource/roboto';

const Hero = () => {
  return (
    <div className='relative'>
      <div className='grid grid-cols-2 relative'>
        <div className='p-12'>
          <h1 className='font-black text-4xl tracking-wide text-[#434343] '>Commited To <br />Facilitating your <br /> Academic Success</h1>
          <h3 className='mt-3 tracking-normal text-justify text-[12px] leading-[28px] font-roboto font-bold'>Use the responsive carousel component to allow users to slide through
            multiple items and navigate between them using the control buttons and indicators.
            Use the responsive carousel component to allow users to slide through multiple
            items and navigate between them using the control buttons and indicators.</h3>
<div className='pt-6 pb-16'> <button type='button' className='bg-[#064454] text-white px-8 py-2 rounded-lg'>Contact Us</button></div>
         
        </div>
        <div className='bg-[#064454] px-4 pt-4 pb-24 rounded-bl-[150px] relative z-0'>
          <div className='flex items-start justify-center'>
            <Image src="/Images/image (1).png" className='flex justify-self-end object-cover' width={520} height={520} alt='image' />
          </div>
        </div>
      </div>
      <div className='absolute left-0 px-8 py-4 right-[450px] top-[79%] bg-[#D5E1F285]  rounded-r-full'>
        <div className='flex justify-between'>
          <div>
            <h3 className='text-center text-[#064454] text-[36px] font-black opacity-75'>99%</h3>
            <h4 className='text-[#064454] text-[16px] font-bold'>Clint Retention</h4>
          </div>

          <div>
            <h3 className='text-center text-[#064454] text-[36px] font-black opacity-75'>7</h3>
            <h4 className='text-[#064454] text-[16px] font-bold'>Year Of Service</h4>
          </div>

          <div>
            <h3 className='text-center text-[#064454] text-[36px] font-black opacity-75'>30+</h3>
            <h4 className='text-[#064454] text-[16px] font-bold'>Team Of Professionals</h4>
          </div>

          <div>
            <h3 className='text-center text-[#064454] text-[36px] font-black opacity-75'>221+</h3>
            <h4 className='text-[#064454] text-[16px] font-bold'>Satisfied Clients</h4>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Hero