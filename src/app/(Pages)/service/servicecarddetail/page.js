import Serviceform from '@/app/components/ServiceComponents/Serviceform'
import Hero from '@/app/components/ServiceComponents/servicecarddetail/Hero'
import Loading from '@/app/loading'
import React, { Suspense } from 'react'

const page = () => {
    return (
		<div>
			<Suspense fallback = {<Loading />} >
		      <Hero />
			</Suspense>
		</div>
	)
}

export default page