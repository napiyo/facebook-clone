import { Avatar } from '@mui/material'
import React from 'react'
import './stylesheets/CreatePost.css'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { width } from '@mui/system';

export default function CreatePost() {
    return (
        <div className="CreatePostContainer">
            <div className="upperContainer">
                <Avatar src="https://wallpaperaccess.com/full/5704723.jpg"/>
                <input type="text" placeholder="What's on Your mind, Narendra?"/>
               
            </div>
            <div style={{height:1,borderBottom:`solid 1px #3A3B3C` ,width:'90%', margin:`0 auto 0 auto`}}></div>
            <div className="lowerContainer">
                <div>
                    <VideoCameraFrontIcon sx={{color:'red',marginRight:'5px'}}/>
                    Live Video</div>
                <div>
                    <PhotoLibraryIcon sx={{color:'green',marginRight:'5px'}}/> Photo/Video</div>
                <div>
                    <SentimentSatisfiedIcon sx={{color:'yellow',marginRight:'5px'}}/> Feeling/Activity</div>
            </div>
        </div>
    )
}
