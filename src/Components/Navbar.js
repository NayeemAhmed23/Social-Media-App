import React from 'react'
import logo from "../Assets/logo.png"
import notification from "../Assets/notification_icon_.png"
import profile from "../Assets/profile_icon.png"
import savedIcon from "../Assets/saved_logo_img.png"
import homeIcon from "../Assets/Group 2944.png"

const Navbar = () => {
  return (
    <div >
        <div className='navbar'>
        <img src={logo} alt='logo' />
        <div className='center-div'>
            <img src={homeIcon} alt='icon' />
            <img src={notification} alt='icon' />
            <img src={savedIcon} alt='icon' />
            <img src={profile} alt='icon' />
        </div>
        </div>
           
        
    </div>
  )
}

export default Navbar