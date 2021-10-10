import Header from './components/Header';
import HomeFeed from './components/HomeFeed';
import Sidebar from './components/Sidebar';
import LoginSignupPage from './login-signup-page/login-signup-page'
import './App.css';
import RightBar from './components/RightBar';
import React,{ useContext, useEffect, useState } from 'react';
import UserContext, { UserProvider } from './userContext';
import './components/stylesheets/Mainpage.css'
import { onAuthStateChanged } from "firebase/auth";
import auth from './firebaseConfiguration';



export default function MainPage() {
    
    const obj=useContext(UserProvider);
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
               if (user) {
                 obj.changeUser(user);
                 console.log(user);
                 // ...
               } else {
                 // User is signed out
                 console.log('no user');
                 // ...
               }}
        )
             },[]);

    
   if(obj.user != null){

    console.log(auth.currentUser.displayName);
    return (
             <div className='Header'>
        <Header />
      
        <div className='main_body'>
                <div className='SidebarContainer'><Sidebar/></div>
                <div className='HomeFeedContainer'><HomeFeed /></div>
                <div className='RightBarContainer'><RightBar /></div>


        </div>
     
        </div>
   
    )
   }
   else{
       return(
       <UserContext>
      <LoginSignupPage/>
       </UserContext>);
   }
}
