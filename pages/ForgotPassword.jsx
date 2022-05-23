import React, { useRef, useState } from "react";
import { useAuth } from "../Component/Layout";
import Link from 'next/link'
import Head from "next/head";
// import { useNavigate } from "react-router-dom";
import Error from "./Error";
import Message from "./Message";

function ForgotPassword() {
  // const navigate = useNavigate();
  const emailref = useRef(null);

  const [error, seterror] = useState("");
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successful, setsuccessful] = useState(false);
  const { resetPassword } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setmessage("");
      seterror("");

      setLoading(true);
      await resetPassword(emailref.current.value);
      setmessage("Check your email for further instructions");
      setsuccessful(true);
    } catch {
      seterror("failed to reset password ");
    }
    setLoading(false);
  }
  return (
    <>
    <Head>
    <title>{"Tosiron's recipe | Forgot-Password"}</title>
    <meta name="keywords" content="Tosiron" />
  </Head>
    <div className="h-screen flex justify-center items-center bg-last flex-col">
      <form
        onSubmit={handleSubmit}
        className="w-auto mt-5   lg:w-96 bg-white rounded-lg m-14 mb-2 md:w-96 h-auto border-2 p-5 shadow-xl"
      >
        <p className="flex justify-center items-center m-5 text-secondary font-frank text-2xl">
          Reset Password
        </p>
        {successful && <Message message={message} />}
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

        <div className="flex items-start mb-6"></div>
        <div className="flex justify-center">
          <button
            disabled={loading}
            type="submit"
            className="p-2.5 ml-2 w-44 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary hover:shadow-xl"
          >
            Reset Password
          </button>
        </div>
        <div className="flex justify-center m-2 items-center h-5">
          <p className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
           
           <Link href='/Login'><span
               
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Login
            </span></Link>
          </p>
        </div>
      </form>
      <div className="flex items-center h-5 mb-14">
        <p className="ml-2 text-sm font-medium font-rubik    text-secondary">
          Need an account? 
          <Link href='/Signup'><span
               
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Login
            </span></Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default ForgotPassword;
