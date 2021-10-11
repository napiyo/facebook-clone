import { Close } from '@mui/icons-material';
import { IconButton, Modal } from '@mui/material';
import React ,{useContext, useEffect, useState,useRef} from 'react';
import './login-signup-page.css';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import auth from '../firebaseConfiguration'
import { UserProvider } from '../userContext';
import MainPage from '../MainPage';
import {  updateProfile} from "firebase/auth";
import { realtimedb } from '../firebaseConfiguration';
import { ref, set } from "firebase/database";



export default function LoginSignupPage() {
    const[ModalOpen, setModalOpen] = useState(false);
    const wrongpassAlert = useRef(null)
    //get user
    const userObject=useContext(UserProvider)
    console.log(userObject);
    // fields value for create account form
    const [CreateUser__email, set__CreateUser__email] = useState('');
    const [CreateUser__password, set__CreateUser__password] = useState('');
    const [CreateUser__fname, set__CreateUser__fname] = useState('');
    //handle create new account
    // console.log(auth);
    function createAccount() {

        createUserWithEmailAndPassword(auth, CreateUser__email, CreateUser__password).then((Credential) => {
            userObject.changeUser(Credential);
            // console.log('update data kro',CreateUser__fname);
            
        //updating uesr first name and email
             updateProfile(Credential.user,{displayName:CreateUser__fname}).then(()=>{
                 console.log('first Name added');
             }).catch((e)=>{
                alert(e)
             })


                // set(ref(realtimedb, 'usersData/' + Credential.user.uid), {
                //   firstname:CreateUser__fname ,
                //   email:CreateUser__email
                 
                // }).then(()=>{
                //     console.log('realtime data sent');
                // }).catch((e)=>{
                //     console.log(e);
                // });
              
           
        }).catch((e) => {
            alert(e.message)
        });
        //update user data
        

    }
    // sign in form fields
    const [Signin__User__Email, set__Signin__User__Email] = useState('')
    const [Signin__User__password, set__Signin__User__password] = useState('')

// signin handle
function signinUser(){
    signInWithEmailAndPassword(auth,Signin__User__Email,Signin__User__password).then((oldCredential)=>{
        userObject.changeUser(oldCredential)
        
    }).catch((e)=>{
        // set__Signin__User__Email('')
        set__Signin__User__password('')
        //show alert

        wrongpassAlert.current.style.display='block';
        setTimeout(() => {
            wrongpassAlert.current.style.display='none';
            
        }, 3000);




    })
}








    const ModalHandle=()=>{
        if(ModalOpen){
            setModalOpen(false)
        }
        else{
            setModalOpen(true)
        }
    }
  

    
   
    if(userObject.user == null){
    return (
    
        <>

        <div className='body'>
           <div style={{position:'absolute',top:'50px'}}>
               <marquee loop>This is Not a phising Site And Not a original Facebook. This is facebook clone made to learn reactJs, it uses Firebase as Backend. 
                   you cant use facebook account to login, it has nothing to do with facebook </marquee>
           </div> 
            <div className="mainContainer">
                <div className='title'>
                    <h1 className='facebookLogo'>facebook</h1>
                    <h2 className='facebookSubtitle'>facebook helps you connect and share with the people in your life.</h2>
                </div>
                 <div>

                <div className='loginContainer'>
                    <div className='wrongPassAlert' ref={wrongpassAlert}> Email or password wrong. please try again</div>
                    <form  className="LoginForm">
                        <input type="text" placeholder="Email address or phone number" value={Signin__User__Email} onChange={(e)=>{set__Signin__User__Email(e.target.value)}} required/>
                        <input type="password" placeholder="Password" value={Signin__User__password} onChange={(e)=>{set__Signin__User__password(e.target.value)}} required/>
                        <button className="loginBtn" type='button' onClick={signinUser}>Log in</button>
                    </form>
                    <div className='LoginForm'>
                        <p style={{marginTop:'5px',marginBottom:0, color:"#1877F2",cursor:'pointer',fontSize:'13px'}}>Forgotten password?</p>
                        <div style={{width:'100%',height:0.1,background:'rgb(196, 191, 191)',marginTop:`-15px`}}></div>
                        <button className='createAccBtn' onClick={ModalHandle} >Create New Account</button>
                    </div>
                </div>

                <div className='createPagetitle'><span style={{fontWeight:'bolder'}}>Create a Page</span> for a celebrity, band or business.</div>
                 </div>
            </div>
            <Modal open={ModalOpen} onClose={ModalHandle}>
                    
                        <div className="signForm">
                          <div className="signup__form__header">
                              <div>
                                  <h3>Sign Up</h3>
                                  <p>it's quick and easy.</p>
                              </div>
                              <IconButton>
                                  <Close onClick={ModalHandle}/>
                              </IconButton>
                          </div>
                          <div style={{height:1,width:'105%',borderBottom:`solid 1px black`,margin:`5px 0`}}> </div>
                           <form className='signForm__all_fields'>
                               <input type="file" name="upload pic" />
                                <div className="Name__Field">
                                    <input type="text" placeholder="First Name" value={CreateUser__fname} onChange={(e)=>{set__CreateUser__fname(e.target.value)}} required/>
                                    <input type="text" placeholder="Last Name" required/>
                                </div>
                                <input type="email" placeholder="Your e-mail ?" value={CreateUser__email} onChange={(e)=>{set__CreateUser__email(e.target.value)}}  required/>
                                <input type="password" placeholder="Create Password" value={CreateUser__password} onChange={(e)=>{set__CreateUser__password(e.target.value)}} required/>
                                <button className="signup_btn" type='button' onClick={createAccount}>Sign Up</button>
                           </form>
                        </div>
            </Modal>
        </div>
        </>
    )}
    else{
        return <MainPage/>
    }
}
