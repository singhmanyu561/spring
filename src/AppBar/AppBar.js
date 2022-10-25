import React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './AppBar.css';
import AddPost from '../AddPost/AddPost';
import IconButton from '@material-ui/core/IconButton';
import Modal from 'react-bootstrap/Modal';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from '@mui/material/Button';

const AppBar = ({widthFlag,handleSuggestionFlag}) => {
    
    const [show, setShow] = useState(false);
    const [suggestionFlagLocal,setSuggestionFlagLocal] = useState(false);

    
    const addPost = () =>{
            setShow(true)    
    }

    const handleSuggestionFlagLocal = () => {
        setSuggestionFlagLocal(!suggestionFlagLocal)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div class="appBar">
            <Container>
                <Row >
                    <Col lg={4} >
                        <div class="webAppName">
                            Blooming-O
                        </div>
                    </Col>
                    <Col lg={3} >
                        <div class="searchFiled">
                            <input type="text" placeholder="Search" />
                        </div>
                    </Col>
                    <Col lg={5} >
                        <div class="appBarIcons">
                            <IconButton onClick={addPost} >
                                <HomeIcon sx={{ width: 40, height: 40 , cursor: 'pointer'}} />
                            </IconButton>
                            <IconButton onClick={addPost} >
                                <MarkChatUnreadOutlinedIcon sx={{ width: 40, height: 40 , cursor: 'pointer'}} />
                            </IconButton>
                            <IconButton onClick={addPost} >
                                <AddCircleOutlineOutlinedIcon sx={{ width: 40, height: 40, cursor: 'pointer' }}  />
                            </IconButton>
                            <IconButton onClick={addPost} >
                                <ExploreOutlinedIcon sx={{ width: 40, height: 40 , cursor: 'pointer'}} />
                            </IconButton>
                            <IconButton onClick={addPost} >
                                <FavoriteBorderOutlinedIcon sx={{ width: 40, height: 40, cursor: 'pointer' }} />
                            </IconButton>
                            <IconButton onClick={addPost} >
                                <Avatar sx={{ width: 40, height: 40, bgcolor: 'red' }}> A </Avatar>
                            </IconButton>
                        </div>
                    </Col>
                </Row>
                {
                    widthFlag ? 
                    <Row>
                        <Col xs={12}>
                            {(window.innerWidth < 992 && suggestionFlagLocal )?
                            <div class="suggestionButton">
                                <Button 
                                     
                                    onClick={()=>{handleSuggestionFlag();handleSuggestionFlagLocal()}} 
                                    style={{height:30, color:'white',background:'blueviolet'}}
                                >
                                    <span>
                                        View All Post
                                    </span> 
                                   
                                </Button>
                             </div>
                            :
                            <div class="suggestionButton1">
                            <Button   onClick={()=>{handleSuggestionFlag();handleSuggestionFlagLocal()}} style={{height:30, color:'white',background:'blueviolet'}}>
                                <span>
                                    View Suggestions List
                                </span> 
                            </Button>
                             </div>
                            }
                        </Col>
                    </Row>
                    :[]
                }
                
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* {console.log(handleSuggestionFlag)} */}
        </div>
    );
}

export default AppBar;