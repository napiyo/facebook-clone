import React from 'react'
import ReelContainer from './ReelContainer'
import "./stylesheets/HomeReels.css"

export default function HomeReels() {
    return (
        <div className='HomeReelsContainer'>
            <ReelContainer DPsrc='https://i.pinimg.com/originals/19/cd/4c/19cd4cda91ac051bb2dcfcfd9cd38820.jpg' 
            Storysrc='https://i.pinimg.com/originals/a4/1e/40/a41e405ed05f7ab29ac090c0f220d35d.jpg'
            name='Narendra'/>      
            <ReelContainer DPsrc='https://i.pinimg.com/736x/71/da/07/71da0759ea97714929f2c813ee25afb6.jpg' 
            Storysrc='https://ghantee.com/wp-content/uploads/2020/10/mahadev-dark-red-hd-phone-wallpaper-India.jpg'
            name='MahaDev'/> 
             <ReelContainer DPsrc='https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/mahadev-mayur-sharma.jpg' 
            Storysrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBb5sUvi5We61SP_WPKD5hHQmCuS3ZBopiSQ&usqp=CAU'
            name='Sunil'/>            
                   

        </div>
    )
}
