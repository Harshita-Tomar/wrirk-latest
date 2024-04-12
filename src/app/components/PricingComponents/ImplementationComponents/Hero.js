"use client"
import React, { useState } from 'react'
import ImplementationSection from './ImplementationSection';
import StatisticalSection from './StatisticalSection';
import MappingSection from './MappingSection';
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import Image from 'next/image';
import GeneralForm from '@/app/utils/Formutils/GeneralForm';
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
	const [priceTable, setPriceTable] = useState(false)
	const onClickhandle = (e) => {
		e.preventDefault();
		setPriceTable(!priceTable);
	}
	return (
		<>

			{/* Heading div */}
			<div className='flex justify-between items-center w-full 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-4 px-4 py-4 bg-[#2E8095]'>
				<div className='2xl:leading-[44px] xl:leading-[44px] lg:leading-[44px] md:leading-[36px] sm:leading-[30px] leading-[30px]'>
					<h3 className='2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[36px] sm:text-[30px] text-[28px] text-white font-black tracking-wide'>IMPLEMENTATION/ANALYSIS </h3>
				</div>
				<div className='w-full flex items-center justify-end overflow-hidden object-cover'>
					<Image className="rounded-md 2xl:ps-0 xl:ps-0 lg:ps-0 md:ps-10 sm:ps-10 ps-10" width={150} height={150} src="/Images/imple-img.png" alt="image" />
				</div>
			</div>

			<div className='w-full py-6 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-6 px-4'>

				<div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5'>

					<div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 col-span-1'>

						<div className='rounded-lg shadow-custom3 p-4 relative overflow-y-auto h-[510px] '>

							{/* implementation,statistical and mapping section */}
							<div className='w-full py-2 '>

								<div className="mb-4 ">
									<ul className="flex flex-wrap 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
										<li className="me-2" role="presentation">
											<button className="inline-block p-1 border-b-2 border-[#D9D9D9] rounded-t-lg text-[#00000080] hover:text-[#064454] focus:text-[#064454] focus:border-[#064454]" id="implementation-tab" data-tabs-target="#implementation" type="button" role="tab" aria-controls="implementation" aria-selected="false"> Implementation/Coding Tool</button>
										</li>
										<li className="me-2" role="presentation">
											<button className="inline-block p-1 border-b-2 border-[#D9D9D9] rounded-t-lg text-[#00000080] hover:text-[#064454] focus:text-[#064454] focus:border-[#064454]" id="statistical-tab" data-tabs-target="#statistical" type="button" role="tab" aria-controls="statistical" aria-selected="false">Statistical Analysis Tool</button>
										</li>
										<li className="me-2" role="presentation">
											<button className="inline-block p-1 border-b-2 border-[#D9D9D9] rounded-t-lg text-[#00000080] hover:text-[#064454] focus:text-[#064454] focus:border-[#064454]" id="mapping-tab" data-tabs-target="#mapping" type="button" role="tab" aria-controls="mapping" aria-selected="false">Mapping and Designing Tool</button>
										</li>
									</ul>
								</div>

								<div id="default-tab-content">

									{/* implementation section */}
									<div className="hidden rounded-lg" id="implementation" role="tabpanel" aria-labelledby="implementation-tab">

										<ImplementationSection />

									</div>

									{/* statistical section */}
									<div className="hidden rounded-lg" id="statistical" role="tabpanel" aria-labelledby="statistical-tab">

										<StatisticalSection />

									</div>

									{/* mapping section */}
									<div className="hidden rounded-lg" id="mapping" role="tabpanel" aria-labelledby="mapping-tab">

										<MappingSection />

									</div>

								</div>

							</div>
						</div>

					</div>

					{/* service table */}
					<div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-1'>
						<div className='rounded-lg border-[1px] border-cyan-700'>
				
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
													Tools
												</th>
												<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
													Python
												</td>
												<td className="px-1 py-2">
													Matlab
												</td>
											</tr>
											<tr className="bg-white text-center">
												<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
													Methods
												</th>
												<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
													2
												</td>
												<td className="px-1 py-2">
													3
												</td>
											</tr>
											<tr className="bg-white text-center">
												<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
													Dataset
												</th>
												<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
													2
												</td>
												<td className="px-1 py-2">
													3
												</td>
											</tr>
											<tr className="bg-white text-center">
												<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
													Review
												</th>
												<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
													2
												</td>
												<td className="px-1 py-2">
													3
												</td>
											</tr>
											<tr className="bg-white text-center">
												<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
													Questionnaire
												</th>
												<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
													50
												</td>
												<td className="px-1 py-2">
													100
												</td>
											</tr>
											<tr className="bg-white text-center">
												<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
													Objective/Hypothesis
												</th>
												<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
													10
												</td>
												<td className="px-1 py-2">
													60
												</td>
											</tr>
											<tr className="bg-white text-center">
												<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
													Respondent
												</th>
												<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
													500
												</td>
												<td className="px-1 py-2">
													1000
												</td>
											</tr>
											<tr className="bg-white text-center">
												<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
													No Pilot Study
												</th>
												<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
													No
												</td>
												<td className="px-1 py-2">
													Yes
												</td>
											</tr>
											<tr className="bg-white text-center">
												<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
													Complexity
												</th>
												<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
													100% - 0
												</td>
												<td className="px-1 py-2">
													150% - 10000
												</td>
											</tr>
										</tbody>
									</table>
									<div className=' flex items-center justify-end pt-2 px-3'>
										<button type='button' onClick={onClickhandle} className='py-1 font-bold text-[14px] text-[#064454] flex items-center px-2 justify-end'> Check Price Distribution <IoIosArrowDown className='mx-2' /> </button>
									</div>
								</div>

								<div className={` ${priceTable ? 'block' : 'hidden'} relative overflow-x-auto rounded-[18px]`}>
									<h3 className='py-6 px-10 text-[20px] font-bold'>Price Distribution</h3>
									<table className="w-full text-sm text-left rtl:text-right text-black">
										<tbody>
											<tr className="bg-white">
												<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
													Base Price
												</th>
												<td className="px-10 py-2">
													₹30000
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
													Page count
												</th>
												<td className="px-10 py-2">
													₹10000
												</td>
											</tr>
											<tr className="bg-white">
												<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
													Writing Tool
												</th>
												<td className="px-10 py-2">
													₹10000
												</td>
											</tr>
											<tr className="bg-white">
												<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
													Reference Tool
												</th>
												<td className="px-10 py-2">
													₹5000
												</td>
											</tr>
											<tr className="bg-white">
												<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
													PPT
												</th>
												<td className="px-10 py-2">
													₹5000
												</td>
											</tr>
											<tr className="bg-white">
												<th scope="row" className="px-10 pt-2 pb-6 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
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
