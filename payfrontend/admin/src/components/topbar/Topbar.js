import React,{Component} from "react";
import "./topbar.css"


export default class Topbar extends Component{

render(){
  return (
    <div className="topbar">
        <div className="topbarWrapper">
        <div className="topLeft">
            <span className="logo">Fees Management</span></div>
        <div className="topRight">
            <div className="topbarIcons">
            </div>
            <img src="adminpic.jpg"className="topAvatar"></img>
            </div>

        </div>
    </div>
  )
}
}
