import React from 'react'

function Error({error}) {
  return (
    <div className='h-full w-full'> 
        <p className='bg-red-200 p-2 rounded'>{error}</p>
    </div>
  )
}

export default Error