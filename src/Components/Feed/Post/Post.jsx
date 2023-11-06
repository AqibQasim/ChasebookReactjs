import React,{useState} from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import likeicon from '../../../assets/like.png';
import hearticon from '../../../assets/heart.png';
import './Post.css';
import { users } from "../../../Store/Data";


const Post = (props) =>{
  const[like , setlike] = useState(props.like);
  const[isliked , setisliked] = useState(false);

  const likeHandler = ()=>{
    setlike(!isliked ? like + 1 : like - 1);
    setisliked(!isliked);
  }
  const user = users.filter(user => user.id === props.userId);
  return(
        <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src={require(`../../../assets/person/${user[0].profilePicture}.jpeg`)}
                alt=""
              />
              <span className="postUsername">
                {user[0].username}
              </span>
              <span className="postDate">{props.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVertIcon />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{props?.desc}</span>
            <img className="postImg" src={require(`../../../assets/Post/${props.source}.jpeg`)} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src={likeicon} alt=""  onClick={likeHandler}/>
              <img className="likeIcon" src={hearticon} alt="" onClick={likeHandler}/>
              <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{props.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Post;