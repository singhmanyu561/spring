import React,{useState,useEffect} from 'react';
import Posts from './Posts/Posts';
import AppBar from './AppBar/AppBar';
import Stories from './Stories/Stories';
import Suggestions from './Suggestions/Suggestions1';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () =>{

  const [width, setWidth] = useState(window.innerWidth);
  const [suggestionFlag,setSuggestionFlag] = useState(false);
  
  const handleSuggestionFlag = () => {
    setSuggestionFlag(!suggestionFlag)
  }

  useEffect(() => {

    function handleResize() {
        setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    }, []);

  return(
    
        <div>
           {width < 990 ? 
            <AppBar widthFlag={true} handleSuggestionFlag={handleSuggestionFlag} /> 
            : 
            <AppBar widthFlag={false} handleSuggestionFlag={handleSuggestionFlag}/>
            } 
            <hr />
            {suggestionFlag && width < 990 ?<Suggestions />:
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
                    <Col></Col>
                    {width > 990 ?  
                    <Col lg={5} >
                        <Suggestions />
                    </Col> : []}
                       
                </Row>
            </Container>}
            {/* {console.log(suggestionFlag)} */}
        </div>
  );

} 

export default HomePage;