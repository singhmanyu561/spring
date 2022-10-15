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


import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AppBar = () => {
    const [addPostDialogFlag,setAddPostDialogFlag] = useState(false);
    const [message, setMessage] = useState({
        'message': ''

    })

    const handleClose = () => {
        setMessage({ ...message, ['message']: '' })
        setAddPostDialogFlag(false)

    };
    const addPost = () =>{
            setAddPostDialogFlag(true)    
    }

    return(
        <div class="appBar">
            <div class="webAppName">
                <h1>Spring</h1>
            </div>
            <div class="searchFiled">
                <input type="text" placeholder="Search" />
            </div>
            <div class="appBarIcons">
                <HomeIcon sx={{ width: 40, height: 40 }} />
                <MarkChatUnreadOutlinedIcon sx={{ width: 40, height: 40 }} />
                <IconButton onClick={addPost} >
                    <AddCircleOutlineOutlinedIcon sx={{ width: 40, height: 40, cursor: 'pointer' }} onClick={addPost} />
                </IconButton>
                
                <ExploreOutlinedIcon sx={{ width: 40, height: 40 }} />
                <FavoriteBorderOutlinedIcon sx={{ width: 40, height: 40 }} />
                <Avatar sx={{ width: 40, height: 40, bgcolor: 'red' }}> A </Avatar>
            </div>
            { addPostDialogFlag ? <AddPost openFlag={true}/> : [] }
        </div>
    );
}

export default AppBar;