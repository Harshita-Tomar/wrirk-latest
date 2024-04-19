"use client"
import React, { useState, useEffect } from 'react'

const blogs = () => {
  const [selectedValue, setSelectedValue] = useState('');
  console.log('selectedValue', selectedValue);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <ul className='flex items-center justify-start xl:w-3/4 3xl:3/4 2xl:w-3/4 lg:w-3/4 md:w-full sm:w-full w-full relative py-4'>
        <li>
          <input
            type="radio"
            id="Document"
            name="Tool"
            value="Document"
            className="hidden peer"
            onChange={handleRadioChange}
            checked={selectedValue === 'Document'}
          />
          <label htmlFor="Document" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
            <span className="text-center">Document</span>
          </label>
        </li>

        <li>
          <input
            type="radio"
            id="Technical"
            name="Tool"
            value="Technical"
            className="hidden peer"
            onChange={handleRadioChange}
            checked={selectedValue === 'Technical'}
          />
          <label htmlFor="Technical" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
            <span className="text-center">Technical Discussion</span>
          </label>
        </li>

        <li>
          <input
            type="radio"
            id="Both"
            name="Tool"
            value="Both"
            className="hidden peer"
            onChange={handleRadioChange}
            checked={selectedValue === 'Both'}
          />
          <label htmlFor="Both" className="cursor-pointer 2xl:px-4 xl:px-4 lg:px-4 md:px-4 sm:px-2 px-2 py-2 border-[1px] text-cyan-700 border-cyan-700 peer-checked:border-[#2E8095] peer-checked:text-white peer-checked:bg-[#2E8095] rounded-md text-center text-wrap me-4">
            <span className="text-center">Both</span>
          </label>
        </li>
      </ul>
      <p>Selected value: {selectedValue}</p>
    </div>
  )
}

export default blogs