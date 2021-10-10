import React, { Component } from 'react'
import auth from './firebaseConfiguration'





export const UserProvider=React.createContext()


export default class UserContext extends Component {
    constructor(){
        super()
        this.state={
                    user:auth.currentUser,
                    changeUser:this.changeUser                 
        }
    }
changeUser=(newuser)=>{
    this.setState({user:newuser})
}

   
    render() {
        return <UserProvider.Provider value={{...this.state}}>
            {this.props.children}
        </UserProvider.Provider>
    }
}
