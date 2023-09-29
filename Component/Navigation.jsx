import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../Component/Layout";
import { useRouter } from "next/router";

export const Navigation = () => {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const { currentUser, logout, setisLoggedin } = useAuth();
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center font-rubik flex-wrap   p-3 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-secondary font-bold uppercase tracking-wide">
              FlavorFusion
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 rounded lg:hidden text-secondary ml-auto hover:text-primary  outline-none"
          onClick={handleClick}
        >
          <svg
            className="fill-current text-secondary  h-6 w-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-secondary hover:text-primary font-bold items-center justify-center   ">
                Home
              </a>
            </Link>
            {currentUser && (
              <Link href="/Results">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-secondary hover:text-primary font-bold items-center justify-center  ">
                  Results
                </a>
              </Link>
            )}
            {currentUser && (
              <Link href="/Favorites">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-secondary hover:text-primary font-bold items-center justify-center  ">
                  Favorites
                </a>
              </Link>
            )}

           {!currentUser && ( <Link href="/Signup">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-secondary hover:text-primary font-bold items-center justify-center  ">
                Sign-up
              </a>
            </Link>)}
            {!currentUser && ( <Link href="/Login">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-secondary hover:text-primary font-bold items-center justify-center  ">
                Login
              </a>
            </Link>)}
            {currentUser && (
              <button
                onClick={async () => {
                  logout();
                  router.push("/Login");
                   
                }}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-secondary hover:text-primary font-bold items-center justify-center  "
              >
                logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
