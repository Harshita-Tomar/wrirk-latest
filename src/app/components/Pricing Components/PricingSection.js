import PricingCards from '@/app/utils/Pricingutils/PricingCards'
import React from 'react'
import "@fontsource/dm-sans";
import Image from 'next/image';

const PricingSection = () => {
  return (
    <>
      <div className='w-full 2xl:px-20 xl:px-20 lg:px-10 md:px-6 sm:px-3 px-3 2xl:pt-10 xl:pt-10 lg:pt-8 md:pt-6 sm:pt-6 pt-6 2xl:pb-40 xl:pb-40 lg:pb-40 md:pb-40 sm:pb-40 pb-40 relative'>

        <div className='absolute top-[-400px] left-0 z-[-1]'><Image  width={500} height={500} src="/Images/blob1.png" alt="image" /></div>

        <div className='absolute 2xl:top-[150px] xl:top-[150px] lg:top-[150px] md:top-[250px] sm:top-[1050px] top-[1050px] right-0 z-[-5]'><Image  width={500} height={500} src="/Images/blob2.png" alt="image" /></div>

        <div className='absolute bottom-0 left-0 z-[-1]'><Image  width={250} height={250} src="/Images/blob1.png" alt="image" /></div>

        <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  justify-center items-center gap-x-12 gap-y-20'>

          {/* card 1 */}
          <div className='rounded-[30px] py-10 px-8 border-[1px] bg-[#064454] border-[#EFF0F6] shadow-custom font-sans'>
            <div className='flex justify-start items-center py-3 px-1'>
              <div className='p-2 flex items-center justify-center bg-white rounded-lg'><Image  width={25} height={25} src="/Images/pricingcard-logo2.png" alt="image" /></div>
              <h2 className='text-white font-bold ps-4 text-[20px]'>Book</h2>
              <div className='rounded-lg px-4 py-1 text-white ms-auto bg-[#FFFFFF33]'>Popular</div>
            </div>
            <p className='text-[#e8e8e8] text-[16px] leading-[26px]'>Lead generation strategy refers to the marketing process of involving and capturing interest in a product or service in order to .</p>
            <div className='flex items-end pt-1'>
              <div className='text-[50px] font-bold text-white'>₹20000</div>
              <div className='text-[10px] mb-4 text-white'>(Base Price)</div>
            </div>

            <p className='text-[#E4E4E4] text-[13px] py-3'>Lead generation strategy refers to the marketing process of involving and capturing interest in a product or service in order to .</p>

            <ul className='px-2 text-white'>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>1 Page</p>
              </li>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>Upto 2 Revise</p>
              </li>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>Standard/Manual Reference tool </p>
              </li>
            </ul>

            <div className='flex items-center justify-center pb-4 pt-8'>
              <button className='px-24 py-4 rounded-full text-[16px] text-[#064454] font-bold bg-white'>Get started</button>
            </div>
          </div>

          <PricingCards />
          <PricingCards />
          

          {/* card 4 */}
          <div className='rounded-[30px] py-10 px-8 border-[1px] bg-[#064454] border-[#EFF0F6] shadow-custom font-sans'>
            <div className='flex justify-start items-center py-3 px-1'>
            <div className='p-2 flex items-center justify-center bg-white rounded-lg'><Image  width={25} height={25} src="/Images/pricingcard-logo2.png" alt="image" /></div>
              <h2 className='text-white font-bold ps-4 text-[20px]'>Book</h2>
              <div className='rounded-lg px-4 py-1 text-white ms-auto bg-[#FFFFFF33]'>Popular</div>
            </div>
            <p className='text-[#e8e8e8] text-[16px] leading-[26px]'>Lead generation strategy refers to the marketing process of involving and capturing interest in a product or service in order to .</p>
            <div className='flex items-end'>
              <div className='text-[50px] font-bold text-white'>₹20000</div>
              <div className='text-[10px] mb-4 text-white'>(Base Price)</div>
            </div>

            <p className='text-[#E4E4E4] text-[13px] py-3'>Lead generation strategy refers to the marketing process of involving and capturing interest in a product or service in order to .</p>

            <ul className='px-2 text-white'>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>1 Page</p>
              </li>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>Upto 2 Revise</p>
              </li>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>Standard/Manual Reference tool </p>
              </li>
            </ul>

            <div className='flex items-center justify-center pb-4 pt-8'>
              <button className='px-24 py-4 rounded-full text-[16px] text-[#064454] font-bold bg-white'>Get started</button>
            </div>
          </div>

          <PricingCards />
          <PricingCards />
         
        </div>
        
      </div>
    </>
  )
}

export default PricingSection
