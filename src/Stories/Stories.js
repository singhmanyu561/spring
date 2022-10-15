import React from 'react';
import Avatar from '@mui/material/Avatar';
import { storiesObj } from '../Objects';
import './Stories.css';


const Stories = () => {

    return(
        <div class="stories">
            
            {storiesObj.map((obj,key) => (
                
                 <div class="profileStories" key={key}>
                    <Avatar sx={{ width: 70, height: 70, bgcolor: obj.color, border: "5px solid #21F111"}} src={obj.profilePic}> 
                        {obj.avatar} 
                     </Avatar>
                     {
                        obj.profileName.length > 10 ? <div><span>{obj.profileName.slice(0, 9)}... </span> </div>: 
                        <div><span>{obj.profileName}</span></div>
                     }
                     
                 </div>
                            
             ))}
            
        </div>
    );

}
 
export default Stories;