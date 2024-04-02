import ServiceCards from '@/app/utils/Serviceutils/ServiceCards'
import Image from 'next/image'
import React from 'react'

const Cards = () => {
  return (
    <>
    <div className='py-20 px-10'>
      <div className='grid grid-cols-3 gap-x-5 gap-y-8'>
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