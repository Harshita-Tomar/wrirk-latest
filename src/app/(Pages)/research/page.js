
// import Hero from '@/app/components/ResearchComponents/Hero'
import ResearchCardSection from '@/app/components/ResearchComponents/ResearchCardSection'
import ResearchForm from '@/app/components/ResearchComponents/ResearchForm'
import Hero from '@/app/components/ResearchComponents/Hero'


import React, { Suspense } from 'react'
import Loading from '@/app/loading'

const Research = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Suspense fallback = {<Loading />} >
        <Hero />
        <ResearchCardSection />
      </Suspense>
      <ResearchForm/>

    </div>
  )
}

export default Research
