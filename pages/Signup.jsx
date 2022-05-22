// import { resolveHref } from 'next/dist/shared/lib/router/router'
import React ,{useRef, useState} from 'react'
import { useAuth } from '../Component/Layout'
import Link from 'next/link'
// import { useNavigate } from 'react-router-dom'
import Error from './Error'

const Signup = () => {
const emailref=useRef(null)
const passwordref=useRef(null)
const confirmpasswordref=useRef(null)
const [error,seterror]=useState('')
const [loading,setLoading]=useState(false)
// const navigate=useNavigate()

 const {signup}=useAuth()
 async function handleSubmit(e){
e.preventDefault()
if(passwordref.current.value!==confirmpasswordref.current.value){
 return seterror('passwords dont match')
}
try{ 
  seterror('')
  setLoading(true)

  signup(emailref.current.value,passwordref.current.value)
  // navigate('/')
   
  
 }
 catch{ seterror('failed to create an account')}

setLoading(false)
}

  return (
    <div className='h-screen flex justify-center items-center bg-last '>
<form onSubmit={handleSubmit} className=' w-full mt-5 bg-white rounded-lg m-14 lg:m-14 lg:w-96 md:w-96 h-auto border-2 p-5 shadow-md'>
<p className='flex justify-center font-frank items-center text-secondary text-2xl'>Sign Up</p>
  {error && <Error error={error}/> }
   
<div className="mb-6">
<label htmlFor="email" className="block text-secondary font-rubik mb-2 text-sm font-medium    ">Your email</label>
<input type="email" id="email" className="bg-white border border-primary text-secondary text-sm rounded-full focus:ring-primary focus:border-primary hover:shadow-xl block w-full pl-10 p-2.5 placeholder-secondary" placeholder="Your email" required="" ref={emailref}></input>
</div>
<div className="mb-6">
<label htmlFor="password" className="block text-secondary font-rubik mb-2 text-sm font-medium    ">Your password</label>
<input type="password" id="password" className="bg-white border border-primary text-secondary text-sm rounded-full focus:ring-primary focus:border-primary hover:shadow-xl block w-full pl-10 p-2.5 placeholder-secondary"  placeholder="Create password" required="" ref={passwordref}></input>
</div>
<div className="mb-6">
<label htmlFor="repeat-password" className="block text-secondary font-rubik mb-2 text-sm font-medium    ">Confirm password</label>
<input type="password" id="repeat-password" className="bg-white border border-primary text-secondary text-sm rounded-full focus:ring-primary focus:border-primary hover:shadow-xl block w-full pl-10 p-2.5 placeholder-secondary"  placeholder="Confirm password" required="" ref={confirmpasswordref}></input>
</div>
<div className="flex items-start mb-6">
<div className="flex items-center h-5">
<p className="ml-2 text-sm font-medium text-secondary   ">already have an account? <Link href='/Login' ><span   className="text-blue-600 hover:underline dark:text-blue-500">Login</span></Link> </p>
</div>
 

</div  >
<div className='flex justify-center'> 
<button disabled={loading} type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-primary rounded-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary hover:shadow-xl">Register new account</button></div>
</form>
</div>
  )
}

export default Signup