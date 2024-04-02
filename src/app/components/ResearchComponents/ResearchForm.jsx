import React from "react";
import { IoSearchOutline, IoChevronDownSharp } from 'react-icons/io5';
import { BsTag } from 'react-icons/bs';
import Image from 'next/image';

// import Image from 'next/image';

const ResearchForm = () => {
  return (
   <div class="p-4 " style={{ marginTop: '3rem' }}>
        <div class="grid lg:grid-cols-2 gap-4 sm:grid-cols-1 gap-4 md:grid-cols-2 gap-4">

          <div class="p-4 text-xl ">
            <spam class="text-transparent bg-gradient-to-l from-red-500 via-yellow-500 to-green-500 bg-clip-text">Generate New Topic</spam>



            <div class="border-2  p-2 mt-2 w-full  max-w-md relative" style={{
              border: '2px solid transparent',
              backgroundClip: 'padding-box',
              borderImage: 'linear-gradient(to right, red 0%, orange 10%, yellow 20%, lime 30%, green 40%, teal 50%, blue 60%, indigo 70%, purple 80%, magenta 90%, teal 100%) 1'
            }}>
              <p class="text-base">Generate your New Research Topic For Next Research</p>
              <div class="xl:w-96 2xl:w-96 lg:w-96 md:w-full sm:w-full flex justify-between relative">
                <input type="search" placeholder="Search" class="px-3 py-2 w-full rounded-full bg-[#F1F1F1] placeholder:text-[#999999]" />
                <button type="button" class="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px]">
                  <IoSearchOutline class="text-[22px] font-thin text-white" />
                </button>
              </div>

              <div class="inline-flex space-x-3">
                <span class="flex items-center">
                  <BsTag class="text-[20px] font-thin text-black" />
                  <span class="text-base text-gray-700">Language Barriers</span>
                </span>

                <span class="flex items-center">
                  <BsTag class="text-[20px] font-thin text-black" />
                  <span class="text-base text-gray-700">Product Placement</span>
                </span>

                <span class="flex items-center">
                  <BsTag class="text-[20px] font-thin text-black" />
                  <span class="text-base text-gray-700">SVoD</span>
                </span>

              </div>
              <div class="inline-flex space-x-4">
                <span class="flex items-center">
                  <BsTag class="text-[20px] font-thin text-black" />
                  <span class="text-base text-gray-700">Tripartitle Interest</span>
                </span>

                <span class="flex items-center">
                  <BsTag class="text-[20px] font-thin text-black" />
                  <span class="text-base text-gray-700">SVoD</span>
                </span>

                <span class="flex items-center">
                  <BsTag class="text-[20px] font-thin text-black" />
                  <span class="text-base text-gray-700">Product Placement</span>
                </span>



              </div>
              <div class="inline-flex space-x-6">
                <span class="flex items-center">
                  <BsTag class="text-[20px] font-thin text-black" />
                  <span class="text-base text-gray-700 ">Language Barriers</span>
                </span>

                <span class="flex items-center">
                  <BsTag class="text-[20px] font-thin text-black" />
                  <span class="text-base text-gray-700">SVoD</span>
                </span>

              </div>


              <div class="grid grid-cols-12 py-3 ">
                <div class="flex justify-left col-start-1 col-end-5">
                  <Image className="rounded" width={140} height={160} src="/Images/research.png" alt="image" />
                </div>
                <div class="  flex justify-center items-center col-start-5 col-end-13">
                  <div class="grid grid-cols-1 divide-y">
                    <div>
                      <p class="text-base">The Study on the role of CSR in develop a company's brand development</p>
                    </div>
                    <div>
                      <p class="text-sm italic"> A company's corporate brand will always be representative of a favourable image......</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-12 ">
                <div class="flex justify-left col-start-1 col-end-5">
                  <Image className="rounded" width={140} height={160} src="/Images/research.png" alt="image" />
                </div>
                <div class="  flex justify-center items-center col-start-5 col-end-13">
                  <div class="grid grid-cols-1 divide-y">
                    <div>
                      <p class="text-base">The Study on the role of CSR in develop a company's brand development</p>
                    </div>
                    <div>
                      <p class="text-sm italic"> A company's corporate brand will always be representative of a favourable image......</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>


          <div class=" p-4 ">
            <h3 class="text-center">Request For Free Research Problem</h3>
            <div class="max-w-xl mx-auto bg-sky-900 shadow-md rounded-md p-6">

              <form action="#" method="POST">
                <div class="mb-4">
                  <input type="text" id="name" name="name" placeholder="Name" class="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-4" />
                </div>

                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <input type="email" id="email" name="email" placeholder="Email" class="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-4" />
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <input type="number" id="number" name="number" placeholder="Number" class="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-4" />
                  </div>
                </div>
                <div class="mb-4">
                  <input type="text" id="area" name="area" placeholder="Area" class="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-4" />
                </div>
                <div class="mb-4">
                  <input type="text" id="domain" name="domain" placeholder="Domain" class="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-4" />
                </div>
                <div class="mb-4">
                  <input type="text" id="message" name="message" placeholder="Message" class="mt-1 block w-full h-24 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-4" />
                </div>

                <div class="mt-6 flex justify-center">
                  <button type="submit" class="w-40 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                </div>
              </form>
            </div>

          </div>


        </div>
      </div> 
  );
};

export default ResearchForm;
