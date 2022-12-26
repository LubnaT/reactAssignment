import React from 'react'

function Card(props) {

 
  return (
    <div className=''>
      <div className='mx-[50px] my-[40px]'>
        
     
        <button onClick={props.a} className='bg-red-500 p-2 rounded-md border-1 border-solid '> Card1</button>
        
        
        
      </div>
    </div>
  )
}

export default Card