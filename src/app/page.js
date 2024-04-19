

import React, { Suspense } from 'react'
import Home from './(Pages)/Home/page'
import Loading from './loading'


const page = () => {
  return (
    <>
    <Suspense fallback = {<Loading />} >
       <Home/>
    </Suspense>
    </>
  )
}

export default page
