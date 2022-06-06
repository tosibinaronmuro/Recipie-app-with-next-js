import React ,{useState,useEffect} from 'react'
import FavoritesItem from '../Component/FavoritesItem'
import { collection, connectFirestoreEmulator, getDocs } from "firebase/firestore";
import { doc, documentId, getFirestore, setDoc,getDoc,onSnapshot  } from "firebase/firestore";
import { database, RecipeCollection } from "../Component/Firebase";
import { useAuth } from "../Component/Layout";


function Favorites() {
  const{ currentUser,recipeID,setRecipeID
  } = useAuth();
  const [data,setdata]=useState()
  const [loadData,setloadData]=useState(false)
 
  // console.log(currentUser)


//   useEffect(()=>{
// //  try {
//   const newWay=async ()=>{
//     // console.log(currentUser)
//     const docRef = doc(database, "favorites", currentUser?.uid);
//       const docSnap = await getDoc(docRef,'recipe');
//     console.log(docSnap.data())
//     console.log('hu')

//     // if (docSnap.exists()) {
//     //   console.log("Document data:", docSnap.data());
//     //   setdata(docSnap.data())
//     //   setloadData(true)
//     // } else {
//     //   // doc.data() will be undefined in this case
//     //   console.log("No such document!");
//     // }
//     // }
    
//   newWay()

 
//  }
  
  //  const unsub = onSnapshot(doc(docRef,'recipe'), (doc) => {
  //   console.log("Current data: ", doc.data());
  // });
  // unsub()
  // },[currentUser?.email ])
  
 



 useEffect(()=>{
  const test= async ()=>{
    const docRef = doc(database, "favorites", currentUser?.uid);
    const docSnap = await getDoc(docRef,'recipe');
    // console.log(docSnap.data())
  
 const helo=docSnap.data()
 setdata(helo)
 setloadData(true)
//  console.log(helo)
    // if (docSnap.exists()) {
    //         console.log("Document data:", docSnap.data());
             
    //       } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //       }
          
  
   }
   test()
},[currentUser])




  return (
    <div className='  min-h-screen h-auto bg-last'>
     <div> <p className='flex justify-center pt-5 text-secondary font-rubik text-2xl'>Your Favorites Recipes here</p> </div>
     <div className='flex  h-auto flex-wrap m-auto '>
        
      {loadData ?  data?.recipe.map((item)=>{
          console.log(item.recipeID)
          return(
            <ul key={item?.recipeID} >
              <FavoritesItem title={item.recipeIDtitle} image={item.recipeIDimage} id={item}  />
            </ul>
          )
        }): <div> oops ... nothing to see here</div>
        }

   

 
     </div>

    </div>
  )
}

export default Favorites