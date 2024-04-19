import React, { Suspense } from 'react'
import Hero from '@/app/components/PricingComponents/ReviewDocComponents/Hero';
import Loading from '@/app/loading';
import Image from 'next/image';

const page = () => {
	return (
		<div>
			{/* Heading div */}

			<div className='flex justify-between items-center w-full px-4 py-4 bg-[#2E8095] 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-4'>
				<div className='  leading-[30px] sm:leading-[30px] md:leading-[36px] lg:leading-[44px] xl:leading-[44px] 2xl:leading-[44px]'>

					<h3 className='2xl:text-[30px] xl:text-[30px] lg:text-[30px] md:text-[26px] sm:text-[22px] text-[22px] text-white font-black tracking-wide m-0'>REVIEW</h3>
					<h3 className='2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[36px] sm:text-[30px] text-[28px] text-white font-black tracking-wide'> DOCUMENT</h3>

				</div>
				<div className='w-full flex items-center justify-end overflow-hidden object-cover'>
					<img className="rounded-md  sm:pr-10 md:pr-10 lg:pr-0 xl:pr-0 2xl:pr-0" width={135} height={135} src="/Images/reviewhead.png" alt="image" />
				</div>
			</div>
			<Suspense fallback={<Loading />} >
				<Hero />
			</Suspense>
		</div>
	)
}

export default page
