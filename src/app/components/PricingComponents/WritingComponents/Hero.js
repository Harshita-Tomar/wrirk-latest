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

	const [isWritingSelected, setIsWritingSelected] = useState(true);
	const [isRewritingSelected, setIsRewritingSelected] = useState(false);

	const handleButtonClick = (selectedOption) => {
		if (selectedOption === 'writing') {
			setIsWritingSelected(true);
			setIsRewritingSelected(false);
		} else if (selectedOption === 'rewriting') {
			setIsWritingSelected(false);
			setIsRewritingSelected(true);
		}
		// Reset Page and Word states when toggling between sections
		setPage(true);
		setWord(false);
	};

	const [Page, setPage] = useState(true);
	const [Word, setWord] = useState(false);

	const [isPageSelected, setIsPageSelected] = useState(true);
	const [isWordSelected, setIsWordSelected] = useState(false);

	const handleSectionButtonClick = (selectedSection) => {
		if (selectedSection === 'page') {
			setIsPageSelected(true);
			setIsWordSelected(false);
		} else if (selectedSection === 'word') {
			setIsPageSelected(false);
			setIsWordSelected(true);
		}
	};


	return (
		<>
			

			<div >


				<div className='w-full py-6 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-6 px-4'>

					<div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5'>

						<div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 col-span-1'>
							<div className='rounded-lg shadow-custom3 p-4'>

								<div className='p-0 '>
									<div className='flex justify-end items-center gap-x-6 py-1 border-b-[1px] border-b-gray-300'>

										<div className="flex items-center py-2">

											<div className="flex items-center py-2">
												<input defaultChecked type="radio" id='writing'
													name='categoryOption'
													checked={isWritingSelected}
													onChange={() => handleButtonClick('writing')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
												<label htmlFor="writing" className="ms-2 text-sm font-medium text-gray-900">Writing</label>
											</div>

										</div>
										<div className="flex items-center py-2">
											<input
												type='radio'
												id='rewriting'
												name='categoryOption'
												checked={isRewritingSelected}
												onChange={() => handleButtonClick('rewriting')}
												className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
											/>

											<label htmlFor="rewriting" className="ms-2 text-sm font-medium text-gray-900">Rewriting</label>
										</div>
									</div>
								</div>

								{isWritingSelected && (
									<div>
										<div className="p-0">
											<ul className="flex flex-wrap 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center " id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
												<li className="me-2" role="presentation">
													<button className="inline-block p-1 border-b-2 border-[#064454] rounded-t-lg text-sky-950" id="writing-tab" data-tabs-target="#writing" type="button" role="tab" aria-controls="writing" aria-selected="false">Writing</button>
												</li>
											</ul>
										</div>

										{/* Document type */}
										<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-4 ">
											<p className='text-[14px] text-black font-medium me-6'>Document type</p>

											<ul className="flex flex-wrap items-center justify-start w-full gap-y-4 relative py-4 ">
												<li >
													<input defaultChecked type="radio" id="Report1" name="Tool" value="Report1" className="hidden peer" required />
													<label htmlFor="Report1" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
														<span className="text-center">Report-0</span>
													</label>
												</li>
												<li>
													<input  type="radio" id="intro" name="Tool" value="intro" className="hidden peer" required />
													<label htmlFor="intro" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
														<span className="text-center">Introduction-0</span>
													</label>
												</li>
												<li>
													<input  type="radio" id="rol" name="Tool" value="rol" className="hidden peer" required />
													<label htmlFor="rol" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
														<span className="text-center">ROL-0</span>
													</label>
												</li>

												<li className=''>
													<input type="radio" id="Research_method" name="Tool" value="Research_method" className="hidden peer" />

													<label htmlFor="Research_method" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
														<span className="text-center">Research Method-10000</span>
													</label>
												</li>
												<li>
													<input type="radio" id="Conclusion" name="Tool" value="Conclusion" className="hidden peer" />

													<label htmlFor="Conclusion" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
														<span className="text-center">Conclusion-5000</span>
													</label>
												</li>
												<li>
													<input  type="radio" id="Analysis" name="Tool" value="Analysis" className="hidden peer" required />
													<label htmlFor="Analysis" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
														<span className="text-center ">Result Analysis & Interpretation-10000</span>
													</label>
												</li>

											</ul>

										</div>

										{/* page word section  */}
										<div className='justify-start flex mt-3'>
											<input
												type='radio'
												id='page'
												name='sectionOption'
												checked={isPageSelected}
												onChange={() => handleSectionButtonClick('page')}
												className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
											/>
											<label htmlFor='page' className='ms-2 text-sm font-medium text-gray-900'>
												Page
											</label>
											<input
												type='radio'
												id='word'
												name='sectionOption'
												checked={isWordSelected}
												onChange={() => handleSectionButtonClick('word')}
												className='ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
											/>
											<label htmlFor='word' className='ms-2 text-sm font-medium text-gray-900'>
												Word
											</label>
										</div>

										{isPageSelected &&
											<div>
												{/* no of Page  */}
												<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>

													<div className='w-1/3 text-black font-medium text-sm'>Page</div>
													<div className='w-2/3 '>
														<form className="max-w-xs mx-auto">
															<div className="relative flex items-center max-w-[6rem]">
																<button type="button" id="decrement-page" data-input-counter-decrement="pagecount-input-page" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
																	<RiSubtractLine />
																</button>
																<input type="text" id="pagecount-input-page" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="10" required />
																<button type="button" id="increment-page" data-input-counter-increment="pagecount-input-page" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
																	<RiAddLine />
																</button>
															</div>
														</form>
													</div>
												</div>
											</div>
										}

										{isWordSelected &&
											<div>
												{/* no of Word  */}
												<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>

													<div className='w-1/3 text-black font-medium text-sm'>Word</div>
													<div className='w-2/3 '>
														<form className="max-w-xs mx-auto">
															<div className="relative flex items-center max-w-[6rem]">
																<button type="button" id="decrement-Word" data-input-counter-decrement="pagecount-input-Word" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
																	<RiSubtractLine />
																</button>
																<input type="text" id="pagecount-input-Word" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="10" required />
																<button type="button" id="increment-Word" data-input-counter-increment="pagecount-input-Word" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
																	<RiAddLine />
																</button>
															</div>
														</form>
													</div>
												</div>

											</div>
										}

										{/* Reference tool */}
										<div className=" 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] pt-2">
											<p className='text-[14px] text-black font-medium'>Reference Tool</p>
											<ul className='flex items-center justify-start xl:w-3/4 3xl:3/4 2xl:w-3/4 lg:w-3/4 md:w-full sm:w-full w-full relative py-4 '>
												<li>
													<input defaultChecked type="radio" id="Standard" name="Standard" value="Standard" className="hidden peer" required />
													<label htmlFor="Standard" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
														<span className="text-center">Standard/Manual</span>
													</label>
												</li>

												<li>
													<input type="radio" id="Mendely" name="Standard" value="Mendely" className="hidden peer" required />
													<label htmlFor="Mendely" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
														<span className="text-center">Mendely</span>
													</label>
												</li>

												<li>
													<input type="radio" id="Zotero" name="Standard" value="Zotero" className="hidden peer" required />
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
													<input defaultChecked type="radio" id="Complexity11" name="Complexity" value="Complexity11" className="hidden peer" required />
													<label htmlFor="Complexity11" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
														<span className="text-center">100%-0000</span>
													</label>
												</li>

												<li>
													<input type="radio" id="Complexity22" name="Complexity" value="Complexity22" className="hidden peer" required />
													<label htmlFor="Complexity22" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
														<span className="text-center">150%-5000</span>
													</label>
												</li>

												<li>
													<input type="radio" id="Complexity33" name="Complexity" value="Complexity33" className="hidden peer" required />
													<label htmlFor="Complexity33" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
														<span className="text-center">200%-10000</span>
													</label>
												</li>

												<li className='mt-0.5'>
													<input type="radio" id="Complexity44" name="Complexity" value="Complexity44" className="hidden peer" required />
													<label htmlFor="Complexity44" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
														<span className="text-center">300%-20000</span>
													</label>
												</li>
											</ul>
										</div>

										{/* PPT*/}
										<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 mt-3">

											<div class=" w-24">
												<label htmlFor="ppt" className="pe-4 text-black font-medium text-sm w-[65px]">PPT</label>
											</div>

											<div class=" justify-items-start">
												<input id="ppt" type="checkbox" value="" name="ppt" className="cursor-pointer w-5 h-5 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095] focus:ring-[#2E8095] focus:ring-1 " />
											</div>

										</div>

										{/* Excel sheet/ Tabular */}
										<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ">

											<div class=" ">
												<label htmlFor="Excel_sheet" className="pe-4 text-black font-medium text-sm w-[65px]">Excel sheet/ Tabular</label>
											</div>

											<div class=" justify-items-start">
												<input id="Excel_sheet" type="checkbox" value="" name="Excel_sheet" className="cursor-pointer w-5 h-5 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095] focus:ring-[#2E8095] focus:ring-1 " />
											</div>
										</div>


										{/* no of Revise  */}
										<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>

											<div className='w-1/3 text-black font-medium text-sm'>Revise</div>
											<div className='w-2/3 '>
												<form className="max-w-xs mx-auto">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-Revise" data-input-counter-decrement="pagecount-input-Revise" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="pagecount-input-Revise" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="10" required />
														<button type="button" id="increment-Revise" data-input-counter-increment="pagecount-input-Revise" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>
									</div>
								)}

								{isRewritingSelected && (
									<div>
										<div className="p-0">
											<ul className="flex flex-wrap 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center " id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
												<li className="me-2" role="presentation">
													<button className="inline-block p-1 border-b-2 border-[#064454] rounded-t-lg text-sky-950" id="writing-tab" data-tabs-target="#writing" type="button" role="tab" aria-controls="writing" aria-selected="false">Rewriting</button>
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

										{/* no of Quantity  */}
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
													<input type="radio" id="Zotero" name="Standard" value="Zotero" className="hidden peer" required />
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
													<input type="radio" id="Complexity2" name="Complexity" value="Complexity2" className="hidden peer" required />
													<label htmlFor="Complexity2" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4 ">
														<span className="text-center">150%-5000</span>
													</label>
												</li>

												<li>
													<input type="radio" id="Complexity3" name="Complexity" value="Complexity3" className="hidden peer" required />
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

										{/* PPT*/}
										<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 mt-3">

											<div class=" w-24">
												<label htmlFor="ppt" className="pe-4 text-black font-medium text-sm w-[65px]">PPT</label>
											</div>

											<div class=" justify-items-start">
												<input id="ppt" type="checkbox" value="" name="ppt" className="cursor-pointer w-5 h-5 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095] focus:ring-[#2E8095] focus:ring-1 " />
											</div>

										</div>

										{/* Excel sheet/ Tabular */}
										<div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ">

											<div class=" ">
												<label htmlFor="Excel_sheet" className="pe-4 text-black font-medium text-sm w-[65px]">Excel sheet/ Tabular</label>
											</div>

											<div class=" justify-items-start">
												<input id="Excel_sheet" type="checkbox" value="" name="Excel_sheet" className="cursor-pointer w-5 h-5 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095] focus:ring-[#2E8095] focus:ring-1 " />
											</div>
										</div>

										{/* no of Revise  */}
										<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>

											<div className='w-1/3 text-black font-medium text-sm'>Revise</div>
											<div className='w-2/3 '>
												<form className="max-w-xs mx-auto">
													<div className="relative flex items-center max-w-[6rem]">
														<button type="button" id="decrement-Revise" data-input-counter-decrement="pagecount-input-Revise" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiSubtractLine />
														</button>
														<input type="text" id="pagecount-input-Revise" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="10" required />
														<button type="button" id="increment-Revise" data-input-counter-increment="pagecount-input-Revise" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
															<RiAddLine />
														</button>
													</div>
												</form>
											</div>
										</div>
									</div>
								)}

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

			</div>


			<div>
				<GeneralForm />

			</div>
		</>
	)
}

export default Hero


