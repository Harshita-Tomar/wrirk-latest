
import Hero from '@/app/components/ResearchComponents/Hero'
import Cards from '@/app/components/ResearchComponents/Cards'
import ResearchForm from '@/app/components/ResearchComponents/ResearchForm'
import FindResearch from '@/app/components/ResearchComponents/FindResearch'
import MiddleHeader from '@/app/components/ResearchComponents/MiddleHeader'

import React from 'react'

const Research = () => {
  return (
    <>
      <Hero />
      <FindResearch />
      <MiddleHeader/>
      <Cards />
      <ResearchForm/>
      

    </>
  )
}

export default Research
