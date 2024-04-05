// import Image from 'next/image'
import React from 'react'

const ServiceCards = () => {
    return (
        <div>
            <div className="max-w-sm mb-5 bg-white border border-sky-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/Images/service_slider1.png" alt="image" />
                </a>
                <div className="p-4">
                    <a href="#">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="service/servicecarddetail" className='float-right'>
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiceCards