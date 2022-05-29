import React, { useState,useEffect } from "react";
import { useAuth } from "../Component/Layout";
import Link from 'next/link'

function FavoritesItem({image, title, id,desc }) {
  return (
    <div className="m-auto text-secondary ">
    <Link href="/RecipeItem"><div className="flex w-72 h-40 m-5 flex-col items-center bg-white rounded-lg border shadow-md  hover:bg-gray-100  ">
    <img className="object-cover w-full h-96 rounded-t-lg   " src={image} alt=""></img>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight   ">title {title}</h5>
        <p className="mb-3 font-normal    ">desc {desc}</p>
    </div>
</div></Link>
</div>
  )
}

export default FavoritesItem