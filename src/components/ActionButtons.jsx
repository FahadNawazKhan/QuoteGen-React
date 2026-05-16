import React from 'react'

const ActionButtons = ({getQuote}) => {
    return (
        <div className='mt-7 '>
            <button onClick={getQuote} className='bg-gradient-to-r from-mauve-800 via-mauve-600 to-mauve-400  py-4 px-10 rounded-2xl text-lg font-bold cursor-pointer border border-mauve-400 text-white hover:from-mauve-400 hover:via-mauve-600 hover:to-mauve-800 transition duration-500'>Randomize</button>
        </div>
    )
}

export default ActionButtons