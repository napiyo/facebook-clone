import { Close } from '@mui/icons-material';
import { IconButton, Modal } from '@mui/material';
import React ,{useContext, useEffect, useState,useRef} from 'react';
import './login-signup-page.css';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth";
import auth from '../firebaseConfiguration'
import { UserProvider } from '../userContext';
import MainPage from '../MainPage';
import {  updateProfile} from "firebase/auth";
import { realtimedb } from '../firebaseConfiguration';
import { ref, set } from "firebase/database";



export default function LoginSignupPage() {
    const[ModalOpen, setModalOpen] = useState(false);
    const wrongpassAlert = useRef(null)
    const loader = useRef(null)
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
        loader.current.style.display='block';
        createUserWithEmailAndPassword(auth, CreateUser__email, CreateUser__password).then((Credential) => {
            userObject.changeUser(Credential.user);
            // console.log('update data kro',CreateUser__fname);
            
        //updating uesr first name 
             updateProfile(Credential.user,{displayName:CreateUser__fname}).then(()=>{
                
                
             }).catch((e)=>{
                alert(e)
             })

              
           
        }).catch((e) => {
            alert(e.message)
            loader.current.style.display='none';
        });
        //update user data
        

    }
    // sign in form fields
    const [Signin__User__Email, set__Signin__User__Email] = useState('')
    const [Signin__User__password, set__Signin__User__password] = useState('')

// signin handle
function signinUser(){
    if(Signin__User__Email != '' && Signin__User__password != '')
    {signInWithEmailAndPassword(auth,Signin__User__Email,Signin__User__password).then((oldCredential)=>{
        userObject.changeUser(oldCredential)
        
    }).catch((e)=>{
        // set__Signin__User__Email('')
        set__Signin__User__password('')
        //show alert

        wrongpassAlert.current.style.display='block';
        
        wrongpassAlert.current.style.transform='translateX(0)';
        wrongpassAlert.current.innerText=e.message;
        setTimeout(() => {
         
            wrongpassAlert.current.style.transform='translateX(-100vw)';
            setTimeout(() => {
                wrongpassAlert.current.style.display='none';
            }, 1000);
            
        }, 4000);
    })}
    else{
        wrongpassAlert.current.style.display='block';
        
        wrongpassAlert.current.style.transform='translateX(0)';
        wrongpassAlert.current.innerText='email or password are required';
        setTimeout(() => {
         
            wrongpassAlert.current.style.transform='translateX(-100vw)';
            setTimeout(() => {
                wrongpassAlert.current.style.display='none';
            }, 1000);
            
        }, 4000);
    }
}

function forgotPass(){
    if(Signin__User__Email != ''){
        sendPasswordResetEmail(auth,Signin__User__Email)
    .then(() => {
      alert('Check your email for password reset')
    }).catch((e)=>{
        alert(e.message)
    });
}
else{
    wrongpassAlert.current.style.display='block';
        
        wrongpassAlert.current.style.transform='translateX(0)';
        wrongpassAlert.current.innerText='Please  Enter your email and then click forgot password';
        setTimeout(() => {
         
            wrongpassAlert.current.style.transform='translateX(-100vw)';
            setTimeout(() => {
                wrongpassAlert.current.style.display='none';
            }, 1000);
            
        }, 4000);
}
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
                        <p style={{marginTop:'5px',marginBottom:0, color:"#1877F2",cursor:'pointer',fontSize:'13px'}} onClick={forgotPass}>Forgotten password?</p>
                        <div style={{width:'100%',height:0.1,background:'rgb(196, 191, 191)',marginTop:`-15px`}}></div>
                        <button className='createAccBtn' onClick={ModalHandle} >Create New Account</button>
                    </div>
                </div>

                <div className='createPagetitle'><span style={{fontWeight:'bolder'}}>Create a Page</span> for a celebrity, band or business.</div>
                 </div>
            </div>
            <Modal open={ModalOpen} onClose={ModalHandle}>
                      
                        <div className="signForm">
                        <div className='loader' ref={loader}>

                        </div>
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
