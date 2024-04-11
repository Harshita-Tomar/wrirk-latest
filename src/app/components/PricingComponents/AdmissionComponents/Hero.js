import React from 'react'
import Image from 'next/image';
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import GeneralForm from '@/app/utils/Formutils/GeneralForm';

const Hero = () => {
	return (
		<>

			{/* Heading div */}
			<div className='flex justify-between items-center w-full 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-4 px-4 py-4 bg-[#2E8095]'>
				<div className='2xl:leading-[44px] xl:leading-[44px] lg:leading-[44px] md:leading-[36px] sm:leading-[30px] leading-[30px]'>
					<h3 className='2xl:text-[30px] xl:text-[30px] lg:text-[30px] md:text-[26px] sm:text-[22px] text-[22px] text-white font-black tracking-wide m-0'>ADMISSION </h3>
					<h3 className='2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[36px] sm:text-[30px] text-[28px] text-white font-black tracking-wide'>PROPOSAL </h3>
				</div>
				<div className='w-full flex items-center justify-end overflow-hidden object-cover'>
					<Image className="rounded-md 2xl:ps-0 xl:ps-0 lg:ps-0 md:ps-10 sm:ps-10 ps-10" width={150} height={150} src="/Images/admission-img.png" alt="image" />
				</div>
			</div>

			{/* Admission proposal section */}

			<div className='w-full 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-4 px-4 py-10'>
				<div className='rounded-[20px] border-[1px] border-[#00000066] shadow-custom2 flex items-center justify-between'>
					<div className='px-6 py-3 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-full sm:w-full w-full'>
						<h1 className='text-[18px] font-medium'>Writing Tool</h1>

						{/* buttons */}

						<div className="flex items-center justify-start xl:w-80 3xl:w-80 2xl:w-80 lg:w-80 md:w-80 sm:w-full w-full  justify-between relative py-2 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]">
							<button className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-white bg-[#2E8095] rounded-md text-center w-2/3 me-4">Word</button>

							<button className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 rounded-md text-center w-2/3">Latex</button>
						</div>

						<h1 className='text-[18px] font-medium py-2'>Reference Tool</h1>

						<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
							<div className='w-1/3 '>Page Count</div>
							<div className='w-2/3 '>
								<form className="max-w-xs mx-auto">
									<div className="relative flex items-center max-w-[6rem]">
										<button type="button" id="decrement-button" data-input-counter-decrement="pagecount-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
											<RiSubtractLine />
										</button>
										<input type="text" id="pagecount-input" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="10" required />
										<button type="button" id="increment-button" data-input-counter-increment="pagecount-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
											<RiAddLine />
										</button>
									</div>
								</form>
							</div>
						</div>

						<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
							<div className='w-1/3 '>Revise</div>
							<div className='w-2/3 '>
								<form className="max-w-xs mx-auto">
									<div className="relative flex items-center max-w-[6rem]">
										<button type="button" id="decrement-button" data-input-counter-decrement="revise-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
											<RiSubtractLine />
										</button>
										<input type="text" id="revise-input" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="10" required />
										<button type="button" id="increment-button" data-input-counter-increment="revise-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
											<RiAddLine />
										</button>
									</div>
								</form>
							</div>
						</div>

						<div className="flex items-center py-2 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]">
							<label for="default-radio-1" className=" pe-4 font-medium text-black"> PPT Required</label>
							<input id="default-radio-1" type="radio" value="" name="default-radio" className="cursor-pointer w-6 h-6 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095] focus:ring-[#2E8095] focus:ring-1" />
						</div>

					</div>

					<div className='2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-0 sm:w-0 w-0 flex items-center justify-end overflow-hidden object-cover'>
						<Image className="rounded-[20px]" width={325} height={325} src="/Images/com-img.png" alt="image" />
					</div>
				</div>

				{/* service and price distribution section */}

				<div className='w-full py-10 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1'>
					<div className='px-1 py-2'>

						{/* service section */}
						<div className='rounded-[20px] border-[1px] border-[#00000066] 2xl:p-4 xl:p-4 lg:p-4 md:p-1 sm:p-1 p-1 shadow-custom2 flex items-center justify-center'>

							<div className="w-full relative overflow-x-auto  py-4">
								<table className="w-full text-sm text-left rtl:text-right text-black text-wrap">
									<thead className="text-[14px] text-black uppercase">
										<tr className='text-center'>
											<th scope="col" className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-3 border-e-[2px] border-[#00000059]">
												Services
											</th>
											<th scope="col" className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-3 border-e-[2px] border-[#00000059]">
												Basic
											</th>
											<th scope="col" className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-3">
												Required
											</th>
										</tr>
									</thead>
									<tbody className='2xl:text-[14px] xl:text-[14px] lg:text[14px] md:text-[12px] sm:text-[12px] text-[12px]'>
										<tr className="bg-white text-center">
											<th scope="row" className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Page Count
											</th>
											<td className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-2 border-e-[2px] border-[#00000059]">
												10
											</td>
											<td className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-2">
												20
											</td>
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Writing Tool
											</th>
											<td className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-2 border-e-[2px] border-[#00000059]">
												Word
											</td>
											<td className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-2">

											</td>
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Reference  Tool
											</th>
											<td className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-2 border-e-[2px] border-[#00000059]">
												Standard/Manual
											</td>
											<td className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-2">

											</td>
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												PPT Required
											</th>
											<td className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-2 border-e-[2px] border-[#00000059]">
												No
											</td>
											<td className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-2">

											</td>
										</tr>
										<tr className="bg-white text-center">
											<th scope="row" className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Revise
											</th>
											<td className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-2 border-e-[2px] border-[#00000059]">
												0
											</td>
											<td className="2xl:px-10 xl:px-10 lg:px-4 md:px-2 sm:px-1 px-1 py-2">

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
													Revise
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
													₹75000
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

