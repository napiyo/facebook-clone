import { Avatar } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'
import './stylesheets/ReelContainer.css'
export default function ReelContainer(props) {
    return (
        <div className="ReelContainerDiv">
            <img src="https://i.pinimg.com/originals/19/cd/4c/19cd4cda91ac051bb2dcfcfd9cd38820.jpg" alt="loading" />
       <div className='AvtarIcon'><Avatar 
       src="https://static.statusqueen.com/mobilewallpaper/thumbnail/mahadev__(1)-141.jpg"
       sx={{width:'35px' , height:'35px',border:`solid 3.5px #2E89FF`}}/></div> 
        <p>Sushant</p>
        </div>
    )
}
