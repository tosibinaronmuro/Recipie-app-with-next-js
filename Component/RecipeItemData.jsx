import React from 'react'

function RecipeItemData({data,stepdata,image}) {
  return (
      <>
     <div className=" pt-3 lg:p-5 m-5 lg:m-14 rounded-lg flex flex-col lg:flex-row justify-center border-tertiary shadow-lg bg-white">
        <div className="flex-1 ">
          <div className=" flex justify-center    ">
            <img
              
              src={image}
              alt=""
            />
          </div>

          <div className="m-3">
            <p className="text-xl text-secondary font-frank">Ingredients <span className='text-sm font-extralight'>(per one serving)</span></p>
            <hr />
            <div>
            <div>
       {data.map((item)=>{
         return(
           <div className="flex justify-between font-rubik text-secondary m-2">
             <p>{item.name}</p> <span>{item.amount.metric.value}{item.amount.metric.unit}</span>
           </div>
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
       {stepdata.steps.map((item)=>{
         return(
           <div className="flex   font-rubik text-secondary m-2">
            <span className='m-1'>{item.number}</span> <p className='m-1'>{item.step}</p> 
           </div>
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