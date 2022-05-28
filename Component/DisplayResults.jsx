import React from "react";
import FoodCard from "./FoodCard";
import { useAuth } from "../Component/Layout";
import Link from 'next/link'
 

function DisplayResults({ searchResults, recipeData }) {
    // getting the global state
    const { recipeID, setRecipeID,recipeIDimage, setRecipeIDimage,recipeIDtitle, setRecipeIDtitle } = useAuth();
  const { searchrender, setsearchrender } = useAuth();
  console.log(recipeData);
  return (
    <div className="lg:p-5">
      <p className="flex justify-center items-center text-2xl font-frank mb-3 ">
        {" "}
        Search results for '{searchResults}'
      </p>
      <div className=" pt-3 lg:p-5 rounded-lg flex flex-wrap justify-center bg-white">
        {recipeData?.map((item) => {
          return (
           <Link key={item.id} href={'/RecipeItem'}><ul  onClick={()=>{setRecipeID(item.id); setRecipeIDtitle(item.title);
            setRecipeIDimage(item.image)}} >
              <FoodCard id={item.id} image={item.image} title={item.title} />
            </ul></Link>
          // <FoodCard id={item.id} image={item.image} title={item.title} />
          );
        })}
      </div>
    </div>
  );
}

export default DisplayResults;
