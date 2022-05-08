import React from 'react'

import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';





const Topbar = () => {
    return (
        <div className='topbar'>

            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">aiaAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="topIconBadge">3</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon />

                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon />

                    </div>
                    <img draggable='false' src="https://avatars.githubusercontent.com/u/71559091?s=400&u=19775acdc2698063179841ec84602507b5d6e332&v=4" alt="avatarImg" className="topAvatar" />
                </div>
            </div>

        </div>
    )
}

export default Topbar