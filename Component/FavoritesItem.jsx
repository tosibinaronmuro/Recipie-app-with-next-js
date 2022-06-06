import React, { useState,useEffect } from "react";
import { useAuth } from "../Component/Layout";
import { database, RecipeCollection } from "../Component/Firebase";
import Link from 'next/link';
// import { useAuth } from "../Component/Layout";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

function FavoritesItem({image, title, id,desc }) {
  const{ currentUser,recipeID,setRecipeID,recipeIDtitle,
    setRecipeIDtitle,
    recipeIDimage,
    setRecipeIDimage,
  } = useAuth();

  // const handleDelete=async ()=>{
  //   setRecipeID(id)
  //   setRecipeIDimage(image)
  //   setRecipeIDtitle(title)
  //   const docRef = doc(database, "favorites", currentUser?.uid);
  //   await updateDoc(docRef, {recipe:arrayRemove( {user: currentUser?.email, recipeID, recipeIDtitle, recipeIDimage})} );
 
  // }
  function handleCLick(){
    // setRecipeID(id.mapValue.fields.recipeID.integerValue)
      }
  return (
    <div onClick={handleCLick} className="m-5 h-auto w-auto text-secondary   ">
    <Link href="/RecipeItem"><div className="flex  h-72 w-80   flex-col items-center bg-white rounded-lg border shadow-md  hover:bg-gray-100  ">
    <img className="object-cover w-44 h-44 rounded-t-lg   " src={image} alt=""></img>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight   ">  {title}</h5>
         
    </div>
    
</div></Link>
{/* <div onClick={handleDelete}>hello</div> */}
</div>
  )
}

export default FavoritesItem