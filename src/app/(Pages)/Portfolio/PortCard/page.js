import React, { Suspense } from 'react'
import Hero from '@/app/components/PortfolioComponents/PortCardComponents/Hero'
import Loading from '@/app/loading'

const page = () => {
	return (
		<div>
			<Suspense fallback = {<Loading />} >
			   <Hero/>
			</Suspense>
		</div>
	)
}

export default page
