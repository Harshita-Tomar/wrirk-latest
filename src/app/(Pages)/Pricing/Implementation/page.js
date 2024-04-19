import React, { Suspense } from 'react'
import Hero from '@/app/components/PricingComponents/ImplementationComponents/Hero'
import Loading from '@/app/loading';
import Image from 'next/image';

// import dynamic from 'next/dynamic';
// import Loader from '../../../loading';

// const Hero = dynamic(() => import('@/app/components/PricingComponents/ImplementationComponents/Hero'), { ssr: false, loading: () => <Loader /> });

const page = () => {
	return (
		<div>
			{/* Heading div */}
			<div className='flex justify-between items-center w-full 2xl:px-10 xl:px-10 lg:px-10 md:px-6 sm:px-4 px-4 py-4 bg-[#2E8095]'>
				<div className='2xl:leading-[44px] xl:leading-[44px] lg:leading-[44px] md:leading-[36px] sm:leading-[30px] leading-[30px]'>
					<h3 className='2xl:text-[30px] xl:text-[30px] lg:text-[30px] md:text-[26px] sm:text-[22px] text-[22px] text-white font-black tracking-wide m-0'>IMPLEMENTATION/ </h3>
					<h3 className='2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[36px] sm:text-[30px] text-[28px] text-white font-black tracking-wide'>ANALYSIS </h3>
				</div>
				<div className='w-full flex items-center justify-end overflow-hidden object-cover'>
					<Image className="rounded-md 2xl:ps-0 xl:ps-0 lg:ps-0 md:ps-10 sm:ps-10 ps-10" width={150} height={150} src="/Images/imple-img.png" alt="image" />
				</div>
			</div>

			<Suspense fallback={<Loading />}>
				<Hero />
			</Suspense>
		</div>
	)
}

export default page
