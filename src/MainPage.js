import Header from './components/Header';
import HomeFeed from './components/HomeFeed';
import Sidebar from './components/Sidebar';
import LoginSignupPage from './login-signup-page/login-signup-page'
import './App.css';
import RightBar from './components/RightBar';
import React,{ useContext, useState } from 'react';
import { UserProvider } from './userContext';
import './components/stylesheets/Mainpage.css'


export default function MainPage() {
    const obj=useContext(UserProvider);
   if(obj.user != null){
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
       return <LoginSignupPage/>
   }
}
