import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
 
 
// import * as firebase from 'firebase'
// import 'firebase/firestore';
// import { initializeApp, getApps, getApp } from "firebase/app";


const Firebase =initializeApp( {
 
    apiKey: "AIzaSyAwokIdAXqKhjCBalFyC9QVrApQsQ5J2-o",
    authDomain: "recipe-app-ed4f6.firebaseapp.com",
    projectId: "recipe-app-ed4f6",
    storageBucket: "recipe-app-ed4f6.appspot.com",
    messagingSenderId: "517074017697",
    appId: "1:517074017697:web:ce759f13acd6e895ee3fe0"
})

// export default !firebase.apps.length 
//   ? firebase.initializeApp(Firebase).firestore()
//   : firebase.app().firestore();
 
// getApps().length === 0 ? initializeApp(Firebase) : getApp();
export const auth= getAuth(Firebase)
 
export default Firebase ;