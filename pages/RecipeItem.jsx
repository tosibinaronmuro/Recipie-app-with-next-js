import React, { useEffect, useState } from "react";

import { useAuth } from "../Component/Layout";
import axios from "axios";
import RecipeItemData from "../Component/RecipeItemData";

function RecipeItem() {
  const { recipeID, setRecipeID,setsearchrender,recipeIDimage, setRecipeIDimage,recipeIDtitle, setRecipeIDtitle} = useAuth();
  const [data, setdata] = useState();
  const [stepsdata, setstepsdata] = useState();
  const [loading, setloading] = useState(true);
  const [favorites, setfavorites] = useState(false);
  setsearchrender(false)
  useEffect(() => {
    const API_KEY = "0ef6a2baae594f999fcb22462fe8a649";
    const API_KEY2='084e61d247474b97976610933c49ceca' 
    const URL = `https://api.spoonacular.com/recipes/${recipeID}/ingredientWidget.json?apiKey=${API_KEY}`;
   const STEPSURL=`https://api.spoonacular.com/recipes/${recipeID}/analyzedInstructions?apiKey=${API_KEY}`
  
  

    async function fetchData() {
      try {
        const response = await axios.get(URL);
        const stepsres=await axios.get(STEPSURL)
        loading
        const recipe = response.data.results;
        setdata(response.data.ingredients);
        setstepsdata(stepsres.data)
        setloading(false)
        // stepsres.data[0].steps[2].step
        console.log(
          `recipe=${ stepsdata[0]  } `
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [recipeID,loading,stepsdata]);
  const handleClick = () => {
     setfavorites(true)
    // setRecipeID(id);
    // setRecipeIDtitle(title)
    // setRecipeIDimage(image)
   
};
  return (
    <div className="bg-last pb-3 min-h-screen">
      <div className="flex justify-evenly pt-3 "><p className="font-frank rounded flex justify-center pl-3 p-1 text-secondary text-xl lg:text-3xl   ">{recipeIDtitle}</p>
      
      <button
          onClick={handleClick}
          className="rounded-full   bg-primary w-8 h-8 flex justify-center items-center hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary hover:shadow-xl"
        >
          {!favorites ? (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path>
            </svg>
          )}
        </button>
      </div>
      {!loading && <RecipeItemData data={data} stepdata={stepsdata[0]} image={recipeIDimage} />}
    
    </div>
  );
}

export default RecipeItem;
