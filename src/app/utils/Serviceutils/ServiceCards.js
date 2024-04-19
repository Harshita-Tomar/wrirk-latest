// import Image from 'next/image'
import React from 'react'
import { RiArrowRightLine } from "react-icons/ri";
import '@fontsource/roboto'; 

const ServiceCards = () => {
   
    return (
        <div>
            <div className="max-w-sm mb-5 bg-white border border-sky-400 rounded-lg shadow">
                <a href="#">
                    <img className="object-fill rounded-t-lg" src="/Images/service_slider1.jfif" alt="image" />
                </a>
                <div className="p-4">
                    <a href="#">
                        <h5 className="mb-2 text-[18px] leading-6 font-bold font-poppins text-[#0F3D49]">Thesis Writing</h5>
                    </a>
                    <p className="mb-2 text-[16px] font-normal font-roboto text-[#000000] leading-[25.42px]">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="service/servicecarddetail" className='flex justify-end items-center'>
                    <RiArrowRightLine className='text-[24px] text-[#B1ACAC] font-black' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiceCards