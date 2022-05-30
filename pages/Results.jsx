import React from "react";
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from "react";
import DisplayResults from "../Component/DisplayResults";
import axios from "axios";
import { useAuth } from "../Component/Layout";
import Pagination from "../Component/Pagination";
import Head from "next/head"; 

function Results() {
  const searchref = useRef(null);

  const [data, setdata] = useState();
  const { searchrender, setsearchrender,search, setSearch,currentUser } = useAuth();
  const [loading, setloading] = useState(true);
  const [number, setNmber] = useState(10);
  const [number1, setNmber1] = useState(1);
  const [number2, setNmber2] = useState(10);
  const [offset, setoffset] = useState(0);
  const router = useRouter();

  // increase pagination number
  const handleIncrease = (e) => {
    setNmber1((prev) => prev + 10);
     setNmber2((prev) => prev + 10);
    setoffset((prev) => prev + 10);
    console.log(number, offset);
  };
// 
  // decrease pagination number
  const handleDecrease = (e) => {
    setNmber1((prev) => prev - 10);
    setNmber2((prev) => prev - 10);
    setoffset((prev) => prev - 10);
    console.log(number, offset);
  };

  // search button submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setsearchrender(true);
    setSearch(searchref.current.value);
    searchref.current.value = "";
  };
  useEffect(() => {
    const API_KEY = "0ef6a2baae594f999fcb22462fe8a649";
    const API_KEY2='084e61d247474b97976610933c49ceca' 
    const API_KEY3='09213b3260cc4d34a3817eb64481da1f'
    const URL = `https://api.spoonacular.com/recipes/complexSearch?query=${search}&number=${number}&offset=${offset}&apiKey=${API_KEY3}`;

    async function fetchData() {
      try {
        loading
        const response = await axios.get(URL);
        const recipe = response.data.results;
        setdata(recipe);
        setloading(false)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [search,offset,number,loading]);

  // protected routes
  // useEffect(() => {
  //   if (  !currentUser)
  //     {router.push('/Login')}else {null}
  // }, [currentUser])
  
  return (
    <>
      <Head>
        <title>{"Tosiron's recipe | search"}</title>
        <meta name="keywords" content="Tosiron" />
      </Head>
      <div className="bg-last min-h-screen">
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
        {searchrender && (
          <DisplayResults searchResults={search} recipeData={data} />
        )}
       
         
        <Pagination increase={handleIncrease} decrease={handleDecrease} number1={number1} number2={number2} />
      </div>
    </>
  );
}

export default Results;
