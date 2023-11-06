import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./Topbar.css";
import Profileimage from '../../assets/person/1.jpeg';
import { Link } from "react-router-dom";

const Topbar = () =>{
    return(
        <div className="topbar">
            <div className="topbar-left">
                <Link to='/'><span className="logo">Chasebook</span></Link>
            </div>
            <div className="topbar-center">
                <div className="searchbar">
                    <SearchIcon  className="searchicon"/>
                    <input placeholder="search for people , post or videos" className="searchinput"/>
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links">
                    <Link to='/' className="navtext"><span className="topbar-link"> Home </span></Link>
                    <Link to='/timeline' className="navtext"><span className="topbar-link"> TimeLine </span></Link>
                </div>
                <div className="topbar-icons">
                    <div className="topbar-iconitem">
                        <PersonIcon />
                        <span className="iconbadge">1</span>
                    </div>
                    <div className="topbar-iconitem">
                        <ChatIcon />
                        <span className="iconbadge">1</span>
                    </div>
                    <div className="topbar-iconitem">
                        <NotificationsIcon />
                        <span className="iconbadge">1</span>
                    </div>
                </div>
                <img src={Profileimage} alt="profile" className="profile"/>
            </div>
        </div>
    )
}

export default Topbar;