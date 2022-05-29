import React, { useRef, useState } from "react";
import { useAuth } from "../Component/Layout";
// import { useNavigate, Link } from "react-router-dom";
import { useRouter } from "next/router";
import Link from "next/link";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Component/Firebase";
import Head from "next/head";
import Error from "./Error";
function Login() {
  const router = useRouter();

  // the values of the input fielsa
  const emailref = useRef(null);
  const passwordref = useRef(null);

  const [error, seterror] = useState("");
  const [loading, setLoading] = useState(false);
  // getting the values from the context provider
  const { login,setisLoggedin,setCurrentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      seterror("");
      setLoading(true);
      await login(emailref.current.value, passwordref.current.value);

      router.push("/ ");
      // <Link href="/"/>
    } catch {
      seterror("failed to login... Check email or password");
    }
    setLoading(false);
  }
  // google login
  const googleHandler = () => {
    try {
      signInWithPopup(auth, provider).then((result) => {
         
        setisLoggedin(true);
        setCurrentUser(result.user.displayName );
        localStorage.setItem("loggedin", true);
        router.push("/Favorites");
      });
     
    } catch (err) {
      console.log(err);
      // seterror(err);
    }
  };

  return (
    <>
      <Head>
        <title>{"Tosiron's recipe | Login"}</title>
        <meta name="keywords" content="Tosiron" />
      </Head>
      <div className="h-screen flex justify-center items-center bg-last">
        <form
          onSubmit={handleSubmit}
          className="w-full m-14 mt-5 rounded-lg bg-white lg:w-96 md:w-96 h-auto border-2 p-5 shadow-xl"
        >
          <p className="flex justify-center font-frank text-secondary items-center text-2xl">
            Login
          </p>
          {/* display error banner */}
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
              placeholder="Your password "
              id="password"
              className="bg-white border border-primary text-secondary text-sm rounded-full focus:ring-primary focus:border-primary hover:shadow-xl block w-full pl-10 p-2.5 placeholder-secondary"
              required=""
              ref={passwordref}
            ></input>
          </div>
          <div className="flex justify-center">
            <button
              disabled={loading}
              type="submit"
              className="p-2.5  text-sm rounded-full w-full font-medium text-white hover:text-secondary bg-primary   border hover:bg-white border-primary   focus:ring-4 focus:outline-none focus:ring-primary hover:shadow-xl"
            >
              Login
            </button>
          </div>
          {/* google signup */}
          <div className="flex flex-col">
            <span className="flex justify-center">or</span>
            <button
              type="button"
              onClick={googleHandler}
              className="flex p-2.5   rounded-full text-sm font-medium justify-center text-secondary bg-white  border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary hover:shadow-xl items-center dark:focus:ring-[#4285F4]/55  mb-2"
            >
              {/* <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg> */}
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
          <Link href="/ForgotPassword">
            <span className="text-sm flex text-tertiary justify-center items-center ">
              forgot password?
            </span>
          </Link>
          <div className="flex   mb-6">
            <div className="flex  h-5">
              <p className=" text-sm font-medium flex justify-center items-center text-secondary ml-5  lg:ml-20 ">
                don't have an account?
                <Link href="/Signup">
                  <span className="text-blue-600 hover:underline dark:text-blue-500">
                    sign-up
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
