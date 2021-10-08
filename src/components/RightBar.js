import React from 'react'
import Sidebar_menuItems from './Sidebar_menuItems'

export default function RightBar() {
    return (
        <div className="RightBarContainer">
            <div><h3 style={{color:'white',padding:'20px 20px 10px 20px',}}>Contacts</h3></div>
           <div style={{height:'1px',borderBottom:`solid 1px white`,margin:'0 auto 10px auto',width:'89%',}}></div>
          
            <Sidebar_menuItems src="https://w0.peakpx.com/wallpaper/754/938/HD-wallpaper-har-har-mahadev-har-har.jpg" title="Sunil Dewasi"/>
            <Sidebar_menuItems src="https://dp.profilepics.in/profile_pictures/boys-dp/boys-dp-1341.jpg" title="Narendra Dewasi"/>
            <Sidebar_menuItems src="https://i.pinimg.com/564x/6c/da/dd/6cdaddc661768e8dc27feb03ef147d09.jpg" title="Sushant Singh"/>
            <Sidebar_menuItems src="https://1fid.com/wp-content/uploads/2021/07/fb_dp_5-scaled.jpg" title="Lokesh Gautam"/>
            <Sidebar_menuItems src="https://www.teahub.io/photos/full/76-768540_download-hd-dp-photo-wallpaper-hidden-face-beautiful.jpg" title="Angel Priya"/>
           
         
        </div>
    )
}

