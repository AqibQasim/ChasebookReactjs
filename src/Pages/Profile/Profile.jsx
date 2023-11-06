import React, { useEffect, useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import Rightbar from "../../Components/Rightbar/Rightbar";
import coverphoto from '../../assets/Post/3.jpeg';
import profilephoto from '../../assets/person/1.jpeg'
import classes from './Profile.module.css';

const Profile = () =>{
  const[profilerightBar ,setprofilerightBar] =  useState(false);
  useEffect(()=>{
    setprofilerightBar(true)
  },[]);
    return(
        <>
      <Topbar />
      <div className={classes.profile}>
        <Sidebar />
        <div className={classes.profileRight}>
          <div className={classes.profileRightTop}>
            <div className={classes.profileCover}>
              <img
                className={classes.profileCoverImg}
                src={coverphoto}
                alt=""
              />
              <img
                className={classes.profileUserImg}
                src={profilephoto}
                alt=""
              />
            </div>
            <div className={classes.profileInfo}>
                <h4 className={classes.profileInfoName}>Safak Kocaoglu</h4>
                <span className={classes.profileInfoDesc}>Hello my friends!</span>
            </div>
          </div>
          <div className={classes.profileRightBottom}>
            <Feed />
            <Rightbar profile = {profilerightBar}/>
          </div>
        </div>
      </div>
    </>
    )
}
export default Profile;