import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <div className='bg-mauve-950 min-h-screen flex justify-center '>
      <div className='bg-mauve-900/70 w-[98%] m-3 rounded border border-mauve-700'>
        <Navbar />
        <HeroSection />

      </div>
    </div>
  )
}

export default App