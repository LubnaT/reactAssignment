import React from 'react'
import { useState } from 'react'
import Button from './Button';

function Card() {
  const [card,setcard]= useState()

 console.log(card);

  function cardB(){

    setcard(<Button/>)
  }

  return (
    <div className=''>
      <div className='mx-[50px] my-[40px]'>
        
        <Button/>
        <button onClick={cardB} className='bg-red-500 p-2 rounded-md border-1 border-solid '> Card1</button>
        
        
      </div>
    </div>
  )
}

export default Card