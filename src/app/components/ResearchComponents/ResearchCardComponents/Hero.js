import React from 'react'
// import ResearchForm from '@/app/utils/Researchutils/GeneralForm';
import SearchTopic from '@/app/utils/Researchutils/SearchTopic';

const Hero = () => {
    return (
        <>
            <div className=" bg-[#064454] flex flex-col md:flex-row md:justify-between">
                <div className="w-full md:w-1/3  p-4">
                    <div className="flex flex-col justify-center items-center h-full">
                        <div className='overflow-hidden object-cover w-full flex flex-col justify-center items-center py-4 px-2'>
                            <img width={400} height={400} src="/Images/researchport3.png" alt="image" />
                            <div className="mt-4">
                                <h1 className='text-[22px] text-white font-bold pb-2'>Lorem ipsum dolor</h1>
                                <p className='text-white font-medium py-1 text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
                                    iocl quam model proin vel eget enmim risus, portitor, sad est is consectetur molestie caras.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/3  p-4">
                    <div className='text-start py-4 px-2 w-full relative flex flex-col justify-between h-full'>

                        <p className='text-white font-medium py-1 text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis elit eget aliquam laoreet vel, sagittis mattis enim. Iaculis quam morbi proin vel eget enim risus, porttitor. Sed est id consectetur molestie cras. Malesuada quam cursus blandit amet. Odio nisi, commodo feugiat purus. In rhoncus, elementum donec neque. Feugiat ultrices duis mattis imperdiet hac facilisis turpis amet. Gravida egestas nec id euismod elit. Sit laoreet nunc, nec iaculis nisl. Convallis donec amet, id ullamcorper sapien justo, congue mauris.</p>
                        <p className='text-white font-medium py-1 text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
                            Ut et, velit, euismod commodo, laoreet ullamcorper dignissim donec in. Pretium eget faucibus sagittis ultricies. Enim dictum tortor ut faucibus amet ac dui auctor ipsum. Massa sed mi lorem ut vel. Turpis sed nulla nam adipiscing praesent. Tortor posuere gravida in rhoncus, quis adipiscing aliquet leo orci. Duis ipsum, consequat ac commodo viverra.</p>
                        <div className='flex justify-between items-end'>
                            <div className='flex justify-start items-center pb-2'>

                            </div>
                            <div className='flex overflow-hidden object-cover justify-end '>
                                <img width={150} height={150} src="/Images/portcard-share.png" alt="image" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <div className='w-full flex justify-start items-center 2xl:px-10 xl:px-10 lg:px-6 md:px-4 sm:px-0 px-0 pb-20'>
                <ResearchForm />
            </div> */}

            <div className=" flex flex-col md:flex-row md:justify-between">
                <div className="w-full  md:w-1/2  p-4">
                    <SearchTopic />
                </div>
                <div className="w-full md:w-1/2  p-4">
                    <ResearchForm />
                </div>
            </div>


        </>
    )
}

export default Hero
