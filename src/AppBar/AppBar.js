import React,{useState} from 'react';
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

const AppBar = () => {
    const [addPostDialogFlag,setAddPostDialogFlag] = useState(false);
    const [message, setMessage] = useState({
        'message': ''

    })

    const [show, setShow] = useState(false);


    // const handleClose = () => {
    //     setMessage({ ...message, ['message']: '' })
    //     setAddPostDialogFlag(false)

    // };
    const addPost = () =>{
            setShow(true)    
    }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <div class="appBar">
            <Container>
                <Row >
                    <Col lg={3} >
                        <div class="webAppName">
                            <h1>Spring</h1>
                        </div>
                    </Col>
                    <Col lg={4} >
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
            </Container>
            {(window.innerWidth <992) && <h4>View all Suggestions</h4>}

            {/* <div class="webAppName">
                <h1>Spring</h1>
            </div>
            <div class="searchFiled">
                <input type="text" placeholder="Search" />
            </div>
            <div class="appBarIcons">
                <HomeIcon sx={{ width: 40, height: 40 }} />
                <MarkChatUnreadOutlinedIcon sx={{ width: 40, height: 40 }} />
                <IconButton onClick={addPost} >
                    <AddCircleOutlineOutlinedIcon sx={{ width: 40, height: 40, cursor: 'pointer' }}  />
                </IconButton>
                
                <ExploreOutlinedIcon sx={{ width: 40, height: 40 }} />
                <FavoriteBorderOutlinedIcon sx={{ width: 40, height: 40 }} />
                <Avatar sx={{ width: 40, height: 40, bgcolor: 'red' }}> A </Avatar>
            </div> */}
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
        </div>
    );
}

export default AppBar;