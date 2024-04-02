"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from 'next/image';


const Sliderservice = () => {
    return (
        <div className='mt-28'>
            <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
                <SwiperSlide><Image src="/Images/image (2).png" className='flex justify-self-end m-0 z-20 bg-red-900 rounded-3xl' width={300} height={300} alt='image'  /></SwiperSlide>
                <SwiperSlide><Image src="/Images/image (3).png" className='flex justify-self-end m-0 z-20 bg-red-900 rounded-3xl' width={300} height={300} alt='image'  /></SwiperSlide>
                <SwiperSlide><Image src="/Images/image (5).png" className='flex justify-self-end m-0 z-20 bg-red-900 rounded-3xl' width={300} height={300} alt='image'  /></SwiperSlide>
                <SwiperSlide><Image src="/Images/image (6).png" className='flex justify-self-end m-0 z-20 bg-red-900 rounded-3xl' width={300} height={300} alt='image'  /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Sliderservice

