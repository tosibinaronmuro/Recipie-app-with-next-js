import React ,{useState,useEffect} from 'react'
import FavoritesItem from '../Component/FavoritesItem'
import { collection, getDocs } from "firebase/firestore";
import { doc, documentId, getFirestore, setDoc,getDoc } from "firebase/firestore";
import { database, RecipeCollection } from "../Component/Firebase";
import { useAuth } from "../Component/Layout";


function Favorites() {
  const{ currentUser,recipeID,setRecipeID
  } = useAuth();
  const [data,setdata]=useState()
  useEffect(()=>{
    const retrieve=async ()=>{
      const docRef = doc(database, "favorites", currentUser?.email);
     const querySnapshot = await getDoc( docRef,'recipe') 
     setdata(querySnapshot._document.data.value.mapValue.fields.recipe.arrayValue.values)
     
     console.log(querySnapshot._document.data.value.mapValue.fields.recipe.arrayValue.values)
 // querySnapshot.forEach((doc) => {
 //   // doc.data() is never undefined for query doc snapshots
 //   console.log(doc.id, " => ", doc.data());
 //   console.log(hi)
 // }
 // );


   }
   retrieve()
  },[currentUser?.email])
  
 
  return (
    <div className='  min-h-screen h-auto bg-last'>
     <div> <p className='flex justify-center pt-5 text-secondary font-rubik text-2xl'>Your Favorites Recipes here</p> </div>
     <div className='flex  h-auto flex-wrap m-auto '>
       {data?.map((item)=>{
          
         return(
           <ul key={item.id.mapValue.fields.recipeID.integerValue} >
             <FavoritesItem title={item} image={item} id={item}  />
           </ul>
         )
       })}

       {/* title={item.mapValue.fields.recipeIDtitle.stringValue} */}

 
     </div>

    </div>
  )
}

export default Favorites