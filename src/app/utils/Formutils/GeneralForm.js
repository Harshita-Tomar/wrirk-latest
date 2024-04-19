import React from 'react'
import Image from 'next/image';

const GeneralForm = () => {
	return (
		<>
			<div className='w-full pt-[30rem] bg-[#D9D9D9] relative h-[500px] mt-[10rem]'>
				<div className='absolute bottom-[17%] right-[13%] origin-bottom rounded-md shadow-custom3 w-3/4 flex items-center justify-center bg-white z-1'>

					<div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 w-full'>

						<div className='p-6 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-1 sm:col-span-1 col-span-1'>

							<h3 className="text-start 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[16px] sm:text-[16px] text-[16px] pb-6 font-bold text-[#064454]">Request For Free Research Problem</h3>

							<form className='2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-[10px]'>
								<div className="mb-2 p-1">
									<label htmlFor="name" className="block font-medium leading-6 text-gray-900">Name</label>
									<div className="mt-1 pb-1 border-b-[1px] border-[##8D8D8D]">
										<input type="text" id="name" name="name" className="form-input block w-full focus:outline-none" placeholder="Name" required />
									</div>
								</div>

								<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-x-7'>
									<div className="mb-2 p-1">
										<label htmlFor="email" className="block font-medium leading-6 text-gray-900">Email </label>
										<div className="mt-1 pb-1 border-b-[1px] border-[##8D8D8D]">
											<input type="email" id="email" name="email" className="form-input block w-full focus:outline-none" placeholder="email@gmail.com" required />
										</div>
									</div>
									<div className="mb-2 p-1">
										<label htmlFor="contactnumber" className="block font-medium leading-6 text-gray-900">Phone Number </label>
										<div className="mt-1 pb-1 border-b-[1px] border-[##8D8D8D]">
											<input type="tel" id="contactnumber" name="contactnumber" className=" focus:outline-none form-input block w-full" placeholder="+1 012 3456 789 " required />
										</div>
									</div>
								</div>

								<div className="mb-2 p-1">
									<label htmlFor="area" className="block font-medium leading-6 text-gray-900">Area</label>
									<div className="mt-1 pb-1 border-b-[1px] border-[##8D8D8D]">
										<input type="text" id="area" name="area" className="form-input block w-full focus:outline-none" placeholder="Area" required />
									</div>
								</div>

								<div className="mb-2 p-1">
									<label htmlFor="domain" className="block font-medium leading-6 text-gray-900">Domain</label>
									<div className="mt-1 pb-1 border-b-[1px] border-[##8D8D8D]">
										<input type="text" id="domain" name="domain" className="form-input block w-full focus:outline-none" placeholder="Domain" required />
									</div>
								</div>

								<div className="mb-2 p-1">
									<label htmlFor="textarea" className="block font-medium leading-6 text-gray-900">Message</label>
									<div className="mt-1 pb-1 border-b-[1px] border-[##8D8D8D]">
										<textarea id="research_description" name="research_description" className="form-textarea block w-full" rows="1" placeholder="Write your message..."></textarea>
									</div>
								</div>
								<div className="mb-2 p-1 flex items-center justify-end">
									<button className='px-6 py-2 rounded-lg bg-[#064454] text-white font-medium '>Send Message</button>
								</div>
							</form>
						</div>
						<div className=' items-center justify-center overflow-hidden object-cover bg-[#064454] rounded-r-md 2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden'>
							<Image className="rounded-md 2xl:ps-0 xl:ps-0 lg:ps-0 md:ps-10 sm:ps-10 ps-10" width={300} height={300} src="/Images/form-img.png" alt="image" />
						</div>
					</div>
				</div>
				<div className='absolute right-[140px] bottom-[60px] 2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden overflow-hidden object-cover justify-end '>
					<Image className="rounded-0 " width={200} height={200} src="/Images/send-img.png" alt="image" objectFit="cover" />
				</div>
			</div>
		</>
	)
}

export default GeneralForm
