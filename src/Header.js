import React from 'react';
import "./Header.css";
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';
import ViewHeadlineOutlinedIcon from '@material-ui/icons/ViewHeadlineOutlined';import PersistentDrawerLeft from './HeaderApi';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {githubIconSrc} from './const';
import {IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    
    return (
        <div className="header">
            
            <div className="headerLeft">
            <MenuIcon/>
            </div>
            <div className="headerCenter">
                <img src={githubIconSrc} alt="github"/>
            </div>
            <div className="headerRight">
            <NotificationsIcon/>
            </div>
        </div>
    )
}

export default Header
