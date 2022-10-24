import React,{useEffect,useState} from 'react';
import Avatar from '@mui/material/Avatar';
import {suggestObject} from  '../Objects';
import './Suggestions.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Button from '@material-ui/core/Button';


const Suggestions = () => {

    const profileName = "abhimanyu8486";
    const name = "Abhimanyu Singh";
    const profilePic = "./assets/pic.jpg";
    
    const [suggestedUserdata5,setSuggestedUserData5] = useState([]);
    const [suggestedUserdata20,setSuggestedUserData20] = useState([]);
    const [seeMore,setSeeMore] = useState(false);

    const retrieve5 = async () => {
        const {data} = await axios.get("https://randomuser.me/api/?results=5");
        setSuggestedUserData5(data.results);
    }
    const retrieve20 = async () => {
        const {data} = await axios.get("https://randomuser.me/api/?results=20");
        setSuggestedUserData20(data.results);
    }

    useEffect(() => {
        retrieve5();
        retrieve20();
      },[]);

    const click = () =>{
        setSeeMore(!seeMore);
    }

    const switchClicked = () =>{
        alert("switch clicked!!")
    }

    const followClicked = () => {
        alert("follow clicked!!")
    }

    return(
        <div>
            <Container>
                <Row >
                    <Col xs={3} >
                        <div class="profileAvtar">
                            <Avatar sx={{ width: 70, height: 70, bgcolor: 'red'}} src={profilePic}> A </Avatar>
                        </div>
                    </Col>
                    <Col xs={5} >
                        <div class="profileDetails">
                            <p>
                                <span id="suggestProfileName">{profileName}</span>
                                    <br/>
                                <span id="suggestName">{name}</span>
                            </p>
                        </div>
                    </Col>
                    <Col xs={4} >
                        <div class="labelLink1">
                            <h5 onClick={switchClicked}>Switch</h5>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} >
                        <div class="suggestionText">Suggestions For You</div>
                    </Col>
                    <Col>
                        <div class="seeAll">
                            <Button onClick={click} style={{height:30, color:'white',background:'blueviolet'}}>
                                {seeMore ? "See Less": "See More"}
                            </Button>
                        </div>
                    </Col>
                </Row>
                {(seeMore ? suggestedUserdata20 : suggestedUserdata5).map((obj, key) => (
                <Row key={key}>
                        <Col xs={2}>
                            <div>
                                <Avatar sx={{ width: 50, height: 50, bgcolor: obj.color, marginTop: 2.5 }} src={obj.picture.thumbnail}>  
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
                ))}

                {/* <div class="seeAll">
                    <Button onClick={click} style={{height:30, color:'white',background:'blueviolet'}}>
                        See All
                    </Button>
                </div> */}
                <Row>
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
                </Row>
                <Row>
                    <div class="language">Language</div>
                </Row>
                <Row>
                    <div class="copyright">@ 2022 Blooming-O - INSTAGRAM CLONE</div>
                </Row>
                <br/>
            </Container>
        {/* <div class="suggestionPart">
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

            <Container>
                <Row >
                    <Col sm={8}>
                        <div class="suggestionText">Suggestions For You</div>
                    </Col>
                    <Col sm={4}><h4 class="seeAll" onClick={click}>See All</h4></Col>
                </Row>
            </Container>

                {suggestedUserdata.map((obj, key) => (

                <div class="suggestionList">
                   
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
        <div class="copyright">@ 2022 SPRING - INSTAGRAM CLONE</div> */}

        </div>
    );
}

export default Suggestions;