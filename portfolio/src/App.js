import React from 'react'
import CustomNavbar from './components/Navbar'
import PortfolioHero from './components/Hero'
import Cards from './components/Cards'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <CustomNavbar />
      <PortfolioHero />
      <About />
      <Cards />
      <Contact />
    </>
  )
}

export default App