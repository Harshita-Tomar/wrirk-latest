import React from "react";
import { IoSearchOutline, IoChevronDownSharp } from 'react-icons/io5';
import { BsTag } from 'react-icons/bs';

// import Image from 'next/image';

const Cards = () => {
  return (
    <div class="divide-y divide-white relative">
      <div class="container mx-auto mt-8" style={{ marginTop: '5rem' }}> 
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-3 " style={{ borderColor: 'red' }}>
          <div class=" p-4">
            <div class="max-w-sm rounded-3xl  overflow-hidden shadow-lg">
              <img class="block mx-auto w-full max-w-96 max-h-full " src="/Images/research.png" alt="image" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Study on the role of CSR in developing a company's brand development</div>
                <p class="text-base">
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

                </p>
              </div>

              <div class="px-6 pt-4 pb-2">
                <span class="rounded-full px-3 py-1 font-semibold">#mountain</span>
                <span class="rounded-full px-3 py-1 font-semibold">#sunset</span>
                <span class="rounded-full px-3 py-1 font-semibold">
                  SVoD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cards;
