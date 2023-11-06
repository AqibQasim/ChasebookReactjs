import React from "react";
const CloseFriend = (props) =>{
    return(
        <li className="sidebarfriend">
            <img src={require(`../../assets/person/${props.source}.jpeg`)} alt="" className="sidebarfriendimg"/>
            <span className="friendprofiletext">{props.username}</span>
        </li>
    )
}
export default CloseFriend;