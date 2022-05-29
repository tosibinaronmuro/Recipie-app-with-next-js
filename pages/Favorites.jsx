import React from 'react'
import FavoritesItem from '../Component/FavoritesItem'

function Favorites() {
  return (
    <div className='flex flex-col min-h-screen bg-last'>
     <div> <p className='flex justify-center pt-5 text-secondary font-rubik text-2xl'>Your Favorites Recipes here</p> </div>
     <div className='flex flex-wrap'>
<FavoritesItem/>
<FavoritesItem/>
<FavoritesItem/>
<FavoritesItem/>
     </div>

    </div>
  )
}

export default Favorites