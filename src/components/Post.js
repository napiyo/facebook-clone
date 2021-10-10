import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './stylesheets/Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpIconOutlined from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { SendOutlined } from '@mui/icons-material';


export default function Post(props) {
    return (
        <div className="PostContainer">
            <div className="heading">
                <Avatar src='https://static.statusqueen.com/mobilewallpaper/thumbnail/mahadev__(1)-141.jpg' sx={{border:`solid #2D88FF 3px`,marginRight:'10px'}}/>
                <div>
                    <p className="PostUserName">Narendra Dewasi</p>
                    <p className="PostTime">just now</p>
                </div>
            </div>
                <div className="caption">
                    {props.caption}
                </div>
                <div className="imageContainer">
                    <img src="https://static.statusqueen.com/mobilewallpaper/thumbnail/mahadev__(1)-141.jpg" alt="" />
                </div>
                <div className="likeCounterContainer">
                        <div>
                    <IconButton><ThumbUpIcon sx={{color:'#2D88FF'}}/></IconButton>
                    <p className='LikesNumber'>85 Likes</p>
                    </div>
                    <div>
                        <p>15 shares</p>
                    </div>
                
                </div>
                <div  style={{ height:'1px',width:'90%',borderBottom:`1px solid white`,margin:'5px auto'}} ></div>
                    <div className="actionContainer">
                                        <div>
                                            <ThumbUpIconOutlined />
                                            Like
                                        </div>  
                                        <div>
                                            <ChatBubbleOutlineIcon />
                                            Comment
                                        </div> 
                                         <div>
                                            <SendOutlined />
                                            Share
                                        </div>
                    </div>
        </div>
    )
}
