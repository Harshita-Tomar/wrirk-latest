import Image from 'next/image'
import React from 'react'
import { IoSearchOutline, IoChevronDownSharp } from 'react-icons/io5';
import { BsTag } from 'react-icons/bs';

const ResearchCard = (props) => {
    return (
        <>
            {/* <div className="flex items-center justify-center ">
                <div className="max-w-xs md:max-w-sm rounded-3xl overflow-hidden  bg-cyan-800 text-white shadow-lg">

                    <img className="block mx-auto w-full max-w-96 max-h-full " src="/Images/researchport.png" alt="image" />

                    <div className="px-6 py-4">
                        <div className="font-medium text-[20px]  mb-3">
                            {title}
                        </div>

                        <p className="text-[14px] font-Mulish">
                            {desc}
                        </p>


                        <spam className="bg-gray-400 mt-4 text-[13px] font-Mulish flex justify-center items-center rounded-md border border-white">
                            <a href="/research/researchcontent" >{category}</a>
                        </spam>

                        <h2 className="mt-3 font-bold">Keywords:</h2>
                        <div className="inline-flex mt-1 space-x-3">
                            {keywords.map((item, index) => (
                                <span className="flex items-center">
                                <BsTag className="text-[20px] font-thin text-white" />
                                <span className="text-base text-white-700">{item}</span>
                            </span>
                            ))}

                        </div>

                    </div>
                </div>
            </div> */}
            <div className="flex items-center justify-center ">
                <div className="max-w-sm md:max-w-md rounded-xl overflow-hidden bg-cyan-800 text-white shadow-lg">

                    <img className="block w-full max-h-full " src="/Images/researchport.png" alt="image" />

                    <div className="px-3 py-4">
                        <div className=" text-[18px] font-bold mb-3">
                            {props.title}
                        </div>

                        <p className="text-[16px] font-Mulish">
                            {props.desc}
                        </p>


                        <spam className="bg-gray-400 mt-4 text-[13px] px-2 py-1 font-Mulish flex justify-center items-center rounded-md border border-white">
                            <a href="/research/researchcontent" >{props.category}</a>
                        </spam>

                        <h2 className="mt-3 font-bold text-[16px]">Keywords:</h2>
                        <div className="inline-flex mt-1 space-x-3">
                            {props.keywords.map((item, index) => (
                                <span className="flex items-center me-2" key={index}>
                                    <BsTag className="text-[20px] font-thin text-white" />
                                    <span className="text-base text-white-700 text-[16px] ps-1">{item}</span>
                                </span>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ResearchCard