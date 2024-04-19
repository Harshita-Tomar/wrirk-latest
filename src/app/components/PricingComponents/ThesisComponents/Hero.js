"use client"
import React, { useEffect, useState } from 'react'
import { initFlowbite } from 'flowbite'
import Image from 'next/image';
import GeneralForm from '@/app/utils/Formutils/GeneralForm';
import { IoIosArrowDown } from "react-icons/io";
import ThesisImplementationTab from './ThesisImplementationTab';
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";

const Hero = () => {
	const [priceTable, setPriceTable] = useState(false)
	const onClickhandle = (e) => {
		e.preventDefault();
		setPriceTable(!priceTable);
	}

	useEffect(() => {
		initFlowbite();
	}, [])


	return (
		<div>		

			<div className='w-full py-6 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-6 px-4'>

				<div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-5'>

					<div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 col-span-1'>
						<div className='rounded-lg shadow-custom3 p-4'>
							<div className='p-0 '>
								<div className='flex justify-end items-center gap-x-6 py-1 border-b-[1px] border-b-gray-300'>

									<div className="flex items-center py-2">
										<input defaultChecked id="default-radio-1" type="radio" value="radio-1" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
										<label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900">Upto 2 Reviews</label>
									</div>
									<div className="flex items-center py-2">
										<input id="default-radio-2" type="radio" value="radio-2" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
										<label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900">Unlimited</label>
									</div>
								</div>
							</div>
							{/* tool enable/disable option */}
							<div className='py-2 flex justify-end'>

								{/* buttons */}

								<ul className="grid grid-cols-3 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-3 sm:gap-3 gap-3 w-full relative pt-2  text-[10px]">
								<li className='relative flex'>
										<input type="radio" id="yreq" name="nTool" value="yreq" className="hidden peer" required />
										<label htmlFor="yreq" className="cursor-pointer 2xl:px-2 xl:px-2 lg:px-2 md:px-2 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md items-center flex justify-center text-wrap w-full leading-[16px]">
											<span className="text-center">Required separately</span>
										</label>
									</li>									
									<li className='relative flex'>
										<input type="radio" id="ntreq" name="nTool" value="ntreq" className="hidden peer" required />
										<label htmlFor="ntreq" className="cursor-pointer 2xl:px-2 xl:px-2 lg:px-2 md:px-2 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md items-center flex justify-center text-wrap w-full leading-[16px]">
											<span className="text-center">Provided by client or not send separately</span>
										</label>
									</li>
									<li className='relative flex'>
										<input defaultChecked type="radio" id="notool" name="nTool" value="notool" className="hidden peer" required />
										<label htmlFor="notool" className="cursor-pointer 2xl:px-2 xl:px-2 lg:px-2 md:px-2 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md items-center flex justify-center text-wrap w-full leading-[16px]">
											<span className="text-center ">No Tool</span>
										</label>
									</li>
								</ul>
							</div>

							<ThesisImplementationTab />
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

									<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
										<div className='w-1/3 '>No. of Pages </div>
										<div className='w-2/3 flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-end sm:justify-end justify-end '>
											<form className="max-w-xs mx-auto">
												<div className="relative flex items-center max-w-[6rem]">
													<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
														<RiSubtractLine />
													</button>
													<input type="text" id="methods-input" data-input-counter data-input-counter-min="1" data-input-counter-max="2000" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="200" required />
													<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
														<RiAddLine />
													</button>
												</div>
											</form>
										</div>
									</div>

									<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2">
										<p className='text-[14px] text-black font-medium'>RoL Type</p>
										<ul className='flex items-center justify-start w-full relative py-4 '>
											<li>
												<input defaultChecked type="radio" id="standard" name="RoL" value="Standard" className="hidden peer" required />
												<label htmlFor="standard" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
													<span className="text-center">Standard/Manual</span>
												</label>
											</li>

											<li>
												<input type="radio" id="Bibliometric" name="RoL" value="Bibliometric" className="hidden peer" required />
												<label htmlFor="Bibliometric" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
													<span className="text-center">Bibliometric</span>
												</label>
											</li>

											<li>
												<input type="radio" id="Systematic" name="RoL" value="Systematic" className="hidden peer" required />
												<label htmlFor="Systematic" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
													<span className="text-center">Systematic</span>
												</label>
											</li>

										</ul>
									</div>

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

									<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2">
										<p className='text-[14px] text-black font-medium'>Writing Tool</p>
										<ul className='flex items-center justify-start xl:w-3/4 3xl:3/4 2xl:w-3/4 lg:w-3/4 md:w-full sm:w-full w-full relative py-4 '>
											<li>
												<input defaultChecked type="radio" id="word" name="write" value="word" className="hidden peer" required />
												<label htmlFor="word" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
													<span className="text-center">Word</span>
												</label>
											</li>

											<li>
												<input type="radio" id="Latex" name="write" value="Latex" className="hidden peer" required />
												<label htmlFor="Latex" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
													<span className="text-center">Latex</span>
												</label>
											</li>

										</ul>
									</div>

									{/* complexity */}
									<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
										<div className='w-1/3 '>Complexity</div>
										<div className='w-2/3 flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-end sm:justify-end justify-end '>
											<form className="max-w-xs mx-auto">
												<div className="relative flex items-center max-w-[6rem]">
													<button type="button" id="decrement-button" data-input-counter-decrement="complexity-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
														<RiSubtractLine />
													</button>
													<input type="text" id="complexity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="100%" required />
													<button type="button" id="increment-button" data-input-counter-increment="complexity-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
														<RiAddLine />
													</button>
												</div>
											</form>
										</div>
									</div>

									<div className="flex items-center py-2 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]">
										<label for="default-checkbox" className=" pe-4 font-medium text-black"> PPT Required</label>
										<input id="default-checkbox" type="checkbox" value="" name="default-checkbox" className="cursor-pointer w-6 h-6 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095] focus:ring-[#2E8095] focus:ring-1" />
									</div>

									<div className="flex items-center py-2 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]">
										<label for="default-checkbox" className=" pe-4 font-medium text-black">ExcelSheet/Tabular</label>
										<input id="default-checkbox" type="checkbox" value="" name="default-checkbox" className="cursor-pointer w-6 h-6 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095] focus:ring-[#2E8095] focus:ring-1" />
									</div>

									{/* revise */}
									<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
										<div className='w-1/3 '>Review</div>
										<div className='w-2/3 flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-end sm:justify-end justify-end '>
											<form className="max-w-xs mx-auto">
												<div className="relative flex items-center max-w-[6rem]">
													<button type="button" id="decrement-button" data-input-counter-decrement="review-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
														<RiSubtractLine />
													</button>
													<input type="text" id="review-input" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="2" required />
													<button type="button" id="increment-button" data-input-counter-increment="review-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
														<RiAddLine />
													</button>
												</div>
											</form>
										</div>
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
											No. of Words
										</th>
										<td className=" px-10 py-2">
											5000
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
									<tr className="bg-white text-center">
										<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
											Writing Tool
										</th>
										<td className="px-10 py-2">
											Word
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
								</tbody>
							</table>
							<div className=' flex items-center justify-end pt-2 px-3'>
								<button type='button' onClick={onClickhandle} className='py-1 font-bold text-[#064454] flex items-center px-2 justify-end'> Check Price Distribution <IoIosArrowDown className='mx-2' /> </button>
							</div>


							<div className={` ${priceTable ? 'block' : 'hidden'} relative overflow-x-auto rounded-[18px]`}>
								<h3 className='py-2 px-10 text-[16px] font-bold'>Price Distribution</h3>
								<table className="w-full text-sm text-left rtl:text-right text-black">
									<tbody className='text-[12px]'>
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
												Page count
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

		</div>
	)
}

export default Hero
