import React from 'react'
import ResearchCard from '@/app/utils/Researchutils/ResearchCard';

const ResearchCardSection = () => {
  return (
    <>
      <div className='w-full'>
        <div className='grid items-center justify-center w-full bg-[rgb(42,150,177)] rounded-tl-[25px] relative 2xl:py-8 xl:py-8 lg:py-6 md:py-5 sm:py-4 py-4'>
          <h1 className='font-extrabold 2xl:text-[136px] xl:text-[136px] lg:text-[130px] md:text-[100px] sm:text-[60px] text-[50px] 2xl:leading-[136.2px] xl:leading-[136.2px] lg:leading-[136.2px] md:leading-[90.93px] sm:leading-[65.93px] leading-[52.2px] pb-1 text-white tracking-wide opacity-35'>Research</h1>
        </div>

        <div className='w-full grid 2xl:px-6 xl:px-6 lg:px-6 md:px-4 sm:px-4 px-4'>
          <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 2xl:gap-x-6 xl:gap-x-6 lg:gap-x-6 md:gap-x-6 sm:gap-x-4 gap-x-4 2xl:gap-y-14 xl:gap-y-14 lg:gap-y-14 md:gap-y-10 sm:gap-y-8 gap-y-7 justify-center items-center 2xl:py-20 xl:py-20 lg:py-20 md:py-20 sm:py-20 py-20'>
            <ResearchCard />
            <ResearchCard />
            <ResearchCard />
            <ResearchCard />
            <ResearchCard />
            <ResearchCard />
          </div>
        </div>

      </div>
    </>
  )
}

export default ResearchCardSection
