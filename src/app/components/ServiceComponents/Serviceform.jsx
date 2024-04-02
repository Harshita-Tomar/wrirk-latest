import React from 'react'

const Serviceform = () => {
    return (
        <div className='mb-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='bg-[#064454] rounded-3xl m-6 md:m-4 lg:m-20'>
                    <form className='m-8 sm:m-6 md:m-8 lg:m-12'>
                        <div className='mb-5'>
                            <input type="text" id="full_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required />
                        </div>

                        <div class="grid gap-6 mb-3 sm:grid-cols-2">
                            <div class="mb-6">
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mail" required />
                            </div>

                            <div>
                                <input type="number" id="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number" required />
                            </div>
                        </div>

                        <div class="mb-6">
                            <input type="text" id="Reserarch_area" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                        <div class="mb-6">
                            <input type="text" id="Reserarch_domain" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rearch Domain" />
                        </div>

                        <div class="mb-6">
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Please write your concern here..."></textarea>
                        </div>

                        <div className='flex justify-center mb-0 pb-0'>
                           <button type="submit" class="text-white px-10  text-lg rounded-[25px] bg-sky-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                        </div>  
                    </form>
                </div>
                
                <div className='mt-20 ms-28'>
                    <img src="/Images/image (2).png" alt="fkjg" />
                </div>
            </div>
        </div>
    )
}

export default Serviceform