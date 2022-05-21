import React from 'react'
import FoodCard from './FoodCard'

function DisplayResults({searchResults}) {
  return (
    <div className='p-5'> 
        <p className='flex justify-center items-center text-2xl font-frank mb-3 '> Search results for '{searchResults}'</p>
        <div className='p-5 rounded-lg   bg-white'>

            <FoodCard/>
        </div>
    </div>
  )
}

export default DisplayResults