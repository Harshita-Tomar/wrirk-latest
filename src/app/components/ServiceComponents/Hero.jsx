import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative'>
      <div className='grid grid-cols-2 relative'>
        <div className='p-12'>
          <h1 className='font-semibold font-sans text-3xl tracking-wide '>Commited To <br />Facilitating your <br /> Academic Success</h1>
          <h3 className='mt-3 tracking-normal text-justify'>Use the responsive carousel component to allow users to slide through
            multiple items and navigate between them using the control buttons and indicators.
            Use the responsive carousel component to allow users to slide through multiple
            items and navigate between them using the control buttons and indicators.</h3>
          <button type='button' className='bg-cyan-700 mt-5 px-3 p-5 py-1 rounded-lg'>contact Us</button>
        </div>
        <div className='bg-cyan-700 m-2 rounded-bl-[150px] h-[117%] relative z-0'>
          <div className='flex justify-left ms-20 mt-16 '>
            <Image src="/Images/image (1).png" className='flex justify-self-end z-20 object-cover' width={383} height={40} alt='image' />
          </div>
        </div>
      </div>
      <div className='absolute left-0 p-8 right-[423px] top-[82%] mt-8 bg-sky-200  rounded-r-full z-10 opacity-75'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-center'>99%</h1>
            <h4>Clint Retention</h4>
          </div>

          <div>
            <h1 className='text-center'>7</h1>
            <h4>Year Of Service</h4>
          </div>

          <div>
            <h1 className='text-center'>30+</h1>
            <h4>Team Of Professionals</h4>
          </div>

          <div>
            <h1 className='text-center'>221+</h1>
            <h4>Satisfied Clients</h4>
          </div>

        </div>
      </div>
    </div>



  )
}

export default Hero