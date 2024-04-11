import React from 'react'
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const MasterStatistical = () => {
	return (
		<>

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
					<div className='flex items-center justify-center' >
						<button className='rounded-sm px-1 hover:text-white hover:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center'>Amos<br /> +₹ 20000</button>
					</div>
					<div className='flex items-center justify-center' >
						<button className='rounded-sm px-1 hover:text-white hover:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center'>Pls<br /> +₹ 20000</button>
					</div>
					<div className='flex items-center justify-center' >
						<button className='rounded-sm hover:text-white hover:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center text-[13px]'>Qualtitave Analysis<br /> +₹ 10000</button>
					</div>
					<div className='flex items-center justify-center' >
						<button className='rounded-sm px-1 hover:text-white hover:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center'>Content Analysis<br /> +₹ 10000</button>
					</div>
					<div className='flex items-center justify-center' >
						<button className='rounded-sm px-1 hover:text-white hover:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center'>Other<br /> +₹ 10000</button>
					</div>
				</div>


				<div className='pt-6'>
					{/* Questionnaire */}
					<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
						<div className='w-1/3 '>Questionnaire</div>
						<div className='w-2/3 flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-end sm:justify-end justify-end '>
							<form className="max-w-xs mx-auto">
								<div className="relative flex items-center max-w-[6rem]">
									<button type="button" id="decrement-button" data-input-counter-decrement="questionnaire-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
										<RiSubtractLine />
									</button>
									<input type="text" id="questionnaire-input" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="10" required />
									<button type="button" id="increment-button" data-input-counter-increment="questionnaire-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
										<RiAddLine />
									</button>
								</div>
							</form>
						</div>
					</div>

					{/* Objective/Hypothesis */}
					<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
						<div className='w-1/3 '>Objective/Hypothesis</div>
						<div className='w-2/3 flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-end sm:justify-end justify-end '>
							<form className="max-w-xs mx-auto">
								<div className="relative flex items-center max-w-[6rem]">
									<button type="button" id="decrement-button" data-input-counter-decrement="objective-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
										<RiSubtractLine />
									</button>
									<input type="text" id="objective-input" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="10" required />
									<button type="button" id="increment-button" data-input-counter-increment="objective-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
										<RiAddLine />
									</button>
								</div>
							</form>
						</div>
					</div>

					{/* Respodent */}
					<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
						<div className='w-1/3 '>Respodent</div>
						<div className='w-2/3 flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-end sm:justify-end justify-end '>
							<form className="max-w-xs mx-auto">
								<div className="relative flex items-center max-w-[6rem]">
									<button type="button" id="decrement-button" data-input-counter-decrement="respodent-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
										<RiSubtractLine />
									</button>
									<input type="text" id="respodent-input" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="10" required />
									<button type="button" id="increment-button" data-input-counter-increment="respodent-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
										<RiAddLine />
									</button>
								</div>
							</form>
						</div>
					</div>

					{/* check box pilot study */}
					<div className="flex items-center justify-start py-2 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]">
						<label for="default-checkbox" className="font-medium text-black w-1/3">Pilot Study</label>
						<input id="default-checkbox" type="checkbox" value="pilot" name="default-checkbox" className="cursor-pointer w-6 h-6 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095]" />
					</div>

					{/* Revise */}
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

					{/* complexity */}
					<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
						<div className='w-1/3 '>Complexity</div>
						<div className='w-2/3 flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-end sm:justify-end justify-end '>
							<form className="max-w-xs mx-auto">
								<div className="relative flex items-center max-w-[6rem]">
									<button type="button" id="decrement-button" data-input-counter-decrement="complexity-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
										<RiSubtractLine />
									</button>
									<input type="text" id="complexity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="10" required />
									<button type="button" id="increment-button" data-input-counter-increment="complexity-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
										<RiAddLine />
									</button>
								</div>
							</form>
						</div>
					</div>

				</div>

			</div>


		</>
	)
}

export default MasterStatistical