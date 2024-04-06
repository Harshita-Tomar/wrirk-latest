
// import Hero from '@/app/components/ResearchComponents/Hero'
import ResearchCardSection from '@/app/components/ResearchComponents/ResearchCardSection'
import ResearchForm from '@/app/components/ResearchComponents/ResearchForm'
import FindResearch from '@/app/components/ResearchComponents/FindResearch'
import Testing from '@/app/components/ResearchComponents/Testing'


import React from 'react'

const Research = () => {
  return (
    <>
      {/* <Hero /> */}
      <FindResearch />
      <ResearchCardSection />
      <ResearchForm/>
      <Testing/>

    </>
  )
}

export default Research
