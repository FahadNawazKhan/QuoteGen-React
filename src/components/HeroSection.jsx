import React from 'react'
import QuoteCard from './QuoteCard'
import ActionButtons from './ActionButtons'

const HeroSection = () => {
    return (
        <div className='flex flex-col  items-center min-h-[83%] '>
            <div className='text-5xl m-5 mt-7 mb-5'>
                <h1 className='font-sans text-white font-bold'>Click. <span className='italic bg-gradient-to-r from-mauve-300 via-purple-400 to-mauve-200 bg-clip-text text-transparent'>Inspire.</span> Repeat</h1>
            </div>
            <QuoteCard />
            
        </div>
    )
}

export default HeroSection