import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import './stylesheets/Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpIconOutlined from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { SendOutlined } from '@mui/icons-material';
import { realtimedb } from '../firebaseConfiguration';
import { ref, set } from "firebase/database";

export default function Post(props) {
   let obdate=0;
    if(props.data.time != null){
obdate= new Date(props.data.time)
obdate=obdate.toLocaleString()
  console.log(obdate.toLocaleString());}
//   const date = obdate.getDate()

//post Liked
        const [Liked, setLiked] = useState(false)
        function LikePost(){
            let newlikes
            if(Liked){
                    newlikes=props.data.likes -1;
                    setLiked(false)
                }
                else{
                    newlikes=props.data.likes +1;
                    setLiked(true)

            }
                set(ref(realtimedb, 'Posts/' + props.data.uid+'/'+props.data.time+'/likes'), newlikes).then(()=>{
                    console.log('liked post');
                      // ModalHandler()
                  }).catch((e)=>{
                      console.log(e);
                  });

            
        }



    return (
        <div className="PostContainer">
            <div className="heading">
                <Avatar src='https://static.statusqueen.com/mobilewallpaper/thumbnail/mahadev__(1)-141.jpg' sx={{border:`solid #2D88FF 3px`,marginRight:'10px'}}/>
                <div>
                    <p className="PostUserName">{props.data.username}</p>
                    <p className="PostTime">{obdate}</p>
                </div>
            </div>
                <div className="caption">
                    {props.data.caption}
                </div>
                <div className="imageContainer">
                    <img src={props.data.Imageurl} className='postImage'/>
                </div>
                <div className="likeCounterContainer">
                        <div>
                    <IconButton><ThumbUpIcon sx={{color:'#2D88FF'}}/></IconButton>
                    <p className='LikesNumber'>{props.data.likes} Likes</p>
                    </div>
                    
                
                </div>
                <div  style={{ height:'1px',width:'90%',borderBottom:`1px solid white`,margin:'5px auto'}} ></div>
                    <div className="actionContainer">
                                        <div onClick={LikePost}>
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
