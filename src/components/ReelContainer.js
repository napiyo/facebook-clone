import { Close } from '@mui/icons-material';
import { Avatar, Modal } from '@mui/material'
import { height, positions } from '@mui/system'
import React, { useState } from 'react'
import './stylesheets/ReelContainer.css'
export default function ReelContainer(props) {
    const[storyModal,setStoryModal]=useState(false);
    function ModalHandler(){
        if(storyModal){
        setStoryModal(false)
    }
        else{
                setStoryModal(true)
        }
    }
    return (
        <div className="ReelContainerDiv">
            <img src={props.Storysrc} alt="loading" onClick={ModalHandler}/>
       <div className='AvtarIcon'><Avatar 
       src={props.DPsrc}
       sx={{width:'35px' , height:'35px',border:`solid 3.5px #2E89FF`}}/></div> 
        <p>{props.name}</p>
      
        <Modal open={storyModal} onClose={ModalHandler}>
             
                    <div style={{position:'relative' ,height:'100%', width:'fit-content',margin:'auto'} }>

                <Close sx={{color:'white',position:'absolute',top:'10px',left:'20px' ,cursor:'pointer',background:'black',borderRadius:'50%'}} onClick={ModalHandler}/>
            <img src={props.Storysrc} alt="loading" className='BigStory'/>
                    </div>
                
      
        </Modal>
     

        
        
        </div>
    )
}
