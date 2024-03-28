import React from 'react'
import Image from 'next/image';
import '@fontsource/qwitcher-grypen';

const ProductHead = () => {
    return (
        <>
            <div className='w-full'>
                <div className='grid grid-cols-3 gap-5 2xl:px-24 xl:px-24 lg:px-24 md:px-10 sm:px-6 px-4 py-10'>
                    <div className=' 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 col-span-3 2xl:ps-5 xl:ps-5 lg:ps-5 md:ps-0 sm:ps-0 ps-0 flex justify-center items-center'>
                        <Image className="2xl:ps-1 xl:ps-1 lg:ps-1 md:ps-0 sm:ps-0 ps-0" width={300} height={300} src="/Images/producthead-img.png" alt="image" />
                    </div>
                    <div className='2xl:px-5 xl:px-5 lg:px-5 md:px-3 sm:px-3 px-2 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-3 col-span-3 2xl:pt-28 xl:pt-28 lg:pt-28 md:pt-10 sm:pt-10 pt-10'>
                        <h6 className='text-[14px] leading-[21px] 2xl:text-start xl:text-start lg:text-start md:text-center sm:text-center text-center text-[#8F8D8D] font-medium'>Product Head</h6>
                        <h4 className='text-lg font-bold pb-1 2xl:text-start xl:text-start lg:text-start md:text-center sm:text-center text-center'>Ankur Vashishtha</h4>
                        <p className='font-medium text-[14px] text-black leading-[26px] 2xl:pe-10 xl:pe-10 lg:pe-10 md:pe-0 sm:pe-0 pe-0 2xl:text-start xl:text-start lg:text-start md:text-center sm:text-center text-center'>Welcome to WRIRK, where research meets innovation. As the Product Head, I'm pleased to introduce you to our revolutionary solutions that empower your research endeavors. Our commitment to quality, accessibility, and staying at the forefront of industry trends drives us to continually enhance your research experience. Every difficulty presents an opportunity to push limits, gain new insights, and advance science and society. Explore our range of services designed to make your research work more efficient and effective, and join our vibrant community of researchers. The experts of WRIRK determined to crafting a better future via rigorous research, perseverance, and a common enthusiasm for expanding human knowledge</p>
                        <h3 className='text-[36px] font-medium py-3 font-grypen 2xl:text-start xl:text-start lg:text-start md:text-center sm:text-center text-center'>Ankur Vashishtha</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductHead
