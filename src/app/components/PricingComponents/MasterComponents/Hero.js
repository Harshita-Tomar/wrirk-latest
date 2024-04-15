"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import MasterImplementation from './MasterImplementation';
import MasterMapping from './MasterMapping';
import MasterStatistical from './MasterStatistical';
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
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
			<div className='flex justify-between items-center w-full 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-4 px-4 py-4 bg-[#2E8095]'>
				<div className='2xl:leading-[44px] xl:leading-[44px] lg:leading-[44px] md:leading-[36px] sm:leading-[30px] leading-[30px]'>
					<h3 className='2xl:leading-[44px] xl:leading-[44px] lg:leading-[44px] md:leading-[36px] sm:leading-[30px] leading-[30px] 2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[36px] sm:text-[30px] text-[28px] text-white font-black tracking-wide'>MASTER DISSERTATION </h3>
				</div>
				<div className='w-full flex items-center justify-end overflow-hidden object-cover'>
					<Image className="rounded-md 2xl:ps-0 xl:ps-0 lg:ps-0 md:ps-10 sm:ps-10 ps-10" width={150} height={150} src="/Images/master-img.png" alt="image" />
				</div>
			</div>
			
			<div className='w-full py-6 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-6 px-4'>

				<div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5'>

					<div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 col-span-1 '>

						<div className='rounded-lg shadow-custom3 p-4'>
							{/* Research method section */}
							<div className="p-0">
								<ul className="flex flex-wrap 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
									<li className="me-2" role="presentation">
										<button className="inline-block p-1 border-b-2 border-[#064454] rounded-t-lg text-sky-950" id="writing-tab" data-tabs-target="#Research" type="button" role="tab" aria-controls="Research" aria-selected="false">RESEARCH METHOD</button>
									</li>
								</ul>
							</div>
							<div id="default-tab-content">

								<div className="hidden p-0" id="Research" role="tabpanel" aria-labelledby="Research-tab">

									{/* buttons */}

									<ul className="2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-4 flex items-center justify-start xl:w-3/4 3xl:3/4 2xl:w-3/4 lg:w-3/4 md:w-full sm:w-full w-full relative py-2 ">
										<li>
											<input defaultChecked type="radio" id="notreq" name="nropt" value="notreq" className="hidden peer" required />
											<label htmlFor="notreq" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
												<span className="text-center">Not Required Separately</span>
											</label>
										</li>
										<li>
											<input type="radio" id="req" name="nropt" value="req" className="hidden peer" required />
											<label htmlFor="req" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
												<span className="text-center">Required Separately</span>
											</label>
										</li>

									</ul>

								</div>
							</div>
						</div>

						<div className='rounded-lg shadow-custom3 p-4  mt-8 '>
							{/* tool enable/disable option */}
							<div className='py-2 flex justify-end'>

								{/* buttons */}

								<ul className="grid grid-cols-3 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-3 sm:gap-3 gap-3 w-full relative pt-2 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]">
									<li className='relative flex'>
										<input defaultChecked type="radio" id="notool" name="nTool" value="notool" className="hidden peer" required />
										<label htmlFor="notool" className="cursor-pointer 2xl:px-2 xl:px-2 lg:px-2 md:px-2 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md items-center flex justify-center text-wrap w-full leading-[16px]">
											<span className="text-center ">No Tool</span>
										</label>
									</li>
									<li className='relative flex'>
										<input type="radio" id="ntreq" name="nTool" value="ntreq" className="hidden peer" required />
										<label htmlFor="ntreq" className="cursor-pointer 2xl:px-2 xl:px-2 lg:px-2 md:px-2 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md items-center flex justify-center text-wrap w-full leading-[16px]">
											<span className="text-center">Not required separately</span>
										</label>
									</li>
									<li className='relative flex'>
										<input type="radio" id="yreq" name="nTool" value="yreq" className="hidden peer" required />
										<label htmlFor="yreq" className="cursor-pointer 2xl:px-2 xl:px-2 lg:px-2 md:px-2 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md items-center flex justify-center text-wrap w-full leading-[16px]">
											<span className="text-center">Required separately</span>
										</label>
									</li>
								</ul>
							</div>

							{/* implementation,statistical and mapping section */}
							<div className='w-full py-2 '>

								<div className="mb-4 ">
									<ul className="flex flex-wrap 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">

										<li className="me-2" role="presentation">
											<button className="inline-block p-2 border-b-2 border-[#D9D9D9] rounded-t-lg text-sky-950 hover:text-[#064454] uppercase focus:text-[#064454] focus:border-[#064454]" id="implementation-tab" data-tabs-target="#implementation" type="button" role="tab" aria-controls="implementation" aria-selected="false"> Implementation/Coding Tool</button>
										</li>
										<li className="me-2" role="presentation">
											<button className="inline-block p-2 border-b-2 border-[#D9D9D9] rounded-t-lg text-sky-950 hover:text-[#064454] uppercase focus:text-[#064454] focus:border-[#064454]" id="statistical-tab" data-tabs-target="#statistical" type="button" role="tab" aria-controls="statistical" aria-selected="false">Statistical Analysis Tool</button>
										</li>
										<li className="me-2" role="presentation">
											<button className="inline-block p-2 border-b-2 border-[#D9D9D9] rounded-t-lg text-[#00000080] hover:text-[#064454] uppercase focus:text-[#064454] focus:border-[#064454]" id="mapping-tab" data-tabs-target="#mapping" type="button" role="tab" aria-controls="mapping" aria-selected="false">Mapping and Designing Tool</button>
										</li>
									</ul>
								</div>

								<div id="default-tab-content">

									{/* implementation section */}
									<div className="rounded-lg" id="implementation" role="tabpanel" aria-labelledby="implementation-tab">

										<MasterImplementation />

									</div>

									{/* statistical section */}
									<div className="rounded-lg" id="statistical" role="tabpanel" aria-labelledby="statistical-tab">

										<MasterStatistical />

									</div>

									{/* mapping section */}
									<div className="rounded-lg" id="mapping" role="tabpanel" aria-labelledby="mapping-tab">

										<MasterMapping />

									</div>

								</div>

							</div>
						</div>
						<div className='rounded-lg shadow-custom3 p-4 mt-8'>

							<div className="p-0">
								<ul className="flex flex-wrap 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center " id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
									<li className="me-2" role="presentation">
										<button className="inline-block p-1 border-b-2 border-[#064454] rounded-t-lg text-sky-950" id="writing-tab" data-tabs-target="#writing" type="button" role="tab" aria-controls="writing" aria-selected="false">WRITING</button>
									</li>
								</ul>
							</div>
							<div id="default-tab-content">

								<div className="hidden p-0" id="writing" role="tabpanel" aria-labelledby="writing-tab">

									{/* methods */}
									<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
										<div className='w-1/3 '>No. of Pages Required</div>
										<div className='w-2/3 flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-end sm:justify-end justify-end '>
											<form className="max-w-xs mx-auto">
												<div className="relative flex items-center max-w-[6rem]">
													<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
														<RiSubtractLine />
													</button>
													<input type="text" id="methods-input" data-input-counter data-input-counter-min="1" data-input-counter-max="2000" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="30" required />
													<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
														<RiAddLine />
													</button>
												</div>
											</form>
											<span className='flex items-center justify-center px-2'>x 350 </span>
										</div>
									</div>

									<div className="flex items-center py-2 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]">
										<label for="default-checkbox" className=" pe-4 font-medium text-black"> PPT Required</label>
										<input id="default-checkbox" type="checkbox" value="" name="default-checkbox" className="cursor-pointer w-6 h-6 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095] focus:ring-[#2E8095] focus:ring-1" />
									</div>

								</div>

							</div>

						</div>

					</div>

					{/* service table */}
					<div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-1'>
						<div className='rounded-lg border-[1px] border-cyan-700 '>

							{/*<div className="w-full relative py-2 2xl:text-[14px] xl:text-[14px] lg:text[14px] md:text-[12px] sm:text-[12px] text-[12px]">

								
								<h6 className='px-2 py-2 font-bold flex items-center justify-start'><MdKeyboardArrowRight className='pe-1 text-[24px]' />Research Paper</h6>

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
												Required Separately
											</th>
											<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
												No
											</td>
											<td className="px-1 py-2">
												Yes
											</td>
										</tr>
									</tbody>
								</table>

							
								<h6 className='px-2 py-2 font-bold  flex items-center justify-start'><MdKeyboardArrowRight className='pe-1 text-[24px]' />Implementation/Analysis</h6>

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

						
								<h6 className='px-2 py-2 font-bold  flex items-center justify-start'><MdKeyboardArrowRight className='pe-1 text-[24px]' />Writing</h6>

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
												Pages Required
											</th>
											<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
												350
											</td>
											<td className="px-1 py-2">
												700
											</td>
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												PPT Required
											</th>
											<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
												No
											</td>
											<td className="px-1 py-2">
												yes
											</td>
										</tr>
									</tbody>
								</table>

								<div className=' flex items-center justify-end pt-2 px-3'>
									<button type='button' onClick={onClickhandle} className='py-1 font-bold text-[#064454] flex items-center px-2 justify-end'> Check Price Distribution <IoIosArrowDown className='mx-2' /> </button>
								</div>
							</div>*/}

							{/* testing table design */}
							<div className="w-full relative py-2 2xl:text-[14px] xl:text-[14px] lg:text[14px] md:text-[12px] sm:text-[12px] text-[12px]">

								<table className="w-full text-sm text-left rtl:text-right text-black text-wrap">
									<thead className="text-[14px] text-black uppercase">
										<tr className='text-start'>
											<th scope="col" className=" px-10 py-2 ">
												Services
											</th>
											<th scope="col" className="px-10 py-2">
												Basic
											</th>

										</tr>
									</thead>
									<tbody className='text-[12px]'>

										{/*research paper table*/}
										<tr className='px-2 py-2 font-bold flex items-center justify-start'>
											<th className='flex'>
												<MdKeyboardArrowRight className='pe-1 text-[24px]' />Research Paper
											</th>
										</tr>

										<tr className="bg-white text-center">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Required Separately
											</th>
											<td className="px-10 py-2">
												No
											</td>

										</tr>

										{/* implementaion/statistical/mapping table */}

										<tr className='px-2 py-2 font-bold flex items-center justify-start'>
											<th className='flex'>
												<MdKeyboardArrowRight className='pe-1 text-[24px]' />Implementation/Analysis
											</th>
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Tools
											</th>
											<td className="px-10 py-2 ">
												Python
											</td>

										</tr>

										<tr className="bg-white text-center">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Methods
											</th>
											<td className="px-10 py-2 ">
												2
											</td>

										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Dataset
											</th>
											<td className="px-10 py-2  ">
												2
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
												Questionnaire
											</th>
											<td className="px-10 py-2">
												50
											</td>

										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Complexity
											</th>
											<td className="px-10 py-2 ">
												100% - 0
											</td>

										</tr>

										{/* mapping table */}
										<tr className='px-2 py-2 font-bold flex items-center justify-start'>
											<th className='flex'>
												<MdKeyboardArrowRight className='pe-1 text-[24px]' />Writing
											</th>
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Pages Required
											</th>
											<td className="px-10 py-2 ">
												350
											</td>

										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												PPT Required
											</th>
											<td className="px-10 py-2  ">
												No
											</td>

										</tr>
									</tbody>
								</table>



								<div className=' flex items-center justify-end pt-2 px-3'>
									<button type='button' onClick={onClickhandle} className='py-1 font-bold text-[#064454] flex items-center px-2 justify-end'> Check Price Distribution <IoIosArrowDown className='mx-2' /> </button>
								</div>
							</div>

							<div className={` ${priceTable ? 'block' : 'hidden'} relative overflow-x-auto rounded-[18px]`}>
								<h3 className='py-6 px-10 text-[16px] font-bold'>Price Distribution</h3>
								<table className="w-full text-sm text-left rtl:text-right text-black">
									<tbody className='text-[12px]'>
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
