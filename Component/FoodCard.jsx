import React,{useState} from "react";
import {useAuth} from '../Component/Layout'

function FoodCard({image,title,id}) {
  const [favorites,setfavorites]=useState(false)
  const { recipeID,setRecipeID}=useAuth()
  const handleClick=()=>{
    setRecipeID( id)
    setfavorites(true)
    
  }
  
  return (
    <div className="bg-last w-44 lg:w-80 lg:h-96 h-auto m-1   rounded lg:rounded-lg ">
      <div className="p-3 flex justify-between">
        <p className="font-frank rounded pl-3 p-1 text-secondary text-sm lg:text-xl bg-white ">{title}</p>
        <button onClick={handleClick} className="rounded-full   bg-primary w-8 h-8 flex justify-center items-center hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary hover:shadow-xl">
         {!favorites? <svg
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
          </svg>:<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>}
        </button>
      </div>
      <div className="flex justify-between p-3">
        <div className="flex text-primary border mb-3 border-primary rounded-full justify-center items-center px-2">
          <svg
            className="w-6 h-6 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>3 mins</span>
        </div>
      </div>
      <div className="lg:rounded-b-lg flex justify-center items-baseline ">
        <img
          className=" rounded lg:rounded-b-lg w-full h-full "
          src={ image }
          alt=""
        />
      </div>
    </div>
  );
}

export default FoodCard;
