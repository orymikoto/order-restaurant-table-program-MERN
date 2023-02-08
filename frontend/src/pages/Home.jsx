// NPM Package
import React from 'react'
import Footer from '../components/Footer'

// Local Components Package
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='h-[100vh]'></div>
      <Footer />
    </div>
  )
}

export default Home