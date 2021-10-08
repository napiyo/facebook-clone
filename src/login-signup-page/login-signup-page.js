import React from 'react';
import './login-signup-page.css';
export default function LoginSignupPage() {
    return (
        <div className='body'>
            <div className="mainContainer">
                <div className='title'>
                    <h1 className='facebookLogo'>facebook</h1>
                    <h2 className='facebookSubtitle'>facebook helps you connect and share with the people in your life.</h2>
                </div>
                 <div>

                <div className='loginContainer'>
                    <form action="" className="LoginForm">
                        <input type="text" placeholder="Email address or phone number"/>
                        <input type="password" placeholder="Password" />
                        <button className="loginBtn">Log in</button>
                        <p style={{marginTop:0,marginBottom:0, color:"#1877F2",cursor:'pointer'}}>Forgotten password?</p>
                        <div style={{width:'100%',height:0.1,background:'rgb(196, 191, 191)',marginTop:0}}></div>
                        <button className='createAccBtn'>Create New Account</button>
                    </form>
                </div>
                <div className='createPagetitle'><span style={{fontWeight:'bolder'}}>Create a Page</span> for a celebrity, band or business.</div>
                 </div>
            </div>
            
        </div>
    )
}
