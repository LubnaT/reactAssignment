import React from 'react'
// import Details from './Details'

function Button(props) {

  return (
    <div>
        <div className='w-[360px] h-[530px] rounded-3xl bg-blue-200 mt-[2px] mx-auto'>
    <button onClick={props.b} className="w-[250px] h-[40px] mt-[10px] mx-[50px] bg-yellow-300 border-2 border-slate-900 rounded-full">Follow Me</button>
   </div>
   </div>
  )
}

export default Button