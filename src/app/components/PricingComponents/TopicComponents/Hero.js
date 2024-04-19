
"use client"
import React, { useEffect, useState } from 'react'
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import GeneralForm from '@/app/utils/Formutils/GeneralForm';

const Hero = () => {
    const [selectedValue, setSelectedValue] = useState('Document');
    const [basicPrice, setBasicPrice] = useState(1000);

    useEffect(() => {
        selectedValue === 'Document' || selectedValue === 'Technical' ?
          setBasicPrice(1000)
        :
          setBasicPrice(2000)
        
      }, [selectedValue]);
      


    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <>
           

            <div className='w-full py-6 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-6 px-4'>

                <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5'>
                    {/* Topic Description section */}
                    <div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 col-span-1'>
                        {/* DESCPRITION TYPE */}
                        <div className='rounded-lg shadow-custom3 p-4'>

                            <div className="p-0">
                                <ul className="flex flex-wrap 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                                    <li className="me-2" role="presentation">
                                        <button className="inline-block p-1 border-b-2 border-[#064454] rounded-t-lg text-sky-950" id="admission-tab" data-tabs-target="#admission" type="button" role="tab" aria-controls="admission" aria-selected="false">DESCPRITION TYPE</button>
                                    </li>
                                </ul>
                            </div>

                            <div id="default-tab-content">

                                <div className="p-0" id="admission" role="tabpanel" aria-labelledby="admission-tab">

                                    <div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2">
                                        <ul className='flex items-center justify-start xl:w-3/4 3xl:3/4 2xl:w-3/4 lg:w-3/4 md:w-full sm:w-full w-full relative py-4 '>
                                            <li>
                                                <input defaultChecked type="radio" id="Document" name="Tool" value="Document" className="hidden peer" onChange={handleRadioChange} checked={selectedValue === 'Document'} />
                                                <label htmlFor="Document" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
                                                    <span className="text-center">Document</span>
                                                </label>
                                            </li>

                                            <li>
                                                <input type="radio" id="Technical" name="Tool" value="Technical" className="hidden peer" onChange={handleRadioChange} checked={selectedValue === 'Technical'} />
                                                <label htmlFor="Technical" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
                                                    <span className="text-center">Technical Discussion</span>
                                                </label>
                                            </li>

                                            <li>
                                                <input type="radio" id="Both" name="Tool" value="Both" className="hidden peer" onChange={handleRadioChange} checked={selectedValue === 'Both'} />
                                                <label htmlFor="Both" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
                                                    <span className="text-center">Both</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* service table */}
                    <div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-1'>

                        <div className='rounded-lg border-[1px] border-cyan-700 sticky block top-[20px]'>

                            <div className=' relative pt-4 pb-2 overflow-x-auto rounded-[18px]'>
                                <h3 className='py-2 px-10 text-[20px] font-bold'>Price Distribution</h3>
                                <table className="w-full text-sm text-left rtl:text-right text-black">
                                    <tbody>
                                        <tr className="bg-white">
                                            <th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
                                                Base Price
                                            </th>
                                            <td className="px-10 py-2">
                                                ₹{basicPrice}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-[#2E8095] text-white text-[16px] font-bold grid grid-cols-2 rounded-b-lg">
                                <div scope="row" className="px-10 py-4 font-medium  whitespace-nowrap flex items-center justify-center">
                                    Total
                                </div>
                                <div className="px-10 py-4 flex items-center justify-center">
                                    ₹{basicPrice}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>


            <div>
                <GeneralForm />
            </div>

        </>
    )
}

export default Hero

