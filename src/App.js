

import './App.css';
import Productpage from './components/Productpage';
// import Traffic from './Traffic';
import UsegetData from './UsegetData';
// import Card from './components/Card';
// import Ui from './components/Ui';

function App() {
  
  const custom = UsegetData('')
  return (
    <div>
      <Productpage/>
      {/* <div>{custom}</div> */}
      {/* <Traffic/> */}
 
    </div>
  );
}

export default App;
