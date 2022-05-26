import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useAuth } from "../Component/Layout";
import { useRouter } from "next/router";
import FoodCard from "../Component/FoodCard";

import Link from "next/link";
import { useEffect, useRef } from "react";
 const API_KEY="0ef6a2baae594f999fcb22462fe8a649"
const API_KEY2='084e61d247474b97976610933c49ceca' 

  const URL= `https://api.spoonacular.com/recipes/complexSearch?query=chicken&number=20&apiKey=${API_KEY}`
export async function getStaticProps(context) {
 const response= await axios.get(URL)
 console.log(response.data.results)

 return{
   props:{

 responses:response.data.results

   }
 }

}

export default function Home({ responses }) {
  const router = useRouter();
  const searchref = useRef(null);
  const { searchrender, setRecipeID,recipeID,setsearchrender, search, setSearch } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSearch(searchref.current.value);
    searchref.current.value = "";
      setTimeout(() => {
        setsearchrender(true)     ;},1200)
    // ;
    console.log(search)
    router.push("/Results")
  };
  return (
    <div className="bg-last">
      <Head>
        <title>{"Tosiron's recipe | home"}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className="font-custom bg-last ">
        <div className="w-screen ">
          <div
            className="bg-cover bg-center flex-1 h-128    hover:animate-pulse   flex justify-center flex-col items-center   "
            style={{
              backgroundImage: `url(https://assets.penguinrandomhouse.com/wp-content/uploads/2019/08/15161644/PRH-Meal-Planning-Email-SC-770x456-08-19.jpg`,
            }}
          >
            <div className="flex flex-col">
              <h1 className="flex justify-center text-secondary text-3xl font-extrabold font-frank">
                Food <span className="text-primary">RECIPES</span>
              </h1>
              <h2 className="flex justify-center text-tertiary text-lg lg:text-2xl font-extralight font-rubik">
                EXPLORE RECIPIES AND OTHER INGREDIENTS
              </h2>
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex items-center m-auto p-5 w-96"
              >
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-secondary "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    ref={searchref}
                    type="text"
                    id="simple-search"
                    className="bg-white border border-primary text-secondary text-sm rounded-full focus:ring-primary focus:border-primary hover:shadow-xl block w-full pl-10 p-2.5 placeholder-secondary "
                    placeholder="Search"
                    required
                  ></input>
                </div>
                <button
                  onClick={() => {
                  
                    handleSubmit
                     
                  }}
                  type="submit"
                  className="p-2.5 ml-2 text-sm font-medium text-white bg-primary rounded-full border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary hover:shadow-xl "
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
            <div> </div>
          </div>
        </div>
        <div>
          <div className="lg:p-5">
            <p className="flex justify-center text-secondary items-center text-2xl font-frank mb-3 ">
              Explore
            </p>
            <div className=" pt-3 lg:p-5 rounded-lg flex flex-wrap justify-center bg-white">
              {responses.map((item) => {
          return (
           <Link key={item.id} href={'/RecipeItem'}><ul  onClick={()=>{setRecipeID(item.id); console.log(recipeID)}} >
              <FoodCard id={item.id} image={item.image} title={item.title} />
            </ul></Link>
          // <FoodCard id={item.id} image={item.image} title={item.title} />
          );
        })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
