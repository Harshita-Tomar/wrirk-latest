import React from 'react'
import Image from 'next/image';
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import GeneralForm from '@/app/utils/Formutils/GeneralForm';

const Hero = () => {
	return (
		<>
			{/* Heading div */}

			<div className='flex justify-between items-center w-full 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-4 px-4 py-6 bg-[#2E8095]'>
				<div className='flex-grow'>
					<h3 className='2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[36px] sm:text-[30px] text-[28px] text-white font-black tracking-wide'>REVIEW ON DOCUMENT </h3>
				</div>
				<div className='flex-shrink-0 flex items-center justify-end overflow-hidden object-cover'>
					<Image className="rounded-md 2xl:ps-0 xl:ps-0 lg:ps-0 md:ps-10 sm:ps-10 ps-10" width={180} height={180} src="/Images/reviewhead.png" alt="image" />
				</div>
			</div>

			<div className='w-full 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-4 px-4 py-10'>
				<div className='rounded-[20px] border-[1px] border-[#2E8095]  flex items-center justify-between'>

					<div className='2xl:px-20 xl:px-20 lg:px-20 md:px-10 sm:px-6 px-6 py-6 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-full sm:w-full w-full flex'>

						<div className='w-1/2 '>

							<div className='flex  gap-2 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]  grid grid-cols-1'>
								<div className='w-full '>No. of Words</div>
								<div className='w-full '>
									<form className="max-w-xs mx-auto">
										<div className="relative flex  max-w-[8rem]">
											<button type="button" id="decrement-button" data-input-counter-decrement="pagecount-input" className="bg-[white]  border border-[gray] rounded-md p-2 h-8 focus:ring-[gray] focus:ring-1 focus:outline-none flex   text-[14px] text-black">
												<RiSubtractLine />
											</button>
											<input type="text" id="pagecount-input" data-input-counter data-input-counter-min="1000" data-input-counter-max="10000" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="1000" required />
											<button type="button" id="increment-button" data-input-counter-increment="pagecount-input" className="bg-[white]  border border-[gray] rounded-md p-2 h-8 focus:ring-[gray] focus:ring-1 focus:outline-none flex   text-[14px] text-black">
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
							
							<div className='w-full mt-3'>
								<label htmlFor="word-count" className="flex items-center">
									<input type="checkbox" id="word-count" className="form-checkbox h-4 w-4 text-[#2E8095]" />
									<span className="ml-2">Plag Report</span>
								</label>

								<label htmlFor="word-count" className="flex items-center">
									<input type="checkbox" id="word-count" className="form-checkbox h-4 w-4 text-[#2E8095]" />
									<span className="ml-2">Grammarly Scored Report</span>
								</label>

								<label htmlFor="word-count" className="flex items-center">
									<input type="checkbox" id="word-count" className="form-checkbox h-4 w-4 text-[#2E8095]" />
									<span className="ml-2">Both</span>
								</label>
							</div>

						</div>

						<div className='w-1/2 '>
							<h3>
								Quantity
							</h3>

							<div className='w-1/2-new'>

								<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
									<div className='w-2/3 '>Page Count</div>
									<div className='w-2/3 '>
										<form className="max-w-xs mx-auto">
											<div className="relative flex  max-w-[8rem]">
												<button type="button" id="decrement-button-new" data-input-counter-decrement="pagecount-input-new" className="bg-[white]  border border-[gray] rounded-md p-2 h-8 focus:ring-[gray] focus:ring-1 focus:outline-none flex   text-[14px] text-black">
													<RiSubtractLine />
												</button>
												<input type="text" id="pagecount-input-new" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full " placeholder="" value="10" required />
												<button type="button" id="increment-button-new" data-input-counter-increment="pagecount-input-new" className="bg-[white]  border border-[gray] rounded-md p-2 h-8 focus:ring-[gray] focus:ring-1 focus:outline-none flex   text-[14px] text-black">
													<RiAddLine />
												</button>
											</div>
										</form>
									</div>
								</div>
								





							</div>

						</div>
					</div>


					<div className='2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-0 sm:w-0 w-0 flex items-center justify-end overflow-hidden object-cover'>
						<Image className="rounded-[20px]" width={600} height={500} src="/Images/com-img.png" alt="image" />
					</div>
				</div>

				{/* service and price distribution section */}
				<div className='w-full py-10 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1'>
					<div className='px-1 py-2'>

						{/* service section */}
						<div className='rounded-[20px] border-[1px] border-[#00000066] p-4  flex items-center justify-center'>

							<div className="relative overflow-x-auto py-4">
								<table className="w-full text-sm text-left rtl:text-right text-black">
									<thead className="text-[14px] text-black uppercase">
										<tr>
											<th scope="col" className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-4 px-4 py-3 border-e-[2px] border-[#00000059]">
												Services
											</th>
											<th scope="col" className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-4 px-4 py-3 border-e-[2px] border-[#00000059]">
												Basic
											</th>
											<th scope="col" className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-4 px-4 py-3">
												Required
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className="bg-white">
											<th scope="row" className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-4 px-4 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												No. of Words
											</th>
											<td className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-4 px-4 py-2 border-e-[2px] border-[#00000059]">
												10000
											</td>
											<td className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-4 px-4 py-2">

											</td>
										</tr>
										<tr className="bg-white">
											<th scope="row" className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-4 px-4 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Review Type
											</th>
											<td className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-4 px-4 py-2 border-e-[2px] border-[#00000059] line-through">
												Grammarly scored Report

											</td>
											<td className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-4 px-4 py-2">
												Both (Plag and Grammarly scored Report)
											</td>
										</tr>
										<tr className="bg-white">
											<th scope="row" className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-4 px-4 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Quantity
											</th>
											<td className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-4 px-4 py-2 border-e-[2px] border-[#00000059]">
												1
											</td>
											<td className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-4 px-4 py-2">

											</td>
										</tr>
									</tbody>
								</table>
							</div>

						</div>

						{/* price distribution */}

						<div className=' py-4 mb-4 mt-8 flex items-center 2xl:justify-between xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center'>
							<div className='rounded-[20px] border-[1px] border-[#2E8095]'>

								<div className="relative overflow-x-auto rounded-[18px]">
									<h3 className='py-8 px-10 text-[20px] font-bold'>Price Distribution</h3>
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

											<tr className="bg-[#2E8095] text-white text-[16px] font-bold">
												<th scope="row" className="px-10 py-4 font-medium  whitespace-nowrap]">
													Total
												</th>
												<td className="px-10 py-4">
													₹45000
												</td>
											</tr>
										</tbody>
									</table>
								</div>

							</div>
						</div>

						<div className='flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-center sm:justify-center justify-center items-center pb-4 2xl:ps-4 xl:ps-4 lg:ps-4 md:ps-0 sm:ps-0 ps-0' >
							<button type='submit' className='text-white bg-[#064454] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[14px] sm:text-[14px] text-[14px] px-8 py-2 rounded-lg font-medium'>Download Quotation</button>
						</div>
					</div>

					<div className='2xl:ps-20 xl:ps-20 lg:ps-20 md:ps-0 sm:ps-0 ps-0 py-2'>
						<GeneralForm />
					</div>
				</div>

			</div>
		</>
	)
}

export default Hero
