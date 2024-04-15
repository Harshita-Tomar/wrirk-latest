import React from 'react'
import Hero from '@/app/components/PricingComponents/ImplementationComponents/Hero'

// import dynamic from 'next/dynamic';
// import Loader from '../../../loading';

// const Hero = dynamic(() => import('@/app/components/PricingComponents/ImplementationComponents/Hero'), { ssr: false, loading: () => <Loader /> });

const page = () => {
  return (
	<div>
	  {/* <Hero/> */}
	  {/* <Suspense fallback={<Loader />}> */}
	     <Hero />
	 {/* </Suspense> */}
	</div>
  )
}

export default page
