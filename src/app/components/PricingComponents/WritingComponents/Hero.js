"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import GeneralForm from '@/app/utils/Formutils/GeneralForm';



const Hero = () => {
	const [priceTable, setPriceTable] = useState(false)
	const onClickhandle = (e) => {
		e.preventDefault();
		setPriceTable(!priceTable);
	}

	const [showDivOne, setShowDivOne] = useState(true);
	const [showDivTwo, setShowDivTwo] = useState(false);

	const handleButtonClick = (divNumber) => {
		if (divNumber === 1) {
			setShowDivOne(true);
			setShowDivTwo(false);
		} else if (divNumber === 2) {
			setShowDivOne(false);
			setShowDivTwo(true);
		}
	};

	return (
		<>
			{/* Heading div */}

			<div className='flex justify-between items-center w-full px-4 py-4 bg-[#2E8095] 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-4'>
				<div className='leading-[30px] sm:leading-[30px] md:leading-[36px] lg:leading-[44px] xl:leading-[44px] 2xl:leading-[44px]'>
					<h3 className='text-[19px] sm:text-[30px] md:text-[31px] lg:text-[38px] xl:text-[38px] 2xl:text-[38px] text-white font-black tracking-wide'>Writing </h3>
				</div>
				<div className='w-full flex items-center justify-end overflow-hidden object-cover'>
					<img className="rounded-md  sm:pr-10 md:pr-10 lg:pr-0 xl:pr-0 2xl:pr-0" width={105} height={105} src="/Images/writing.png" alt="image" />
				</div>
			</div>

			<div>
				<button onClick={() => handleButtonClick(1)} className="border-2 border-green-500 py-2 px-4 rounded-md hover:bg-green-500 hover:text-white transition duration-300 ease-in-out">Writing</button>
				
				<button onClick={() => handleButtonClick(2)} className="border-2 border-green-500 py-2 px-4 rounded-md hover:bg-green-500 hover:text-white transition duration-300 ease-in-out">Rewriting</button>

				{showDivOne && (
					<div>
				
						<p>Writing div </p>
					</div>
				)}

				{showDivTwo && (
					<div>
					
						<p>Rewriting div </p>
					</div>
				)}
			</div>

			<div>
				<GeneralForm />
			</div>
		</>
	)
}

export default Hero
