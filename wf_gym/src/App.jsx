import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import OpeningHours from './components/OpeningHours'
import Gallery from './components/Gallery'
import SocialProof from './components/SocialProof'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <OpeningHours />
        <Gallery />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
