import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Philosophy from './components/Services'
import Teams from './components/Teams'
import Contact from './components/Contact'
import Header from './components/Header'
import { FaHouseFloodWater } from 'react-icons/fa6'
import Footer from './components/Footer'
import Services from './components/Services'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Teams />
      <Contact />
      <Footer />
    </>
  )
}

export default App