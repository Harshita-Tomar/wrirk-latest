import React from 'react'
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const MasterStatistical = () => {
	return (
		<>

			<div className=' p-0'>

				<div className='2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>

					<ul className='grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 2xl:gap-x-6 xl:gap-x-6 lg:gap-x-6 md:gap-x-6 sm:gap-x-3 gap-x-3 gap-y-4'>

						<li>
							<input defaultChecked type="radio" id="spss" name="statis" value="spss" className="hidden peer" required />
							<label htmlFor="spss" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
								<span className="text-center">SPSS</span>
							</label>
						</li>
						<li>
							<input type="radio" id="Rtool" name="statis" value="Rtool" className="hidden peer" required />
							<label htmlFor="Rtool" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
								<span className="text-center">R Tool<br /> +₹ 5000</span>
							</label>
						</li>
						<li>
							<input type="radio" id="matlab" name="statis" value="matlab" className="hidden peer" required />
							<label htmlFor="matlab" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
								<span className="text-center">Matlab<br /> +₹ 5000</span>
							</label>
						</li>
						<li>
							<input type="radio" id="amos" name="statis" value="amos" className="hidden peer" required />
							<label htmlFor="amos" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
								<span className="text-center">AMOS<br /> +₹ 10000</span>
							</label>
						</li>
						<li>
							<input type="radio" id="pls" name="statis" value="pls" className="hidden peer" required />
							<label htmlFor="pls" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
								<span className="text-center">PLS<br /> +₹ 10000</span>
							</label>
						</li>
						<li>
							<input type="radio" id="Stata" name="statis" value="Stata" className="hidden peer" required />
							<label htmlFor="Stata" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
								<span className="text-center">Stata</span>
							</label>
						</li>
						<li>
							<input type="radio" id="qual" name="statis" value="qual" className="hidden peer" required />
							<label htmlFor="qual" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
								<span className="text-center">Qualitative Analysis</span>
							</label>
						</li>
						<li>
							<input type="radio" id="Content" name="statis" value="Content" className="hidden peer" required />
							<label htmlFor="Content" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
								<span className="text-center">Content Analysis<br /> +₹ 20000</span>
							</label>
						</li>
						<li>
							<input type="radio" id="other" name="statis" value="other" className="hidden peer" required />
							<label htmlFor="other" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
								<span className="text-center">Other</span>
							</label>
						</li>

					</ul>

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
									<input type="text" id="questionnaire-input" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="50" required />
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
									<input type="text" id="respodent-input" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="500" required />
									<button type="button" id="increment-button" data-input-counter-increment="respodent-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
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
									<input type="text" id="complexity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="100%" required />
									<button type="button" id="increment-button" data-input-counter-increment="complexity-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
										<RiAddLine />
									</button>
								</div>
							</form>
						</div>
					</div>

					{/* Revise */}
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

					{/* check box pilot study */}
					<div className="flex items-center justify-start py-2 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] gap-x-10">
						<label for="default-checkbox" className="font-medium text-black">No Pilot Study</label>
						<input id="default-checkbox" type="checkbox" value="pilot" name="default-checkbox" className="cursor-pointer w-6 h-6 rounded-0 text-[#2E8095] bg-[#2E8095] border-[#2E8095]" />
					</div>

					<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:full w-full'>
						<div className='flex items-center justify-start'>
							<label className="inline-flex items-center cursor-pointer">
								<span className="text-sm font-medium text-gray-900 pe-10">Additional Field</span>
								<input type="checkbox" value="" className="sr-only peer" />
								<div className="relative w-11 h-6 bg-gray-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2E8095]"></div>
							</label>
						</div>

						<div className='flex items-center justify-start 2xl:py-0 xl:py-0 lg:py-0 md:py-3 sm:py-3 py-3'>
							<form className="w-full">
								<select id="countries" className="border border-[#2E8095] text-white bg-[#2E8095] text-sm rounded-lg focus:bg-[#2E8095] focus:border-[#2E8095] block w-full p-1">
									<option selected>Select a Field</option>
									<option value="all">All(Except Finance and Law)</option>
									<option value="finance">Finance only(datasheet)</option>							
									<option value="law">Law only(description)</option>							
								</select>
							</form>
						</div>
					</div>

				</div>

			</div>


		</>
	)
}

export default MasterStatistical
