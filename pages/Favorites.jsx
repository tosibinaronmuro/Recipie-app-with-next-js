import React ,{useState,useEffect} from 'react'
import FavoritesItem from '../Component/FavoritesItem'
import { collection, connectFirestoreEmulator, getDocs } from "firebase/firestore";
import { doc, documentId, getFirestore, setDoc,getDoc,onSnapshot  } from "firebase/firestore";
import { database, RecipeCollection } from "../Component/Firebase";
import { useAuth } from "../Component/Layout";
import Head from "next/head";


function Favorites() {
  const{ currentUser,recipeID,setRecipeID
  } = useAuth();
  const [data,setdata]=useState()
  const [loadData,setloadData]=useState(false)
 

 useEffect(()=>{
  const test= async ()=>{
    const docRef = doc(database, "favorites", currentUser?.uid);
    const docSnap = await getDoc(docRef,'recipe');
 
  
    const helo=docSnap.data()
 
 
    if (docSnap.exists()) {
  
            setdata(helo)
            setloadData(true)
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
          
  
   }
   test()
},[currentUser])




  return (
    <>
    <Head>
      <title>{"Tosiron's recipe | signup"}</title>
      <meta name="keywords" content="Tosiron" />
    </Head>
    <div className='  min-h-screen h-auto bg-last'>
     <div> <p className='flex justify-center pt-5 text-secondary font-rubik text-2xl'>Your Favorites Recipes here</p> </div>
     <div className='flex  h-auto flex-wrap m-auto '>
        
      {loadData ?  data?.recipe.map((item)=>{
         
          return(
            <ul key={item?.recipeID} >
              <FavoritesItem title={item.recipeIDtitle} image={item.recipeIDimage} id={item.recipeID}  />
            </ul>
          )
        }): <div> oops ... nothing to see here</div>
        }

   

 
     </div>

    </div>
    </>
  )
}

export default Favorites