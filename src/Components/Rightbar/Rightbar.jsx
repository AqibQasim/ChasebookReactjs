import React from "react";
import './Rightbar.css';
import gift from '../../assets/gift.png';
import Person1  from "../../assets/person/1.jpeg";
import Person2  from "../../assets/person/2.jpeg";
import Person3  from "../../assets/person/3.jpeg";
import Person4  from "../../assets/person/4.jpeg";
import Person5  from "../../assets/person/5.jpeg";
import Person6  from "../../assets/person/6.jpeg";
import ad from '../../assets/ad.png';
import Online from "./Online/Online";
import { users } from "../../Store/Data";

const Rightbar =(props) =>{
    const HomeRightbar = () => {
        return (
          <>
            <div className="birthdayContainer">
              <img className="birthdayImg" src={gift} alt="" />
              <span className="birthdayText">
                <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
              </span>
            </div>
            <img className="rightbarAd" src={ad} alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
              {users.map((u) => (
                <Online key={u.id} source= {u.profilePicture} username = {u.username} />
              ))}
            </ul>
          </>
        );
      };

      const ProfileRightbar = () => {
        return (
          <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">New York</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">Madrid</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Relationship:</span>
                <span className="rightbarInfoValue">Single</span>
              </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img
                  src={Person1}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src={Person2}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src={Person3}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src={Person4}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src={Person5}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
              <div className="rightbarFollowing">
                <img
                  src={Person6}
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">John Carter</span>
              </div>
            </div>
          </>
        );
      };
    return(
    <div className="rightbar">
        <div className="rightbarWrapper">
          {props.profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
    </div>
    )
};
export default Rightbar;