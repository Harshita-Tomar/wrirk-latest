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
					<h3 className='text-[19px] sm:text-[30px] md:text-[31px] lg:text-[38px] xl:text-[38px] 2xl:text-[38px] text-white font-black tracking-wide'>RESEARCH PROPOSAL/ SYNOPSIS</h3>
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
								<ul className="flex flex-wrap 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
									<li className="me-2" role="presentation">
										<div className="inline-block p-1 border-b-2 border-[#064454] rounded-t-lg text-sky-950 " id="synopsis" data-tabs-target="#synopsis" type="button" role="tab" aria-controls="synopsis" aria-selected="false">RESARCH PROPOSAL/SYNOPSIS
										</div>
									</li>
								</ul>
							</div>

							{/* <div className=' '> */}

							{/* <div className='mt-2'>
								<h3 className="mb-2 text-md font-bold text-gray-900 ">ROL Type</h3>
								<ul className="grid w-full gap-1 md:grid-cols-5">
									<li>
										<input defaultChecked type="radio" id="Standard" name="roltype" value="Standard" className="hidden peer" required />
										<label htmlFor="Standard" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
											<span className="text-center">Standard</span>
										</label>
									</li>
									<li>
										<input type="radio" id="Bibliometric" name="roltype" value="Bibliometric" className="hidden peer" />

										<label htmlFor="Bibliometric" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
											<span className="text-center">Bibliometric</span>
										</label>
									</li>
									<li>
										<input type="radio" id="Systematic" name="roltype" value="Systematic" className="hidden peer" />

										<label htmlFor="Systematic" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
											<span className="text-center">Systematic</span>
										</label>
									</li>
									<li>
										<input type="radio" id="Both" name="roltype" value="Both" className="hidden peer" />

										<label htmlFor="Both" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
											<span className="text-center">Both</span>
										</label>
									</li>
								</ul>
							</div> */}

							<div className="container mt-2">
							<h3 className=" mt-2 text-md font-bold text-gray-900 ">ROL Type</h3>
								<ul className="grid w-full gap-1 grid-cols-2 md:grid-cols-5 sm:grid-cols-2">
									<li className='mt-[20px]'>
										<input defaultChecked type="radio" id="Standard" name="roltype" value="Standard" className="hidden peer" required />
										<label htmlFor="Standard" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded text-center text-wrap me-4">
											<span className="text-center">Standard</span>
										</label>

									</li>
									<li className='mt-[20px]'>
										<input type="radio" id="Bibliometric" name="roltype" value="Bibliometric" className="hidden peer" />
										<label htmlFor="Bibliometric" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded text-center text-wrap me-4">
											<span className="text-center">Bibliometric</span>
										</label>

									</li>
									<li className='mt-[20px]'>
										<input type="radio" id="Systematic" name="roltype" value="Systematic" className="hidden peer" />
										<label htmlFor="Systematic" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded text-center text-wrap me-4">
											<span className="text-center">Systematic</span>
										</label>
									</li>
									<li className='mt-[20px]'>
										<input type="radio" id="Both" name="roltype" value="Both" className="hidden peer" />
										<label htmlFor="Both" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded text-center text-wrap me-4">
											<span className="text-center">Both</span>
										</label>
									</li>
								</ul>
							</div>

							<div>
								<h3 className=" mt-5 text-md font-bold text-gray-900 ">Reference Tool</h3>
								<ul className="grid w-full gap-1 grid-cols-2 md:grid-cols-5 sm:grid-cols-2">
									<li className='mt-[20px]'>
										<input defaultChecked type="radio" id="Manual" name="Tool" value="Manual" className="hidden peer" required />

										<label htmlFor="Manual" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded text-center text-wrap me-4">
											<span className="text-center">Manual</span>
										</label>
									</li>
									<li className='mt-[20px]'>
										<input type="radio" id="Mendely" name="Tool" value="Mendely" className="hidden peer" />

										<label htmlFor="Mendely" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded text-center text-wrap me-4">
											<span className="text-center">Mendely</span>
										</label>
									</li>
									<li className='mt-[20px]'>
										<input type="radio" id="Zotero" name="Tool" value="Zotero" className="hidden peer" />

										<label htmlFor="Zotero" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded text-center text-wrap me-4">
											<span className="text-center">Zotero</span>
										</label>
									</li>

								</ul>
							</div>

							<div>
								<h3 className=" mt-5 text-md font-bold text-gray-900 ">Writing Tool</h3>
								<ul className="grid w-full gap-1 grid-cols-2 md:grid-cols-5 sm:grid-cols-2">
									<li className='mt-[20px]'>
										<input defaultChecked type="radio" id="Word" name="Writing" value="Word" className="hidden peer" required />

										<label htmlFor="Word" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded text-center text-wrap me-4">
											<span className="text-center">Word</span>
										</label>
									</li>
									<li className='mt-[20px]'>
										<input type="radio" id="Latex" name="Writing" value="Latex" className="hidden peer" />

										<label htmlFor="Latex" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded text-center text-wrap me-4">
											<span className="text-center">Latex</span>
										</label>

									</li>

								</ul>
							</div>

							{/* no of page code  */}
							{/* <div className='flex gap-2 mt-5'>
								<div>No. of Pages</div>

								<div className='flex  gap-2 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]  grid grid-cols-1'>

									<div className='w-full '>
										<form className="max-w-xs mx-auto">
											<div className="relative flex  max-w-[8rem]">
												<button type="button" id="decrement-synopsis" data-input-counter-decrement="pagecount-input-synopsis" className="bg-[white]  border border-[gray] rounded-md p-2 h-8 focus:ring-[gray] focus:ring-1 focus:outline-none flex   text-[14px] text-black">
													<RiSubtractLine />
												</button>
												<input type="text" id="pagecount-input-synopsis" data-input-counter data-input-counter-min="1000" data-input-counter-max="10000" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="1000" required />
												<button type="button" id="increment-synopsis" data-input-counter-increment="pagecount-input-synopsis" className="bg-[white]  border border-[gray] rounded-md p-2 h-8 focus:ring-[gray] focus:ring-1 focus:outline-none flex   text-[14px] text-black">
													<RiAddLine />
												</button>
											</div>
										</form>
									</div>
								</div>

							</div> */}

							<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] mt-3'>
								<div className='w-1/3 font-semibold text-sm '>No. of Pages</div>
								<div className='w-2/3 '>
									<form className="max-w-xs mx-auto">
										<div className="relative flex items-center max-w-[6rem]">
											<button type="button" id="decrement-synopsis" data-input-counter-decrement="pagecount-input-synopsis" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
												<RiSubtractLine />
											</button>
											<input type="text" id="pagecount-input-synopsis" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="2" required />
											<button type="button" id="increment-synopsis" data-input-counter-increment="pagecount-input-synopsis" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
												<RiAddLine />
											</button>
										</div>
									</form>
								</div>
							</div>

							{/* no of roll  */}
							{/* <div className='flex gap-2 mt-5'>
								<div>No. of Roll</div>
								<div className='flex  gap-2 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]  grid grid-cols-1'>
									<div className='w-full '>
										<form className="max-w-xs mx-auto">
											<div className="relative flex  max-w-[8rem]">
												<button type="button" id="decrement-roll" data-input-counter-decrement="pagecount-input-roll" className="bg-[white]  border border-[gray] rounded-md p-2 h-8 focus:ring-[gray] focus:ring-1 focus:outline-none flex   text-[14px] text-black">
													<RiSubtractLine />
												</button>
												<input type="text" id="pagecount-input-roll" data-input-counter data-input-counter-min="10" data-input-counter-max="10000" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="1000" required />
												<button type="button" id="increment-roll" data-input-counter-increment="pagecount-input-roll" className="bg-[white]  border border-[gray] rounded-md p-2 h-8 focus:ring-[gray] focus:ring-1 focus:outline-none flex   text-[14px] text-black">
													<RiAddLine />
												</button>
											</div>
										</form>
									</div>
								</div>

							</div> */}
							<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
								<div className='w-1/3 font-semibold text-sm '>No. of Roll</div>
								<div className='w-2/3 '>
									<form className="max-w-xs mx-auto">
										<div className="relative flex items-center max-w-[6rem]">
											<button type="button" id="decrement-roll" data-input-counter-decrement="pagecount-input-roll" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
												<RiSubtractLine />
											</button>
											<input type="text" id="pagecount-input-roll" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="2" required />
											<button type="button" id="increment-roll" data-input-counter-increment="pagecount-input-roll" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
												<RiAddLine />
											</button>
										</div>
									</form>
								</div>
							</div>


							{/* ppt  */}
							<div className="flex items-center py-2 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]">
								<label for="ppt" className=" pe-4 font-semibold text-sm"> PPT Required</label>
								<input id="ppt" type="checkbox" value="" name="ppt" className="cursor-pointer w-6 h-6 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095] focus:ring-[#2E8095] focus:ring-1 ml-[1rem] lg:ml-[7rem]  md:ml-[6rem] sm:ml-[6rem]" />
							</div>
							
							{/* excel sheet */}

							<div className="flex items-center py-2 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]">
								<label for="excel_sheet" className=" pe-4 font-semibold text-sm">
									Excel Sheet
								</label>
								<input id="excel_sheet" type="checkbox" value="" name="excel_sheet" className="cursor-pointer w-6 h-6 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095] focus:ring-[#2E8095] focus:ring-1 ml-[2rem] lg:ml-[7.8rem]  md:ml-[6.8rem] sm:ml-[6.8rem]" />
							</div>

							{/* Revise  */}
							{/* <div className='flex gap-2 mt-5'>
								<div>Revise</div>
								<div className='flex  gap-2 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]  grid grid-cols-1'>
									<div className='w-full '>
										<form className="max-w-xs mx-auto">
											<div className="relative flex  max-w-[8rem]">
												<button type="button" id="decrement-revise" data-input-counter-decrement="pagecount-input-revise" className="bg-[white]  border border-[gray] rounded-md p-2 h-8 focus:ring-[gray] focus:ring-1 focus:outline-none flex   text-[14px] text-black">
													<RiSubtractLine />
												</button>
												<input type="text" id="pagecount-input-revise" data-input-counter data-input-counter-min="0" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="10" required />
												<button type="button" id="increment-revise" data-input-counter-increment="pagecount-input-revise" className="bg-[white]  border border-[gray] rounded-md p-2 h-8 focus:ring-[gray] focus:ring-1 focus:outline-none flex   text-[14px] text-black">
													<RiAddLine />
												</button>
											</div>
										</form>
									</div>
								</div>

							</div> */}
							<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
								<div className='w-1/3 font-semibold text-sm'>Review</div>
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

							{/* </div> */}

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
												ROL Type
											</th>
											<td className="px-1 py-2 border-e-[2px] border-[#00000059]">
												Standard
											</td>
											<td className="px-1 py-2">

											</td>
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Reference Tool
											</th>
											<td className="px-1 py-2 border-e-[2px] border-[#00000059]">
												Standard
											</td>
											<td className="px-1 py-2">

											</td>
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Writing Tool
											</th>
											<td className="px-1 py-2 border-e-[2px] border-[#00000059]">
												Word
											</td>
											<td className="px-1 py-2">

											</td>
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												No. of Pages
											</th>
											<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
												15
											</td>
											<td className="px-1 py-2">
												2
											</td>
										</tr>

										<tr className="bg-white text-center">
											<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												No. of ROL
											</th>
											<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
												10
											</td>
											<td className="px-1 py-2">
												3
											</td>
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												PPT
											</th>
											<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
												No
											</td>
											<td className="px-1 py-2">

											</td>
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Excel sheet/ Tabular
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
												Revise
											</th>
											<td className="px-1 py-2 border-e-[2px] border-[#00000059] line-through">
												0
											</td>
											<td className="px-1 py-2">
												3
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
												No. of Pages
											</th>
											<td className="px-10 py-2">
												₹20000
											</td>
										</tr>
										<tr className="bg-white">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Writing Tool
											</th>
											<td className="px-10 py-2">
												₹20000
											</td>
										</tr>
										<tr className="bg-white">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												No. of ROL
											</th>
											<td className="px-10 py-2">
												₹10000
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
												Excel sheet/ Tabular
											</th>
											<td className="px-10 pt-2 pb-6">
												₹5000
											</td>
										</tr>
										<tr className="bg-white">
											<th scope="row" className="px-10 pt-2 pb-6 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Revise
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
