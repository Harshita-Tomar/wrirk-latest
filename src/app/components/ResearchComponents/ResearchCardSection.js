import React from 'react'
import ResearchCard from '@/app/utils/Researchutils/ResearchCard';


const ResearchCardSection = () => {
  const data = [
    {
      title: "The Study on the role of CSR in developing. ",
      desc: "A company's corporate brand will always be representative of a favourable image. ",
      category: "Business-Management-And-Accounting",
      keywords: ['Barriers', 'Product'],
    },
    {
      title: "The Study on the role of CSR in developing. ",
      desc: "A company's corporate brand will always be representative of a favourable image. ",
      category: "Business-Management-And-Accounting",
      keywords: ['Barriers', 'Product'],
    },
    {
      title: "The Study on the role of CSR in developing.",
      desc: "A company's corporate brand will always be representative of a favourable image. ",
      category: "Business-Management-And-Accounting",
      keywords: ['Barriers', 'Product'],
    },
    {
      title: "The Study on the role of CSR in developing.",
      desc: "A company's corporate brand will always be representative of a favourable image. ",
      category: "Business-Management-And-Accounting",
      keywords: ['Barriers', 'Product'],
    },
    {
      title: "The Study on the role of CSR in developing.  ",
      desc: "A company's corporate brand will always be representative of a favourable image. ",
      category: "Business-Management-And-Accounting",
      keywords: ['Barriers', 'Product', 'gts'],
    },
    {
      title: "The Study on the role of CSR in developing. ",
      desc: "A company's corporate brand will always be representative of a favourable image. ",
      category: "Business-Management-And-Accounting",
      keywords: ['Barriers', 'Product', 'hbtu'],
    }
  ]
  return (
    <>
      <div className='w-full'>
        <div className='grid items-center justify-center w-full bg-[rgb(42,150,177)] relative 2xl:py-8 xl:py-8 lg:py-6 md:py-5 sm:py-4 py-4 mt-[-19px]'>
          <h1 className='font-extrabold 2xl:text-[136px] xl:text-[136px] lg:text-[130px] md:text-[100px] sm:text-[60px] text-[50px] 2xl:leading-[136.2px] xl:leading-[136.2px] lg:leading-[136.2px] md:leading-[90.93px] sm:leading-[65.93px] leading-[52.2px] pb-1 text-white tracking-wide opacity-35'>Research</h1>
        </div>

        <div className='w-full grid 2xl:px-6 xl:px-6 lg:px-6 md:px-6 sm:px-6 px-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-x-2 sm:gap-x-8 md:gap-x-6 lg:gap-x-12 xl:gap-x-12 2xl:gap-x-12 gap-y-10 sm:gap-y-10 md:gap-y-10 lg:gap-y-14 xl:gap-y-14 2xl:gap-y-14 justify-center items-center py-10 sm:py-10 md:py-20 lg:py-20 xl:py-20 2xl:py-20'>



            {/* {data.map((item, index) => (
              <ResearchCard key={index} title={item.title} desc={item.desc} category={item.category} keywords={item.keywords} />
            ))} */}
            {data.map((item, index) => (
              <ResearchCard key={index} {...item} />
            ))}
          </div>

        </div>

        <div className="grid mb-4 grid-cols-3  gap-4">
          <div className=" p-4 ">
            <div className="flex justify-center items-center">
              <button className="bg-[#2E8095]  text-white font-bold py-2 px-4 rounded">Previous</button>
            </div>
          </div>
          <div className=" p-4">
            <div className="flex justify-center items-center">
              <button className=" font-bold py-2 px-4 rounded text-black">Page 1 to 4</button>
            </div>
          </div>
          <div className=" p-4">
            <div className="flex justify-center items-center">
              <button className="bg-[#2E8095]  text-white font-bold py-2 px-4 rounded">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResearchCardSection
