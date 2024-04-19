import Hero from '@/app/components/PortfolioComponents/Hero'
import PortCardSection from '@/app/components/PortfolioComponents/PortCardSection'
import Loading from '@/app/loading'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <Suspense fallback = {<Loading />} >
        <Hero/>
        <PortCardSection/>
      </Suspense>
    </div>
  )
}

export default page
