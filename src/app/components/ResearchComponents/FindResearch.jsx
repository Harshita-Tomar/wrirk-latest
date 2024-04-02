import React from "react";
import { IoSearchOutline, IoChevronDownSharp } from 'react-icons/io5';

// import Image from 'next/image';

const ResearchForm = () => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
      <div class="bg-cyan-800 text-white p-4 w-full max-w-md relative " style={{ height: '33rem' }} >

        <div style={{ marginTop: '2rem' }} >

          <h1 class="text-4xl font-bold ">Find Your </h1>
          <h1 class="text-4xl font-bold">Research Problem</h1>
          <div class="xl:w-96 2xl:w-96 lg:w-96 md:w-full sm:w-full flex relative">
            <div class="relative my-4">
              <input type="search" placeholder="Research Area" class="px-3 py-2 w-full rounded-full bg-[#F1F1F1] placeholder:text-[#999999]" />
              <button type="button" class="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px]">
                <IoChevronDownSharp class="text-[22px] font-thin text-white" />
              </button>
            </div>
            <div class="relative my-4">
              <input type="search" placeholder="Domain" class="px-3 py-2 w-full rounded-full bg-[#F1F1F1] placeholder:text-[#999999]" />
              <button type="button" class="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px]">
                <IoChevronDownSharp class="text-[22px] font-thin text-white" />
              </button>
            </div>
          </div>
          <div class=" my-4 xl:w-96 2xl:w-96 lg:w-96 md:w-full sm:w-full flex justify-left relative">
            <input type="search" placeholder="Keyword" class="px-3 py-2 w-full rounded-full bg-[#F1F1F1] placeholder:text-[#999999]" />
            <button type="button" class="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px] w-10">
              <IoSearchOutline class="text-[22px] font-thin text-white" />
            </button>
          </div>
          <div class="my-8  flex justify-left">
            <button type="submit" class="w-40 px-4 py-2   bg-white text-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Join Free</button>
          </div>
        </div>

      </div>

      <div class=" text-black p-4">


        <div className="text-black p-4">
          {/* <div style={{ marginTop: '2rem' }}>
            
            <div className="bg-gray-200 p-4" style={{ display: 'flex' }}>
              <div className="bg-yellow-400 rounded-bl-full" style={{height: '8rem', width: '8rem' }}>
                <div className="bg-red-400 leading-loose mt-8 mr-5 " style={{ height: '8rem', paddingRight: ''  }}>upper</div>
              </div>
              
            </div>

          </div> */}
          <div dir="rtl" class="p-4">
            <div class="relative p-4 h-32 w-32 rounded-bl-full bg-red-200">

            </div>
            <div class="absolute h-24 w-20 bg-blue-500 top-[98px] right-[124px]"></div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ResearchForm;
