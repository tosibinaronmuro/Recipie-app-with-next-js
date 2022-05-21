import React from "react";
import { useEffect, useRef, useState } from "react";
import DisplayResults from "../Component/DisplayResults";
import axios from "axios";

function Results() {
  const searchref = useRef(null);
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchref.current.value);
    searchref.current.value=''
  };
  useEffect(() => {
    const API_KEY = "0ef6a2baae594f999fcb22462fe8a649";
    const URL = `https://api.spoonacular.com/recipes/complexSearch?query=${search}&number=20&apiKey=${API_KEY}`;

    async function fetchData() {
      const response = await axios.get(URL);
      const recipe = response.data.results;
      console.log(recipe);
    }

    fetchData();
  }, [search]);
  return (
    <div className="bg-last min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex items-center m-auto p-5 w-96"
      >
        <label for="simple-search" className="sr-only">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </form>
      <DisplayResults searchResults={search} />
    </div>
  );
}

export default Results;
