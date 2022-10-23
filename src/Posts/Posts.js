import React, { useState,useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import './Posts.css';
import {postObj} from '../Objects';
import IconButton from '@material-ui/core/IconButton';
import EmojiPicker from 'emoji-picker-react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { Editor } from "@tinymce/tinymce-react";

const Posts = () => {
    const [emojiFlag,setEmojiFlag] = useState(false);
    const [commentText,setCommentText] = useState("");
    const target = useRef(null);

    const emoji = () =>{
        setEmojiFlag(!emojiFlag);
    }

    return(
        <div >
            {
                postObj.map((obj,key)=>(
                    <div class="postPaper" key={key}>
                        <div class="postHeader">
                            <div class="postHeading">
                                <div class="postAvatar">
                                        <Avatar sx={{ width: 50, height: 50, bgcolor: 'red' }} src={obj.profilePic}>
                                         V 
                                         </Avatar>
                                </div>
                                <div class="postTitle">
                                    <div class="postHead1">
                                        <div class="profileName">{obj.profileName}</div>
                                        <div class="followStatus">&nbsp;.&nbsp;{obj.follow}</div>
                                    </div>
                                    <div class="postHead2">{obj.subHead}</div>
                                </div>
                            </div>
                            {/* <div class="postMore">
                                <MoreHorizIcon />
                            </div> */}
                        </div>
                        <hr />
                        <div class="postMediaDiv">
                            <img class="postMedia" src={obj.image} alt={obj.alt} />
                        </div>
                        <hr />
                        <div class="postFooter">
                            <div class="feedsControls">
                                <div class="feedsControlsPart1">
                                    <div><FavoriteBorderTwoToneIcon /></div>
                                    <div><ChatBubbleOutlineTwoToneIcon /></div>
                                    <div><SendTwoToneIcon /></div>
                                </div>
                                {/* <div class="savePost">
                                    <BookmarkBorderIcon />
                                </div> */}
                            </div>
                            <div class="likedBy">
                                <Avatar sx={{ width: 30, height: 30, bgcolor: 'green' }}> S </Avatar>
                                &emsp;Liked by <span> &nbsp; {obj.likedBy}</span> &nbsp; and <span> &nbsp; others</span>
                            </div>

                            <div class="postCaption">
                                <span>{obj.profileName}</span> &ensp;
                                {obj.caption}
                                <div class="viewComments">
                                    View all {obj.totalComments} comments
                                </div>
                            </div>
                            <div class="comments">
                                <span>{obj.commentedBy}</span>  {obj.comment}
                                <div>
                                    {obj.time} HOURS AGO
                                </div>

                            </div>
                            <hr />
                            <div class="addComments">
                            <IconButton ref={target} onClick={emoji} >
                                <SentimentSatisfiedAltIcon sx={{ width: 40, height: 40 }} />
                            </IconButton>
                            <textarea 
                                type="text"  
                                class="commentTextArea"
                                placeholder="Add a comment..."
                                value={commentText} 
                                onChange={(e) =>{setCommentText(e.target.value)}}
                            />   
                            <Button variant="contained" style={{height:50}}>Post</Button>
                            </div>
                        </div>
                    </div>
                )
                )
            }

            <Overlay target={target.current} show={emojiFlag} placement="top">
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        <EmojiPicker onEmojiClick={
                            (emojiData) =>{
                                console.log(emojiData.emoji)
                                setCommentText(commentText+emojiData.emoji)
                            }
                        }/>
                    </Tooltip>
                )}
            </Overlay>
            {console.log(target.current)}
        </div>
    );
}

export default Posts;