import React, { createContext, useState, useContext, useEffect } from "react";
import { auth } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";
import Footer from "./Footer";
import { Navigation } from "./Navigation";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

function Layout({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("goat");
  const [isLoggedin, setisLoggedin] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [searchrender, setsearchrender] = useState(false);
  const [recipeID, setRecipeID] = useState(0);
  const [recipeIDtitle, setRecipeIDtitle] = useState();
  const [recipeIDimage, setRecipeIDimage] = useState();
  // signup with firebase
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // login with firebase
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  // logout
  function logout() {
    return signOut(auth).then(() => {
      setisLoggedin(false);
      localStorage.removeItem("loggedin");
      setCurrentUser(null)
    });
  }
  // reset password
  function resetPassword(email) {
    sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    // const unsubscribe=  onAuthStateChanged(auth,user=>{
    //    setCurrentUser(user)
    //         console.log('user state changed',user)
    //       setLoading(false)

    //    })

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    const monique = localStorage.getItem("loggedin");
    if (monique) {
      setisLoggedin(true);
    }
  }, []);
  // the global props and states needed for auth
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    searchrender,
    setsearchrender,
    recipeID,
    setRecipeID,
    isLoggedin,
    setisLoggedin,
    search,
    setSearch,
    recipeIDtitle,
    setRecipeIDtitle,
    recipeIDimage,
    setRecipeIDimage,
    showModal,
    setShowModal,
  };
  return (
    <>
      <AuthContext.Provider value={value}>
        <Navigation />

        {/* {!loading && children} */}
        {children}

        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default Layout;
