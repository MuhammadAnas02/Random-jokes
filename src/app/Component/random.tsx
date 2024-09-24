"use client"
import React from 'react'
import { useState, useEffect } from 'react'


const Random = () => {
interface JokeResponse{
    setup:string,
    punchline: string
}
const [joke , setjoke] = useState<string>("")
useEffect(()=>{
    fetches();
},[])
async function fetches():Promise<void> {
    try{
    const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data: JokeResponse = await response.json();
      // Update state with the fetched joke
      setjoke(`${data.setup} - ${data.punchline}`);
    }
    catch (error){
        setjoke("Failed to fetch jokes pleas try again")
    }
    
}
  return (  
  <div className='bg-[#0c4e4e] w-full h-screen py-36'>
        <div className='h-96 w-[38%] bg- bg-green-500   ml-[27%] rounded-xl'>
          <h1 className='text-center pt-14 pb-4 font-bold text-2xl'> 😜 Random Joke 👈</h1>
          <div className='py-6 bg-[#6cf5bc] mx-4 px-5 rounded-lg mt-4'>
            {`${joke}💯`|| 'Loading...'}
          </div>
          <button className='bg-[rgb(206,90,44)] text-white ml-[33%] mt-8 py-2 rounded-xl px-2 hover:bg-[#d63737]' onClick={fetches}>😎 Get New Joke 😂</button>
        </div>

  </div>
  )

}

export default Random
