import About from '@/app/components/HomeComponents/About'
import GetinTouch from '@/app/components/HomeComponents/GetinTouch'
import Hero from '@/app/components/HomeComponents/Hero'
import ProductHead from '@/app/components/HomeComponents/ProductHead'
import Services from '@/app/components/HomeComponents/Services'
import Testimonials from '@/app/components/HomeComponents/Testimonials'
import WorkSignup from '@/app/components/HomeComponents/WorkSignup'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProductHead />
      <WorkSignup />
      <GetinTouch />
      <Testimonials />
    </>
  )
}

export default Home
