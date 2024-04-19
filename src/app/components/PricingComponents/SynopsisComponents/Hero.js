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
				
					<h3 className='2xl:text-[30px] xl:text-[30px] lg:text-[30px] md:text-[26px] sm:text-[22px] text-[22px] text-white font-black tracking-wide m-0'>RESEARCH </h3>
					<h3 className='2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[36px] sm:text-[30px] text-[28px] text-white font-black tracking-wide'>PROPOSAL/SYNOPSIS </h3>
				</div>
				<div className='w-full flex items-center justify-end overflow-hidden object-cover'>
					<img className="rounded-md  sm:pr-10 md:pr-10 lg:pr-0 xl:pr-0 2xl:pr-0" width={115} height={115} src="/Images/synopsis.png" alt="image" />
				</div>
			</div>


			<div className='w-full py-6 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-6 px-4'>

				<div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5'>

					<div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 col-span-1'>
						<div className='rounded-lg shadow-custom3 p-4'>

							<div className="p-0">
								<ul className="flex flex-wrap 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center " id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
									<li className="me-2" role="presentation">
										<button className="inline-block p-1 border-b-2 border-[#064454] rounded-t-lg text-sky-950" id="writing-tab" data-tabs-target="#writing" type="button" role="tab" aria-controls="writing" aria-selected="false">RESEARCH PROPOSAL/SYNOPSIS</button>
									</li>
								</ul>
							</div>

							{/* ROL Type */}
							<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-4 ">
								<p className='text-[14px] text-black font-medium me-6'>ROL Type</p>

								<ul className="flex flex-wrap items-center justify-start w-full gap-y-4 relative py-4 ">
									<li >
										<input defaultChecked type="radio" id="Standard" name="roltype" value="Standard" className="hidden peer" required />
										<label htmlFor="Standard" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
											<span className="text-center">Standard</span>
										</label>
									</li>
									<li>
										<input  type="radio" id="Bibliometric" name="roltype" value="Bibliometric" className="hidden peer" required />
										<label htmlFor="Bibliometric" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
											<span className="text-center">Bibliometric</span>
										</label>
									</li>
									<li>
										<input  type="radio" id="Systematic" name="roltype" value="Systematic" className="hidden peer" required />
										<label htmlFor="Systematic" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
											<span className="text-center">Systematic</span>
										</label>
									</li>
									
								</ul>
							</div>


							{/* Reference Tool */}
							<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2">
								<p className='text-[14px] text-black font-medium'>Reference Tool</p>
								<ul className='flex items-center justify-start xl:w-3/4 3xl:3/4 2xl:w-3/4 lg:w-3/4 md:w-full sm:w-full w-full relative py-4 '>
									<li>
										<input defaultChecked type="radio" id="Manual" name="Standard" value="Manual" className="hidden peer" required />
										<label htmlFor="Manual" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
											<span className="text-center">Manual</span>
										</label>
									</li>

									<li>
										<input type="radio" id="Mendely" name="Standard" value="Mendely" className="hidden peer" required />
										<label htmlFor="Mendely" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
											<span className="text-center">Mendely</span>
										</label>
									</li>

									<li>
										<input  type="radio" id="Zotero" name="Standard" value="Zotero" className="hidden peer" required />
										<label htmlFor="Zotero" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
											<span className="text-center">Zotero</span>
										</label>
									</li>

								</ul>
							</div>

							{/* Writing Tool */}
							<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2">
								<p className='text-[14px] text-black font-medium'>Writing Tool</p>
								<ul className='flex items-center justify-start xl:w-3/4 3xl:3/4 2xl:w-3/4 lg:w-3/4 md:w-full sm:w-full w-full relative py-4 '>
									<li>
										<input defaultChecked type="radio" id="Word" name="Writing" value="Word" className="hidden peer" required />
										<label htmlFor="Word" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
											<span className="text-center">Word</span>
										</label>
									</li>

									<li>
										<input type="radio" id="Latex" name="Writing" value="Latex" className="hidden peer" required />
										<label htmlFor="Latex" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
											<span className="text-center">Latex</span>
										</label>
									</li>

								</ul>
							</div>

							{/* Complexity */}
							<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2">
								<p className='text-[14px] text-black font-medium'>Complexity</p>
								<ul className='flex flex-wrap items-center justify-start w-full gap-y-4 relative py-4 '>
									<li>
										<input defaultChecked type="radio" id="Complexity1" name="Complexity" value="Complexity1" className="hidden peer" required />
										<label htmlFor="Complexity1" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
											<span className="text-center">100%-0000</span>
										</label>
									</li>

									<li>
										<input  type="radio" id="Complexity2" name="Complexity" value="Complexity2" className="hidden peer" required />
										<label htmlFor="Complexity2" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
											<span className="text-center">150%-5000</span>
										</label>
									</li>

									<li>
										<input  type="radio" id="Complexity3" name="Complexity" value="Complexity3" className="hidden peer" required />
										<label htmlFor="Complexity3" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
											<span className="text-center">200%-10000</span>
										</label>
									</li>

									<li className='mt-0.5'>
										<input type="radio" id="Complexity4" name="Complexity" value="Complexity4" className="hidden peer" required />
										<label htmlFor="Complexity4" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
											<span className="text-center">300%-20000</span>
										</label>
									</li>

								</ul>
							</div>


							{/* no of page code  */}
							<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] mt-3'>


								<div className='w-1/3 text-black font-medium text-sm'>No. of Pages</div>
								<div className='w-2/3 '>
									<form className="max-w-xs mx-auto">
										<div className="relative flex items-center max-w-[6rem]">
											<button type="button" id="decrement-synopsis" data-input-counter-decrement="pagecount-input-synopsis" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
												<RiSubtractLine />
											</button>
											<input type="text" id="pagecount-input-synopsis" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="15" required />
											<button type="button" id="increment-synopsis" data-input-counter-increment="pagecount-input-synopsis" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
												<RiAddLine />
											</button>
										</div>
									</form>
								</div>
							</div>

							{/* no of roll  */}
							<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>


								<div className='w-1/3 text-black font-medium text-sm'>No. of Roll</div>
								<div className='w-2/3 '>
									<form className="max-w-xs mx-auto">
										<div className="relative flex items-center max-w-[6rem]">
											<button type="button" id="decrement-roll" data-input-counter-decrement="pagecount-input-roll" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
												<RiSubtractLine />
											</button>
											<input type="text" id="pagecount-input-roll" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="10" required />
											<button type="button" id="increment-roll" data-input-counter-increment="pagecount-input-roll" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
												<RiAddLine />
											</button>
										</div>
									</form>
								</div>
							</div>


							{/* ppt  */}
							<div className="flex items-center py-2 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]">
								<label for="ppt" className=" pe-4 text-black font-medium text-sm"> PPT Required</label>
								<input id="ppt" type="checkbox" value="" name="ppt" className="cursor-pointer w-5 h-5 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095] focus:ring-[#2E8095] focus:ring-1 ml-[1rem] lg:ml-[7rem]  md:ml-[6rem] sm:ml-[6rem]" />
							</div>

							{/* excel sheet */}
							<div className="flex items-center py-2 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]">
								<label for="excel_sheet" className=" pe-4 text-black font-medium text-sm">
									Excel Sheet
								</label>
								<input id="excel_sheet" type="checkbox" value="" name="excel_sheet" className="cursor-pointer w-5 h-5 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095] focus:ring-[#2E8095] focus:ring-1 ml-[2rem] lg:ml-[7.8rem]  md:ml-[6.8rem] sm:ml-[6.8rem]" />
							</div>

							{/* Revise  */}
							<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
								<div className='w-1/3 text-black font-medium text-sm'>Review</div>
								<div className='w-2/3 '>
									<form className="max-w-xs mx-auto">
										<div className="relative flex items-center max-w-[6rem]">
											<button type="button" id="decrement-revise" data-input-counter-decrement="pagecount-input-revise" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
												<RiSubtractLine />
											</button>
											<input type="text" id="pagecount-input-revise" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="2" required />
											<button type="button" id="increment-revise" data-input-counter-increment="pagecount-input-revise" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
												<RiAddLine />
											</button>
										</div>
									</form>
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
		</>
	)
}

export default Hero
