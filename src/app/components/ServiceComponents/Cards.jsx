import Image from 'next/image'
import React from 'react'

const Cards = () => {
  return (
    <div className='mt-14 ms-8'>
      <div className='grid grid-cols-3'>
        <div className='border border-1 w-3/4 max-w-full'>
          <Image src="/Images/image (2).png" className='p-0 m-0' width={300} height={300} alt='image'  />
          <h4>Research Proposal</h4>
          <p >Lead generation strategy refers to the <br />
            marketing process of involving and <br />
            capturing interest in a product or <br />
            services in order..........
          </p>
        </div>
        <div>raj</div>
        <div>raj</div>
        <div>raj</div>
        <div>raj</div>
        <div>raj</div>
      </div>
    </div>
  )
}

export default Cards