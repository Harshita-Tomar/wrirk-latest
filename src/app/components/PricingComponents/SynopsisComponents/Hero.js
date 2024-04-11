import React from 'react'
import Image from 'next/image';
import { RiAddLine } from "react-icons/ri";
import { RiSubtractLine } from "react-icons/ri";
import GeneralForm from '@/app/utils/Formutils/GeneralForm';

const Hero = () => {
	return (
		<>
			{/* Heading div */}

			<div className='flex justify-between items-center w-full 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-4 px-4 py-6 bg-[#2E8095]'>
				<div className='flex-grow'>
					<h3 className='2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[36px] sm:text-[30px] text-[28px] text-white font-black tracking-wide'>RESARCH PROPOSAL/SYNOPSIS </h3>
				</div>
				<div className='flex-shrink-0 flex items-center justify-end overflow-hidden object-cover'>
					<Image className="rounded-md 2xl:ps-0 xl:ps-0 lg:ps-0 md:ps-10 sm:ps-10 ps-10" width={180} height={180} src="/Images/reviewhead.png" alt="image" />
				</div>
			</div>


			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-1">



				<div className='p-4 '>

					<div>
						<h3 class="mb-2 text-md font-bold text-gray-900 dark:text-white">ROL Type</h3>
						<ul class="grid w-full gap-2 md:grid-cols-4">
							<li>
								<input type="radio" id="Standard" name="roltype" value="Standard" class="hidden peer" required />
								<label for="Standard" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
									<span>Standard</span>
								</label>
							</li>
							<li>
								<input type="radio" id="Bibliometric" name="roltype" value="Bibliometric" class="hidden peer" />
								<label for="Bibliometric" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
									<span>Bibliometric</span>
								</label>
							</li>
							<li>
								<input type="radio" id="Systematic" name="roltype" value="Systematic" class="hidden peer" />
								<label for="Systematic" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
									<span>Systematic</span>
								</label>
							</li>
							<li>
								<input type="radio" id="Both" name="roltype" value="Both" class="hidden peer" />
								<label for="Both" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
									<span>Both</span>
								</label>
							</li>
						</ul>
					</div>

					<div>
						<h3 class="mb-2 mt-2 text-md font-bold text-gray-900 dark:text-white">Reference Tool</h3>
						<ul class="grid w-full gap-2 md:grid-cols-4">
							<li>
								<input type="radio" id="Manual" name="Tool" value="Manual" class="hidden peer" required />
								<label for="Manual" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
									<span>Manual</span>
								</label>
							</li>
							<li>
								<input type="radio" id="Mendely" name="Tool" value="Mendely" class="hidden peer" />
								<label for="Mendely" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
									<span>Mendely</span>
								</label>
							</li>
							<li>
								<input type="radio" id="Zotero" name="Tool" value="Zotero" class="hidden peer" />
								<label for="Zotero" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
									<span>Zotero</span>
								</label>
							</li>

						</ul>
					</div>

					<div>
						<h3 class="mb-2 mt-2 text-md font-bold text-gray-900 dark:text-white">Writing Tool</h3>
						<ul class="grid w-full gap-2 md:grid-cols-4">
							<li>
								<input type="radio" id="Word" name="Writing" value="Word" class="hidden peer" required />
								<label for="Word" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
									<span>Word</span>
								</label>
							</li>
							<li>
								<input type="radio" id="Latex" name="Writing" value="Latex" class="hidden peer" />

								{/* <label for="Latex" class="inline-flex items-center justify-between p-3 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 w-[109px] h-[49px]" >
									<span >Latex</span>
								</label> */}
								<label for="Latex" class="p-0 inline-flex items-center justify-between p-3 text-gray-500 bg-white border border-gray-800 rounded-lg cursor-pointer peer-checked:border-[#196572] peer-checked:text-white hover:bg-[#196572]  w-[109px] h-[49px]" >
									<span class="ml-[19px]">Latex</span>
								</label>


							</li>


						</ul>
					</div>

					No. of Pages
				</div>
				<div className='bg-red-200'>09</div>

			</div>


		</>
	)
}

export default Hero
