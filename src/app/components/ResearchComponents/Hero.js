import React from "react";
import { IoSearchOutline, IoChevronDownSharp } from 'react-icons/io5';
import { BsTag } from 'react-icons/bs';

import Image from 'next/image';

const Hero = () => {
  return (
    <div class="divide-y divide-white relative">
      {/* <div class="container mx-auto"> */}
      {/* <div class="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
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

        <div class="bg-blue-500 text-black p-4">
          <h2 class="text-lg font-bold">Div 2</h2>
          <p>This div is visible on laptop, tablet, and mobile devices.</p>
        </div>
      </div> */}
      {/* </div> */}

      {/* <div class="absolute top-[395px] h-48 w-full bg-cyan-950 rounded-tl-3xl ">
        <div class="absolute inset-0">
          <div class="flex justify-center items-center h-full">
            <div class="text-center text-sky-200">
              <h1 class="text-9xl font-bold">Research</h1>
            </div>
          </div>
        </div>
      </div> */}


      {/* <div class="container mx-auto mt-8" style={{ marginTop: '5rem' }}>
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-3 " style={{ borderColor: 'red' }}>
          <div class=" p-4">
            <div class="max-w-sm rounded-3xl  overflow-hidden shadow-lg">
              <img class="block mx-auto w-full max-w-96 max-h-full " src="/Images/research.png" alt="image" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Study on the role of CSR in developing a company's brand development</div>
               
                  a company's corporate brand will always be representative of a favourable image. When customer's vendors, and even workers and investors have a favourable impression of a......

                  <spam class="bg-gray-400 flex justify-center items-center rounded-md border border-white">
                    Business-Management-And-Accounting
                  </spam>

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

              
              </div>

              <div class="px-6 pt-4 pb-2">
                <span class="rounded-full px-3 py-1 font-semibold">#mountain</span>
                <span class="rounded-full px-3 py-1 font-semibold">#sunset</span>
                <span class="rounded-full px-3 py-1 font-semibold">
                  SVoD</span>
              </div>
            </div>
          </div>
          <div class=" p-4">
            <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg">
             
              <img class="block mx-auto w-full max-w-96 max-h-full " src="/Images/researchport.png" alt="image" />

              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mountain Sunset</div>
                <p class="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="rounded-full px-3 py-1 font-semibold">#mountain</span>
                <span class="rounded-full px-3 py-1 font-semibold">#sunset</span>
                <span class="rounded-full px-3 py-1 font-semibold">#nature</span>
              </div>
            </div>
          </div>
          <div class=" p-4">
            <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg">

              <img class="block mx-auto w-full max-w-96 max-h-full " src="/Images/researchport2.png" alt="image" />

              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mountain Sunset</div>
                <p class="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="rounded-full px-3 py-1 font-semibold">#mountain</span>
                <span class="rounded-full px-3 py-1 font-semibold">#sunset</span>
                <span class="rounded-full px-3 py-1 font-semibold">#nature</span>
              </div>
            </div>
          </div>
          <div class=" p-4">
            <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg">
              <img class="block mx-auto w-full max-w-96 max-h-full " src="/Images/researchport2.png" alt="image" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mountain Sunset</div>
                <p class="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="rounded-full px-3 py-1 font-semibold">#mountain</span>
                <span class="rounded-full px-3 py-1 font-semibold">#sunset</span>
                <span class="rounded-full px-3 py-1 font-semibold">#nature</span>
              </div>
            </div>
          </div>
          <div class=" p-4">
            <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg">
              <img class="block mx-auto w-full max-w-96 max-h-full " src="/Images/researchport.png" alt="image" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mountain Sunset</div>
                <p class="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="rounded-full px-3 py-1 font-semibold">#mountain</span>
                <span class="rounded-full px-3 py-1 font-semibold">#sunset</span>
                <span class="rounded-full px-3 py-1 font-semibold">#nature</span>
              </div>
            </div>
          </div>
          <div class=" p-4">
            <div class="max-w-sm rounded-3xl overflow-hidden shadow-lg">
              <img class="block mx-auto w-full max-w-96 max-h-full " src="/Images/research.png" alt="image" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mountain Sunset</div>
                <p class="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="rounded-full px-3 py-1 font-semibold">#mountain</span>
                <span class="rounded-full px-3 py-1 font-semibold">#sunset</span>
                <span class="rounded-full px-3 py-1 font-semibold">#nature</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}



      {/* <div class="p-4 " style={{ marginTop: '3rem' }}>
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
      </div> */}
    </div>

  );
};

export default Hero;
