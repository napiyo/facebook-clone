import { Avatar, IconButton, Input, Modal } from '@mui/material'
import React ,{useState,useEffect} from 'react'
import './stylesheets/CreatePost.css'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { width } from '@mui/system';
import { Close, EmojiEmotionsOutlined, SnippetFolderOutlined } from '@mui/icons-material';
import auth from '../firebaseConfiguration';
import { onAuthStateChanged } from '@firebase/auth';
import { realtimedb } from '../firebaseConfiguration';
import { ref, set } from "firebase/database";
import { getStorage ,uploadBytes , ref as storageRef,uploadBytesResumable, getDownloadURL} from "firebase/storage";

// import { ref  } as <Storageref></Storageref> from "firebase/storage";


export default function CreatePost() {
    const[open,setOpen]=useState(false)
    const[showuploadProgress,setshowuploadProgress]=useState(false)
    const[progressBar,setprogressBar]=useState(0)
    const [caption, setcaption] = useState('')
    const [username, setusername] = useState('uerName')
    const [userfile, setuserfile] = useState(null)
    
    // capture file from input
    function handleFileChange(e){
        setuserfile(e.target.files[0])
    }


    useEffect(() => {
        setusername(auth.currentUser.displayName)
    }, [])
    
    const ModalHandler=()=>{
       if(open){
        setOpen(false)}
        else{
            setOpen(true)
        }
    }
   
    const showProgressHandler=()=>{
        if(showuploadProgress){
            setshowuploadProgress(false)}
         else{
            setshowuploadProgress(true)
         }
     }
    function realtime(e,timenow){
        set(ref(realtimedb, 'Posts/' + auth.currentUser.uid+'/'+timenow), {
            caption:caption ,
            Imageurl:e,
            time:timenow,
            uid:auth.currentUser.uid,
            likes:0,
            username:auth.currentUser.displayName
          }).then(()=>{
              setcaption('')
              // ModalHandler()
          }).catch((e)=>{
              console.log(e);
          });
    }
    function writeUserData() {
        ModalHandler() 
        const timenow = Date.now()
        
        // upload image in firebase storage separately

        if(userfile != null){
        const FirebaseStorageRef= getStorage()
        
            const FileRef =storageRef(FirebaseStorageRef,'Post/'+auth.currentUser.uid+'/'+timenow)
                console.log(FileRef);
               const uploadTask= uploadBytesResumable(FileRef,userfile)
               showProgressHandler()
               uploadTask.on('state_changed', 
               (snapshot) => {
                 // Observe state change events such as progress, pause, and resume
                 // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                
                
                 switch (snapshot.state) {
                   case 'paused':
                     console.log('Upload is paused');
                     break;
                   case 'running':
                     console.log('Upload is running');
                     setprogressBar(progress);
                     if(progress==100){
                        setshowuploadProgress(false)
                     }
                     break;
                 }
               }, 
               (error) => {
                 // Handle unsuccessful uploads
               }, 
               () => { 
                 // Handle successful uploads on complete
                 // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                 getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                   
                    realtime(downloadURL,timenow)
                 });
               }
             );
             

        }
        else{
            realtime('',timenow)
        }
         
    }





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
            
            <p>{username}</p>
        </div>
        <div className="Modal__caption__Editor">
            <form>
                <textarea className="Modal__textEditor" rows="10" placeholder=  {`What's on your Mind ${username} ?`}  value={caption} onChange={(e)=>setcaption(e.target.value)} autoFocus></textarea>
                <div className="Editor__options">
                    <p>Add to your post</p>
                    <div className="upload_options">
                           <input type="file" name="myPostImage" accept="image/*"  onChange={handleFileChange}/><PhotoLibraryIcon />
                        <EmojiEmotionsOutlined />
                    </div>
                   
                </div>
                <button className="Post_btn" type='button' onClick={writeUserData} disabled={caption=='' && userfile==null }>Post</button>
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
        <Modal  open={showuploadProgress} onClose={showProgressHandler}>
                    <div className='progressbar'>
                        <div className='Bar'>
                            <div className="pBar" style={{width:progressBar+'%'}}></div>
                        </div>
                        <div className='num'>{Math.floor(progressBar)}% uploaded...</div>
                    </div>
        </Modal>
        </>
    )
}
