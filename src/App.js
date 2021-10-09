import { dividerClasses } from '@mui/material';
import Header from './components/Header';
import HomeFeed from './components/HomeFeed';
import Sidebar from './components/Sidebar';
import LoginSignupPage from './login-signup-page/login-signup-page'
import './App.css';
import RightBar from './components/RightBar';
import { useState } from 'react';

function App() {
    const[User,setUser]=useState(null);
    // if(User !=null){
    return ( <div className='Header'>
        <Header />
        <div className='main_body'>
                <div className='SidebarContainer'><Sidebar/></div>
                <div className='HomeFeedContainer'><HomeFeed /></div>
                <div className='RightBarContainer'><RightBar /></div>


        </div>
        </div>
    );
// }
    // else{
    //     return <LoginSignupPage/>
    // }
}

export default App;