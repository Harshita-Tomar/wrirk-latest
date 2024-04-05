import React from 'react'
import { IoSearchOutline } from 'react-icons/io5';
import { RiAlignRight } from "react-icons/ri";
import PortfolioCards from '@/app/utils/Portfolioutils/PortfolioCards'


const PortCardSection = () => {
	return (
		<>
			<div className='w-full mx-auto px-4 pt-8 pb-6'>

				<h1 className="text-[30px] text-center text-black font-black font-mulish pb-4">WRIRK IMPLEMENTATIONS</h1>

				{/* search bar */}
				<div className=" flex mx-auto justify-center items-center relative  xl:w-1/3 2xl:w-1/3 lg:w-1/3 md:w-2/3 sm:w-2/3 w-full">
					<input type="search" placeholder="Type Keyword" className="px-3 py-2 w-full rounded-full border-[#D1D1D1] border-[1px] placeholder:text-[#999999] placeholder:text-[12px]" />
					<button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px]">
						<IoSearchOutline className="text-[22px] font-thin text-white" />
					</button>
				</div>

				<div className='2xl:flex xl:flex lg:flex md:flex sm:flex block justify-between items-center mx-auto my-4 xl:w-1/3 2xl:w-1/3 lg:w-1/3 md:w-2/3 sm:w-2/3 w-full'>

					{/* Research bar */}
					<div className=" flex me-2 justify-center items-center relative w-full">
						<input type="search" placeholder="All Research Area" className="px-3 py-2 w-full rounded-full border-[#D1D1D1] border-[1px] placeholder:text-[#999999] placeholder:text-[12px]" />
						<button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px]">
							<RiAlignRight className="text-[22px] font-thin text-white" />
						</button>
					</div>

					{/* Domain bar */}
					<div className=" flex 2xl:ms-2 xl:ms-2 lg:ms-2 md:ms-2 sm:ms-2 ms-0 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 mt-4 justify-center items-center relative w-full">
						<input type="search" placeholder="All Domain" className="px-3 py-2 w-full rounded-full border-[#D1D1D1] border-[1px] placeholder:text-[#999999] placeholder:text-[12px]" />
						<button type="button" className="rounded-full bg-[#2E8095] absolute right-1 bottom-1 p-[5px]">
							<RiAlignRight className="text-[22px] font-[1px] text-white" />
						</button>
					</div>

				</div>

			</div>

			<div className='w-full grid 2xl:px-20 xl:px-20 lg:px-14 md:px-10 sm:px-10 px-8 2xl:pt-10 xl:pt-10 lg:pt-10 md:pt-8 sm:pt-8 pt-8 pb-40'>
				<div className='justify-center items-center'>
					<div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-center items-center rounded-lg 2xl:gap-x-28 xl:gap-x-28 lg:gap-x-8 md:gap-x-8 sm:gap-x-5 gap-x-5 2xl:gap-y-28 xl:gap-y-28 lg:gap-y-28 md:gap-y-20 sm:gap-y-20 gap-y-20'>
						<PortfolioCards />
						<PortfolioCards />
						<PortfolioCards />
						<PortfolioCards />
						<PortfolioCards />
						<PortfolioCards />
						<PortfolioCards />
						<PortfolioCards />
						<PortfolioCards />
						<PortfolioCards />
						<PortfolioCards />
						<PortfolioCards />
					</div>
				</div>
			</div>
		</>
	)
}

export default PortCardSection
