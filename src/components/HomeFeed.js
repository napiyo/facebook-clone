import React ,{useState,useEffect} from 'react'
import './stylesheets/HomeFeed.css';
import HomeReels from './HomeReels'
import CreatePost from './CreatePost';
import Post from './Post';
import { ref, onValue} from "firebase/database";
import { realtimedb } from '../firebaseConfiguration';

export default function HomeFeed() {
    // const [postdatabeforeload, setpostdatabeforeload] = useState([])
 
        var postdata=[];
       
        const starCountRef = ref(realtimedb, 'Posts/');
        // get post from realtime database
           onValue(starCountRef, async (snapshot) => {
           const data = snapshot.val();
           console.log(data);
           console.log('**************');
                     postdata.push(data)
           });
           useEffect(() => {
            var postdata2=   Object.values(postdata)
       
            const  postrenderingdata =  postdata2.map(  (i)=>{
                var n = Object.values(i);
                n.map((j)=>{
        
                    var m=Object.values(j);
                    m.map((l)=>{
                        console.log(l.caption);
                        return<Post caption={l.caption}/>
                    })
                   
                })
                
                
            })
           }, [])


   
    return (
        <div className='HomeFeed'>
                <HomeReels  />
                <CreatePost />
                {/* {postrenderingdata} */} 
                {/* this says this is not defined ,,, as useEffect is not loaded yet. if I dont use useEffect,.. data  will not stored in postdata*/}
        </div>
    )
}
