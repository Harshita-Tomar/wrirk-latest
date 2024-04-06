import React from 'react'
import { IoSearchOutline, IoChevronDownSharp } from 'react-icons/io5';
import { BsTag } from 'react-icons/bs';
import Image from 'next/image';

const SearchTopic = () => {
    return (
        <>
            <div className=" text-xl ">
                <spam className="text-transparent bg-gradient-to-l from-red-500 via-yellow-500 to-green-500 bg-clip-text">Generate New Topic</spam>

                <div className="border-2  p-2 mt-2 w-full  max-w-md relative" style={{
                    border: '2px solid transparent',
                    backgroundClip: 'padding-box',
                    borderImage: 'linear-gradient(to right, red 0%, orange 10%, yellow 20%, lime 30%, green 40%, teal 50%, blue 60%, indigo 70%, purple 80%, magenta 90%, teal 100%) 1'
                }}>
                    <p className="text-base">Generate your New Research Topic For Next Research</p>
                    <div className="xl:w-96 2xl:w-96 lg:w-96 md:w-full sm:w-full flex justify-between relative">
                        <input type="search" placeholder="Search" className="px-3 py-2 w-full rounded-full bg-[#F1F1F1] placeholder:text-[#999999]" />
                        <button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px]">
                            <IoSearchOutline className="text-[22px] font-thin text-white" />
                        </button>
                    </div>

                    <div className="inline-flex space-x-3">
                        <span className="flex items-center">
                            <BsTag className="text-[20px] font-thin text-black" />
                            <span className="text-base text-gray-700">Language Barriers</span>
                        </span>

                        <span className="flex items-center">
                            <BsTag className="text-[20px] font-thin text-black" />
                            <span className="text-base text-gray-700">Product Placement</span>
                        </span>

                        <span className="flex items-center">
                            <BsTag className="text-[20px] font-thin text-black" />
                            <span className="text-base text-gray-700">SVoD</span>
                        </span>

                    </div>
                    <div className="inline-flex space-x-4">
                        <span className="flex items-center">
                            <BsTag className="text-[20px] font-thin text-black" />
                            <span className="text-base text-gray-700">Tripartitle Interest</span>
                        </span>

                        <span className="flex items-center">
                            <BsTag className="text-[20px] font-thin text-black" />
                            <span className="text-base text-gray-700">SVoD</span>
                        </span>

                        <span className="flex items-center">
                            <BsTag className="text-[20px] font-thin text-black" />
                            <span className="text-base text-gray-700">Product Placement</span>
                        </span>



                    </div>
                    <div className="inline-flex space-x-6">
                        <span className="flex items-center">
                            <BsTag className="text-[20px] font-thin text-black" />
                            <span className="text-base text-gray-700 ">Language Barriers</span>
                        </span>

                        <span className="flex items-center">
                            <BsTag className="text-[20px] font-thin text-black" />
                            <span className="text-base text-gray-700">SVoD</span>
                        </span>

                    </div>


                    <div className="grid grid-cols-12 py-3 ">
                        <div className="flex justify-left col-start-1 col-end-5">
                            <Image className="rounded" width={140} height={160} src="/Images/research.png" alt="image" />
                        </div>
                        <div className="  flex justify-center items-center col-start-5 col-end-13">
                            <div className="grid grid-cols-1 divide-y">
                                <div>
                                    <p className="text-base">The Study on the role of CSR in develop a company's brand development</p>
                                </div>
                                <div>
                                    <p className="text-sm italic"> A company's corporate brand will always be representative of a favourable image......</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 ">
                        <div className="flex justify-left col-start-1 col-end-5">
                            <Image className="rounded" width={140} height={160} src="/Images/research.png" alt="image" />
                        </div>
                        <div className="  flex justify-center items-center col-start-5 col-end-13">
                            <div className="grid grid-cols-1 divide-y">
                                <div>
                                    <p className="text-base">The Study on the role of CSR in develop a company's brand development</p>
                                </div>
                                <div>
                                    <p className="text-sm italic"> A company's corporate brand will always be representative of a favourable image......</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default SearchTopic
