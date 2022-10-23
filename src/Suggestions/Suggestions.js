import React,{useEffect,useState} from 'react';
import Avatar from '@mui/material/Avatar';
import {suggestObject} from  '../Objects';
import './Suggestions.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


const Suggestions = () => {

    const profileName = "abhimanyu8486";
    const name = "Abhimanyu Singh";
    const profilePic = "./assets/pic.jpg";
    
    const [suggestedUserdata,setSuggestedUserData] = useState([]);

    const retrieve = async () => {
        const {data} = await axios.get("https://randomuser.me/api/?results=5");
        setSuggestedUserData(data.results);
    }

    useEffect(() => {
        retrieve();
      },[]);

    const click = () =>{
        alert("see all clicked");
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

            {/* <div class="suggestionsAll">
                <div class="suggestionText">Suggestions For You</div>
                <div class="seeAll" onClick={click}>See All</div>
            </div> */}
            <Container>
                <Row >
                    <Col sm={8}>
                        <div class="suggestionText">Suggestions For You</div>
                    </Col>
                    {/* <Col xs={2}></Col> */}
                    <Col sm={4}><h4 class="seeAll" onClick={click}>See All</h4></Col>
                </Row>
            </Container>

                {suggestedUserdata.map((obj, key) => (

                <div class="suggestionList">
                    {/* <div>
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
                </div> */}

                <Container >
                    <Row style={{display: 'flex'}}>
                        <Col xs={2}>
                            <div>
                                <Avatar sx={{ width: 40, height: 40, bgcolor: obj.color, marginTop: 2.5 }} src={obj.picture.thumbnail}>  
                                    {obj.login.username[0].toUpperCase()}  
                                </Avatar>
                            </div>
                        </Col>
                        <Col>
                            <div class="suggestProfileDetails">
                                <p>
                                    <span class="suggestProfileName">{obj.login.username}</span>
                                    <br />
                                    <span class="suggestSubPoint">New to Instagram</span>
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <h4 class="labelLink2" onClick={followClicked}>Follow</h4>
                        </Col>
                    </Row>
                </Container>
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