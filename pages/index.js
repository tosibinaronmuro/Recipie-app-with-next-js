import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect } from 'react'
//  const API_KEY="0ef6a2baae594f999fcb22462fe8a649"
 
//   const URL= `https://api.spoonacular.com/recipes/complexSearch?query=vegetable&number=20&apiKey=${API_KEY}`
// export async function getServerSideProps(context) {
//  const response= await axios.get(URL)
// //  console.log(sponse.data.resultsre)
 
//  return{
//    props:{
 
//  responses:response.data.results
  
//    }
//  }

// }

 

export default function Home({responses}) {
 

  
  return (
    <div className={styles.container}>
      <Head>
        <title>{"Tosiron's recipe | home"}</title>
        <meta name="description" content="Generated by create next app" />
         
      </Head>

       <div className='font-custom '>
         {/* {responses.map((item)=>{
           return(
             <div className='bg-last'>
             <p className='font-frank text-primary'>Helloo</p>
             <p className='font-rubik text-secondary'>Hellooo</p>
             <p className='font-rubik text-tertiary'>Hellooo</p>
             <p className='font-rubik text-last'>Hellooo</p>
              <li>{item.title}</li>
              <img src={item.image} alt="" />
              </div>
           )
         })} */}
         hello world
       </div>
    </div>
  )
}
