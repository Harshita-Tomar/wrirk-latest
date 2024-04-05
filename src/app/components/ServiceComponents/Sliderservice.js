"use client"

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const Sliderservice = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [value, setValue] = useState(2);

    useEffect(() => {
        if (windowWidth >= 1280) {
            setValue(5);
        } else if (windowWidth >= 1024) {
            setValue(4);
        } else if (windowWidth >= 768) {
            setValue(3);
        } else if (windowWidth >= 642) {
            setValue(2);
        } else {
            setValue(1);
        }
    }, [windowWidth]);

    return (
        <div className='mt-16 lg:mt-12 md:mt-4 sm:mt-2 ms-16'>
            <Swiper watchSlidesProgress={true} slidesPerView={value} className="mySwiper">
                <SwiperSlide><Image src="/Images/service_slider1.png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image' /></SwiperSlide>
                <SwiperSlide><Image src="/Images/service_slider2.png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image' /></SwiperSlide>
                <SwiperSlide><Image src="/Images/service_slider3.png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image' /></SwiperSlide>
                <SwiperSlide><Image src="/Images/service_slider4.png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image' /></SwiperSlide>
                <SwiperSlide><Image src="/Images/service_slider1.png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image' /></SwiperSlide>
                <SwiperSlide><Image src="/Images/service_slider2.png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image' /></SwiperSlide>
                <SwiperSlide><Image src="/Images/service_slider2.png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image' /></SwiperSlide>
                <SwiperSlide><Image src="/Images/service_slider2.png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image' /></SwiperSlide>
                <SwiperSlide><Image src="/Images/service_slider2.png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image' /></SwiperSlide>
                <SwiperSlide><Image src="/Images/service_slider2.png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image' /></SwiperSlide>
                <SwiperSlide><Image src="/Images/service_slider2.png" className=' m-0 z-20 bg-red-900 rounded-3xl' width={200} height={200} alt='image' /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sliderservice;


