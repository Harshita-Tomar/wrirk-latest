import PricingCards from '@/app/utils/Pricingutils/PricingCards'
import React from 'react'
import "@fontsource/dm-sans";
import Image from 'next/image';

const PricingSection = () => {
  return (
    <>
      <div className='w-full px-20 py-10'>
        <div className='grid grid-cols-3 justify-center items-center gap-x-12 gap-y-20'>

          {/* card 1 */}
          <div className='rounded-[30px] py-10 px-8 border-[1px] border-[#EFF0F6] shadow-custom font-sans'>
            <div className='flex justify-start items-center py-3'>
              <div>image</div>
              <h2 className='text-[#064454] font-bold ps-4 text-[20px]'>Implementation/Analysis</h2>
            </div>
            <p className='text-[#575757] text-[16px] leading-[26px]'>Lead generation strategy refers to the marketing process of involving and capturing interest in a product or service in order to .</p>
            <div className='flex items-end'>
              <div className='text-[50px] font-bold text-[#064454]'>₹20000</div>
              <div className='text-[10px] mb-4 text-[#3E3F40]'>(Base Price)</div>
            </div>

            <ul className='px-2'>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>Upto 2 Methods</p>
              </li>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>Upto 2 Dataset</p>
              </li>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>Upto 2 Revise</p>
              </li>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>50 Questionnaire</p>
              </li>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>10 Objective/Hypothesis</p>
              </li>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>500 Respondent</p>
              </li>
            </ul>
          </div>


          <PricingCards />
          <PricingCards />

          {/* card 4 */}
          <div className='rounded-[30px] py-10 px-8 border-[1px] border-[#EFF0F6] shadow-custom font-sans'>
            <div className='flex justify-start items-center py-3'>
              <div>image</div>
              <h2 className='text-[#064454] font-bold ps-4 text-[20px]'>Implementation/Analysis</h2>
            </div>
            <p className='text-[#575757] text-[16px] leading-[26px]'>Lead generation strategy refers to the marketing process of involving and capturing interest in a product or service in order to .</p>
            <div className='flex items-end'>
              <div className='text-[50px] font-bold text-[#064454]'>₹20000</div>
              <div className='text-[10px] mb-4 text-[#3E3F40]'>(Base Price)</div>
            </div>

            <ul className='px-2'>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>Upto 2 Methods</p>
              </li>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>Upto 2 Dataset</p>
              </li>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>Upto 2 Revise</p>
              </li>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>50 Questionnaire</p>
              </li>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>10 Objective/Hypothesis</p>
              </li>
              <li className='flex items-center justify-start'><Image className="rounded-full me-2 mt-1" width={25} height={25} src="/Images/check.png" alt="image" /><p className='text-[14px]'>500 Respondent</p>
              </li>
            </ul>
          </div>
          <PricingCards />
          <PricingCards />
        </div>
      </div>
    </>
  )
}

export default PricingSection
