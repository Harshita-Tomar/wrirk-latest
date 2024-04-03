import React from 'react'

const GeneralForm = () => {
  return (
	<>
	  <div className=" p-4 ">
            <h3 className="text-center text-[20px] pb-6">Request For Free Research Problem</h3>
            <div className="max-w-xl mx-auto bg-[#064454] shadow-md rounded-md p-6">

              <form action="#" method="POST">
                <div className="mb-4">
                  <input type="text" id="name" name="name" placeholder="Name" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-4" />
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <input type="email" id="email" name="email" placeholder="Email" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-4" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <input type="number" id="number" name="number" placeholder="Number" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-4" />
                  </div>
                </div>
                <div className="mb-4">
                  <input type="text" id="area" name="area" placeholder="Area" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-4" />
                </div>
                <div className="mb-4">
                  <input type="text" id="domain" name="domain" placeholder="Domain" className="mt-1 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-4" />
                </div>
                <div className="mb-4">
                  <input type="text" id="message" name="message" placeholder="Message" className="mt-1 block w-full h-24 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pl-4" />
                </div>

                <div className="mt-6 flex justify-center">
                  <button type="submit" className="w-40 px-4 py-2 bg-white text-[#064454] rounded-full hover:bg-[#6a8f98] hover:text-white focus:outline-none focus:bg-blue-600">Submit</button>
                </div>
              </form>
            </div>

          </div>
	</>
  )
}

export default GeneralForm
