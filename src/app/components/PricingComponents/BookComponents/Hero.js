"use client"
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';
import GeneralForm from '@/app/utils/Formutils/GeneralForm';

const Hero = () => {
	const [priceTable, setPriceTable] = useState(false)
	const onClickhandle = (e) => {
		e.preventDefault();
		setPriceTable(!priceTable);
	}
	return (
		<>
			

			{/* Book section */}
			<div className='w-full py-6 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-6 px-4'>

				<div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5'>

					<div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 col-span-1'>
						<div className='rounded-lg shadow-custom3 p-4'>

							<div className="p-0">
								<ul className="flex flex-wrap 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center " id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
									<li className="me-2" role="presentation">
										<button className="inline-block p-1 border-b-2 border-[#064454] rounded-t-lg text-sky-950" id="writing-tab" data-tabs-target="#writing" type="button" role="tab" aria-controls="writing" aria-selected="false">WRITING</button>
									</li>
								</ul>
							</div>
							<div id="default-tab-content">

								<div className="p-0" id="writing" role="tabpanel" aria-labelledby="writing-tab">

									<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-4 ">
										<p className='text-[14px] text-black font-medium me-6'>Pages</p>

										<form className="py-2 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-3/4 sm:w-3/4 w-3/4  flex items-center ">										
											<input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-white border border-gray-400 text-gray-900 text-sm rounded-md focus:outline-none block w-full py-1 ps-3 pe-1 me-2" placeholder="1" required />
											<span>x&nbsp;1000</span>
										</form>

									</div>
									{/* buttons */}

									<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2">
										<p className='text-[14px] text-black font-medium'>Reference Tool</p>
										<ul className='flex items-center justify-start xl:w-3/4 3xl:3/4 2xl:w-3/4 lg:w-3/4 md:w-full sm:w-full w-full relative py-4 '>
											<li>
												<input defaultChecked type="radio" id="Manual" name="Tool" value="Standard/Manual" className="hidden peer" required />
												<label htmlFor="Manual" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
													<span className="text-center">Standard/Manual</span>
												</label>
											</li>

											<li>
												<input type="radio" id="Mendely" name="Tool" value="Mendely" className="hidden peer" required />
												<label htmlFor="Mendely" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
													<span className="text-center">Mendely</span>
												</label>
											</li>

											<li>
												<input type="radio" id="Zotero" name="Tool" value="Zotero" className="hidden peer" required />
												<label htmlFor="Zotero" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
													<span className="text-center">Zotero</span>
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

						
								<table className="w-full text-sm text-left rtl:text-right text-black text-wrap">
									<thead className="text-[14px] text-black uppercase">
										<tr className='text-start'>
											<th scope="col" className="  px-10 py-2">
												Services
											</th>
											<th scope="col" className="  px-10 py-2">
												Basic
											</th>
										
										</tr>
									</thead>
									<tbody className='text-[12px]'>
										<tr className="bg-white text-center">
											<th scope="row" className=" px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Page count
											</th>
											<td className=" px-10 py-2">
												1000
											</td>
										
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Review
											</th>
											<td className="px-10 py-2">
												2
											</td>
										
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Reference Tool
											</th>
											<td className="px-10 py-2">
												Standard/Manual
											</td>
										
										</tr>
									</tbody>
								</table>
								<div className=' flex items-center justify-end pt-2 px-3'>
									<button type='button' onClick={onClickhandle} className='py-1 font-bold text-[#064454] flex items-center px-2 justify-end'> Check Price Distribution <IoIosArrowDown className='mx-2' /> </button>
								</div>
					

							<div className={` ${priceTable ? 'block' : 'hidden'} relative overflow-x-auto rounded-[18px]`}>
								<h3 className='py-2 px-10 text-[16px] uppercase font-bold'>Price Distribution</h3>
								<table className="w-full text-sm text-left rtl:text-right text-black">
									<tbody className='text-[12px]'>
										<tr className="bg-white">
											<th scope="row" className="ps-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Base Price
											</th>
											<td className="px-10 py-2">
												₹20000
											</td>
										</tr>
										<tr className="bg-white">
											<th scope="row" className="ps-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Add-ons
											</th>
											<td className="px-10 py-2">
												₹20000
											</td>
										</tr>
										<tr className="bg-white">
											<th scope="row" className="ps-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Page count
											</th>
											<td className="px-10 py-2">
												₹10000
											</td>
										</tr>
										<tr className="bg-white">
											<th scope="row" className="ps-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Reference Tool
											</th>
											<td className="px-10 py-2">
												₹5000
											</td>
										</tr>
										<tr className="bg-white">
											<th scope="row" className="ps-10 pt-2 pb-6 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Review
											</th>
											<td className="px-10 pt-2 pb-6">
												₹5000
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
									₹75000
								</div>
							</div>

						</div>

						<div className='flex justify-end items-center pb-4 mt-4' >
							<button type='submit' className='text-white bg-[#064454] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[12px] text-[12px] px-8 py-2 rounded-lg font-medium'>Download Quotation</button>
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
