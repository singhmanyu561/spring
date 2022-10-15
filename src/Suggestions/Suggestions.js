import React from 'react';
import Avatar from '@mui/material/Avatar';
import {suggestObject} from  '../Objects';
import './Suggestions.css';

const Suggestions = () => {

    const profileName = "abhimanyu8486";
    const name = "Abhimanyu Singh";
    const profilePic = "./assets/pic.jpg";
    

    const click = () =>{
        alert();
    }

    const switchClicked = () =>{
        alert("switch clicked!!")
    }

    const followClicked = () => {
        alert("follow clicked!!")
    }

    return(
        <div>
        <div class="suggestionPart">
            <div class="suggestProfile">
                <div>
                    <Avatar sx={{ width: 80, height: 80, bgcolor: 'red' }} src={profilePic}> A </Avatar>
                </div>
                <div class="profileDetails">
                    <p>
                        <span id="suggestProfileName">{profileName}</span>
                        <br/>
                        <span id="suggestName">{name}</span>
                    </p>
                </div>
                
                <h4 class="labelLink1" onClick={switchClicked}>Switch</h4>
               
            </div>

            <div class="suggestionsAll">
                <h3>Suggestions For You</h3>
                <h4 onClick={click}>See All</h4>
            </div>

                {suggestObject.map((obj, key) => (

                <div class="suggestionList">
                    <div>
                        <Avatar sx={{ width: 40, height: 40, bgcolor: obj.color, marginTop: 2.5 }} src={obj.profilePic}> {obj.avatar} </Avatar>
                    </div>
                    <div class="suggestProfileDetails">
                        <p>
                            <span class="suggestProfileName">{obj.suggestProfileName}</span>
                            <br />
                            <span class="suggestSubPoint">{obj.suggestInfo}</span>
                        </p>
                    </div>

                    <h4 class="labelLink2" onClick={followClicked}>Follow</h4>
                </div>

            ))}
        </div>
        <br/>
        <div class="footer">
            
            <a href="#" >About</a>
            <a href="#" >Help</a>
            <a href="#" >Press</a>
            <a href="#" >API</a>
            <a href="#" >Jobs</a>
            <a href="#" >Privacy</a>
            <a href="#" >Term</a>
            <a href="#" >Location</a>
           
            
        </div>
        <div class="language">Language</div>
        <br/>
        <div class="copyright">@ 2022 SPRING - INSTAGRAM CLONE</div>

        </div>
    );
}

export default Suggestions;