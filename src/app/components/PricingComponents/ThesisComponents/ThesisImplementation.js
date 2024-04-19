import React from 'react'
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";

const ThesisImplementation = () => {
  return (
	<div>
	  	<div className='p-0'>

<div className='2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>

	<ul className='grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 2xl:gap-x-6 xl:gap-x-6 lg:gap-x-6 md:gap-x-6 sm:gap-x-3 gap-x-3 gap-y-4'>

		<li>
			<input defaultChecked type="radio" id="Python" name="implem" value="Python" className="hidden peer" required />
			<label htmlFor="Python" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
				<span className="text-center">Python</span>
			</label>
		</li>
		<li>
			<input type="radio" id="Java" name="implem" value="Java/Php" className="hidden peer" required />
			<label htmlFor="Java" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
				<span className="text-center">Java/Php</span>
			</label>
		</li>
		<li>
			<input type="radio" id="Matlab" name="implem" value="Matlab" className="hidden peer" required />
			<label htmlFor="Matlab" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
				<span className="text-center">Matlab<br /> +₹ 5000</span>
			</label>
		</li>
		<li>
			<input type="radio" id="Cadence" name="implem" value="Cadence" className="hidden peer" required />
			<label htmlFor="Cadence" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
				<span className="text-center">Cadence<br /> +₹ 10000</span>
			</label>
		</li>
		<li>
			<input type="radio" id="Ansys" name="implem" value="Ansys" className="hidden peer" required />
			<label htmlFor="Ansys" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
				<span className="text-center">Ansys<br /> +₹ 10000</span>
			</label>
		</li>						
		<li>
			<input type="radio" id="hSpice" name="implem" value="hSpice" className="hidden peer" required />
			<label htmlFor="hSpice" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
				<span className="text-center">H Spice<br /> +₹ 10000</span>
			</label>
		</li>
		<li>
			<input type="radio" id="ltSpice" name="implem" value="ltSpice" className="hidden peer" required />
			<label htmlFor="ltSpice" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
				<span className="text-center">LT Spice<br /> +₹ 10000</span>
			</label>
		</li>
		<li>
			<input type="radio" id="rtool" name="implem" value="rtool" className="hidden peer" required />
			<label htmlFor="rtool" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
				<span className="text-center">R/Tool<br /> +₹ 5000</span>
			</label>
		</li>
		<li>
			<input type="radio" id="NS2" name="implem" value="NS2" className="hidden peer" required />
			<label htmlFor="NS2" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
				<span className="text-center">NS2/NS3<br /> +₹ 10000</span>
			</label>
		</li>
		<li>
			<input type="radio" id="Abacus" name="implem" value="Abacus" className="hidden peer" required />
			<label htmlFor="Abacus" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
				<span className="text-center">Abacus</span>
			</label>
		</li>
		<li>
			<input type="radio" id="hfss" name="implem" value="hfss" className="hidden peer" required />
			<label htmlFor="hfss" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
				<span className="text-center">HFSS<br /> +₹ 5000</span>
			</label>
		</li>
		<li>
			<input type="radio" id="TCad" name="implem" value="TCad" className="hidden peer" required />
			<label htmlFor="TCad" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
				<span className="text-center">TCad<br /> +₹ 5000</span>
			</label>
		</li>
		<li>
			<input type="radio" id="Origin" name="implem" value="Origin" className="hidden peer" required />
			<label htmlFor="Origin" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
				<span className="text-center">Origin Pro</span>
			</label>
		</li>
		<li>
			<input type="radio" id="Other" name="implem" value="Other" className="hidden peer" required />
			<label htmlFor="Other" className=" cursor-pointer rounded-sm px-1  peer-checked:border-[#196572] peer-checked:text-white peer-checked:bg-[#196572] py-1 border-[1px] border-[#000000] w-full h-[50px] flex items-center justify-center">
				<span className="text-center">Other</span>
			</label>
		</li>
	</ul>
		

</div>

<div className='pt-6'>
	{/* methods */}
	<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
		<div className='w-1/3 '>Methods</div>
		<div className='w-2/3 flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-end sm:justify-end justify-end '>
			<form className="max-w-xs mx-auto">
				<div className="relative flex items-center max-w-[6rem]">
					<button type="button" id="decrement-button" data-input-counter-decrement="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
						<RiSubtractLine />
					</button>
					<input type="text" id="methods-input" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="2" required />
					<button type="button" id="increment-button" data-input-counter-increment="methods-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
						<RiAddLine />
					</button>
				</div>
			</form>
		</div>
	</div>

	{/* dataset */}
	<div className='flex items-center justify-start py-1 gap-6 w-2/3 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>
		<div className='w-1/3 '>Dataset</div>
		<div className='w-2/3 flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-end sm:justify-end justify-end '>
			<form className="max-w-xs mx-auto">
				<div className="relative flex items-center max-w-[6rem]">
					<button type="button" id="decrement-button" data-input-counter-decrement="dataset-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
						<RiSubtractLine />
					</button>
					<input type="text" id="dataset-input" data-input-counter data-input-counter-min="1" data-input-counter-max="100" aria-describedby="helper-text-explanation" className="bg-transparent h-8 font-medium text-center text-black text-sm block w-full" placeholder="" value="2" required />
					<button type="button" id="increment-button" data-input-counter-increment="dataset-input" className="bg-[#2E8095] hover:bg-[#064454] border border-[#2E8095] rounded-md p-1 h-6 focus:ring-[#2E8095] focus:ring-2 focus:outline-none flex items-center justify-center text-[14px] text-white">
						<RiAddLine />
					</button>
				</div>
			</form>
		</div>
	</div>

	{/* revise */}
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

</div>

</div>
	</div>
  )
}

export default ThesisImplementation
