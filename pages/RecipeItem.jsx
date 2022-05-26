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
  }, [recipeID]);
  return (
    <div className="bg-last">
      {recipeID}
      {!loading && <RecipeItemData data={data} stepdata={stepsdata[0]}/>}
    
    </div>
  );
}

export default RecipeItem;
