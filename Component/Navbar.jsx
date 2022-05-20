import React from "react";
import  Link  from "next/link";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href='/'
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-secondary"
              
            >
             Tosiron
            </Link>
            <button
              className="text-secondary cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center " +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href='/'
                  className="px-3 py-2 flex items-center   text-xs uppercase font-bold leading-snug text-secondary hover:opacity-75"
                 
                >
                   <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-secondary hover:opacity-75"
                 
                >
                   <span className="ml-2">Recipes</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/'
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-secondary hover:opacity-75"
                   
                >
                  <span className="ml-2">Categories</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}