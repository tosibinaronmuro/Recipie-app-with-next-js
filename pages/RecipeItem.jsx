import React,{ useEffect,useState } from 'react'
 
import { useAuth } from "../Component/Layout";
import axios from 'axios';


function RecipeItem() {
    const { recipeID, setRecipeID } = useAuth();
    const [data, setdata] = useState();
    useEffect(()=>{
        // https://api.spoonacular.com/recipes/
        const API_KEY = "0ef6a2baae594f999fcb22462fe8a649";
        const URL = `https://api.spoonacular.com/recipes/638308/analyzedInstructions?apiKey=${API_KEY}`;
    
        async function fetchData() {
          try {
            const response = await axios.get(URL);
            const recipe = response.data.results;
            setdata(response.data);
            console.log(`recipe=${recipe}, response=${response  }, data=${data.steps.number }`)
          } catch (error) {
            console.log(error);
          }}
          fetchData()
    },[recipeID])
  return (
    <div className='bg-last'>{recipeID}
   <div  className=" pt-3 lg:p-5 rounded-lg flex flex-col lg:flex-row justify-center bg-white">
       <div className='relative'>
           <div> 
           <img className='rounded-full absolute top-0' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AfQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAMEBQcCAQj/xAA4EAACAQMCBAIIBQQBBQAAAAABAgMABBEFIQYSMUFRYQcTFCIycYGRQlKhscEjYtHwFSRDgrLC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAMBAgQFBv/EACcRAAICAQMDAwUBAAAAAAAAAAABAgMRBBIhBSIxE0FRMlJhcYEU/9oADAMBAAIRAxEAPwDcaVKlQAqVI0B+kjix9Kh/46xflupBmRx1RT4eZoJSyEeo8UaLpxK3N/Fzj8CHmP6UPv6S9LEnLHaXL74B90Z/WsieQuSTzNnFe8yxqTzYHmOtRkttNp03jzSruQJOs1pnYNKBy/cdKKkdXUMpBBGQR3r5sjveRyRI6jl8Nga1b0bcRe0x/wDHTSIxAzFg/D0yvy7ihENB/Sqq4h1220GwN1c+8xPLHGOrt4UHR8T8SXbmVRbW8R+GMR8x+eTSbtRXV9RCTZote0EWPE2rW0mNRto7qH88OFcfQnB/SiHTuItM1DaG6RZAcNFKeR1PyP8AFFWorsWYsHFotqVeA5r2nkCpUqVACpUqVADc8qQwySyEBEUsxPYCvnTiTUZNS1q7unfaaRiO+2dsfTFbJ6R9Sax4cliQ4e6/pkjsvf8AgfWsMlGHOcD59apJl4I8iyTguQvb5/6KfeX+lh2IYDHujoB1OTUcFcqGzgnt3H+aRRfVs/IWUjZd9x/vagsMTXAefoyqegIxnyz/ADV9wvfSW91622Lq6crq5wCPEZ8KG55C0nM6d999gPlmuLe9KksjhRg4xsT59PLpQ2QalNqTcYa+Lor/ANHaoqRL/cQCx+/7Ci21tfdVQo2ob4CsvUaRCzgc7jnbbud6NICEWvOaiz1LXIdXEaFiMYON+tVupaJBKpJRWJ8RVw8o7Uw8vPttSd2BjhkpNM1a70KRYXDS2Q2MZ6oPFT/FHdrdQ3dvHPbyLJG4yrKaE7i0jmBDKM1E065ueH5j6pfWWcj5ki/L4svn+9dHSaxx7bHwZpwaD6lTVvPHcRLLCwaNxlWHcU7XaTyKFSpUqkDJvSvfrJqfsyNkwRYx/cd8/t9qzdmBUnG3jRJx5ce0cQXT52MjAn5GhiJJ7g4giklOcYRSf2pE2k+R0fAuePBjyQScnA3NczSqq4VmKD4cKVHzqdHw1rlyvNHp0y5GxJC1HuOH9bjJQ6bK2Fx7zdD5b1VXV/cQ0VNxOrssWUC5JJA2H1piyiW61OGCNfdeQD6U3dCW0dkmjeN+hDrjepHDB5tetObrz9KmcuxtEH0BocQjs4wo7VZlsY3qFpm1tGPKlqFwYIGZfiOy/OvMuWEaq1weXV5FGSmSzjqB0FRRfDO6EDyNV6vz704B40rOR+C4guFkGVbPiK7kRZFwcEVTIGVgynBHcVaWsolXPQ9CPCrRlgpKOSToN8bO+GnyH+jMSYiT8LdcfXeiodKANahcxCWA8ssZ5kPgR0o00m+TUtOgvI8hZVzg9j3H3r0HT798dr9jBOOGTKiahfQWMYed8Z2VRuWPgBXV9dx2ds0sm+Ngo6sewFU9tavNI17fMDKR7o7Rr4CnanUqpYXkiMcgxacF213cSX+rAFWYuI2OygnvVg2qcN6SBFAqty7YgjyPv0oU4p4tlv53t7UlLNDgAHHP5mh9rouAFblPasXoufNjN0KMrk0yHjPQ3bkczRDpl4tv0zV1azWV9AJrSWKeI/iQgisYkk93Lnfsa4tNbuNIu1nsZ2jbuufdYeBHeqz0kWu0tKlLwa/qGi2d7E0VxbRSxkYKsuaznU/R9FpWrLqmklgisSbblyAD+U/xWicM67DrunieNeR12kTPwn/FWMsCyHDb5rHvnXlJmaUQc0icPao/NkHeudXbn9Wq9ME1zfWEmlTvc2/M1u28kIH6r4H964ZkuI45EIZSMg+RrNNcD6mQ41YDcEeANPoPGnUiyPCnEixS0huTxU6U5AfVTjwbY13HGc/KnRES6/ep8EHt2vPCwxU/gSTOjSxD/s3Mi/fDf/VRZwAlP8DbWd9sce1n/wBVrp9PeLX+jHcju6uPb9ca3B/o2mM+bnr9ht9684gmMXD9+yH3hA2CKjwf0+ItSjHX1gY/IqD/ADU6/g9rsp7c7CWNkyPMVW6b/wBEmy1a4MGnl94r50hcdiN8VxfRNHcMrjDKeVh4Go52G31zXR/JuTyh+e8Mae8eb51VXd36xsjIru45mzy747VAZSCTTIr5FTfwaf6F7uR72+gJJX1Ib9a1oHNZr6HdEnsdPuNUulZDd4WFD15Aev1NaUtcq+SdjwJY1eoHgYMBis10LX7Z9UudKdhGRK3qQds77r8+9adIfOs44w0ew0/W7LWYIVjmecGSMHZv7seNKgozbi/ciL2sJo4sqGG4NPpF41Gt2PNlG93wqekn5hv5Vk5XA/JysW9dMo5ge9dhjj3R96SgDdj9asotkZI96QkDE9lqx4OgeLRVdus0jSfToP0FDmrXD3VzHp9l708zco/k/ICju2iS3t44U2WNQo+ldfptfc5/wx2yywc11Tp2rR6jgtDcBYpMfhYZwfqNvoPGpysskeVYYPhVhqNnFfWcttLsrjHMOqnsR5g0G215caXdmx1Icsg+Fx8Mi/mH+O1RrtO4z9SK4fkmqeOGCfHfC1yt1Lf6dGZFkOZI06qfEeVATpMpKvFIrdwUNfQSvDOM5z9a9WxhznkU/TNZa9XKKw1k1KaRgen6NqeoPy2djPI3jyYX6k0d8J+jVIJlvNf5JnU8y2qnKA/3Hv8ALpWlRwKg2AFdEIOrCrT1U5L4IczmOMIoVRgDsKcAI6mmZLuGMe84xQ9rfGemaahD3CtJ0CJu1Zopy4jyKckX99eW9tEZZ5FSNBlmJwAKyHijiNdX1ZrhN7W2U8g6Z8/r/FVuv8SahxFOIsertw3uxqevmfGvItLdbUpyn3vi5h8XzrraXR7e6XkVKYX6JxRZz8mHVWPVc9DRXbX0Mu4YfesPl0O6ifNupxnPKc7fKrfSLjiC2yrqsq9s5BH1pFnTpp5gSrWbAbiNc5cCqfUtdVH9RbAyzNsqruSaFbWHW72Q+0S8kZ/Cg3+9Fuh6ULX3gnvnYudz96K+nWN97wiJWlrwtpTWRe9vWV72ZcbdI18Af3NEyttVdbRsAM1OQbV2K641x2x8Cm8j7E1V61p1tqlqYLtCQN1ZThkPiDVqRTbpzCrNJ8MgyrVrTiLQHZ7K49ttV/MnvAeY61X2/pFuLc+ru7PcdWRzn7EbVq13YiUHb9KF9Y4Qtb7PrYFYnuRvWWeipl7F1NgrL6Th0S1kP/kBVNqHpF1K4J9ljSIeJPMauL30cQliYwy+QNVr+jc83xS/RjVY6CmPsG8FdR4j1G7J9r1CUg/h58D7Cq2G49fIEiUt4tjAo9i9G6K2eTfxO9XGn8DRwEHk/StMaox8IhyKDh3TgoDFMse5FF9tpnON1q4sNAWEABau7fTgg6UwqDsOhxt1T9KnwaHEPwCiGK2AxtUhYcUAU8GlomMLU6K0C9qnLGB2rvFADCRAdqdC7V3SoAVeYr2lQByVB61w0SmnaVAEdrZT2FcG0Q/hFS6VAEL2NPAV0LVR0AqXSoAjrAopxYwKcpUAchQK6xSpUAKlSpUAKlSpUAf/2Q==" alt="" />
           </div>
           
           <div className='m-3'><p className='text-xl text-secondary font-frank'>Ingredients</p>
           <hr />
           <div>
              <div className=' flex justify-between font-rubik text-secondary '>
                  <p className='flex justify-start'> ingredient 1</p> <span className='flex justify-end'>2oz</span>
              </div>
           </div>
           </div>
           </div>
           <div>secondary</div>
   </div>
    </div>
  )
}

export default RecipeItem