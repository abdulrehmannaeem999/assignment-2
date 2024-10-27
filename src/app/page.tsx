import React from 'react'
import Link from 'next/link'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <br />
      <Hero/>
      <br />
      <Footer/>
       
    </div>
  )
}

export default Homepage;

