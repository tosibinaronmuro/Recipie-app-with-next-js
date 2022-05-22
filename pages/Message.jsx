import React from 'react'

function Message({message}) {
  return (
    <div className='h-full w-full'> 
    <p className='bg-green-200 text-secondary font-rubik p-2 rounded'>{message}</p>
</div>
  )
}

export default Message