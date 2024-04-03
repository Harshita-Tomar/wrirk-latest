import React from 'react'
import Image from 'next/image';
import ServiceCards from '@/app/utils/Homeutils/ServiceCards';

const Services = () => {
    return (
        <>
            <div className='w-full'>

                <div className='grid items-center justify-center w-full bg-[rgb(42,150,177)] rounded-tl-[25px] relative 2xl:pb-14 xl:pb-14 lg:pb-12 md:pb-10 sm:pb-8 pb-8'>
                    <h6 className='font-bold 2xl:text-[27px] xl:text-[27px] lg:text-[24px] md:text-[22px] sm:text-[16px] text-[12px] text-white tracking-wide 2xl:leading-[42.93px] xl:leading-[42.93px]lg:leading-[32.93px] md:leading-[30.93px] sm:leading-[29.93px] leading-[25.93px] py-3 flex justify-center items-center'>Elevate Your Success with Expert Writing Solutions</h6>
                    <h1 className='font-extrabold 2xl:text-[136px] xl:text-[136px] lg:text-[130px] md:text-[100px] sm:text-[60px] text-[50px] 2xl:leading-[136.2px] xl:leading-[136.2px] lg:leading-[136.2px] md:leading-[90.93px] sm:leading-[65.93px] leading-[52.2px] pb-1 text-white tracking-wide opacity-35'>Our Services</h1>
                    <Image className="left-0 top-[-200px] absolute 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden" width={300} height={300} src="/Images/pen1.png" alt="image" />                                    
                    <Image className="absolute left-0 top-[30px] 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden" width={200} height={200} src="/Images/pen2.png" alt="image" />                                    
                </div>

                <div className='w-full grid top-[-40px] 2xl:px-20 xl:px-20 lg:px-20 md:px-10 sm:px-10 px-6'>
                    <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-14 justify-center items-center bg-sky-950 rounded-lg 2xl:p-16 xl:p-16 lg:p-16 md:p-10 sm:p-4 p-3'>
                        <ServiceCards />
                        <ServiceCards />
                        <ServiceCards />
                        <ServiceCards />
                        <ServiceCards />
                        <ServiceCards />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services
