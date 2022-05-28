import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider  } from "firebase/auth"
 
 
 


const Firebase =initializeApp( {
 
    apiKey: "AIzaSyAwokIdAXqKhjCBalFyC9QVrApQsQ5J2-o",
    authDomain: "recipe-app-ed4f6.firebaseapp.com",
    projectId: "recipe-app-ed4f6",
    storageBucket: "recipe-app-ed4f6.appspot.com",
    messagingSenderId: "517074017697",
    appId: "1:517074017697:web:ce759f13acd6e895ee3fe0"
})


export const auth= getAuth(Firebase)
export const provider=new GoogleAuthProvider()
export default Firebase ;