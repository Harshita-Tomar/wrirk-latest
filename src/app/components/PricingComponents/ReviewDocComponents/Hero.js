"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import GeneralForm from '@/app/utils/Formutils/GeneralForm';



const Hero = () => {
	const [priceTable, setPriceTable] = useState(false)
	const onClickhandle = (e) => {
		e.preventDefault();
		setPriceTable(!priceTable);
	}
	return (
		<>
			{/* Heading div */}

			<div className='flex justify-between items-center w-full px-4 py-4 bg-[#2E8095] 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-4'>
				<div className='leading-[30px] sm:leading-[30px] md:leading-[36px] lg:leading-[44px] xl:leading-[44px] 2xl:leading-[44px]'>
					<h3 className='text-[19px] sm:text-[41px]  md:text-[31px] lg:text-[38px] xl:text-[38px] 2xl:text-[38px] text-white font-black tracking-wide'>REVIEW ON DOCUMENT </h3>
				</div>
				<div className='w-full flex items-center justify-end overflow-hidden object-cover'>
					<img className="rounded-md  sm:pr-10 md:pr-10 lg:pr-0 xl:pr-0 2xl:pr-0" width={135} height={135} src="/Images/reviewhead.png" alt="image" />
				</div>
			</div>


			<div className='w-full py-6 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-6 px-4'>

				<div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5'>

					<div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 col-span-1'>
						<div className='rounded-lg shadow-custom3 p-4'>

							<div className="p-0">
								<ul className="flex flex-wrap 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center " id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
									<li className="me-2" role="presentation">
										<button className="inline-block p-1 border-b-2 border-[#064454] rounded-t-lg text-sky-950" id="writing-tab" data-tabs-target="#writing" type="button" role="tab" aria-controls="writing" aria-selected="false">REVIEW ON DOCUMENT</button>
									</li>
								</ul>
							</div>

							{/* no of page code  */}

							<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] mt-3'>

								<div className='w-1/3 text-black font-medium text-sm'>No. of Words</div>
								<div className='w-2/3 '>
									<form className="max-w-xs mx-auto">
										<div className="relative flex items-center max-w-[6rem]">
											<button type="button" id="decrement-words" data-input-counter-decrement="pagecount-input-words" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
												<RiSubtractLine />
											</button>
											<input type="text" id="pagecount-input-words" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="15" required />
											<button type="button" id="increment-words" data-input-counter-increment="pagecount-input-words" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
												<RiAddLine />
											</button>
										</div>
									</form>
								</div>
							</div>

							{/* no of roll  */}

							<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>


								<div className='w-1/3 text-black font-medium text-sm'>Quantity</div>
								<div className='w-2/3 '>
									<form className="max-w-xs mx-auto">
										<div className="relative flex items-center max-w-[6rem]">
											<button type="button" id="decrement-quantity" data-input-counter-decrement="pagecount-input-quantity" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
												<RiSubtractLine />
											</button>
											<input type="text" id="pagecount-input-quantity" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="10" required />
											<button type="button" id="increment-quantity" data-input-counter-increment="pagecount-input-quantity" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
												<RiAddLine />
											</button>
										</div>
									</form>
								</div>
							</div>

							<div className='w-full mt-3 ml-5'>
								<ul class="list-disc ">
									<li>Complete Document  </li>
									<li>Add Report</li>
								</ul>
							</div>

							{/* Plag Repot */}
							<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ">

								<div class=" w-24">
									<label htmlFor="Plag_repot" className="pe-4 text-black font-medium text-sm w-[65px]">Plag Repot</label>
								</div>

								<div class=" justify-items-start">
									<input id="Plag_repot" type="checkbox" value="" name="Plag_repot" className="cursor-pointer w-6 h-6 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095] focus:ring-[#2E8095] focus:ring-1 " />
								</div>

							</div>

							{/* Grammarly */}
							<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ">

								<div class=" ">
									<label htmlFor="Grammarly" className="pe-4 text-black font-medium text-sm w-[65px]">Grammarly Scored Report</label>
								</div>

								<div class=" justify-items-start">
									<input id="Grammarly" type="checkbox" value="" name="Grammarly" className="cursor-pointer w-6 h-6 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095] focus:ring-[#2E8095] focus:ring-1 " />
								</div>

							</div>

							{/* both  */}
							<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ">

								<div class=" w-24">
									<label htmlFor="Both" className="pe-4 text-black font-medium text-sm w-[65px]">Both</label>
								</div>

								<div class=" justify-items-start">
									<input id="Both" type="checkbox" value="" name="Both" className="cursor-pointer w-6 h-6 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095] focus:ring-[#2E8095] focus:ring-1 " />
								</div>

							</div>


						</div>
					</div>

					{/* service table */}
					<div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-1'>

						<div className='rounded-lg border-[1px] border-[#000000]'>
							<div className="w-full relative overflow-x-auto  pt-4 pb-2">
								<table className="w-full text-sm text-left rtl:text-right text-black text-wrap">
									<thead className="text-[14px] text-black uppercase">
										<tr className='text-center'>
											<th scope="col" className=" px-1 py-3 border-e-[2px] border-[#00000059]">
												Services
											</th>
											<th scope="col" className=" px-1 py-3 border-e-[2px] border-[#00000059]">
												Basic
											</th>
											<th scope="col" className=" px-1 py-3">
												Required
											</th>
										</tr>
									</thead>
									<tbody className='2xl:text-[14px] xl:text-[14px] lg:text[14px] md:text-[12px] sm:text-[12px] text-[12px]'>
										<tr className="bg-white text-center">
											<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												No. of Words
											</th>
											<td className="px-1 py-2 border-e-[2px] border-[#00000059]">
												1000
											</td>
											<td className="px-1 py-2">

											</td>
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Review Type
											</th>
											<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
												Grammarly scored Report
											</td>
											<td className="px-1 py-2">
												Both (Plag and Grammarly scored Report)
											</td>
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Quantity
											</th>
											<td className="px-1 py-2 border-e-[2px] border-[#00000059]">
												1
											</td>
											<td className="px-1 py-2">

											</td>
										</tr>

									</tbody>
								</table>
								<div className=' flex items-center justify-end pt-2 px-3'>
									<button type='button' onClick={onClickhandle} className='py-1 font-bold text-[#064454] flex items-center px-2 justify-end'> Check Price Distribution <IoIosArrowDown className='mx-2' /> </button>
								</div>
							</div>

							<div className={` ${priceTable ? 'block' : 'hidden'}  relative overflow-x-auto rounded-[18px]`}>
								<h3 className='py-2 px-10 text-[20px] font-bold'>Price Distribution</h3>
								<table className="w-full text-sm text-left rtl:text-right text-black">
									<tbody>
										<tr className="bg-white">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Base Price
											</th>
											<td className="px-10 py-2">
												₹20000
											</td>
										</tr>
										<tr className="bg-white">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Add-ons
											</th>
											<td className="px-10 py-2">
												₹20000
											</td>
										</tr>
										<tr className="bg-white">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												No. of Words
											</th>
											<td className="px-10 py-2">
												₹5000
											</td>
										</tr>
										<tr className="bg-white">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Review Type
											</th>
											<td className="px-10 py-2">
												₹5000
											</td>
										</tr>
										<tr className="bg-white">
											<th scope="row" className="px-10 pt-2 pb-6 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Quantity
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
