import React from 'react'
import Image from 'next/image';
import MasterImplementation from './MasterImplementation';
import MasterMapping from './MasterMapping';
import MasterStatistical from './MasterStatistical';
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
	return (
		<>
			{/* Heading div */}
			<div className='flex justify-between items-center w-full 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-4 px-4 py-4 bg-[#2E8095]'>
				<div className='2xl:leading-[44px] xl:leading-[44px] lg:leading-[44px] md:leading-[36px] sm:leading-[30px] leading-[30px]'>
					<h3 className='2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[36px] sm:text-[30px] text-[28px] text-white font-black tracking-wide'>MASTER DISSERTATION </h3>
				</div>
				<div className='w-full flex items-center justify-end overflow-hidden object-cover'>
					<Image className="rounded-md 2xl:ps-0 xl:ps-0 lg:ps-0 md:ps-10 sm:ps-10 ps-10" width={150} height={150} src="/Images/master-img.png" alt="image" />
				</div>
			</div>
			<div className='w-full py-6 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-6 px-4'>

				<div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5'>

					<div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 col-span-1'>

						{/* Research method section */}
						<div className='rounded-lg shadow-custom3 2xl:p-4 xl:p-4 lg:p-4 md:p-4 sm:p-3 p-3'>

							<h1 className='text-[18px] font-medium'>Research Method</h1>

							{/* buttons */}

							<div className="flex items-center justify-start xl:w-2/3 3xl:w-2/3 2xl:w-2/3 lg:w-3/4 md:w-3/4 sm:w-full w-full  justify-between relative py-2 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]">
								<button className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-white bg-[#2E8095] rounded-md text-center w-2/3 me-4">Not Required Separately</button>
								<button className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 rounded-md text-center w-2/3">Required Separately</button>
							</div>

						</div>

						{/* tool enable/disable option */}
						<div className=' px-2 py-2 my-4 flex justify-end'>

							{/* buttons */}

							<div className="grid grid-cols-3 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-3 sm:gap-3 gap-3 xl:w-2/3 3xl:2/3 2xl:w-2/3 lg:w-2/3 md:w-full sm:w-full w-full  justify-between relative px-2 py-2 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]">

								<button className="cursor-pointer 2xl:px-2 xl:px-2 lg:px-2 md:px-2 sm:px-2 px-2 py-1 border-[1px] text-white bg-[#2E8095] rounded-md text-center text-wrap leading-[16px]">No Tool</button>

								<button className="cursor-pointer 2xl:px-2 xl:px-2 lg:px-2 md:px-2 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 rounded-md text-center">Not required separately</button>

								<button className="cursor-pointer 2xl:px-6 xl:px-6 lg:px-6 md:px-6 sm:px-2 px-2 py-1 border-[1px] text-cyan-700 border-cyan-700 rounded-md text-center">Required separately</button>

							</div>
						</div>

						{/* implementation,statistical and mapping section */}
						<div className='w-full py-2 '>

							<div className="mb-4 ">
								<ul className="flex flex-wrap 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
									<li className="me-2" role="presentation">
										<button className="inline-block p-2 border-b-2 border-[#D9D9D9] rounded-t-lg text-[#00000080] hover:text-[#064454] focus:text-[#064454] focus:border-[#064454]" id="implementation-tab" data-tabs-target="#implementation" type="button" role="tab" aria-controls="implementation" aria-selected="false"> Implementation/Coding Tool</button>
									</li>
									<li className="me-2" role="presentation">
										<button className="inline-block p-2 border-b-2 border-[#D9D9D9] rounded-t-lg text-[#00000080] hover:text-[#064454] focus:text-[#064454] focus:border-[#064454]" id="statistical-tab" data-tabs-target="#statistical" type="button" role="tab" aria-controls="statistical" aria-selected="false">Statistical Analysis Tool</button>
									</li>
									<li className="me-2" role="presentation">
										<button className="inline-block p-2 border-b-2 border-[#D9D9D9] rounded-t-lg text-[#00000080] hover:text-[#064454] focus:text-[#064454] focus:border-[#064454]" id="mapping-tab" data-tabs-target="#mapping" type="button" role="tab" aria-controls="mapping" aria-selected="false">Mapping and Designing Tool</button>
									</li>
								</ul>
							</div>

							<div id="default-tab-content">

								{/* implementation section */}
								<div className="hidden rounded-lg" id="implementation" role="tabpanel" aria-labelledby="implementation-tab">

									<MasterImplementation />

								</div>

								{/* statistical section */}
								<div className="hidden rounded-lg" id="statistical" role="tabpanel" aria-labelledby="statistical-tab">

									<MasterStatistical />

								</div>

								{/* mapping section */}
								<div className="hidden rounded-lg" id="mapping" role="tabpanel" aria-labelledby="mapping-tab">

									<MasterMapping />

								</div>

							</div>

						</div>

						{/* writing tool section */}
						<div className='rounded-lg shadow-custom3 2xl:p-4 xl:p-4 lg:p-4 md:p-4 sm:p-3 p-3 my-4'>

							<h1 className='text-[18px] font-medium'>Writing</h1>

							<div className='pt-2'>
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
							</div>

						</div>

					</div>

					{/* service table */}
					<div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-1'>
						<div className='rounded-lg border-[1px] border-[#000000]'>
							<div className="w-full relative py-2 2xl:text-[14px] xl:text-[14px] lg:text[14px] md:text-[12px] sm:text-[12px] text-[12px]">

								<h6 className='px-2 py-2 font-bold  flex items-center justify-start'><MdKeyboardArrowRight className='pe-1 text-[24px]' />Research Paper</h6>

								<h6 className='px-2 py-2 font-bold  flex items-center justify-start'><MdKeyboardArrowRight className='pe-1 text-[24px]' />Implementation/Analysis</h6>

								<h6 className='px-2 py-2 font-bold  flex items-center justify-start'><MdKeyboardArrowRight className='pe-1 text-[24px]' />Writing</h6>



							</div>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default Hero
