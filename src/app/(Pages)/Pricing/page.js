import React, { Suspense } from 'react'
import Hero from '@/app/components/PricingComponents/Hero';
import PricingSection from '@/app/components/PricingComponents/PricingSection';
import Loading from '@/app/loading';


const Pricing = () => {
  return (
    <div>
      <Suspense fallback = {<Loading />} >
         <Hero/>
         <PricingSection/>
      </Suspense>
    </div>
  )
}

export default Pricing
