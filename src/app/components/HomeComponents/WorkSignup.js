import React from 'react'
import Image from 'next/image';
import WorkCards from '@/app/utils/Homeutils/WorkCards';

const WorkSignup = () => {
    return (
        <>
            <div className='w-full 2xl:py-20 xl:py-20 lg:py-20 md:py-14 sm:py-10 py-10 '>

                <div className='grid items-center justify-center w-full relative pb-14'>
                    <h2 className='text-[36px] font-extrabold items-center justify-center flex'>Work Signup Process</h2>
                    <p className='font-medium items-center justify-center flex text-[12px] py-1 px-4 text-center'>Lorem ipsum dolor sit amet consectetur. Velit ut bibendum placerat duis eget blandit.</p>
                </div>

                <div className='w-full grid 2xl:px-40 xl:px-40 lg:px-40 md:px-14 sm:px-24 px-14 py-6'>
                    <div className='justify-center items-center grid grid-rows-1'>
                        <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:v md:grid-cols-1 sm:grid-cols-1 grid-cols-1 justify-center items-center shadow-custom border-[2px] rounded-lg relative bg-white'> 
                        <div className='rounded-full 2xl:px-8 xl:px-8 lg:px-8 md:px-6 sm:px-6 px-6 2xl:p-6 xl:p-6 lg:p-6 md:p-4 sm:p-4 py-4 2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[28px] sm:text-[24px] text-[24px] bg-[#196572A6] absolute 2xl:right-[-60px] xl:right-[-60px] lg:right-[-60px] md:right-[-45px] sm:right-[-45px] right-[-45px] 2xl:top-[-65px] xl:top-[-65px] lg:top-[-65px] md:top-[-45px] sm:top-[-45px] top-[-45px] z-[-1] text-white font-bold italic'>01</div>

                            <div className='2xl:px-7 xl:px-7 lg:px-7 md:px-7 sm:px-2 px-2 py-6 2xl:order-1 xl:order-1 lg:order-1 md:order-2 sm:order-2 order-2'>
                                <h1 className='font-extrabold text-[#2D3748] text-[30px] py-5 ps-5 pe-7'>long established</h1>
                                <p className='font-normal text-[#718096] text-[14px] leading-[19.9px] ps-5 pe-7 py-1'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                                <div className='flex gap-10 justify-between items-center ps-5 pe-7 py-6'>
                                    <div>
                                        <p className='text-[#718096] text-[14px] font-thin'>May 20th 2020</p>
                                    </div>
                                    <div>
                                        <a href="#" className='text-black text-[14px] font-bold'>Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-full flex overflow-hidden object-cover justify-end items-center 2xl:order-2 xl:order-2 lg:order-2 md:order-1 sm:order-1 order-1'>
                                <Image width={570} height={200} objectFit="cover" layout="responsive" src="/Images/work1img.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full grid 2xl:px-40 xl:px-40 lg:px-20 md:px-14 sm:px-24 px-14 2xl:pt-20 xl:pt-20 lg:pt-20 md:pt-16 sm:pt-16 pt-16 pb-10'>
                    <div className='justify-center items-center grid grid-rows-1'>
                        <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-center items-center rounded-lg gap-x-16 2xl:gap-y-28 xl:gap-y-28 lg:gap-y-28 md:gap-y-20 sm:gap-y-20 gap-y-20'>
                        <WorkCards />
                        <WorkCards />
                        <WorkCards />
                        <WorkCards />
                        <WorkCards />
                        <WorkCards />                        
                        </div>
                    </div>
                </div>
            </div>
         
        </>
    )
}

export default WorkSignup
