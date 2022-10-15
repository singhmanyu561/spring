import React,{useState,useEffect} from 'react';
import Posts from './Posts/Posts';
import AppBar from './AppBar/AppBar';
import Stories from './Stories/Stories';
import Suggestions from './Suggestions/Suggestions';


const App = () =>{

  const [width, setWidth] = useState(window.innerWidth);
  

  useEffect(()=>{
    setWidth(window.innerWidth);
    // alert(width);
  })

  return(
    
        <div>
          <AppBar />
          <hr />
          <div style={{ display: 'flex' }}>
            <div>
              <Stories />
              <br />
              <Posts />
            </div>
            <div>
              <Suggestions />
            </div>
          </div>
        </div>
  );

} 

export default App;