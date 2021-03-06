import React from 'react'
import {useAuth} from '../Component/Layout'

function RecipeItemData({data,stepdata,image}) {
  const {recipeID}=useAuth();
  
  return (
      <>
     <div className=" pt-3 lg:p-5 m-5 lg:m-14 rounded-lg flex flex-col lg:flex-row justify-center border-tertiary shadow-lg bg-white">
        <div className="flex-1 ">
          <div className=" flex justify-center    ">
            <img
              className='rounded-xl'
              src={image}
              alt=""
            />
          </div>

          <div className="m-3">
            <p className="text-xl text-secondary font-frank">Ingredients <span className='text-sm font-extralight'>(per one serving)</span></p>
            <hr />
            <div>
            <div>
       {data.map((item,number)=>{
         return(

           <ul key={number} className="flex justify-between font-rubik text-secondary m-2">
             <p>{item.name.toUpperCase()}</p> <span className='font-bold'>{item.amount.metric.value}{item.amount.metric.unit}</span>
           </ul>
         )
       })}
     </div>
     {/* https://api.spoonacular.com/recipes/4632/summary */}
            </div>
          </div>
</div>

          <div className='flex-1'>
          <div className="m-3">
            <p className="text-xl text-secondary font-frank">Steps</p>
            <hr />
            <div>
            <div>
       {stepdata.steps.map((item, index)=>{
         return(
           <ul key={index} className="flex   font-rubik text-secondary m-2">
            <span className='m-1'>{item.number}</span> <p className='m-1'>{item.step}</p> 
           </ul>
         )
       })}
     </div>
  
            </div>
          </div>
          </div>
        </div>
       
         </>
  )
}

export default RecipeItemData