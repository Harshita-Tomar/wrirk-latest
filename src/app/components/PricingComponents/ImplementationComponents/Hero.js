"use client"
import React, { useState } from 'react'
import ImplementationSection from './ImplementationSection';
import StatisticalSection from './StatisticalSection';
import MappingSection from './MappingSection';
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import Image from 'next/image';
import GeneralForm from '@/app/utils/Formutils/GeneralForm';
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from 'prop-types';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// import dynamic from 'next/dynamic';
// import Loader from '../../../loading';

// const ImplementationSection = dynamic(() => import('./ImplementationSection'), { ssr: false, loading: () => <Loader /> });
// const StatisticalSection = dynamic(() => import('./StatisticalSection'), { ssr: false, loading: () => <Loader /> });
// const MappingSection = dynamic(() => import('./MappingSection'), { ssr: false, loading: () => <Loader /> });

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const Hero = () => {
	const [priceTable, setPriceTable] = useState(false)
	const onClickhandle = (e) => {
		e.preventDefault();
		setPriceTable(!priceTable);
	}

	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

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



			<div className='w-full py-6 2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-6 px-4'>

				<div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5'>

					<div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 col-span-1'>

						<div className='rounded-lg shadow-custom3 p-4'>

							{/* csk code  */}
							<Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="flex flex-wrap 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center">
								<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
									<Tab label="Implementation/Coding Tool" {...a11yProps(0)} className="inline-block p-1 border-b-2 border-[#D9D9D9] rounded-t-lg text-[#00000080] hover:text-[#064454] focus:text-[#064454] focus:border-[#064454]" />
									<Tab label="Statistical Analysis Tool" {...a11yProps(1)} className="inline-block p-1 border-b-2 border-[#D9D9D9] rounded-t-lg text-[#00000080] hover:text-[#064454] focus:text-[#064454] focus:border-[#064454]" />
									<Tab label="Mapping and Designing Tool" {...a11yProps(2)} className="inline-block p-1 border-b-2 border-[#D9D9D9] rounded-t-lg text-[#00000080] hover:text-[#064454] focus:text-[#064454] focus:border-[#064454]" />
								</Tabs>
							</Box>
							<CustomTabPanel value={value} index={0}>
								<ImplementationSection />
							</CustomTabPanel>
							<CustomTabPanel value={value} index={1}>
								<StatisticalSection />
							</CustomTabPanel>
							<CustomTabPanel value={value} index={2}>
								<MappingSection />
							</CustomTabPanel>
							{/* End csk code  */}


							{/* implementation,statistical and mapping section */}
							{/*<div className='w-full py-2 '>

								<div className="mb-4 ">
									<ul className="flex flex-wrap 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
										<li className="me-2" role="presentation">
											<button className="inline-block p-1 border-b-2 border-[#D9D9D9] rounded-t-lg text-[#00000080] hover:text-[#064454] focus:text-[#064454] focus:border-[#064454]" id="implementation-tab" data-tabs-target="#implementation" type="button" role="tab" aria-controls="implementation" aria-selected="false"> Implementation/Coding Tool</button>
										</li>
										<li className="me-2" role="presentation">
											<button className="inline-block p-1 border-b-2 border-[#D9D9D9] rounded-t-lg text-[#00000080] hover:text-[#064454] focus:text-[#064454] focus:border-[#064454]" id="statistical-tab" data-tabs-target="#statistical" type="button" role="tab" aria-controls="statistical" aria-selected="false">Statistical Analysis Tool</button>
										</li>
										<li className="me-2" role="presentation">
											<button className="inline-block p-1 border-b-2 border-[#D9D9D9] rounded-t-lg text-[#00000080] hover:text-[#064454] focus:text-[#064454] focus:border-[#064454]" id="mapping-tab" data-tabs-target="#mapping" type="button" role="tab" aria-controls="mapping" aria-selected="false">Mapping and Designing Tool</button>
										</li>
									</ul>
								</div>

								<div id="default-tab-content">

									implementation section
									<div className="rounded-lg" id="implementation" role="tabpanel" aria-labelledby="implementation-tab">

										<ImplementationSection />

									</div>

									statistical section
									<div className="rounded-lg" id="statistical" role="tabpanel" aria-labelledby="statistical-tab">

										<StatisticalSection />

									</div>

									mapping section
									<div className="rounded-lg" id="mapping" role="tabpanel" aria-labelledby="mapping-tab">

										<MappingSection />

									</div>

								</div>

							</div>*/}
						</div>

					</div>

					{/* service table */}
					<div className='2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-1'>
						<div className='rounded-lg border-[1px] border-cyan-700'>


							<table className="w-full text-sm text-left rtl:text-right text-black text-wrap">
								<thead className="text-[14px] text-black uppercase">
									<tr className='text-center'>
										<th scope="col" className="px-10 py-2">
											Services
										</th>
										<th scope="col" className="px-10 py-2">
											Basic
										</th>

									</tr>
								</thead>
								<tbody className='text-[12px]'>
									<tr className="bg-white text-center">
										<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
											Tools
										</th>
										<td className="px-10 py-2 ">
											Python
										</td>

									</tr>
									<tr className="bg-white text-center">
										<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
											Methods
										</th>
										<td className="px-10 py-2 ">
											2
										</td>

									</tr>
									<tr className="bg-white text-center">
										<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
											Dataset
										</th>
										<td className="px-10 py-2 ">
											2
										</td>

									</tr>
									<tr className="bg-white text-center">
										<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
											Review
										</th>
										<td className="px-10 py-2 ">
											2
										</td>

									</tr>
									<tr className="bg-white text-center">
										<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
											Questionnaire
										</th>
										<td className="px-10 py-2 ">
											50
										</td>

									</tr>
									<tr className="bg-white text-center">
										<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
											Objective/Hypothesis
										</th>
										<td className="px-10 py-2 ">
											10
										</td>

									</tr>
									<tr className="bg-white text-center">
										<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
											Respondent
										</th>
										<td className="px-10 py-2 ">
											500
										</td>

									</tr>
									<tr className="bg-white text-center">
										<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
											No Pilot Study
										</th>
										<td className="px-10 py-2 ">
											No
										</td>

									</tr>
									<tr className="bg-white text-center">
										<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
											Complexity
										</th>
										<td className="px-10 py-2 ">
											100% - 0
										</td>

									</tr>
								</tbody>
							</table>
							<div className=' flex items-center justify-end pt-2 px-3'>
								<button type='button' onClick={onClickhandle} className='py-1 font-bold text-[14px] text-[#064454] flex items-center px-2 justify-end'> Check Price Distribution <IoIosArrowDown className='mx-2' /> </button>
							</div>


							<div className={` ${priceTable ? 'block' : 'hidden'} relative overflow-x-auto rounded-[18px]`}>
								<h3 className='py-6 px-10 text-[16px] uppercase font-bold'>Price Distribution</h3>
								<table className="w-full text-sm text-left rtl:text-right text-black">
									<tbody className='text-[12px]'>
										<tr className="bg-white">
											<th scope="row" className="px-10 py-2 font-medium text-black whitespace-nowrap border-e-[2px] border-[#00000059]">
												Base Price
											</th>
											<td className="px-10 py-2">
												₹30000
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
												Review
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

			</div>

			<div>
				<GeneralForm />
			</div>
		</>
	)
}

export default Hero
