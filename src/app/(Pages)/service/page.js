import Cards from '@/app/components/ServiceComponents/Cards'
import Hero from '@/app/components/ServiceComponents/Hero'
import Serviceform from '@/app/components/ServiceComponents/Serviceform'
import Sliderservice from '@/app/components/ServiceComponents/Sliderservice'
import React from 'react'

const service = () => {
  return (
    <>
     <Hero />
     <Sliderservice />
     <Cards />
     <Serviceform />
    </>
  )
}

export default service