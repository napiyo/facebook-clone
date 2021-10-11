import './stylesheets/CreateReel.css'
import React from 'react'
import { Add } from '@mui/icons-material'
import { IconButton } from '@mui/material'

export default function CreateReel() {
    return (
        <div className='container'>
            <IconButton> <Add className='addStorybtn'/></IconButton>
            <p>Create story</p>
        </div>
    )
}
