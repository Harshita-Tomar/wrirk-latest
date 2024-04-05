import React from 'react'
import Serviceform from '../Serviceform';
import Servicecarddetail from '@/app/utils/Serviceutils/Servicecarddetail';

const Hero = () => {
    return (
		<>
			<Servicecarddetail />
			<div className='w-full flex justify-start items-center 2xl:px-10 xl:px-10 lg:px-6 md:px-4 sm:px-0 px-0 pb-20'>
				<Serviceform />
			</div>

		</>
	)
}

export default Hero