import { Avatar } from '@mui/material'
import React from 'react'
import './stylesheets/Sidebar_menuItems.css';

export default function Sidebar_menuItems(props) {
    return (
        
        <div>
              <div className='item'><Avatar src={props.src}/> <p>{props.title}</p></div>
        </div>
    )
}

