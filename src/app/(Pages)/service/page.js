import Cards from '@/app/components/ServiceComponents/Cards'
import Hero from '@/app/components/ServiceComponents/Hero'
import Serviceform from '@/app/components/ServiceComponents/Serviceform'
// import GeneralForm from '@/app/utils/Researchutils/GeneralForm'
//import Serviceform from '@/app/components/ServiceComponents/Serviceform'
// import Sliderservice from '@/app/components/ServiceComponents/Sliderservice'

import React, { Suspense } from 'react'

const service = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading feed...</p>}>
         <Hero />
      
     {/* <Sliderservice /> */}
     <Cards />
     <Serviceform />
     {/* <GeneralForm  /> */}
     </Suspense>
    </div>
  )
}

export default service