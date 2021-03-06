import React ,{useState,useEffect} from 'react'
import './stylesheets/HomeFeed.css';
import HomeReels from './HomeReels'
import CreatePost from './CreatePost';
import Post from './Post';
import { ref, onValue} from "firebase/database";
import { realtimedb } from '../firebaseConfiguration';
import { alertClasses } from '@mui/material';
import { ClosedCaptionSharp } from '@mui/icons-material';

export default function HomeFeed() {
    const [postdata, setpostdata] = useState([])
 
       
        const starCountRef =  ref(realtimedb, 'Posts/');
        // get post from realtime database
        
        useEffect(()=>{
            onValue(starCountRef, async (snapshot) => {
                const data = snapshot.val();
                          var captions=[];
                        //data is stored in raltime db firebase as ----> Post > uid > timestamp >{caption:"captions"}
                        (Object.values(data)).forEach((e)=>{
                                (Object.values(e)).forEach((p)=>{
                                    captions.push(p)
                                })
                        });
                       
                                setpostdata(captions)
                });
     
        },[])
        // make  Post components
        //sort post

            const postRender = ((postdata.sort((a,b) => b.time-a.time)).slice(0,20)).map((e)=>{
                return<>
                <Post data={e}/>
                </>
            })

   
    return (

        <div className='HomeFeed'>
                <HomeReels  />
                <CreatePost />
           
            {postRender}
               
              
        </div>
    )
}

