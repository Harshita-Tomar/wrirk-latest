import React from "react";
import Image from 'next/image';
import { IoSearchOutline } from 'react-icons/io5';

const Hero = () => {
    return (
        <>
            <div className="w-full pt-7">
                
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 gap-5 2xl:ps-24 xl:ps-24 lg:24px md:ps-10 sm:ps-10 ps-10">

                    {/* first coloum */}
                    <div className=" w-full col-span-2">

                        {/* search bar */}
                        <div className="xl:w-96 2xl:w-96 lg:w-96 md:w-full sm:w-full flex justify-between relative">
                            <input type="search" placeholder="Search" className="px-3 py-2 w-full rounded-full bg-[#F1F1F1] placeholder:text-[#999999]" />
                            <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px]">
                            <IoSearchOutline className="text-[22px] font-thin text-white" />
                            </button>
                        </div>

                        {/* Heading */}

                        <div>
                            <h3 className="2xl:leading-[3.7rem] xl:leading-[3.5rem] lg:leading-[3.3rem] md:leading-[3rem] sm:leading-[2rem] leading-[1.5rem] py-3 font-black 2xl:text-[50px] xl:text-[45px] lg:text-[43px] md:text-[40px] sm:text-[32px] text-[22px]  ">Find Your <br /> Research Problem</h3>
                            <p className="font-medium 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[12px] text-[12px] tracking-normal 2xl:pe-10 xl:pe-10 lg:pe-10 md:pe-3 sm:pe-1 pe-1 text-black">We deliver outstanding outcomes across the board in terms of academic research writing services, we thrive towards maintaining the integrity of research.</p>
                        </div>

                        {/* buttons */}

                        <div className="grid grid-cols-2 2xl:gap-7 xl:gap-7 lg:gap-7 md:gap-5 sm:gap-5 gap-5 xl:w-96 2xl:w-96 lg:w-96 md:w-96 sm:w-full justify-between relative 2xl:py-7 xl:py-7 lg:py-7 md:py-4 sm:py-3 py-2">
                            <a href="#" className="cursor-pointer 2xl:px-10 xl:px-10 lg:px-10 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-white bg-[#2E8095] rounded-xl text-center">Quick Mail</a>
                            <a href="#" className="cursor-pointer 2xl:px-10 xl:px-10 lg:px-10 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 rounded-xl text-center">Pricing</a>
                        </div>

                        {/* suggestion and help */}

                        <div className="py-6">
                            <div className="font-medium text-md flex gap-5">
                                <p className="text-[#2E8095] ">10,000+ Customers</p>
                                <Image className="rounded-full" width={40} height={40} src="/Images/cust.png" alt="image" />
                            </div>
                            <div className="font-medium text-md flex text-[#2E8095] pt-2">
                                <a href="#">Free Suggestions</a>
                                <div className='h-7 border-s-[1px] border-[#0000007D] py-1 mx-2'></div>
                                <a href="#"> Helps in every stage of Research</a>
                            </div>
                        </div>

                    </div>

                    {/* Second Column */}
                    <div className="w-full flex items-start justify-end 2xl:px-20 xl:px-20 lg:px-20 md:px-5 sm:px-2 px-2 relative">
                    <Image width={200} height={200} src="/Images/cap.png" alt="image" />
                    </div>

                </div>
            </div>
        </>
    );
};

export default Hero;
