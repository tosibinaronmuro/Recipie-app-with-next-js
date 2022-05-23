import React from "react";
import FoodCard from "./FoodCard";
import { useAuth } from "../Component/Layout";

function DisplayResults({ searchResults, recipeData }) {
  const { searchrender, setsearchrender } = useAuth();
  console.log(recipeData);
  return (
    <div className="lg:p-5">
      <p className="flex justify-center items-center text-2xl font-frank mb-3 ">
        {" "}
        Search results for '{searchResults}'
      </p>
      <div className=" pt-3 lg:p-5 rounded-lg flex flex-wrap justify-center bg-white">
        {recipeData.map((item) => {
          return (
            <ul key={item.id}>
              <FoodCard id={item.id} image={item.image} title={item.title} />
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayResults;
