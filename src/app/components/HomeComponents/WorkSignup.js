
import React from 'react'
import Image from 'next/image';
import WorkCards from '@/app/Utils/HomeUtils/WorkCards';

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
                        <div className='grid grid-cols-2 justify-center items-center shadow-custom border-[2px] rounded-lg relative'> 
                        <div className='rounded-full 2xl:px-8 xl:px-8 lg:px-8 md:px-6 sm:px-6 px-6 2xl:p-6 xl:p-6 lg:p-6 md:p-4 sm:p-4 py-4 2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[28px]sm:text-[24px] text-[24px] bg-[#196572A6] absolute right-[-60px] top-[-65px] z-[-1] text-white font-bold italic'>01</div>

                            <div className='px-7 py-6'>
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
                            <div className='flex justify-end items-center'>
                                <Image className="ps-1" width={570} height={200} src="/Images/work1img.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full grid 2xl:px-40 xl:px-40 lg:px-40 md:px-14 sm:px-14 px-14 pt-20 pb-10'>
                    <div className='justify-center items-center grid grid-rows-1'>
                        <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-center items-center rounded-lg gap-x-16 gap-y-28'>
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
