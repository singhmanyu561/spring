import React,{useState,useEffect} from 'react';
import HomePage from './HomePage';


const App = () =>{

  const [width, setWidth] = useState(window.innerWidth);
  

  useEffect(()=>{
    setWidth(window.innerWidth);
    // alert(width);
  })

  return(
    
        <div>
          <HomePage/>
        </div>
  );

} 

export default App;