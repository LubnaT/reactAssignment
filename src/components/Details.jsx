import React from 'react'

function Details() {
  return (
    <div>  
        {/* ------- */}
    <div  className='w-[360px] h-[530px] rounded-3xl bg-blue-200 mt-[2px] mx-auto'>
    <img className='h-[150px] w-full rounded-md' alt=""
    src="https://images.wallpaperscraft.com/image/single/girl_photographer_art_118146_1280x720.jpg"/>
    {/* name */}
    <div class="mt-[10px] text-center flex flex-col">
        <span class="text-2xl font-semibold shadow-sm">Lubna Tahreem</span>
        <span class="text-md">System Engineer</span>
    </div>
    {/* <!-- followers --> */}
    <div class="mt-[20px] text-center flex flex-row">
        <div class="flex flex-col ml-[80px] ">
            <span class="text-3xl  font-bold">12</span>
        <span class="text-md text-zinc-800"> Followers</span>
        </div>
        <div class="flex flex-col ml-[60px]">
            <span class="text-3xl font-bold">1000</span>
        <span class="text-md  text-zinc-800">Following</span>
        </div>
    </div>
    {/* <!-- para --> */}
    <div class="mt-[20px] mx-[40px] w-[300px]">
        <p class="text-zinc-900 font-mono"> Hellloo!!!</p>
        <p class="text-zinc-900 font-mono">Iam Lubna Tahreem. I completed my Mtech from P.D.A Collage of engineering and currently working in TCS Hyderabad..</p>
    </div>
    <button  className="w-[250px] h-[40px] mt-[10px] mx-[50px] bg-yellow-300 border-2 border-slate-900 rounded-full">Follow Me</button>
    </div>

    {/* ----- */}</div>
  )
}

export default Details