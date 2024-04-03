import React from "react";
import { IoSearchOutline, IoChevronDownSharp } from 'react-icons/io5';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import Image from 'next/image';

const ResearchForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
      <div className="bg-cyan-800 text-white p-4 w-full max-w-md relative  h-[33rem]" >

        <div className="mt-[2rem]" >

          <h1 className="text-4xl ml-2 font-bold  font-Poppins">Find Your </h1>
          <h1 className="text-4xl ml-2 font-bold font-Poppins">Research Problem</h1>
          <div className="xl:w-96 2xl:w-96 lg:w-96 md:w-full sm:w-full flex relative">
            <div className="relative my-4 mr-3 ml-2">
              <input type="search" placeholder="Research Area" className="px-3 py-2 w-full rounded-full bg-[#F1F1F1] placeholder:text-[#999999]" />
              <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px]">
                <IoChevronDownSharp className="text-[22px] font-thin text-white" />
              </button>
            </div>
            <div className="relative my-4 ml-2">
              <input type="search" placeholder="Domain" className="px-3 py-2 w-full rounded-full bg-[#F1F1F1] placeholder:text-[#999999]" />
              <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px]">
                <IoChevronDownSharp className="text-[22px] font-thin text-white" />
              </button>
            </div>

          </div>
          <div className=" my-4 ml-2 xl:w-96 2xl:w-96 lg:w-96 md:w-full sm:w-full flex justify-left relative">
            <input type="search" placeholder="Keyword" className="px-3 py-2 w-full rounded-full bg-[#F1F1F1] placeholder:text-[#999999]" />
            <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px] w-10">
              <IoSearchOutline className="text-[22px] font-thin text-white" />
            </button>
          </div>
          <div className="my-8 ml-2 flex justify-left">
            <button type="submit" className="w-40 px-4 py-2   bg-white text-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Join Free</button>
          </div>
        </div>

      </div>


      <div className="text-black p-4">
        <div dir="rtl" className="p-4 w-[655px] h-[425px]" >
          <div className="relative p-4  rounded-bl-full bg-[#064454] w-[512px] h-[412px] mt-[-2rem]" >

          </div>
          <div className="absolute  top-[88px] right-[124px] w-[512px] h-[412px] mt-[-5rem]" >
            <img className="block  w-[28rem]  " src="/Images/findresearch.png" alt="image"  />
          </div>
        </div>

        <div dir="rtl" className="" >
          <div className="static w-[112px] h-[112px] mt-[-4rem] mr-[26rem]" >
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
          <div className="relative p-4 rounded-lg  w-[50px] h-[50px] mt-[-8rem] mr-[2rem] " >
            <button className="absolute top-0 left-0  bg-white  rounded w-[35px] p-[10px]" >
              <FaArrowLeft className="text-lg font-thin  justify-center text-black p-0" />
            </button>
            <button className="absolute top-10 left-0 bg-[#064454]  rounded w-[35px] p-[10px]" >
              <FaArrowRight className="text-lg font-thin  justify-center text-white p-0" />
            </button>
          </div>
        </div>
      </div>

      {/* test responsive code  */}
      {/* <div className="text-black p-4 relative">
        <div dir="rtl" className="p-4 md:w-[655px] md:h-[425px] relative z-10">
          <div className="relative p-4 rounded-bl-full bg-[#064454] w-full md:w-[512px] h-[412px] md:mt-[-2rem] z-20">

          </div>
          <div className="absolute top-[88px] right-[124px] w-full md:w-[512px] h-[412px] md:mt-[-5rem] z-30">
            <img className="block w-full md:w-[28rem]" src="/Images/findresearch.png" alt="image" />
          </div>
        </div>

        <div dir="rtl" className="relative z-10">
          <div className="static w-[112px] h-[112px] mt-[-4rem] mr-[26rem] md:mr-0 z-20">
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

          <div className="static p-4 rounded-full bg-[#064454] w-[50px] h-[50px] mt-[-2.5rem] md:mt-[-2.5rem] mr-[10rem] md:mr-0 z-30"></div>
          <div className="relative p-4 rounded-lg w-[50px] h-[50px] mt-[-8rem] md:mt-[-8rem] mr-[2rem] md:mr-[2rem] z-30">
            <button className="absolute top-0 left-0 bg-white rounded w-[35px] p-[10px] z-40">
              <FaArrowLeft className="text-lg font-thin justify-center text-black p-0" />
            </button>
            <button className="absolute top-10 left-0 bg-[#064454] rounded w-[35px] p-[10px] z-40">
              <FaArrowRight className="text-lg font-thin justify-center text-white p-0" />
            </button>
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default ResearchForm;
