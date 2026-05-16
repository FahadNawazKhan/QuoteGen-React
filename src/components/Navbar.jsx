import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-[98%] mx-3 mb-3 font-sans rounded-b-lg border-b-2 border-mauve-500 border-solid'>
            <div className='p-5 flex'>
                <div>
                    <img src="/quotegenlogo2.jpg.png" alt="logo" className='w-12' />
                </div>
                <div className='mx-3 flex flex-col justify-center'>
                    <h1 className='font-bold font-sans text-white'>QuoteGen</h1>
                    <p className='text-xs text-gray-400'>Your daily spark, one click away.</p>
                </div>
            </div>
            <div className='m-5 flex gap-5 text-white cursor-pointer'>
                <button className='cursor-pointer hover:text-mauve-400 transition duration-300'>Home</button>
                <button className='cursor-pointer hover:text-mauve-400 transition duration-300'>Favourites</button>
                <button className='cursor-pointer hover:text-mauve-400 transition duration-300'>About</button>
            </div>
        </div>
    )
}

export default Navbar