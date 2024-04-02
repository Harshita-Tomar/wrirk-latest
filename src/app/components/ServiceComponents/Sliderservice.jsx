"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from 'next/image';


const Sliderservice = () => {
    return (
        <div className='mt-32 ms-16'>
            <Swiper watchSlidesProgress={true} slidesPerView={5} className="mySwiper">
                <SwiperSlide><Image src="/Images/image (2).png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image'  /></SwiperSlide>
                <SwiperSlide><Image src="/Images/image (3).png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image'  /></SwiperSlide>
                <SwiperSlide><Image src="/Images/image (5).png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image'  /></SwiperSlide>
                <SwiperSlide><Image src="/Images/image (6).png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image'  /></SwiperSlide>
                <SwiperSlide><Image src="/Images/image (6).png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image'  /></SwiperSlide>
                <SwiperSlide><Image src="/Images/image (6).png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image'  /></SwiperSlide>
                <SwiperSlide><Image src="/Images/image (6).png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image'  /></SwiperSlide>
                <SwiperSlide><Image src="/Images/image (6).png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image'  /></SwiperSlide>
                <SwiperSlide><Image src="/Images/image (6).png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image'  /></SwiperSlide>
                <SwiperSlide><Image src="/Images/image (6).png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image'  /></SwiperSlide>
                <SwiperSlide><Image src="/Images/image (6).png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image'  /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Sliderservice

