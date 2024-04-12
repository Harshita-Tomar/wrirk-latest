
import React, { useState } from 'react'
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";


const MappingSection = () => {

	return (
		<>

			<div className='p-0'>

				<div className='2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]
				'>

					<ul className='grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 2xl:gap-x-6 xl:gap-x-6 lg:gap-x-6 md:gap-x-6 sm:gap-x-3 gap-x-3 gap-y-4'>

						<li>
							<input defaultChecked type="radio" id="GIS" name="mapping" value="GIS" className="hidden peer" required />
							<label htmlFor="GIS" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
								<span className="text-center">GIS</span>
							</label>
						</li>
						<li>
							<input type="radio" id="design" name="mapping" value="design/Php" className="hidden peer" required />
							<label htmlFor="design" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
								<span className="text-center">Design Expert </span>
							</label>
						</li>
						<li>
							<input type="radio" id="chemdraw" name="mapping" value="chemdraw" className="hidden peer" required />
							<label htmlFor="chemdraw" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
								<span className="text-center">ChemDraw</span>
							</label>
						</li>
						<li>
							<input type="radio" id="others" name="mapping" value="" className="hidden peer" required />
							<label htmlFor="others" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
								<span className="text-center">Other</span>
							</label>
						</li>
					</ul>

				</div>

				<div className='pt-6'>

					{/* revise */}
					<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
						<div className='w-1/3 '>Review</div>
						<div className='w-2/3 flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-end sm:justify-end justify-end '>
							<form className="max-w-xs mx-auto">
								<div className="relative flex items-center max-w-[6rem]">
									<button type="button" id="decrement-button" data-input-counter-decrement="revise-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
										<RiSubtractLine />
									</button>
									<input type="text" id="revise-input" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="2" required />
									<button type="button" id="increment-button" data-input-counter-increment="revise-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
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

export default MappingSection
