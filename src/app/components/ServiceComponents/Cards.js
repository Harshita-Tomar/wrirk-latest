import ServiceCards from '@/app/utils/Serviceutils/ServiceCards'
import Image from 'next/image'
import React from 'react'

const Cards = () => {
  return (
    <>
    <div className='py-8 px-10 xl:py-20 xl:px-10 xl:mx-20 lg:py-16 lg:px-20 md:py-8 md:px-16 sm:py-8 sm:px-10 xs:flex xs:justify-center'>
      <div className='grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-24 xl:gap-y-8 lg:gap-x-24 lg:gap-y-8 md:gap-x-8 md:gap-y-8 sm:gap-x-8 sm:gap-y-8 xs:gap-x-8 xs:gap-y-8'>
        <ServiceCards />
        <ServiceCards />
        <ServiceCards />
        <ServiceCards />
        <ServiceCards />
        <ServiceCards />
      </div>
    </div>
    </>
  )
}

export default Cards