import React from "react";
import { IoSearchOutline, IoChevronDownSharp } from 'react-icons/io5';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// import Image from 'next/image';

const Testing
    = () => {
        return (

            // <div class="container ">
                <div class="grid grid-cols-2 ">
                    <div class="bg-gray-200  ">
                        {/* ----  */}
                        <div className="bg-cyan-800 text-white p-4 w-[589px] h-[701px]">
                            <form action="#" method="POST" >

                                <div className="lg:w-[389px] sm:w-[221px] h-[108px] mt-[152px] lg:ml-[38px] font-Poppins font-bold leading-[54px]">
                                    <h1 className="lg:text-[40px] sm:text-sm ml-2 lg:mb-8">Find Your </h1>
                                    <h1 className="lg:text-[40px] sm:text-sm ml-2">Research Problem</h1>
                                </div>


                                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                                    <div className="h-[39px] w-[180px] lg:w-[245px] xs:w-[180px] sm:w-[245px] lg:ml-[38px] mt-[38px] relative">
                                        <input type="search" placeholder="Research Area" className="px-3 py-2 w-full rounded-full bg-[#F1F1F1] placeholder:text-[#999999] text-black" />
                                        <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px]">
                                            <IoChevronDownSharp className="text-[22px] font-thin text-white" />
                                        </button>
                                    </div>
                                    <div className="h-[39px] w-[180px] lg:w-[245px] xs:w-[180px] sm:w-[245px] lg:ml-[23px] mt-[38px] relative">
                                        <input type="search" placeholder="Domain" className="px-3 py-2 w-full rounded-full bg-[#F1F1F1] placeholder:text-[#999999] text-black" />
                                        <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px]">
                                            <IoChevronDownSharp className="text-[22px] font-thin text-white" />
                                        </button>
                                    </div>
                                </div>
                                <div className="h-[39px] w-[180px] lg:w-[502px] xs:w-[180px] sm:w-[245px] lg:ml-[38px] mt-[38px] relative">
                                    <input type="search" placeholder="Keyword" className="px-3 py-2 w-full rounded-full bg-[#F1F1F1] placeholder:text-[#999999] text-black" />
                                    <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px] w-10">
                                        <IoSearchOutline className="text-[22px] font-thin text-white" />
                                    </button>
                                </div>
                                <div className="">
                                    <button type="submit" className="w-[171px] h-[40px] lg:ml-[38px]  mt-[38px] bg-white text-[#064454] rounded-lg hover:bg-white-600 focus:outline-none focus:bg-white-600">Join Free</button>
                                </div>

                               
                            </form>
                        </div>
                    </div>

                    {/* <div class="bg-gray-200">
                        <div class="flex justify-end">
                            <div class="bg-cyan-800 rounded-bl-full text-white p-4 max-w-md relative h-[19rem]">
                                <div class="bg-green-500 text-white p-2 relative md:ml-[-74px] md:mt-[49px]">
                                    <img className="" src="/Images/findresearch.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* use
                    <div class="bg-gray-200">
                        <div class="flex justify-center md:justify-end">
                            <div class="bg-cyan-800 rounded-bl-full text-white p-4 max-w-md relative md:w-[29rem] h-[29rem]">
                                <div class="bg-green-500 text-white p-2 relative"> 
                                    <img class="max-w-full h-auto" src="/Images/findresearch.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div class="bg-gray-200">
                        <div class="flex justify-center md:justify-end">
                            <div class="bg-cyan-800 rounded-bl-full text-white p-4 max-w-md relative md:w-[30rem] md:h-[30rem] "> 
                                <div class=" text-white p-1 relative"> 
                                    <img class="max-w-full h-auto" src="/Images/findresearch.png" alt="image" />
                                   
                                </div>
                            </div>
                        </div>
                    </div>






                </div>
            // </div>


        );
    };

export default Testing
    ;
