import React, { useState,useEffect } from "react";
import { useAuth } from "../Component/Layout";
import Link from 'next/link';
// import { useAuth } from "../Component/Layout";

function FavoritesItem({image, title, id,desc }) {
  const{ currentUser,recipeID,setRecipeID
  } = useAuth();
  function handleCLick(){
    setRecipeID(id.mapValue.fields.recipeID.integerValue)
      }
  return (
    <div onClick={handleCLick} className="m-5 h-auto w-auto text-secondary   ">
    <Link href="/RecipeItem"><div className="flex  h-72 w-80   flex-col items-center bg-white rounded-lg border shadow-md  hover:bg-gray-100  ">
    <img className="object-cover w-44 h-44 rounded-t-lg   " src={image.mapValue.fields.recipeIDimage.stringValue} alt=""></img>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight   ">  {title.mapValue.fields.recipeIDtitle.stringValue}</h5>
         
    </div>
</div></Link>
</div>
  )
}

export default FavoritesItem