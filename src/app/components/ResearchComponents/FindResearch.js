import React from "react";
import { IoSearchOutline, IoChevronDownSharp } from 'react-icons/io5';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// import Image from 'next/image';

const ResearchForm = () => {
  return (
    <div className="grid grid-cols-2 gap-3 relative">
      <div className="bg-cyan-800 text-white p-4  max-w-md relative  h-[33rem]">

       

        <form action="#" method="POST" className='2xl:p-10 xl:p-10 lg:p-10 md:p-3 sm:p-2 p-2'>
          <div className="my-4">
            <h1 className="text-4xl ml-2 font-bold  font-Poppins">Find Your </h1>
            <h1 className="text-4xl ml-2 font-bold font-Poppins">Research Problem</h1>
          </div>

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 relative" >
              <div className="relative my-4 ml-2">
                <input type="search" placeholder="Domain" className="px-3 py-2 w-full rounded-full bg-[#F1F1F1] placeholder:text-[#999999]" />
                <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px]">
                  <IoChevronDownSharp className="text-[22px] font-thin text-white" />
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 relative" >
              <div className="relative my-4 ml-2">
                <input type="search" placeholder="Domain" className="px-3 py-2 w-full rounded-full bg-[#F1F1F1] placeholder:text-[#999999]" />
                <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px]">
                  <IoChevronDownSharp className="text-[22px] font-thin text-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="mb-4 flex justify-left relative">
            <input type="search" placeholder="Keyword" className="px-3 py-2 w-full rounded-full bg-[#F1F1F1] placeholder:text-[#999999]" />
            <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px] w-10">
              <IoSearchOutline className="text-[22px] font-thin text-white" />
            </button>
          </div>


          <div className="my-8 ml-2 flex justify-left">
            <button type="submit" className="w-40 px-4 py-2   bg-white text-[#064454] rounded-lg hover:bg-white-600 focus:outline-none focus:bg-white-600">Join Free</button>
          </div>
        </form>


      </div>

      <div className=" text-black p-4">
        <div dir="rtl" className="p-4" >
          {/* <div className="bg-[#064454] w-[187px] h-[187px] rounded-bl-full" > */}
          <div className="bg-[#064454] p-4 w-[187px] h-[187px]  sm:w-[20rem] md:w-[24rem] lg:w-[28rem] xl:w-[32rem] w-[187px] h-[187px] rounded-bl-full  w-[512px] h-[412px] mt-[-2rem]" >

          </div>
          {/* <div className="  top-[88px] right-[124px] w-[512px] h-[412px] mt-[-5rem]" >
            <img className="block  w-[28rem]  " src="/Images/findresearch.png" alt="image" />
          </div> */}
          <div className="  top-[151px] right-[24px] mt-[-5rem]">
            <img className=" w-[180px] sm:w-[20rem] md:w-[24rem] lg:w-[28rem] xl:w-[32rem]" src="/Images/findresearch.png" alt="image" />
          </div>

        </div>

        <div dir="rtl" className="" >
          <div className="static w-[112px] h-[112px] mt-[-4rem] md:mr-[26rem]" >
            <div className="flex">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  {[...Array(6)].map((_, idx) => (
                    <div
                      key={idx}
                      className="w-1 h-1 p-2 mr-4 bg-[#8EE4B6] rounded mx-1 my-1"
                    ></div>
                  ))}
                </div>
              ))}
            </div>

          </div>

          <div className="static p-4  rounded-full bg-[#064454] w-[50px] h-[50px] mt-[-2.5rem] mr-[10rem]" > </div>
          <div className=" p-4 rounded-lg  w-[50px] h-[50px] mt-[-8rem] mr-[2rem] " >
            <button className=" top-0 left-0  bg-white  rounded w-[35px] p-[10px]" >
              <FaArrowLeft className="text-lg font-thin  justify-center text-black p-0" />
            </button>
            <button className=" top-10 left-0 bg-[#064454]  rounded w-[35px] p-[10px]" >
              <FaArrowRight className="text-lg font-thin  justify-center text-white p-0" />
            </button>
          </div>
        </div>
      </div>

      {/* test responsive code  */}
    </div>


  );
};

export default ResearchForm;
