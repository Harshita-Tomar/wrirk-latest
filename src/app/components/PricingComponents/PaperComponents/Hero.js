"use client"
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import Image from 'next/image';
import GeneralForm from '@/app/utils/Formutils/GeneralForm';

const Hero = () => {
	const [priceTable, setPriceTable] = useState(false)
	const onClickhandle = (e) => {
		e.preventDefault();
		setPriceTable(!priceTable);
	}
	return (
		<div>

			{/* Heading div */}
			<div className='flex justify-between items-center w-full 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-4 px-4 py-4 bg-[#2E8095]'>
				<div className='2xl:leading-[44px] xl:leading-[44px] lg:leading-[44px] md:leading-[36px] sm:leading-[30px] leading-[30px]'>
					<h3 className='2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[36px] sm:text-[30px] text-[28px] text-white font-black uppercase tracking-wide'>PAPER </h3>
				</div>
				<div className='w-full flex items-center justify-end overflow-hidden object-cover'>
					<Image className="rounded-md 2xl:ps-0 xl:ps-0 lg:ps-0 md:ps-10 sm:ps-10 ps-10" width={100} height={100} src="/Images/paper-img.png" alt="image" />
				</div>
			</div>

			<div className='w-full py-6 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-6 px-4'>

				<div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-5'>

					<div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 col-span-1'>
						<div className='rounded-lg shadow-custom3 p-4'>
							<div className="p-0">
								<ul className="flex flex-wrap 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center " id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
									<li className="me-2" role="presentation">
										<button className="inline-block p-1 border-b-2 border-[#064454] rounded-t-lg text-sky-950 uppercase" id="writing-tab" data-tabs-target="#writing" type="button" role="tab" aria-controls="writing" aria-selected="false">Paper</button>
									</li>
								</ul>
							</div>
							<div id="default-tab-content">

								<div className="p-0" id="writing" role="tabpanel" aria-labelledby="writing-tab">

									{/* paper type */}
									<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2">
										<p className='text-[14px] text-black font-medium'>Paper Type</p>

										<ul className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 2xl:gap-x-6 xl:gap-x-6 lg:gap-x-6 md:gap-x-6 sm:gap-x-3 gap-x-3 gap-y-4 w-full relative py-2 '>
											<li className='relative flex'>
												<input defaultChecked type="radio" id="Standard" name="papertype" value="Standard" className="hidden peer" required />
												<label htmlFor="Standard" className="cursor-pointer flex items-center justify-center 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap w-full ">
													<span className="text-center">Standard Review</span>
												</label>
											</li>

											<li className='relative flex'>
												<input type="radio" id="Research" name="papertype" value="Research" className="hidden peer" required />
												<label htmlFor="Research" className="cursor-pointer flex items-center justify-center 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap w-full ">
													<span className="text-center 2xl:text-nowrap xl:text-nowrap lg:text-wrap md:text-wrap sm:text-wrap text-wrap">Research Paper</span>
												</label>
											</li>

											<li className='relative flex'>
												<input type="radio" id="biblio" name="papertype" value="biblio" className="hidden peer" required />
												<label htmlFor="biblio" className="cursor-pointer flex items-center justify-center 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap w-full ">
													<span className="text-center 2xl:text-nowrap xl:text-nowrap lg:text-wrap md:text-wrap sm:text-wrap text-wrap">Bibliometric Review</span>
												</label>
											</li>

											<li className='relative flex'>
												<input type="radio" id="systemetic" name="papertype" value="systemetic" className="hidden peer" required />
												<label htmlFor="systemetic" className="cursor-pointer flex items-center justify-center 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap w-full ">
													<span className="text-center 2xl:text-nowrap xl:text-nowrap lg:text-wrap md:text-wrap sm:text-wrap text-wrap">Systemetic Review</span>
												</label>
											</li>
										</ul>
									</div>

									{/* indexing/listing */}

									<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2">
										<p className='text-[14px] text-black font-medium'>Indexing/Listing</p>

										<ul className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 2xl:gap-x-6 xl:gap-x-6 lg:gap-x-6 md:gap-x-6 sm:gap-x-3 gap-x-3 gap-y-4 w-full relative py-2 '>
											<li className='relative flex'>
												<input defaultChecked type="radio" id="Online" name="Tool" value="Online" className="hidden peer" required />
												<label htmlFor="Online" className="cursor-pointer flex items-center justify-center 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap w-full ">
													<span className="text-center">Online Conference</span>
												</label>
											</li>

											<li className='relative flex'>
												<input type="radio" id="Peer" name="Tool" value="Peer" className="hidden peer" required />
												<label htmlFor="Peer" className="cursor-pointer flex items-center justify-center 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap w-full ">
													<span className="text-center 2xl:text-nowrap xl:text-nowrap lg:text-wrap md:text-wrap sm:text-wrap text-wrap">Peer Reviewed / Printed Journals</span>
												</label>
											</li>

											<li className='relative flex'>
												<input type="radio" id="ugc" name="Tool" value="ugc" className="hidden peer" required />
												<label htmlFor="ugc" className="cursor-pointer flex items-center justify-center 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap w-full">
													<span className="text-center">UGC</span>
												</label>
											</li>
											<li className='relative flex'>
												<input type="radio" id="Scopus" name="Tool" value="Scopus" className="hidden peer" required />
												<label htmlFor="Scopus" className="cursor-pointer flex items-center justify-center 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap w-full">
													<span className="text-center">Scopus/PubMed/ABDC</span>
												</label>
											</li>
											<li className='relative flex'>
												<input type="radio" id="sci" name="Tool" value="sci" className="hidden peer" required />
												<label htmlFor="sci" className="cursor-pointer flex items-center justify-center 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap w-full">
													<span className="text-center">SCI</span>
												</label>
											</li>
										</ul>
									</div>

									{/* service type */}
									<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2">
										<p className='text-[14px] text-black font-medium'>Service Type</p>

										<ul className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 2xl:gap-x-6 xl:gap-x-6 lg:gap-x-6 md:gap-x-6 sm:gap-x-3 gap-x-3 gap-y-4 w-full relative py-2 '>
											<li className='relative flex'>
												<input defaultChecked type="radio" id="Rewriting" name="servicetype" value="Rewriting" className="hidden peer" required />
												<label htmlFor="Rewriting" className="cursor-pointer flex items-center justify-center 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap w-full ">
													<span className="text-center">Writing/Rewriting</span>
												</label>
											</li>

											<li className='relative flex'>
												<input type="radio" id="Paid" name="servicetype" value="Paid" className="hidden peer" required />
												<label htmlFor="Paid" className="cursor-pointer flex items-center justify-center 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap w-full ">
													<span className="text-center 2xl:text-nowrap xl:text-nowrap lg:text-wrap md:text-wrap sm:text-wrap text-wrap">Acceptance(Paid)</span>
												</label>
											</li>

											<li className='relative flex'>
												<input type="radio" id="nonpaid" name="servicetype" value="nonpaid" className="hidden peer" required />
												<label htmlFor="nonpaid" className="cursor-pointer flex items-center justify-center 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap w-full ">
													<span className="text-center 2xl:text-nowrap xl:text-nowrap lg:text-wrap md:text-wrap sm:text-wrap text-wrap">Acceptance(Non-Paid)</span>
												</label>
											</li>

										</ul>
									</div>

								</div>

							</div>

							{/* standard,{online/peer/UGC},writing */}

							<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2 border-t-[2px] border-t-gray-300 mt-3">
								<p className='text-[16px] font-bold text-[#2E8095] pt-2'>Paper Writing</p>
								<h6 className='text-red-600 font-bold'>standard,(online/peer/UGC),writing</h6>
								<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-3 py-3'>

									<div>
										<ul className='pe-4 text-[12px] list-disc list-inside'>
											<li>UGC/Online conference/Journal</li>
											<li>Not responsible for any kind of acceptance/ publication</li>
										</ul>
									</div>

									<div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Reference Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Standard/Manual</option>
													<option value="mendeley">Mendeley</option>
													<option value="zotero">Zotero</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Writing Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Word</option>
													<option value="Latex">Latex</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>No. of Words</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="1" data-input-counter-max="10000" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="5000" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>Review</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="2" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="2" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className="flex items-center justify-start text-[12px] w-full py-1">
											<label htmlFor="default-checkbox" className="font-medium text-black w-1/3">PPT</label>
											<input id="default-checkbox" type="checkbox" value="PPT" name="default-checkbox" className="cursor-pointer w-5 h-5 rounded-lg text-[#2E8095] bg-[#2E8095] border-[#2E8095]" />
										</div>

									</div>

								</div>

							</div>

							{/* standard,{online/peer/UGC},acceptance(paid) */}

							<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2 border-t-[2px] border-t-gray-300 mt-3">
								<p className='text-[16px] font-bold text-[#2E8095] pt-2'>Paper Writing</p>
								<h6 className='text-red-600 font-bold'>standard,(online/peer/UGC),acceptance(paid)</h6>
								<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-3 py-3'>

									<div>
										<ul className='pe-4 text-[12px] list-disc list-inside'>
											<li>UGC/Online conference/Journal</li>
											<li>Must be paid & non- Indexed SCI/Scopus/PubMed</li>
											<li>Unlimited review on journal comment till acceptance</li>
											<li>Paid only (must be paid by client/author after acceptance)</li>
										</ul>
									</div>

									<div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Reference Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Standard/Manual</option>
													<option value="mendeley">Mendeley</option>
													<option value="zotero">Zotero</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Writing Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Word</option>
													<option value="Latex">Latex</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>No. of Words</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="1" data-input-counter-max="10000" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="5000" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>Review</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="2" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="2" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className="flex items-center justify-start text-[12px] w-full py-1">
											<label htmlFor="default-checkbox" className="font-medium text-black w-1/3">PPT</label>
											<input id="default-checkbox" type="checkbox" value="PPT" name="default-checkbox" className="cursor-pointer w-5 h-5 rounded-lg text-[#2E8095] bg-[#2E8095] border-[#2E8095]" />
										</div>

									</div>

								</div>

							</div>

							{/* standard, UCG, ACCEPTANCE(NON-PAID) */}

							<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2 border-t-[2px] border-t-gray-300 mt-3">
								<p className='text-[16px] font-bold text-[#2E8095] pt-2'>Literature and Method</p>
								<h6 className='text-red-600 font-bold'>standard,UGC,acceptance(non-paid)</h6>

								<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-3 py-3'>

									<div>
										<ul className='pe-4 text-[12px] list-disc list-inside'>
											<li>Draft Paper</li>
										</ul>
									</div>

									<div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>Review</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="2" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="2" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

									</div>

								</div>

							</div>

							<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2 border-t-[2px] border-t-gray-300 mt-3">
								<p className='text-[16px] font-bold text-[#2E8095] pt-2'>Paper Writing</p>

								<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-3 py-3'>

									<div>
										<ul className='pe-4 text-[12px] list-disc list-inside'>
											<li>UGC/Online conference/Journal</li>
											<li>Non-Indexed SCI/Scopus/PubMed</li>
											<li>Unlimited review on journal comment till acceptance</li>
											<li>Assurance till published</li>
										</ul>
									</div>

									<div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Reference Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Standard/Manual</option>
													<option value="mendeley">Mendeley</option>
													<option value="zotero">Zotero</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Writing Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Word</option>
													<option value="Latex">Latex</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>No. of Words</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="1" data-input-counter-max="10000" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="5000" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>Review</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="2" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="2" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className="flex items-center justify-start text-[12px] w-full py-1">
											<label htmlFor="default-checkbox" className="font-medium text-black w-1/3">PPT</label>
											<input id="default-checkbox" type="checkbox" value="PPT" name="default-checkbox" className="cursor-pointer w-5 h-5 rounded-lg text-[#2E8095] bg-[#2E8095] border-[#2E8095]" />
										</div>

									</div>

								</div>

							</div>

							{/* (bibliometric/systematic),(scopus/sci),writing */}

							<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2 border-t-[2px] border-t-gray-300 mt-3">
								<p className='text-[16px] font-bold text-[#2E8095] pt-2'>Paper Writing</p>
								<h6 className='text-red-600 font-bold'>(bibliometric/systematic),(scopus/sci),writing</h6>
								<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-3 py-3'>

									<div>
										<ul className='pe-4 text-[12px] list-disc list-inside'>
											<li>Scopus/SCI/PubMed</li>
											<li>Not responsible for any kind of acceptance/ publication</li>
										</ul>
									</div>

									<div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Reference Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Standard/Manual</option>
													<option value="mendeley">Mendeley</option>
													<option value="zotero">Zotero</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Writing Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Word</option>
													<option value="Latex">Latex</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>No. of Words</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="1" data-input-counter-max="90000" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="8000" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>Review</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="2" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="2" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className="flex items-center justify-start text-[12px] w-full py-1">
											<label htmlFor="default-checkbox" className="font-medium text-black w-1/3">PPT</label>
											<input id="default-checkbox" type="checkbox" value="PPT" name="default-checkbox" className="cursor-pointer w-5 h-5 rounded-lg text-[#2E8095] bg-[#2E8095] border-[#2E8095]" />
										</div>

									</div>

								</div>

							</div>

							{/* (bibliometric/systematic),(scopus/sci),acceptance(paid) */}

							<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2 border-t-[2px] border-t-gray-300 mt-3">
								<p className='text-[16px] font-bold text-[#2E8095] pt-2'>Method & Literature Extraction</p>
								<h6 className='text-red-600 font-bold'>(bibliometric/systematic),(scopus/sci),acceptance(paid)</h6>

								<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-3 py-3'>

									<div>
										<ul className='pe-4 text-[12px] list-disc list-inside'>
											<li>Draft Paper</li>
											<li>No bibliometric Analysis</li>
										</ul>
									</div>

									<div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>No .of RoL</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="2" data-input-counter-max="200" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="50" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>Review</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="2" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="2" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className="flex items-center justify-start text-[12px] w-full py-1">
											<label htmlFor="default-checkbox" className="font-medium text-black w-1/3">Bibliometric Analysis</label>
											<input id="default-checkbox" type="checkbox" value="Bibliometric" name="default-checkbox" className="cursor-pointer w-5 h-5 rounded-lg text-[#2E8095] bg-[#2E8095] border-[#2E8095]" />
										</div>

									</div>

								</div>

							</div>

							<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2 border-t-[2px] border-t-gray-300 mt-3">
								<p className='text-[16px] font-bold text-[#2E8095] pt-2'>Paper Writing</p>

								<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-3 py-3'>

									<div>
										<ul className='pe-4 text-[12px] list-disc list-inside'>
											<li>Scopus/SCI/PubMed</li>
											<li>Unlimited review on journal comment till acceptance</li>
											<li>Paid only (must be paid by client/author after acceptance)</li>
										</ul>
									</div>

									<div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Reference Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Standard/Manual</option>
													<option value="mendeley">Mendeley</option>
													<option value="zotero">Zotero</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Writing Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Word</option>
													<option value="Latex">Latex</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>No. of Words</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="1" data-input-counter-max="90000" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="8000" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>Review</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="2" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="2" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className="flex items-center justify-start text-[12px] w-full py-1">
											<label htmlFor="default-checkbox" className="font-medium text-black w-1/3">PPT</label>
											<input id="default-checkbox" type="checkbox" value="PPT" name="default-checkbox" className="cursor-pointer w-5 h-5 rounded-lg text-[#2E8095] bg-[#2E8095] border-[#2E8095]" />
										</div>

									</div>

								</div>

							</div>

							{/* (bibliometric/systematic),(scopus/sci),acceptance(non-paid) */}

							<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2 border-t-[2px] border-t-gray-300 mt-3">
								<p className='text-[16px] font-bold text-[#2E8095] pt-2'>Method & Literature Extraction</p>
								<h6 className='text-red-600 font-bold'>(bibliometric/systematic),(scopus/sci),acceptance(non-paid)</h6>

								<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-3 py-3'>

									<div>
										<ul className='pe-4 text-[12px] list-disc list-inside'>
											<li>Draft Paper</li>
											<li>No bibliometric Analysis</li>
										</ul>
									</div>

									<div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>No .of RoL</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="2" data-input-counter-max="200" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="50" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>Review</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="2" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="2" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className="flex items-center justify-start text-[12px] w-full py-1">
											<label htmlFor="default-checkbox" className="font-medium text-black w-1/3">Bibliometric Analysis</label>
											<input id="default-checkbox" type="checkbox" value="Bibliometric" name="default-checkbox" className="cursor-pointer w-5 h-5 rounded-lg text-[#2E8095] bg-[#2E8095] border-[#2E8095]" />
										</div>

									</div>

								</div>

							</div>

							<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2 border-t-[2px] border-t-gray-300 mt-3">
								<p className='text-[16px] font-bold text-[#2E8095] pt-2'>Paper Writing</p>

								<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-3 py-3'>

									<div>
										<ul className='pe-4 text-[12px] list-disc list-inside'>
											<li>As per Selected Journal Requirement</li>
											<li>As per discussed SCI/PubMed Journal</li>
											<li>Unlimited review on journal comment till acceptance</li>
											<li>Assurance till published</li>
											<li>No Additional APC Charges</li>
										</ul>
									</div>

									<div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Reference Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Standard/Manual</option>
													<option value="mendeley">Mendeley</option>
													<option value="zotero">Zotero</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Writing Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Word</option>
													<option value="Latex">Latex</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>No. of Words</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="1" data-input-counter-max="90000" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="8000" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>Review</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="2" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="2" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className="flex items-center justify-start text-[12px] w-full py-1">
											<label htmlFor="default-checkbox" className="font-medium text-black w-1/3">PPT</label>
											<input id="default-checkbox" type="checkbox" value="PPT" name="default-checkbox" className="cursor-pointer w-5 h-5 rounded-lg text-[#2E8095] bg-[#2E8095] border-[#2E8095]" />
										</div>

									</div>

								</div>

							</div>

							{/* Research,{online/peer/UGC},writing */}
							<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2 border-t-[2px] border-t-gray-300 mt-3">
								
								{/* tool enable/disable option */}
								<div className='py-2 flex justify-end'>

									{/* buttons */}
									<ul className="grid grid-cols-3 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-3 sm:gap-3 gap-3 w-full relative pt-2 text-[10px]">
										<li className='relative flex'>
											<input defaultChecked type="radio" id="Taken" name="Taken" value="Taken" className="hidden peer" required />
											<label htmlFor="Taken" className="cursor-pointer 2xl:px-2 xl:px-2 lg:px-2 md:px-2 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md items-center flex justify-center text-wrap w-full leading-[16px]">
												<span className="text-center ">Taken from thesis</span>
											</label>
										</li>
										<li className='relative flex'>
											<input type="radio" id="Provided" name="Taken" value="Provided" className="hidden peer" required />
											<label htmlFor="Provided" className="cursor-pointer 2xl:px-2 xl:px-2 lg:px-2 md:px-2 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md items-center flex justify-center text-wrap w-full leading-[16px]">
												<span className="text-center">Provided by client or not send separately</span>
											</label>
										</li>
										<li className='relative flex'>
											<input type="radio" id="yreq" name="Taken" value="yreq" className="hidden peer" required />
											<label htmlFor="yreq" className="cursor-pointer 2xl:px-2 xl:px-2 lg:px-2 md:px-2 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md items-center flex justify-center text-wrap w-full leading-[16px]">
												<span className="text-center">Required separately</span>
											</label>
										</li>
									</ul>
								</div>
								<p className='text-[16px] font-bold text-[#2E8095] pt-2'>Research Method</p>
								<h6 className='text-red-600 font-bold'>Research,(online/peer/UGC),writing</h6>
								<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-3 py-3'>

									<div>
										<ul className='pe-4 text-[12px] list-disc list-inside'>
											<li>UGC/Online conference/Journal</li>
											<li>Not responsible for any kind of acceptance/ publication</li>
										</ul>
									</div>

									<div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Reference Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Standard/Manual</option>
													<option value="mendeley">Mendeley</option>
													<option value="zotero">Zotero</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Writing Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Word</option>
													<option value="Latex">Latex</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>No. of Words</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="1" data-input-counter-max="10000" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="5000" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>Review</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="2" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="2" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className="flex items-center justify-start text-[12px] w-full py-1">
											<label htmlFor="default-checkbox" className="font-medium text-black w-1/3">PPT</label>
											<input id="default-checkbox" type="checkbox" value="PPT" name="default-checkbox" className="cursor-pointer w-5 h-5 rounded-lg text-[#2E8095] bg-[#2E8095] border-[#2E8095]" />
										</div>

									</div>

								</div>

							</div>
							<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2 border-t-[2px] border-t-gray-300 mt-3">
								<p className='text-[16px] font-bold text-[#2E8095] pt-2'>Paper Writing</p>

								<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-3 py-3'>

									<div>
										<ul className='pe-4 text-[12px] list-disc list-inside'>
											<li>UGC/Online conference/Journal</li>
											<li>Not responsible for any kind of acceptance/ publication</li>
										</ul>
									</div>

									<div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Reference Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Standard/Manual</option>
													<option value="mendeley">Mendeley</option>
													<option value="zotero">Zotero</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 gap-6 w-full text-[12px]'>
											<form className="w-full flex">
												<label htmlFor="field" class="w-1/3 ">Writing Tool</label>
												<select id="field" className="border border-[#2E8095] text-white bg-[#2E8095] text-[12px] rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] focus:outline-none block w-2/3 p-1" >
													<option selected>Word</option>
													<option value="Latex">Latex</option>
												</select>
											</form>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>No. of Words</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="1" data-input-counter-max="10000" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="5000" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className='flex items-center justify-start py-1 w-full text-[12px]'>
											<div className='w-1/3 '>Review</div>
											<div className='w-2/3 flex justify-start '>
												<form className="p-0">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="methods-input" data-input-counter data-input-counter-min="2" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-5 font-medium text-center text-black block w-full" placeholder="" value="2" required />
														<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-5 w-5  focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>

										<div className="flex items-center justify-start text-[12px] w-full py-1">
											<label htmlFor="default-checkbox" className="font-medium text-black w-1/3">PPT</label>
											<input id="default-checkbox" type="checkbox" value="PPT" name="default-checkbox" className="cursor-pointer w-5 h-5 rounded-lg text-[#2E8095] bg-[#2E8095] border-[#2E8095]" />
										</div>

									</div>

								</div>

							</div>

						</div>

					</div>

					{/* service table */}
					<div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-1'>

						<div className='rounded-lg border-[1px] border-cyan-700'>


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
