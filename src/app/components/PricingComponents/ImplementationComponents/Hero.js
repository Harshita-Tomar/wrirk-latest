import React from 'react'
import ImplementationSection from './ImplementationSection';
import StatisticalSection from './StatisticalSection';
import MappingSection from './MappingSection';
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import Image from 'next/image';
import GeneralForm from '@/app/utils/Formutils/GeneralForm';
//import dynamic from 'next/dynamic'

//const ImplementationSection = dynamic(
//  () => import('./ImplementationSection'),
//  {
//    loading: () => <p className='text-red'>Loading...</p>,
//  }
//)

const Hero = () => {

	return (
		<>

			{/* Heading div */}
			<div className='flex justify-between items-center w-full 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-4 px-4 py-4 bg-[#2E8095]'>
				<div className='2xl:leading-[44px] xl:leading-[44px] lg:leading-[44px] md:leading-[36px] sm:leading-[30px] leading-[30px]'>
					<h3 className='2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[36px] sm:text-[30px] text-[28px] text-white font-black tracking-wide'>IMPLEMENTATION/ANALYSIS </h3>
				</div>
				<div className='w-full flex items-center justify-end overflow-hidden object-cover'>
					<Image className="rounded-md 2xl:ps-0 xl:ps-0 lg:ps-0 md:ps-10 sm:ps-10 ps-10" width={150} height={150} src="/Images/imple-img.png" alt="image" />
				</div>
			</div>

			<div className='w-full py-4 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-6 px-4'>

				<div className="mb-4  ">
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
					<div className="hidden p-2 rounded-lg" id="implementation" role="tabpanel" aria-labelledby="implementation-tab">

						<ImplementationSection />

					</div>

					{/* statistical section */}
					<div className="hidden p-2 rounded-lg" id="statistical" role="tabpanel" aria-labelledby="statistical-tab">

						<StatisticalSection />

					</div>

					{/* mapping section */}
					<div className="hidden p-2 rounded-lg" id="mapping" role="tabpanel" aria-labelledby="mapping-tab">

						<MappingSection />

					</div>

				</div>

			</div>

			<div className='w-full flex justify-start items-center 2xl:px-10 xl:px-10 lg:px-6 md:px-4 sm:px-0 px-0 pb-20'>
				<GeneralForm />
			</div>
		</>
	)
}

export default Hero
