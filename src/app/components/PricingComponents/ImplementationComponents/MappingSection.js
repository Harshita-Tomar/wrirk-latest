"use client"
import React, { useState } from 'react'
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const MappingSection = () => {
	const [priceTable, setPriceTable] = useState(false)
	const onClickhandle = (e) => {
		e.preventDefault();
		setPriceTable(!priceTable);
	}

	return (
		<>
			<div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5'>

				<div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 col-span-1'>

					<div className='rounded-lg shadow-custom3 2xl:p-4 xl:p-4 lg:p-4 md:p-4 sm:p-3 p-3'>

						<div className='2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 2xl:gap-x-6 xl:gap-x-6 lg:gap-x-6 md:gap-x-6 sm:gap-x-3 gap-x-3 gap-y-4'>

							<div className='flex items-center justify-center' >
								<button className='rounded-sm px-1 hover:text-white hover:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center'>SPSS<br /> +₹ 10000</button>
							</div>
							<div className='flex items-center justify-center' >
								<button className='rounded-sm px-1 hover:text-white hover:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center'>RTool<br /> +₹ 10000</button>
							</div>
							<div className='flex items-center justify-center' >
								<button className='rounded-sm px-1 hover:text-white hover:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center'>Matlab<br /> +₹ 20000</button>
							</div>
							<div className='flex items-center justify-center' >
								<button className='rounded-sm px-1 hover:text-white hover:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center'>Ansys<br /> +₹ 10000</button>
							</div>
						</div>

						<div className='pt-6'>

							{/* revise */}
							<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
								<div className='w-1/3 '>Revise</div>
								<div className='w-2/3 flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-end sm:justify-end justify-end '>
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
											Tools
										</th>
										<td className="px-1 py-2 border-e-[2px] border-[#00000059]">
											Python
										</td>
										<td className="px-1 py-2">

										</td>
									</tr>
									<tr className="bg-white text-center">
										<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
											Methods
										</th>
										<td className="px-1 py-2 border-e-[2px] border-[#00000059]">
											2
										</td>
										<td className="px-1 py-2">
											4
										</td>
									</tr>
									<tr className="bg-white text-center">
										<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
											Dataset
										</th>
										<td className="px-1 py-2 border-e-[2px] border-[#00000059]">
											2
										</td>
										<td className="px-1 py-2">
											3
										</td>
									</tr>
									<tr className="bg-white text-center">
										<th scope="row" className="px-1 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
											Revise
										</th>
										<td className="px-1 py-2 border-e-[2px] border-[#00000059]">
											2
										</td>
										<td className="px-1 py-2">
											3
										</td>
									</tr>
								</tbody>
							</table>
							<div className=' flex items-center justify-end pt-2 px-3'>
								<button type='button' onClick={onClickhandle} className='py-1 font-bold text-[#064454] flex items-center px-2 justify-end'> Total Price Distribution <IoIosArrowDown className='mx-2' /> </button>
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
		</>
	)
}

export default MappingSection
