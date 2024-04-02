import React from 'react'
import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <div className='w-full text-center pt-16 pb-20 px-4'>
                <h4 className='font-semibold tracking-wide text-[#2E8095] text-[18px]'>PRICING</h4>
                <h1 className='font-bold tracking-wide text-[#170F49] text-[50px] px-6 py-2'>Pricing Plans</h1>
                <p className='text-[16px] text-[#6F6C90] font-medium'>Our Pricing Plans are designed to be, affordable, flexible and tailored to your needs  </p>

                <label className="inline-flex items-center cursor-pointer pt-8 pb-4">
                    <span className="me-3 text-sm font-medium">Monthly</span>
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-16 h-8 peer-focus:outline-none rounded-full peer bg-[#064454] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:my-[2px] after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#064454]"></div>
                    <span className="ms-3 text-sm font-medium">Annually</span>
                </label>

                <div className='flex justify-center items-center p-2 gap-4'>
                    <div className='flex relative'>
                        <Image className="rounded-full" width={16} height={16} src="/Images/imgsm1.png" alt="image" />
                        <Image className="rounded-full  " width={16} height={16} src="/Images/imgsm2.png" alt="image" />
                        <Image className="rounded-full" width={16} height={16} src="/Images/imgsm3.png" alt="image" />
                    </div>
                    <div>
                        <p className='text-[10px] underline text-[#000000BF]'>+500 Happy Scholars</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
