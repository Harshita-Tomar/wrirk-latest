import React from 'react'
import Image from 'next/image';

const About = () => {
    return (
        <>
            <div className="w-full">

                <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 ps-8 pe-0 relative">

                    {/* first coloum */}
                    <div className='w-full bg-[#0026313D] rounded-tl-[50px] 2xl:px-[50px] xl:px-[50px] lg:px-[40px] md:px-[24px] sm:px-[20px] px-[20px] 2xl:py-[40px] xl:py-[40px] lg:py-[30px] md:py-[20px] sm:py-[20px] py-[20px] lg:col-span-2 relative'>

                        <h2 className='2xl:leading-[3.7rem] xl:leading-[3.5rem] lg:leading-[3.3rem] md:leading-[3rem] sm:leading-[2rem] leading-[1.5rem] py-3 font-black 2xl:text-[50px] xl:text-[45px] lg:text-[43px] md:text-[40px] sm:text-[32px] text-[22px] '>Who <br /> We Are?</h2>

                        <p className='font-bold 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px] tracking-normal 2xl:py-2 xl:py-2 lg:py-2 md:py-1 sm:py-0 py-0 2xl:pe-10 xl:pe-10 lg:pe-10 md:pe-0 sm:pe-0 pe-0 2xl:leading-[30.75px] xl:leading-[30.75px] lg:leading-[30.75px] md:leading-[28.75px] sm:leading-[25.75px] leading-[25.75px] text-black'>WRIRK A Product Of TeamMP Research Work, Being equipped and completely
                            prepared with a team of 200+ professional, researchers and analytic
                            professionals internationally, "WRIRK" in the shape of a strong team guides
                            and assist every scholar with individual attention to enable them enhancing
                            their abilities and obtaining more understanding of the relevant
                            research area and specific domain.</p>

                        <div className="grid grid-cols-2 gap-5 2xl:ps-10 xl:ps-10 lg:ps-10  md:ps-4 sm:ps-0 ps-0 2xl:pe-20 xl:pe-20 lg:pe-20 md:pe-10 sm:pe-0 pe-0 pt-6 pb-10">

                            <div className='flex justify-start gap-2'>
                                <div className='ps-1'>
                                    <Image className="rounded-full" width={60} height={60} src="/Images/alumniimg.png" alt="image" />
                                </div>
                                <div className='pe-1'>
                                    <h6 className='2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[18px] sm:text-[16px] text-[16px] leading-6 font-bold'>150 +</h6>
                                    <p className='font-medium 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>Alumni of University</p>
                                </div>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <div className='ps-1'>
                                    <Image className="rounded-full" width={40} height={40} src="/Images/scholarimg.png" alt="image" />
                                </div>
                                <div className='pe-1'>
                                    <h6 className='2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[18px] sm:text-[16px] text-[16px] leading-6 font-bold'>20 K +</h6>
                                    <p className='font-medium 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>Happy Scholar</p>
                                </div>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <div className='ps-2'>
                                    <Image className="rounded-full" width={50} height={50} src="/Images/custimg.png" alt="image" />
                                </div>
                                <div className='pe-1'>
                                    <h6 className='2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[18px] sm:text-[16px] text-[16px] leading-6 font-bold'>85 % +</h6>
                                    <p className='font-medium 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>Customers Retention</p>
                                </div>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <div className='ps-1'>
                                    <Image className="rounded-full" width={40} height={40} src="/Images/proimg.png" alt="image" />
                                </div>
                                <div className='pe-1'>
                                    <h6 className='2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[18px] sm:text-[16px] text-[16px] leading-6 font-bold'>50 K +</h6>
                                    <p className='font-medium 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px]'>Project Complete</p>
                                </div>
                            </div>

                        </div>

                        {/* <div className='absolute right-0 bottom-[0.0001px] '>
                        <Image className="ps-1" width={350} height={350} src="/Images/girlimg.png" alt="image" />                                    
                        </div> */}

                    </div>

                    {/* Second coloum */}
                    <div className='rounded-tl-[30px] ps-[2px] py-[2px] bg-[#2E8095] absolute w-[36%] h-[643px] right-0 top-[-100px] 2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden'>
                        <video width="750" height="500" controls autoPlay className='object-fill rounded-tl-[30px]'>
                            <source src="/videos/myVideo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
