import React from "react";
import './Feed.css';
import Share from "./Share/Share";
import Post from "./Post/Post";
import {posts} from "../../Store/Data";

const Feed = () =>{
    return( 
        <div className="feed"> 
            <div className="feedwrapper">
                <Share />
                {posts.map(p => <Post 
                key = {p.id}
                userId = {p.userId}
                desc = {p.desc}
                source = {p.photo}
                date = {p.date}
                like = {p.like}
                comment = {p.comment}
                />
                )}
            </div>
        </div>
        )
};
export default Feed;