import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Rightbar from "../../Components/Rightbar/Rightbar";
import Feed from "../../Components/Feed/Feed";
import './Home.css';

const Home = () =>{
    return(
        <React.Fragment>
            <Topbar />
            <div className="homecontainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </React.Fragment>
    )
}
export default Home; 