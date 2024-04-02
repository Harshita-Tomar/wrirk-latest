import React from 'react'
import Image from 'next/image';

const WorkCards = () => {
    return (
        <>
            <div className='shadow-custom border-[2px] rounded-lg relative'>
            <div className='rounded-full 2xl:px-8 xl:px-8 lg:px-8 md:px-6 sm:px-6 px-6 2xl:p-6 xl:p-6 lg:p-6 md:p-4 sm:p-4 py-4 2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[28px]sm:text-[24px] text-[24px] bg-[#196572A6] absolute right-[-60px] top-[-65px] z-[-1] text-white font-bold italic'>01</div>
                <div className='flex justify-center items-center'>
                <Image width={350} height={250} src="/Images/work1img.png" alt="image" />
                </div>
                <div className='px-2  py-2'>
                    <h1 className='font-extrabold text-[#2D3748] text-[24px] py-3 ps-5 pe-7'>long established</h1>
                    <p className='font-normal text-[#718096] text-[14px] leading-[20.9px] ps-5 pe-7 py-1'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                    <div className='flex gap-10 justify-between items-center ps-5 pe-7 py-6'>
                        <div>
                            <p className='text-[#718096] text-[12px] font-thin'>May 20th 2020</p>
                        </div>
                        <div>
                            <a href="#" className='text-black text-[12px] font-bold'>Read more</a>
                        </div>
                    </div>
                </div>
                

            </div>
        </>
    )
}

export default WorkCards