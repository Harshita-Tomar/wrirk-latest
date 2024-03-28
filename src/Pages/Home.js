import About from '@/components/HomeComponents/About'
import Footer from '@/components/Footer'
import GetinTouch from '@/components/HomeComponents/GetinTouch'
import Header from '@/components/Header'
import Hero from '@/components/HomeComponents/Hero'
import ProductHead from '@/components/HomeComponents/ProductHead'
import Services from '@/components/HomeComponents/Services'
import Testimonials from '@/components/HomeComponents/Testimonials'
import WorkSignup from '@/components/HomeComponents/WorkSignup'
import React from 'react'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <ProductHead />
      <WorkSignup />
      <GetinTouch />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home
