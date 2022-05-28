// import { resolveHref } from 'next/dist/shared/lib/router/router'
import React, { useRef, useState } from "react";
import { useAuth } from "../Component/Layout";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
// import { useNavigate } from 'react-router-dom'
import Error from "./Error";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Component/Firebase";

const Signup = () => {
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const confirmpasswordref = useRef(null);
  const [error, seterror] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { signup, isLoggedin, setisLoggedin, currentUser, setCurrentUser } =
    useAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordref.current.value !== confirmpasswordref.current.value) {
      return seterror("passwords dont match");
    }
    try {
      seterror("");
      setLoading(true);

      signup(emailref.current.value, passwordref.current.value);
      router.push("/Login");
    } catch {
      seterror("failed to create an account");
    }

    setLoading(false);
  }
  const googleHandler = () => {
    try {
      signInWithPopup(auth, provider).then((result) => {
        setisLoggedin(true);
        localStorage.setItem("loggedin", true);
        setCurrentUser(result.user.email);
      });
      router.push("/");
    } catch (err) {
      console.log(err);
      // seterror(err);
    }
  };

  return (
    <>
      <Head>
        <title>{"Tosiron's recipe | signup"}</title>
        <meta name="keywords" content="Tosiron" />
      </Head>
      <div className="h-screen flex justify-center items-center bg-last ">
        <form
          onSubmit={handleSubmit}
          className=" w-full mt-5 bg-white rounded-lg m-14 lg:m-14 lg:w-96 md:w-96 h-auto border-2 p-5 shadow-xl"
        >
          <p className="flex justify-center font-frank items-center text-secondary text-2xl">
            Sign Up
          </p>
          {error && <Error error={error} />}

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-secondary font-rubik mb-2 text-sm font-medium    "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-white border border-primary text-secondary text-sm rounded-full focus:ring-primary focus:border-primary hover:shadow-xl block w-full pl-10 p-2.5 placeholder-secondary"
              placeholder="Your email"
              required=""
              ref={emailref}
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-secondary font-rubik mb-2 text-sm font-medium    "
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-white border border-primary text-secondary text-sm rounded-full focus:ring-primary focus:border-primary hover:shadow-xl block w-full pl-10 p-2.5 placeholder-secondary"
              placeholder="Create password"
              required=""
              ref={passwordref}
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="repeat-password"
              className="block text-secondary font-rubik mb-2 text-sm font-medium    "
            >
              Confirm password
            </label>
            <input
              type="password"
              id="repeat-password"
              className="bg-white border border-primary text-secondary text-sm rounded-full focus:ring-primary focus:border-primary hover:shadow-xl block w-full pl-10 p-2.5 placeholder-secondary"
              placeholder="Confirm password"
              required=""
              ref={confirmpasswordref}
            ></input>
          </div>

          <div className="flex justify-center">
            <button
              disabled={loading}
              type="submit"
              className="p-2.5  text-sm rounded-full w-full font-medium text-white hover:text-secondary bg-primary   border hover:bg-white border-primary   focus:ring-4 focus:outline-none focus:ring-primary hover:shadow-xl"
            >
              Register new account
            </button>
          </div>
          {/* google signup */}
          <div className="flex flex-col">
            <span className="flex justify-center">or</span>
            <button
              type="button"
              onClick={googleHandler}
              className="flex p-2.5 ml-2 rounded-full text-sm font-medium justify-center text-secondary bg-white  border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary hover:shadow-xl items-center dark:focus:ring-[#4285F4]/55   mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="w-6 h-6 mr-2 -ml-1"
                viewBox="0 0 48 48"
                style={{ fill: "#000000" }}
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Sign in with Google
            </button>
          </div>
          <div className="flex   mb-6">
            <div className="flex justify-center w-full h-5">
              <p className="ml-2 text-sm flex  font-medium text-secondary   ">
                Already have an account?
                <Link href="/Login">
                  <span className="text-blue-600 hover:underline dark:text-blue-500">
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
