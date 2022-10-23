import React,{useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import { storiesObj } from '../Objects';
import './Stories.css';
import axios from 'axios';

const Stories = () => {
    const [userdata,setUserData] = useState([]);

    const retrieve = async () => {
        const {data} = await axios.get("https://randomuser.me/api/?results=10");
        setUserData(data.results);
    }

    useEffect(() => {
        retrieve();
      },[]);

    return(
        <div class="stories">
            
            {userdata.map((obj,key) => (
                
                 <div class="profileStories" key={key}>
                    <Avatar sx={{ width: 70, height: 70, bgcolor: obj.color, border: "5px solid #21F111"}} src={obj.picture.medium}> 
                        {obj.login.username[0].toUpperCase()} 
                     </Avatar>
                     {
                        obj.login.username.length > 10 ? <div><span>{obj.login.username.slice(0, 9)}... </span> </div>: 
                        <div><span>{obj.login.username}</span></div>
                     }
                     
                 </div>
                
             ))}
             
        </div>
    );

}
 
export default Stories;