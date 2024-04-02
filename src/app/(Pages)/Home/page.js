import About from '@/app/components/HomeComponents/About'
import Footer from '@/app/components/Footer'
import GetinTouch from '@/app/components/HomeComponents/GetinTouch'
import Header from '@/app/components/Header'
import Hero from '@/app/components/HomeComponents/Hero'
import ProductHead from '@/app/components/HomeComponents/ProductHead'
import Services from '@/app/components/HomeComponents/Services'
import Testimonials from '@/app/components/HomeComponents/Testimonials'
import React from 'react'
import WorkSignup from '@/app/components/HomeComponents/WorkSignup'


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
