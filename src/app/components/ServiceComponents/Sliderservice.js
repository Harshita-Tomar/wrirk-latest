"use client"

import React from 'react';
import Image from 'next/image';

const Sliderservice = () => {

    return (
        <div className='mt-6 xs:mt-12 lg:mt-12 md:mt-4 sm:mt-6'>
            <div className='relative overflow-x-auto'>
                <div className='flex w-auto ms-8 xs:ms-8 sm:ms-10 md:ms-16 lg:ms-20 xl:ms-28'>
                    <Image src="/Images/service_slider1.png" className=' me-8  bg-red-900 rounded-3xl' width={200} height={200} alt='image' />
                    <Image src="/Images/service_slider2.png" className=' me-8  bg-red-900 rounded-3xl' width={200} height={200} alt='image' />
                    <Image src="/Images/service_slider3.png" className=' me-8  bg-red-900 rounded-3xl' width={200} height={200} alt='image' />
                    <Image src="/Images/service_slider4.png" className=' me-8  bg-red-900 rounded-3xl' width={200} height={200} alt='image' />
                    <Image src="/Images/service_slider1.png" className=' me-8  bg-red-900 rounded-3xl' width={200} height={200} alt='image' />
                    <Image src="/Images/service_slider2.png" className=' me-8  bg-red-900 rounded-3xl' width={200} height={200} alt='image' />
                    <Image src="/Images/service_slider3.png" className=' me-8  bg-red-900 rounded-3xl' width={200} height={200} alt='image' />
                    <Image src="/Images/service_slider4.png" className=' me-8  bg-red-900 rounded-3xl' width={200} height={200} alt='image' />
                    <Image src="/Images/service_slider1.png" className=' me-8  bg-red-900 rounded-3xl' width={200} height={200} alt='image' />
                    <Image src="/Images/service_slider2.png" className=' me-8  bg-red-900 rounded-3xl' width={200} height={200} alt='image' />
                    <Image src="/Images/service_slider3.png" className=' me-8  bg-red-900 rounded-3xl' width={200} height={200} alt='image' />
                </div>

            </div>
        </div>
    );
};

export default Sliderservice;


