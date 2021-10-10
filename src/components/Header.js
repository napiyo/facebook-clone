import React, { useContext, useRef,useState,useEffect } from 'react';
import './stylesheets/Header.css';
//importing icons from material UI
import { signOut,getAuth } from "firebase/auth";
import { UserProvider } from '../userContext';

import SearchIcon from '@mui/icons-material/SearchOutlined';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideoOutlined';
import GroupIcon from '@mui/icons-material/GroupOutlined';
import StoreIcon from '@mui/icons-material/StoreOutlined';
import GroupsIcon from '@mui/icons-material/GroupsOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDownOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import { Avatar, IconButton } from '@mui/material';
import auth from '../firebaseConfiguration';
// import { UserProvider } from '../userContext';

export default function Header(props) {
    const [username, setusername] = useState('loading..')
 
    useEffect(() => {
       setusername(auth.currentUser.displayName);
    }, [auth.currentUser.displayName])
       
   
    const Dropdown= useRef(null);
    const userObject = useContext(UserProvider)



    function showDropdown(){
            
            if(Dropdown.current.style.display=='block'){
                Dropdown.current.style.display='none';
            }
            else{
                Dropdown.current.style.display='block';
            }
           
    }
    // Handle Log out
    function logOut(){
signOut(auth).then(()=>{
    userObject.changeUser(null)
    alert('Log Out Successfully')
}).catch((e)=>{
    console.log(e);
})
}
console.log(username);

    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="facebook" height='40px' />
                <div className="header_search">
                    <IconButton>
                    <SearchIcon sx={{ color: '#B0B3B8' }} />
                    </IconButton>
                   
                <input type="text" placeholder='search Facebook'/>
                </div>
            </div>
            
            
            <div className="header__middle">

            <div className='navOption active'> <IconButton> <HomeIcon/>   </IconButton> </div>
                                     <div className='navOption'>
                                          <IconButton>  <GroupIcon /></IconButton>
                                          </div> 
                                          <div className='navOption'> <IconButton> <OndemandVideoIcon  /></IconButton>  </div> 
                                          <div className='navOption'> <IconButton><StoreIcon /></IconButton>  </div> 
                                          <div className='navOption'> <IconButton>  <GroupsIcon /></IconButton>  </div> 

                           
            </div>
            
            <div className="header__right">
                 
                 <Avatar className='avtar_icon' src='https://i.pinimg.com/originals/19/cd/4c/19cd4cda91ac051bb2dcfcfd9cd38820.jpg'/> <p style={{color:'#B0B3B8',fontSize:16,marginLeft:2}}>
                      {username} </p>
                    
           <IconButton>   <AppsIcon /></IconButton>
                <IconButton>    <ForumIcon /></IconButton>
               <IconButton>   <NotificationsActiveIcon /></IconButton>
                 <div ><IconButton  onClick={showDropdown}>   <ArrowDropDownIcon style={{position:'relative'}}/></IconButton>
                 <div className="dropdown" ref={Dropdown}>
                    <div  className='dropdownmenu'>
                        <div>Profile</div>
                        <div onClick={logOut}>Logout</div>
                    </div>

                 </div>
                 </div>

            </div>
            
        </div>
    )
}
