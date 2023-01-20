import React from 'react'
import IosShareIcon from '@mui/icons-material/IosShare';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Productpage() {
  return (
    <div>
       <div className='p-4 bg-neutral-600'>Navbar</div>
       <div className='p-2 bg-neutral-300'>Navbar2</div>

        <div className='pt-[60px]'>
          <div className='max-w-8xl mx-auto grid gap-6 lg:grid-cols-2  md:grid-cols-1'>
            {/* 1st img div */}
            <div className='pl-[90px] mr-[160px]'>
              <img className='h-[650px] w-[400px]' src='https://m.media-amazon.com/images/I/714vSwERZUL._SL1500_.jpg'/>
            </div>
            {/* midddle div content */}
            <div className='flex'>
              {/* share icon */}
              <div className='absolute top-40 left-[600px] p-2 text-center 
                border-2 border-solid border-grey-600 rounded-full bg-white text-2xl '>
               <IosShareIcon className='' fontSize='inherit'/>
              </div>
              <div className='border-b-2 border-solid border-slate-800'>
              <div>
               <a>
                <h2 className='text-2xl font-medium'>
                  LG 8 Kg 5 Star Inverter Touch Control Fully-Automatic Front Load Washing Machine
                  with In-Built Heater (FHM1408BDW, White, 6 Motion Direct Drive, 1400 RPM & Steam)
                </h2>
               </a>
                <a className='text-sm text-teal-600 hover:cursor-pointer hover:underline'>
                  Visit the LG Store
                </a>
                <div className='flex space-x-4 mb-0'>
                 <div>
                  <StarRateIcon fontSize='inherit'/>
                  <StarRateIcon fontSize='inherit'/>
                  <StarRateIcon fontSize='inherit'/>
                  <StarRateIcon fontSize='inherit'/>
                  <StarHalfIcon fontSize='inherit'/>
                  <KeyboardArrowDownIcon fontSize='inherit'/>
                 </div>
                 <div className='text-sm text-teal-600'>
                  <a className='space-x-1 -mt-2'>
                   <span className='text-grey-600 text-sm hover:cursor-pointer hover:underline'>2,499 ratings</span>
                   <span className='text-grey-600 text-sm '>|</span>
                   <span className='text-grey-600 text-sm hover:cursor-pointer hover:underline'>220 answered questions </span>
                  </a>
                 </div>
                </div>

              </div>

              </div>
              <div>
                <div>
                <p>With Exchange</p>
                <p>upto 2,000 off</p>
                </div>
                
                <div>
                <p>Without Exchange</p>
                <p>upto 32,000 off</p>
                </div>
              </div>
              
            </div>
            
           
            
            
              
            
         
        </div>
        </div>
       
       
      
    </div>
  )
}

export default Productpage