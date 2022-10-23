import React,{useState,useEffect} from 'react';
import Posts from './Posts/Posts';
import AppBar from './AppBar/AppBar';
import Stories from './Stories/Stories';
import Suggestions from './Suggestions/Suggestions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () =>{

  const [width, setWidth] = useState(window.innerWidth);
  

  useEffect(()=>{
    setWidth(window.innerWidth);
    alert(width);
  })

  return(
    
        <div>
            <AppBar />
            <hr />
            <Container>
                <Row >
                    <Col lg={6}>
                        <Row>
                            <Stories />
                        </Row>
                        <br></br>
                        <Row>
                            <Posts />
                        </Row>
                    </Col>
                        <Col lg={5}>
                            <Suggestions />
                        </Col> 
                       
                </Row>
            </Container>
        </div>
  );

} 

export default HomePage;