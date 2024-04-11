import React from 'react'
import { RiPhoneLine } from "react-icons/ri";
import { MdEmail } from 'react-icons/md'; // Importing from Material Design
import { RiMapPinFill } from "react-icons/ri";
import Image from 'next/image';
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";

const Hero = () => {
	return (
		<>
			<div className='bg-[#f4f4f4]'>
				<div className='w-full text-center 2xl:pt-16 xl:pt-16 lg:pt-16 md:pt-12 sm:pt-10 pt-10 2xl:pb-10 xl:pb-10 lg:pb-10 md:pb-4 sm:pb-2 pb-2 px-4'>
					<h1 className='font-[950] tracking-wide text-[#F6AF03] 2xl:text-[46px] xl:text-[46px] lg:text-[46px] md:text-[32px] sm:text-[32px] text-[32px] px-6 py-2'>Contact Us</h1>
					<p className='text-[16px] text-[#717171] font-semibold'>Any question or remarks? Just write us a message! </p>
				</div>

				<div className='w-full grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 2xl:px-20 xl:px-20 lg:px-16 md:px-6 sm:px-3 px-3 pt-10 pb-16'>
					<div className='rounded-s-lg text-white px-2 py-2 bg-white '>
						<div className='rounded-lg px-8 py-8 bg-[#064454] relative'>
							<h2 className='text-[24px]'>Contact Information</h2>
							<p className='text-[14px] text-[#C9C9C9] fomt-medium'>Say something to start a live chat!</p>

							<ul className='py-20 pb-36 pe-10 text-[12px] relative'>
								<li className='py-3 flex gap-3 items-center'><RiPhoneLine className='text-[20px]' />+1012 3456 789</li>
								<li className='py-3 flex gap-3 items-center'> <MdEmail className='text-[20px]' />info@wrirk.com</li>
								<li className='py-3 flex gap-3 items-center'> <RiMapPinFill className='text-[60px]' />TeamMP Research Work
									SM Tower Plot no.13, Saraswati kund, Near National Chamber, Masani Bypass Road, Mathura (U.P.)-281003</li>
							</ul>

							<div className='flex gap-4 py-2'>
								<div className='rounded-full bg-[#064454] hover:bg-white border-0 flex items-center justify-center'><AiFillTwitterCircle className='cursor-pointer text-[24px] text-white hover:text-[#F6AF03]' /></div>
								<div className='rounded-full hover:bg-[#F6AF03] bg-white border-0 flex items-center justify-center'><IoLogoInstagram className='cursor-pointer  text-[24px] hover:text-white text-[#064454]' /></div>
								<div className='rounded-full hover:bg-[#F6AF03] bg-white border-0 flex items-center justify-center'><TiSocialLinkedin className='cursor-pointer text-[24px] hover:text-white text-[#064454]' /></div>
							</div>

							<div className='absolute right-0 bottom-0 left-[140px] flex overflow-hidden object-cover'>
								<Image className="rounded-br-lg" width={50} height={50} src="/Images/contact-elli.png" alt="image" objectFit="cover" layout="responsive" />
							</div>

						</div>
					</div>

					<div className='rounded-e-lg 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-1 col-span-1 2xl:px-10 xl:px-10 lg:px-10 md:px-8  sm:px-6 px-6 py-10 bg-white relative'>
						<form>

							<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-x-7'>
								<div className="mb-4 p-2">
									<label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
									<div className="mt-2 pb-2 border-b-[1px] border-[##8D8D8D]">
										<input type="text" id="firstname" name="firstname" className="form-input block w-full focus:outline-none" placeholder="First Name" required />
									</div>
								</div>
								<div className="mb-4 p-2">
									<label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
									<div className="mt-2 pb-2 border-b-[1px] border-[##8D8D8D]">
										<input type="text" id="lastname" name="lastname" className=" focus:outline-none form-input block w-full" placeholder="Last Name" required />
									</div>
								</div>
							</div>

							<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-x-7'>
								<div className="mb-4 p-2">
									<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email </label>
									<div className="mt-2 pb-2 border-b-[1px] border-[##8D8D8D]">
										<input type="email" id="email" name="email" className="form-input block w-full focus:outline-none" placeholder="email@gmail.com" required />
									</div>
								</div>
								<div className="mb-4 p-2">
									<label htmlFor="contactnumber" className="block text-sm font-medium leading-6 text-gray-900">Phone Number </label>
									<div className="mt-2 pb-2 border-b-[1px] border-[##8D8D8D]">
										<input type="tel" id="contactnumber" name="contactnumber" className=" focus:outline-none form-input block w-full" placeholder="+1 012 3456 789 " required />
									</div>
								</div>
							</div>

							<div className='mb-4 p-2'>
								<h6 className="block text-sm font-medium leading-6 text-gray-900">Select Subject?</h6>
								<div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-x-2 py-2'>

									<div className="flex items-center py-2">
										<input defaultChecked id="default-radio-1" type="radio" value="radio-1" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
										<label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900">General Inquiry</label>
									</div>
									<div className="flex items-center py-2">
										<input id="default-radio-2" type="radio" value="radio-2" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
										<label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900">General Inquiry</label>
									</div>
									<div className="flex items-center py-2">
										<input id="default-radio-3" type="radio" value="radio-3" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
										<label htmlFor="default-radio-3" className="ms-2 text-sm font-medium text-gray-900">General Inquiry</label>
									</div>
									<div className="flex items-center py-2">
										<input id="default-radio-4" type="radio" value="radio-4" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
										<label htmlFor="default-radio-4" className="ms-2 text-sm font-medium text-gray-900">General Inquiry</label>
									</div>
								</div>
							</div>

							<div className="mb-4 p-2">
								<label htmlFor="textarea" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
								<div className="mt-2 pb-2 border-b-[1px] border-[##8D8D8D]">
									<textarea id="research_description" name="research_description" className="form-textarea block w-full" rows="1" placeholder="Write your message..."></textarea>
								</div>
							</div>
							<div className="mb-4 p-2 flex items-center justify-end">
								<button className='px-10 py-3 rounded-lg bg-[#064454] text-white font-medium '>Send Message</button>
							</div>
						</form>

						<div className='absolute right-[250px] bottom-0 flex overflow-hidden object-cover justify-end'>
							<Image className="rounded-0" width={200} height={200} src="/Images/send-img.png" alt="image" objectFit="cover"  />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
