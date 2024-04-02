import React from 'react'
import "@fontsource/dm-sans";
import TestimonialCards from '@/app/utils/Homeutils/TestimonialCards';

const Testimonials = () => {
    return (
        <>
            <div className='w-full 2xl:px-20 xl:px-20 lg:px-20 md:px-10 sm:px-4 px-2 pt-10 pb-24 font-sans'>
                <div className='2xl:px-8 xl:px-8 lg:px-8 md:px-4 sm:px-4 px-4 py-8 bg-[#064454] rounded-lg'>
                    <div className='flex justify-start items-center text-[#78E1DB]'>
                        <hr className='px-3 me-2 flex text-[#78E1DB]' /><h4 className='flex text-bold text-[18px] tracking-widest'>TESTIMONIALS</h4>
                    </div>
                    <h1 className='2xl:text-[34px] xl:text-[34px] lg:text-[34px] md:text-[26px] sm:text-[22px] text-[22px] text-white font-semibold tracking-wider'>Hear what our clients say</h1>
                    <p className='py-1 text-[#E4DDDD] font-thin 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[14px] sm:text-[14px] text-[14px]'>Don’t just take our word for it. Here are a few (of many) reviews of GatherPlace.</p>
                    <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 items-center justify-center 2xl:gap-x-20 xl:gap-x-20 lg:gap-x-20 md:gap-x-10 sm:gap-x-10 gap-x-10 2xl:gap-y-16 xl:gap-y-16 lg:gap-y-16 md:gap-y-10 sm:gap-y-10 gap-y-10 2xl:py-6 xl:py-6 lg:py-6 md:py-4 sm:py-4 py-4'>
                        <TestimonialCards />
                        <TestimonialCards />
                        <TestimonialCards />
                        <TestimonialCards />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
