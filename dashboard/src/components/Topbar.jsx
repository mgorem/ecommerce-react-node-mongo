import React from 'react'
import './Topbar.css'
import 
{ NotificationsNone, 
  Language, 
  Settings } 
from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='topBar'>
        <div className="topBarWrapper">
            <div className="topLeft">
                <span className='logo'>MG's Fineline Admin</span>
            </div>
            <div className="topRight">
                <div className="topBarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>

                    <div className="topBarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>

                <div className="topBarIconContainer">
                    <Settings />
                    <span className="topIconBadge">2</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar