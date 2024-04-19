import React from "react";
import { IoSearchOutline, IoChevronDownSharp } from 'react-icons/io5';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';

const Hero = () => {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  md:grid-cols-2">
            {/* first div  */}
            <div className="hidden sm:block w-full" >
                <div className="bg-cyan-800 text-white 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-6 px-4 2xl:py-32 xl:py-32 lg:py-32 md:py-28 sm:py-20 py-10">

                    <form action="#" method="POST">
                        <h3 className="2xl:leading-[3.7rem] xl:leading-[3.5rem] lg:leading-[3.3rem] md:leading-[3rem] sm:leading-[2rem] leading-[1.5rem] font-black 2xl:text-[50px] xl:text-[45px] lg:text-[40px] md:text-[36px] sm:text-[28px] text-[20px]">Find Your <br /> Research Problem</h3>

                        <div className='2xl:flex xl:flex lg:flex md:flex sm:flex block justify-between items-center mx-auto my-4 w-full'>
                            {/* Research bar */}
                            <div className=" flex me-2 justify-center items-center relative w-full">
                                <input type="search" placeholder="Research Area" className="focus:outline-none px-3 py-2 w-full rounded-full border-[#D1D1D1] border-[1px] placeholder:text-[#999999] placeholder:text-[12px] text-black" />
                                <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 p-[5px]">
                                    <IoChevronDownSharp className="text-[22px] font-thin text-white" />
                                </button>
                            </div>

                            {/* Domain bar */}
                            <div className=" flex 2xl:ms-2 xl:ms-2 lg:ms-2 md:ms-2 sm:ms-2 ms-0 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 mt-4 justify-center items-center relative w-full">
                                <input type="search" placeholder="Domain" className="px-3 py-2 w-full rounded-full border-[#D1D1D1] border-[1px] placeholder:text-[#999999] placeholder:text-[12px] focus:outline-none text-black" />
                                <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 p-[5px]">
                                    <IoChevronDownSharp className="text-[22px] font-[1px] text-white" />
                                </button>
                            </div>
                        </div>

                        {/* search bar */}
                        <div className="flex mx-auto justify-center items-center relative w-full">
                            <input type="search" placeholder="Keyword" className="px-3 py-2 w-full rounded-full border-[#D1D1D1] border-[1px] placeholder:text-[#999999] placeholder:text-[12px] focus:outline-none text-black" />
                            <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 p-[5px]">
                                <IoSearchOutline className="text-[22px] font-thin text-white" />
                            </button>
                        </div>

                        <div className="flex justify-start items-center py-4">
                            <button type="submit" className=" 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-5 px-5 py-2 bg-white text-[#064454] rounded-lg hover:bg-white-600 focus:outline-none focus:bg-white-600">Join Free</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* second div  */}
            <div className="hidden sm:block bg-gray-200">
                <div className="flex justify-center items-center md:justify-end">
                    <div className="bg-cyan-800 rounded-bl-full text-white lg:p-4 md:p-4  max-w-md relative md:w-[30rem] md:h-[30rem] ">

                        <div className=" text-white p-1 relative z-[1] w-full flex overflow-hidden object-cover md:mt-4 md:mr-4 md:p-4">
                            <Image className="rounded-0" width={400} height={400} src="/Images/findresearch.png" alt="image" />
                            <div class="flex flex-col mt-[17rem]">
                                <div class="bg-blue-500 text-white p-4 mb-1">Top </div>
                                <div class="bg-green-500 text-white p-4">Div</div>
                            </div>
                        </div>
                        <div className='absolute right-[300px]  bottom-[-32px] 2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden overflow-hidden object-cover justify-end '>
                            <Image className="rounded-0 " width={200} height={200} src="/Images/dot-img.png" alt="image" objectFit="cover" />

                        </div>
                        <div className='absolute left-[285px]  bottom-[-22px] 2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden overflow-hidden object-cover justify-end '>
                            <Image className="rounded-0 " width={100} height={100} src="/Images/dot-circle.png" alt="image" objectFit="cover" />
                            {/* <div class="flex flex-col">
                                <div class="bg-blue-500 text-white p-4 mb-1">Top </div>
                                <div class="bg-green-500 text-white p-4">Div</div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* new div for small screens */}
            <div className="block sm:hidden  bg-cover bg-center w-full " style={{ backgroundImage: 'url("/Images/researchsmall.png")' }} >
                <div className=" text-white 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-6 px-4 2xl:py-32 xl:py-32 lg:py-32 md:py-28 sm:py-20 py-10">

                    <form action="#" method="POST" className="p-4">

                        {/* <h3 className="2xl:leading-[3.7rem] xl:leading-[3.5rem] lg:leading-[3.3rem] md:leading-[3rem] sm:leading-[4.5rem] leading-[1.5rem] font-black 2xl:text-[50px] xl:text-[45px] lg:text-[40px] md:text-[36px] sm:text-9xl text-[20px]">Find Your <br /> Research Problem</h3> */}
                        <h3 className="2xl:leading-[3.7rem] xl:leading-[3.5rem] lg:leading-[3.3rem] md:leading-[3rem] sm:leading-[4.5rem] leading-[1.5rem] font-black 2xl:text-[60px] xl:text-[45px] lg:text-[40px] md:text-[36px] sm:text-9xl text-[20px]">Find Your <br /> Research Problem</h3>

                        <div className='2xl:flex xl:flex lg:flex md:flex sm:flex block justify-between items-center mx-auto my-4 w-full'>
                            {/* Research bar */}
                            <div className=" flex me-2 justify-center items-center relative w-full">
                                <input type="search" placeholder="Research Area" className="focus:outline-none px-4 py-3 w-full rounded-full border-[#D1D1D1] border-[1px] placeholder:text-[#999999] placeholder:text-[12px] text-black opacity-75" />
                                <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[10px]">
                                    <IoChevronDownSharp className="text-[22px] font-thin text-white" />
                                </button>
                            </div>

                            {/* Domain bar */}
                            <div className=" flex 2xl:ms-2 xl:ms-2 lg:ms-2 md:ms-2 sm:ms-2 ms-0 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 mt-4 justify-center items-center relative w-full">
                                <input type="search" placeholder="Domain" className="px-4 py-3 w-full rounded-full border-[#D1D1D1] border-[1px] placeholder:text-[#999999] placeholder:text-[12px] focus:outline-none text-black opacity-75" />
                                <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[10px]">
                                    <IoChevronDownSharp className="text-[22px] font-[1px] text-white" />
                                </button>
                            </div>
                        </div>

                        {/* search bar */}
                        <div className="flex mx-auto justify-center items-center relative w-full">
                            <input type="search" placeholder="Keyword" className="px-4 py-3 w-full rounded-full border-[#D1D1D1] border-[1px] placeholder:text-[#999999] placeholder:text-[12px] focus:outline-none text-black opacity-75 " />
                            <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[10px]">
                                <IoSearchOutline className="text-[22px] font-thin text-white" />
                            </button>
                        </div>

                        <div className="flex justify-center items-center py-4">
                            <button type="submit" className=" 2xl:px-10 xl:px-10 lg:px-10 md:px-8 sm:px-8 px-8 py-2 bg-white text-[#064454] rounded-lg hover:bg-white-600 focus:outline-none focus:bg-white-600">Join Free</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default Hero;
