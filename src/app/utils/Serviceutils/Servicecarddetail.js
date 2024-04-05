import React from 'react'
import Image from 'next/image';

const Servicecarddetail = () => {
    return (
        <div className="bg-[#064454] w-full mb-10 flex items-center justify-center">
            <div className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-6 px-6 py-6 2xl:flex xl:flex lg:flex md:flex sm:block block">
                <div className='overflow-hidden object-cover 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full w-full flex justify-center items-center py-4 px-2'>
                    <Image width={400} height={400} src="/Images/portcard-img-in.png" alt="image" />
                </div>
                <div className='text-start py-4 2xl:px-6 xl:px-6 lg:px-6 md:px-4 sm:px-2 px-2 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-full w-full relative'>
                    <h1 className='2xl:text-[22px] xl:text-[22px] lg:text-[22px] md:text-[16px] sm:text-[16px] text-[16px] text-white font-bold pb-2'>Heart Disease Detection Using Machine Learning Technique</h1>
                    <p className='2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[12px] text-white font-medium py-1 2xl:pe-28 xl:pe-28 lg:pe-10 md:pe-0 sm:pe-0 pe-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis elit eget aliquam laoreet vel, sagittis mattis enim. Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras. Malesuada quam cursus blandit amet. Odio nisi, commodo feugiat purus. In rhoncus, elementum donec neque. Feugiat ultrices duis mattis imperdiet hac facilisis turpis amet. Gravida egestas nec id euismod elit. Sit laoreet nunc, nec iaculis nisl. Convallis donec amet, id ullamcorper sapien justo, congue mauris.
                        Ut et, velit, euismod commodo, laoreet ullamcorper dignissim donec in. Pretium eget faucibus sagittis ultricies. Enim dictum tortor ut faucibus amet ac dui auctor ipsum. Massa sed mi lorem ut vel. Turpis sed nulla nam adipiscing praesent. Tortor posuere gravida in rhoncus, quis adipiscing aliquet leo orci. Duis ipsum, consequat ac commodo viverra.</p>
                    <div className='flex justify-between items-end'>
                        <div className='flex justify-start items-center pb-2' >
                            <button type='submit' className='text-[#064454] bg-[#D9D9D9] 2xl:text-[20px] xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[12px] text-[12px] 2xl:px-8 xl:px-8 lg:px-8 md:px-1 sm:px-1 px-1 py-2 rounded-lg font-semibold'>Download Code</button>
                        </div>
                        <div className='flex overflow-hidden object-cover justify-end items-center'>
                            <Image width={150} height={150} src="/Images/portcard-share.png" alt="image" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Servicecarddetail