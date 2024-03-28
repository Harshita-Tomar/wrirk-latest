import React from 'react'
import ServiceCards from '@/Utils/HomeUtils/ServiceCards';
import Image from 'next/image';

const Services = () => {
    return (
        <>
            <div className='w-full'>

                <div className='grid items-center justify-center w-full bg-[rgb(42,150,177)] rounded-tl-[25px] relative pb-14'>
                    <h6 className='font-bold text-[27px] text-white tracking-wide leading-[42.93px] py-3 flex justify-center items-center'>Elevate Your Success with Expert Writing Solutions</h6>
                    <h1 className='font-extrabold text-[180px] leading-[136.2px] pb-2 text-white tracking-wide opacity-35'>Our Services</h1>
                    <Image className="left-0 top-[-350px] absolute" width={450} height={450} src="/Images/pen1.png" alt="image" />                                    
                    <Image className="absolute left-0 top-[-8px]" width={300} height={300} src="/Images/pen2.png" alt="image" />                                    
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
