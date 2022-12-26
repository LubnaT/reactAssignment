
// import { useState } from 'react';
import './App.css';
import usegetData from './usegetData';
// import Card from './components/Card';
// import Ui from './components/Ui';

function App() {
  // const [button,setButton]=useState(false)

  const custom = usegetData('')
  return (
    <div>
      <div>{custom}</div>
{/* 
     <div className='h-[100px] w-[100px] bg-red-700'></div>
     <div  className='h-[100px] w-[100px] bg-red-700'></div> */}
     {/* <button>Click me</button> */}
      {/* {
        button ? <Ui/> : <Card a={setButton}/>
      } */}


 
    </div>
  );
}

export default App;
