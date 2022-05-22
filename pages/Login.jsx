import React, { useRef, useState } from "react";
import { useAuth } from "../Component/Layout";
// import { useNavigate, Link } from "react-router-dom";
import Link from 'next/link'
import Error from "./Error";
function Login() {
  // const navigate = useNavigate();

  // the values of the input fielsa
  const emailref = useRef(null);
  const passwordref = useRef(null);

  const [error, seterror] = useState("");
  const [loading, setLoading] = useState(false);
  // getting the values from the context provider
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      seterror("");
      setLoading(true);
      await login(emailref.current.value, passwordref.current.value);
      // navigate("/");
      // <Link href="/"/> 
    } catch {
      seterror("failed to login");
    }
    setLoading(false);
  }
  return (
    <div className=" flex justify-center items-center bg-last">
      <form
        onSubmit={handleSubmit}
        className="w-full m-14 rounded-lg bg-white lg:w-96 md:w-96 h-auto border-2 p-5 shadow-md"
      >
        <p className="flex justify-center font-frank text-secondary items-center text-2xl">Login</p>
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
        {/* <Link
          to="/forgot-password"
          className="text-sm flex justify-center items-center mb-4"
        >
          forgot password?
        </Link> */}
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <p className="ml-2 text-sm font-medium  text-secondary  ">
              don't have an account?{" "}
             <Link href='/Signup' ><span
                
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                sign up
              </span></Link>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            disabled={loading}
            type="submit"
            className="p-2.5 ml-2 w-44 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary hover:shadow-xl"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
