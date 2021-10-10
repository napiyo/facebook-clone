import { Avatar, IconButton, Modal } from '@mui/material'
import React ,{useState,useEffect} from 'react'
import './stylesheets/CreatePost.css'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { width } from '@mui/system';
import { Close, EmojiEmotionsOutlined } from '@mui/icons-material';
import auth from '../firebaseConfiguration';
import { onAuthStateChanged } from '@firebase/auth';

export default function CreatePost(props) {
    const[open,setOpen]=useState(false)
    // const [state, setstate] = useState(initialState)
    

    
    
    const ModalHandler=()=>{
       if(open){
        setOpen(false)}
        else{
            setOpen(true)
        }
    }
    // setUsername(auth.currentUser.displayName)
    console.log(props);
    return (<>
    
    <Modal open={open} onClose={ModalHandler}>
        <div className="CreatePostModal">
        <div className="ModalHeader">
            <p>Create Post</p>
           <span className="Modal_close_btn"> <IconButton > 
                <Close sx={{color:"white"}} onClick={ModalHandler}/>
            </IconButton>
            </span>
        </div>
        <div style={{height:1,borderBottom:`solid 1px #505151`,margin:`5px`}}></div>
        <div className="Modal__userDetails">
            <Avatar/>
            
            <p>{props.userdata}</p>
        </div>
        <div className="Modal__caption__Editor">
            <form>
                <textarea className="Modal__textEditor" rows="10" placeholder="What's on your Mind,Narendra?"></textarea>
                <div className="Editor__options">
                    <p>Add to your post</p>
                    <div className="upload_options">
                        <PhotoLibraryIcon sx={{cursor:'pointer'}} />
                        <EmojiEmotionsOutlined  sx={{cursor:'pointer'}} />
                    </div>
                   
                </div>
                <button className="Post_btn">Post</button>
            </form>
        </div>



        </div>
    </Modal>
        <div className="CreatePostContainer">
            <div className="upperContainer">
                <Avatar src="https://wallpaperaccess.com/full/5704723.jpg"/>
                <input type="text" onChange={ModalHandler} onClick={ModalHandler} placeholder="What's on Your mind, Narendra?"  value=''/>
               
            </div>
            <div style={{height:1,borderBottom:`solid 1px #3A3B3C` ,width:'90%', margin:`0 auto 0 auto`}}></div>
            <div className="lowerContainer">
                <div onClick={ModalHandler}>
                    <VideoCameraFrontIcon sx={{color:'red',marginRight:'5px'}} />
                    Live Video</div>
                <div onClick={ModalHandler}>
                    <PhotoLibraryIcon sx={{color:'green',marginRight:'5px'}} /> Photo/Video</div>
                <div onClick={ModalHandler}>
                    <SentimentSatisfiedIcon sx={{color:'yellow',marginRight:'5px'}} /> Feeling/Activity</div>
            </div>
        </div>
        </>
    )
}
