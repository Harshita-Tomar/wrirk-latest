import Image from 'next/image'
import React from 'react'
import { IoSearchOutline, IoChevronDownSharp } from 'react-icons/io5';
import { BsTag } from 'react-icons/bs';

const ResearchCard = () => {
    return (

        <>
            {/*<div className=" ">
                <div className="max-w-xs md:max-w-sm rounded-3xl  overflow-hidden shadow-lg shadow-black">
                    <img className="block mx-auto w-full max-w-96 max-h-full " src="/Images/research.png" alt="image" />
                    <div className="px-6 py-4 ">
                        <div className="font-medium text-[20px] mb-3">The Study on the role of CSR in developing a company's brand development</div>

                        <p className="text-[14px] font-Mulish">
                            a company's corporate brand will always be representative of a favourable image. When customer's vendors, and even workers and investors have a favourable impression of a......
                        </p>


                        <spam className="bg-gray-400 mt-4 text-[13px] font-Mulish flex justify-center items-center rounded-md border border-white">
                            <a href="/research/researchcontent" >Business-Management-And-Accounting</a>
                        </spam>

                        <h2 className="mt-3 font-bold">Keywords:</h2>
                        <div className="inline-flex mt-1 space-x-3">
                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-black" />
                                <span className="text-base text-gray-700">Barriers</span>
                            </span>

                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-black" />
                                <span className="text-base text-gray-700">Product</span>
                            </span>

                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-black" />
                                <span className="text-base text-gray-700">SVoD</span>
                            </span>

                        </div>


                    </div>

                </div>
            </div>*/}
            <div className="flex items-center justify-center ">
                <div className="max-w-xs md:max-w-sm rounded-3xl overflow-hidden  bg-cyan-800 text-white shadow-lg">

                    <img className="block mx-auto w-full max-w-96 max-h-full " src="/Images/researchport.png" alt="image" />

                    <div className="px-6 py-4">
                        <div className="font-medium text-[20px]  mb-3">The Study on the role of CSR in developing a company's brand development</div>

                        <p className="text-[14px] font-Mulish">
                            a company's corporate brand will always be representative of a favourable image. When customer's vendors, and even workers and investors have a favourable impression of a......
                        </p>


                        <spam className="bg-gray-400 mt-4 text-[13px] font-Mulish flex justify-center items-center rounded-md border border-white">
                            <a href="/research/researchcontent" >Business-Management-And-Accounting</a>
                        </spam>

                        <h2 className="mt-3 font-bold">Keywords:</h2>
                        <div className="inline-flex mt-1 space-x-3">
                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-white" />
                                <span className="text-base text-white-700">Barriers</span>
                            </span>

                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-white" />
                                <span className="text-base text-white-700">Product</span>
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            {/*<div className=" ">
                <div className="max-w-xs md:max-w-sm rounded-3xl overflow-hidden shadow-lg bg-blue-950 text-white">

                    <img className="block mx-auto w-full max-w-96 max-h-full " src="/Images/researchport2.png" alt="image" />

                    <div className="px-6 py-4">
                        <div className="font-medium text-[20px]  mb-3">The Study on the role of CSR in developing a company's brand development</div>

                        <p className="text-[14px] font-Mulish">
                            a company's corporate brand will always be representative of a favourable image. When customer's vendors, and even workers and investors have a favourable impression of a......
                        </p>


                        <spam className="bg-gray-400 mt-4 text-[13px] font-Mulish flex justify-center items-center rounded-md border border-white">
                            <a href="/research/researchcontent" >Business-Management-And-Accounting</a>
                        </spam>

                        <h2 className="mt-3 font-bold">Keywords:</h2>

                        <div className="inline-flex mt-1 space-x-3">
                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-white" />
                                <span className="text-base text-white-700">Barriers</span>
                            </span>

                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-white" />
                                <span className="text-base text-white-700">Product</span>
                            </span>

                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-white" />
                                <span className="text-base text-white-700">SVoD</span>
                            </span>

                        </div>

                    </div>

                </div>
            </div>*/}
            {/*<div className=" ">
                <div className="max-w-xs md:max-w-sm rounded-3xl overflow-hidden shadow-lg bg-cyan-800 text-white">
                    <img className="block mx-auto w-full max-w-96 max-h-full " src="/Images/researchport2.png" alt="image" />
                    <div className="px-6 py-4">
                        <div className="font-medium  text-xl mb-3">The Study on the role of CSR in developing a company's brand development</div>

                        <p className="text-[14px] font-Mulish">
                            a company's corporate brand will always be representative of a favourable image. When customer's vendors, and even workers and investors have a favourable impression of a......
                        </p>


                        <spam className="bg-gray-400 mt-4 text-[13px] font-Mulish flex justify-center items-center rounded-md border border-white">
                            <a href="/research/researchcontent" >Business-Management-And-Accounting</a>
                        </spam>

                        <h2 className="mt-3 font-bold">Keywords:</h2>

                        <div className="inline-flex mt-1 space-x-3">
                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-white" />
                                <span className="text-base text-white-700">Barriers</span>
                            </span>

                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-white" />
                                <span className="text-base text-white-700">Product</span>
                            </span>

                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-white" />
                                <span className="text-base text-white-700">SVoD</span>
                            </span>

                        </div>

                    </div>
                </div>
            </div>*/}
            {/*<div className=" ">
                <div className="max-w-xs md:max-w-sm rounded-3xl overflow-hidden shadow-lg">
                    <img className="block mx-auto w-full max-w-96 max-h-full " src="/Images/researchport.png" alt="image" />
                    <div className="px-6 py-4">
                        <div className="font-medium  text-[20px] mb-3">The Study on the role of CSR in developing a company's brand development</div>

                        <p className="text-[14px] font-Mulish">
                            a company's corporate brand will always be representative of a favourable image. When customer's vendors, and even workers and investors have a favourable impression of a......
                        </p>


                        <spam className="bg-gray-400 mt-4 text-[13px] font-Mulish flex justify-center items-center rounded-md border border-white">
                            <a href="/research/researchcontent" >Business-Management-And-Accounting</a>
                        </spam>

                        <h2 className="mt-3 font-bold">Keywords:</h2>

                        <div className="inline-flex mt-1 space-x-3">
                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-black" />
                                <span className="text-base text-gray-700">Barriers</span>
                            </span>

                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-black" />
                                <span className="text-base text-gray-700">Product</span>
                            </span>

                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-black" />
                                <span className="text-base text-gray-700">SVoD</span>
                            </span>

                        </div>


                    </div>
                </div>
            </div>*/}
            {/*<div className=" ">
                <div className="max-w-xs md:max-w-sm rounded-3xl overflow-hidden shadow-lg bg-blue-950 text-white">
                    <img className="block mx-auto w-full max-w-96 max-h-full " src="/Images/research.png" alt="image" />
                    <div className="px-6 py-4">
                        <div className="font-medium text-[20px] mb-3">The Study on the role of CSR in developing a company's brand development</div>

                        <p className="text-[14px] font-Mulish">
                            a company's corporate brand will always be representative of a favourable image. When customer's vendors, and even workers and investors have a favourable impression of a......
                        </p>


                        <spam className="bg-gray-400 mt-4 text-[13px] font-Mulish flex justify-center items-center rounded-md border border-white">
                            <a href="/research/researchcontent" >Business-Management-And-Accounting</a>
                        </spam>

                        <h2 className="mt-3 font-bold">Keywords:</h2>

                        <div className="inline-flex mt-1 space-x-3">
                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-white" />
                                <span className="text-base text-white-700">Barriers</span>
                            </span>

                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-white" />
                                <span className="text-base text-white-700">Product</span>
                            </span>

                            <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-white" />
                                <span className="text-base text-white-700">SVoD</span>
                            </span>

                        </div>

                    </div>
                </div>
            </div>*/}
        </>
    )
}

export default ResearchCard