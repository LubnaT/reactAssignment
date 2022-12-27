import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function usegetData() {
    const [joke,setJoke] = useState('Crack some Jokes......')

    useEffect(()=>{
        const result = async ()=>{
            await fetch("https://api.chuknorris.io/jokes/categories").then(re=>re.json()).then(data=>setJoke(data.value))
        }
    

    },[])
  return (
    <div>{joke}</div>
  )
}

export default usegetData