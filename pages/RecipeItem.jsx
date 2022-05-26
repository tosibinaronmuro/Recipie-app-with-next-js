import React, { useEffect, useState } from "react";

import { useAuth } from "../Component/Layout";
import axios from "axios";
import RecipeItemData from "../Component/RecipeItemData";

function RecipeItem() {
  const { recipeID, setRecipeID,setsearchrender} = useAuth();
  const [data, setdata] = useState();
  const [stepsdata, setstepsdata] = useState();
  const [loading, setloading] = useState(true);
  setsearchrender(false)
  useEffect(() => {
    const API_KEY = "0ef6a2baae594f999fcb22462fe8a649";
    const API_KEY2='084e61d247474b97976610933c49ceca' 
    const URL = `https://api.spoonacular.com/recipes/${recipeID}/ingredientWidget.json?apiKey=${API_KEY2}`;
   const STEPSURL=`https://api.spoonacular.com/recipes/716429/information?apiKey=${API_KEY2}`

    async function fetchData() {
      try {
        const response = await axios.get(URL);
        const stepsres=await axios.get(STEPSURL)
        loading
        const recipe = response.data.results;
        setdata(response.data.ingredients);
        setloading(false)
        console.log(
          `recipe=${stepsres.data[0].steps} `
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [recipeID]);
  return (
    <div className="bg-last">
      {recipeID}
      {!loading && <RecipeItemData data={data}/>}
    
    </div>
  );
}

export default RecipeItem;
