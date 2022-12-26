import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Traffic() {
    const [button,setButton]=useState(false)

    useEffect(()=>{
        setButton()
    },[button])

  return (
    <div>
          <div className='h-[100px] w-[100px] bg-black'>{button}</div>
     <div  className='h-[100px] w-[100px] bg-slate-100'>{button}</div> 
     <button onClick={() => setButton(!button)}>Click Me</button>
       
        

    </div>
  )
}

export default Traffic