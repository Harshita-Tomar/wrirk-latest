import Hero from '@/app/components/ResearchComponents/ResearchCardComponents/Hero'
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
