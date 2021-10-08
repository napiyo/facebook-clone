import { Avatar } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'
import './stylesheets/ReelContainer.css'
export default function ReelContainer(props) {
    return (
        <div className="ReelContainerDiv">
            <img src={props.Storysrc} alt="loading" />
       <div className='AvtarIcon'><Avatar 
       src={props.DPsrc}
       sx={{width:'35px' , height:'35px',border:`solid 3.5px #2E89FF`}}/></div> 
        <p>{props.name}</p>
        </div>
    )
}
