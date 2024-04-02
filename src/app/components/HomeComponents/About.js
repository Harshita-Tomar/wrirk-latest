import React from 'react'
import Image from 'next/image';

const About = () => {
    return (
        <>
            <div className="w-full">

                <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 ps-8 pe-0 relative">

                    {/* first coloum */}
                    <div className='w-full bg-[#0026313D] rounded-tl-[50px] px-[50px] py-[50px] lg:col-span-2 relative'>

                        <h2 className='2xl:leading-[3.0rem] xl:leading-[3rem] lg:leading-[2.9rem] md:leading-[2.9rem] sm:leading-[2.7rem] leading-[2.5rem] pb-2 font-black 2xl:text-[45px] xl:text-[42px] lg:text-[38px] md:text-[36px] sm:text-[36px] text-[34px]'>Who <br /> We Are?</h2>
                        
                        <p className='font-bold text-[15px] tracking-normal py-2 pe-10 leading-[30.75px] text-black'>WRIRK A Product Of TeamMP Research Work, Being equipped and completely
                            prepared with a team of 200+ professional, researchers and analytic
                            professionals internationally, "WRIRK" in the shape of a strong team guides
                            and assist every scholar with individual attention to enable them enhancing
                            their abilities and obtaining more understanding of the relevant
                            research area and specific domain.</p>

                        <div className="grid grid-cols-2 gap-5 ps-10 pe-20 pt-10 pb-28">

                            <div className='flex justify-start gap-2'>
                                <div className='ps-1'>                               
                                   <Image className="rounded-full"  width={60} height={60} src="/Images/alumniimg.png" alt="image" />                                   
                                </div>
                                <div className='pe-1'>
                                    <h6 className='text-[24px] leading-6 font-bold'>150 +</h6>
                                    <p className='font-medium'>Alumni of University</p>
                                </div>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <div className='ps-1'>                               
                                   <Image className="rounded-full"  width={40} height={40} src="/Images/scholarimg.png" alt="image" />                                   
                                </div>
                                <div className='pe-1'>
                                    <h6 className='text-[24px] leading-6 font-bold'>20 K +</h6>
                                    <p className='font-medium'>Happy Scholar</p>
                                </div>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <div className='ps-2'>                               
                                   <Image className="rounded-full"  width={50} height={50} src="/Images/custimg.png" alt="image" />                                   
                                </div>
                                <div className='pe-1'>
                                    <h6 className='text-[24px] leading-6 font-bold'>85 % +</h6>
                                    <p className='font-medium'>Customers Retention</p>
                                </div>
                            </div>

                            <div className='flex justify-start gap-4'>
                                <div className='ps-1'>                               
                                   <Image className="rounded-full"  width={40} height={40} src="/Images/proimg.png" alt="image" />                                   
                                </div>
                                <div className='pe-1'>
                                    <h6 className='text-[24px] leading-6 font-bold'>50 K +</h6>
                                    <p className='font-medium'>Project Complete</p>
                                </div>
                            </div>

                        </div>

                        <div className='absolute right-0 bottom-[0.0001px] '>
                        <Image className="ps-1" width={350} height={350} src="/Images/girlimg.png" alt="image" />                                    
                        </div>

                    </div>

                    {/* Second coloum */}
                    <div className='rounded-tl-[30px] px-[20px] py-[20px] bg-[#002631] absolute w-[36%] h-[713px] right-0 top-[-100px] 2xl:flex xl:flex lg:flex md:hidden sm:hidden hidden'>
                        <p className='font-thin text-sm tracking-wide leading-[22px] pe-6 text-white'>WRIRK A Product Of TeamMP Research Work, Being equipped and completely prepared with a team of 200+ professional, researchers and analytic professionals internationally, "WRIRK" in the shape of a strong team guides and assist every scholar .</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About
