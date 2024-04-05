import React from 'react'
import Image from 'next/image';

const WorkCards = () => {
    return (
        <>
            <div className='shadow-custom border-[2px] rounded-lg relative bg-white'>
            <div className='rounded-full 2xl:px-8 xl:px-8 lg:px-8 md:px-6 sm:px-6 px-6 2xl:p-6 xl:p-6 lg:p-6 md:p-4 sm:p-4 py-4 2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[28px] sm:text-[24px] text-[24px] bg-[#196572A6] absolute 2xl:right-[-60px] xl:right-[-60px] lg:right-[-60px] md:right-[-45px] sm:right-[-45px] right-[-45px] 2xl:top-[-65px] xl:top-[-65px] lg:top-[-65px] md:top-[-45px] sm:top-[-45px] top-[-45px] z-[-1] text-white font-bold italic'>01</div>
                <div className='w-full flex overflow-hidden object-cover justify-center items-center'>
                <Image width={350} height={250} src="/Images/work1img.png" alt="image" objectFit="cover" layout="responsive" />
                </div>
                <div className='px-2  py-2'>
                    <h1 className='font-extrabold text-[#2D3748] 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[24px] text-[24px] 2xl:py-5 xl:py-5 lg:py-5 md:py-4 sm:py-2 py-2 2xl:ps-5 xl:ps-5 lg:ps-5 md:ps-2 sm:ps-2 ps-2 2xl:pe-7 xl:pe-7 lg:pe-7 md:pe-2 sm:pe-2 pe-2'>long established</h1>
                    <p className='font-normal text-[#718096] text-[14px] leading-[20.9px] 2xl:ps-5 xl:ps-5 lg:ps-5 md:ps-2 sm:ps-2 ps-2 2xl:pe-7 xl:pe-7 lg:pe-7 md:pe-2 sm:pe-2 pe-2 py-1 text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                    <div className='flex gap-10 justify-between items-center 2xl:ps-5 xl:ps-5 lg:ps-5 md:ps-2 sm:ps-2 ps-2 2xl:pe-7 xl:pe-7 lg:pe-7 md:pe-2 sm:pe-2 pe-2 2xl:py-6 xl:py-6 lg:py-6 md:py-4 sm:py-2 py-2'>
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
