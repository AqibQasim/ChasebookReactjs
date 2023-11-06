import React from "react";

const Online = (props) =>{
    return(
        <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src={require(`../../../assets/person/${props.source}.jpeg`)} alt=""/>
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{props.username}</span>
        </li>
    )
}
export default Online