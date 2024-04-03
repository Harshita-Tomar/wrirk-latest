import React from 'react'
import '@fontsource/mulish';
import Image from 'next/image';
import { RiArrowRightLine } from "react-icons/ri";

const PortfolioCards = () => {
	return (
		<>
			<div className='grid grid-cols-2 justify-center items-start border-[1px] rounded-[16px] bg-white font-mulish w-full h-full relative'>
				<div className='w-full flex overflow-hidden object-cover justify-center items-center relative'>
					<Image width={70} height={70} src="/Images/portcard-img.png" objectFit="cover" layout="responsive" alt="image" className='relative' />
					<div className='absolute flex justify-center text-white font-bold'>
						<h3 className='ps-4 pe-2 '>Performance Evaluation & Design of the....</h3>
					</div>
				</div>
				<div className='px-2 py-2 '>
					<h3 className='text-[13px] text-black font-bold'> Dataset:</h3>
					<p className='text-[12px] text-black font-medium'>Home Working Schedule</p>
					<p className='text-[12px] text-black font-medium'>Class Schedule</p>
					<p className='text-[12px] text-black font-medium'>Transaction On Websit...</p>
					<h3 className='text-[13px] text-black font-bold'> Techniques Used::</h3>
					<p className='text-[12px] text-black font-medium pb-2'>Home Working Schedule</p>


				</div>
				<a href='/Portfolio/PortCard' className='mb-2 absolute bottom-2 right-2'>
					<RiArrowRightLine className='text-[24px]' />
				</a>
			</div>
		</>
	)
}

export default PortfolioCards
