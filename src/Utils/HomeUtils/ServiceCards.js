import React from 'react'

const ServiceCards = () => {
    return (
        <>
            <div className='Cards'>
                <div className='card text-white'>
                    <h1 className='font-semibold text-[16px] leading-[25px]'>Research Proposal</h1>
                    <p className='text-[12px] leading-[19px] font-thin pt-2'>A research proposal is a document of three to four thousand words that describes the study you wish to conduct. The majority of financing organisations demand them.</p>
                <a href="#" className='cursor-pointer  py-3 text-black  text-center flex justify-end'>
                    <div className='bg-white px-7 py-1 text-[12px] text-[#002631] font-thin'>
                    Read More
                    </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ServiceCards
